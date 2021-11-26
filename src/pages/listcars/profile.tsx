import { Sidebar } from '../../components/sidebar';
import { Container } from '../../../styles/pages/home.module';
import {
  Content,
  CalendarContainer,
} from '../../../styles/pages/profileCar.module';
import ReactModal from 'react-modal';
import {
  RiArrowLeftSLine,
  RiDropLine,
  RiUser6Line,
  RiSteering2Line,
  RiUploadLine,
  RiDashboard3Line,
} from 'react-icons/ri';
import 'react-day-picker/style.css';
import { DayPicker, DateRange } from 'react-day-picker';
import Link from 'next/link';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { RiCloseLine, RiArrowRightSLine, RiCalendarLine } from 'react-icons/ri';
import { formatPrice } from '../../util/format';
import ptBR from 'date-fns/locale/pt-BR';
import { format, differenceInDays } from 'date-fns';
import { ModalSuccess } from '../../components/Modal';
import { useRouter } from 'next/router';

export default function ProfileCar() {
  const [activeTab, setActiveTab] = useState('1');
  const [range, setRange] = useState<DateRange | undefined>(undefined);
  const [disableButton, setDisableButton] = useState(true);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalSuccess, setModalSuccess] = useState(false);
  const valorDiaria = 120.0;
  const history = useRouter();
  const handleSelectDay = useCallback(date => {
    setRange(date);
    setDisableButton(!disableButton);
  }, []);
  const selectedDateFrom = useMemo(() => {
    return (
      range !== undefined &&
      format(range.from, "dd' de' MMMM ", { locale: ptBR })
    );
  }, [range]);
  const selectedDateTo = useMemo(() => {
    return (
      range !== undefined && format(range.to, "dd' de' MMMM ", { locale: ptBR })
    );
  }, [range]);

  //(vlDiaria * vlDiference) / 100);
  function closeModal() {
    setIsOpen(false);
  }
  function handleSchedule() {
    setActiveTab('2');
    closeModal();
  }
  function handleButtonOk() {
    setModalSuccess(false);
    history.push('/');
  }
  function handleSubmit() {
    const data = {
      dateFrom: selectedDateFrom,
      dateTo: selectedDateTo,
      valorDiaria,
    };
    try {
      setModalSuccess(true);
    } catch (err) {
      console.log(err);
    }
  }
  const differenceDays =
    range !== undefined && differenceInDays(range.from, range.to) * -1 + 1;

  return (
    <Container>
      <Sidebar />
      <Content>
        <div className="header">
          <Link href="/home">
            <>
              <RiArrowLeftSLine size={40} color="#7A7A80" />
            </>
          </Link>
          <div>
            <p>AUDI</p>
            <span>Q3 Baita Foda</span>
          </div>
          <div className="red">
            <p>Ao dia</p>
            <span className="red">{formatPrice(valorDiaria)}</span>
          </div>
        </div>
        <div className="content-box">
          <div className="box-1">
            <img src="/audiGrande.png" alt="Audi" />
          </div>
          <div className="box-2">
            <div className="option-box">
              <div className="option-box-card">
                <div>
                  <RiDashboard3Line size={32} color="#47474D" />
                </div>
                <div>
                  <p>270km/h</p>
                </div>
              </div>
              <div className="option-box-card">
                <div>
                  <RiUploadLine size={32} color="#47474D" />
                </div>
                <div>
                  <p>6.8s</p>
                </div>
              </div>
              <div className="option-box-card">
                <div>
                  <RiDropLine size={32} color="#47474D" />
                </div>
                <div>
                  <p>Gasolina</p>
                </div>
              </div>
              <div className="option-box-card">
                <div>
                  <RiDashboard3Line size={32} color="#47474D" />
                </div>
                <div>
                  <p>Auto</p>
                </div>
              </div>
              <div className="option-box-card">
                <div>
                  <RiUser6Line size={32} color="#47474D" />
                </div>
                <div>
                  <p>% pessoas</p>
                </div>
              </div>
              <div className="option-box-card">
                <div>
                  <RiSteering2Line size={32} color="#47474D" />
                </div>
                <div>
                  <p>280 HP</p>
                </div>
              </div>
            </div>
            <div className="tabs">
              <div className={activeTab === '1' ? 'active' : ''}>
                <p>Sobre o carro</p>
              </div>
              <div className={activeTab === '2' ? 'active' : ''}>
                <p>PERíODO</p>
              </div>
            </div>
            <div className={`box-text ${activeTab === '1' ? 'active' : ''}`}>
              <p>
                Este é automóvel desportivo. Surgiu do lendário touro de lide
                indultado na praça Real Maestranza de Sevilla. É um belíssimo
                carro para quem gosta de acelerar.
              </p>
              <button
                type="button"
                className="btn-red"
                onClick={() => setIsOpen(true)}
              >
                Escolher período do aluguel
              </button>
            </div>
            <div className={`box-text ${activeTab === '2' ? 'active' : ''}`}>
              <div className="box-text-header">
                <div>
                  <p>De</p>
                  <span>{selectedDateFrom}</span>
                </div>
                <RiArrowRightSLine size={20} color="#AEAEB3" />
                <div>
                  <p>Até</p>
                  <span>{selectedDateTo}</span>
                </div>
                <div className="box-icon">
                  <RiCalendarLine
                    size={20}
                    color="#fff"
                    onClick={() => setIsOpen(true)}
                  />
                </div>
              </div>
              <div className="box-text-body">
                <div>
                  <p>Total</p>
                  <span>
                    {formatPrice(valorDiaria)} x{differenceDays} diárias
                  </span>
                </div>
                <div>
                  <p className="total">
                    {formatPrice(valorDiaria * differenceDays)}
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="btn-green"
                onClick={handleSubmit}
              >
                Alugar agora
              </button>
            </div>
          </div>
        </div>
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="modal"
          overlayClassName="overlay"
        >
          <CalendarContainer>
            <div className="container-header">
              <h1>Escolha uma data de início e fim do aluguel</h1>
              <RiCloseLine size={20} color="#AEAEB3" onClick={closeModal} />
            </div>
            <div className="container-calendario">
              <div className="box-1">
                <DayPicker
                  mode="range"
                  locale={ptBR}
                  showOutsideDays
                  onSelect={handleSelectDay}
                  fromDate={new Date()}
                />
              </div>
              <div className="box-2">
                <div className="box">
                  <p>De</p>
                  <span>{selectedDateFrom}</span>
                </div>
                <div className="box">
                  <p>Até</p>
                  <span>{selectedDateTo}</span>
                </div>
                <button
                  type="button"
                  disabled={disableButton}
                  onClick={handleSchedule}
                >
                  Confirmar
                </button>
              </div>
            </div>
          </CalendarContainer>
        </ReactModal>
      </Content>
      <ModalSuccess
        title="Carro alugado!"
        description="Agora você só precisa ir até a concessionária
        da RentX pegar o seu automóvel."
        isOpen={modalSuccess}
        handleCloseModal={() => setModalSuccess(false)}
        handleModalOk={handleButtonOk}
      />
    </Container>
  );
}
