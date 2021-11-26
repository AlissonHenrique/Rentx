import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {
  RiArrowRightLine,
  RiCameraLine,
  RiFlashlightLine,
  RiMailAddLine,
  RiLock2Line,
  RiUser6Line,
} from 'react-icons/ri';
import { Container, ContentHome } from '../../styles/pages/home.module';
import { Box } from '../../styles/pages/profile.module';
import { Input } from '../components/Form/Input';
import { InputPassword } from '../components/Form/InputPassword';
import { Header } from '../components/Header';
import { Sidebar } from '../components/sidebar';

type ProfileFormData = {
  name: string;
  email: string;
  cnh: string;
  password: string;
  newpassword: string;
  replacepassword: string;
};
export default function Profile() {
  const [activeTab, setActiveTab] = useState('1');
  const { register, handleSubmit, formState } = useForm<ProfileFormData>({
    // resolver: yupResolver(sigIUpFormSchema),
  });

  const handleEdit: SubmitHandler<ProfileFormData> = async (data, e) => {
    //await new Promise((resolve) => setTimeout(resolve, 2000));
    //await router.push("/dashboard");

    e.target.reset();
  };
  const handleEditPassword: SubmitHandler<ProfileFormData> = async (
    data,
    e,
  ) => {
    //await new Promise((resolve) => setTimeout(resolve, 2000));
    //await router.push("/dashboard");

    e.target.reset();
  };
  return (
    <Container>
      <Sidebar />
      <ContentHome>
        <Header title="Perfil" />
        <Box>
          <div className="content-profile">
            <div className="content-img">
              <img src="https://i.pravatar.cc/300" alt="Avatar" />
              <div className="bg-icon">
                <RiCameraLine size={20} color="#fff" />
              </div>
            </div>
            <div className="container-profile">
              <div className="tab-profile">
                <div
                  className={activeTab === '1' ? 'active' : ''}
                  onClick={() => setActiveTab('1')}
                >
                  <p>Dados</p>
                </div>
                <div
                  className={activeTab === '2' ? 'active' : ''}
                  onClick={() => setActiveTab('2')}
                >
                  <p>Trocar senha</p>
                </div>
              </div>
              <div className={activeTab === '1' ? 'box-tab active' : 'box-tab'}>
                <form onSubmit={handleSubmit(handleEditPassword)}>
                  <InputPassword
                    icon={RiLock2Line}
                    name="password"
                    placeholder="Senha atual"
                    error={formState.errors.password}
                    {...register('password')}
                  />
                  <InputPassword
                    icon={RiLock2Line}
                    name="password"
                    placeholder="Senha"
                    error={formState.errors.newpassword}
                    {...register('newpassword')}
                  />
                  <InputPassword
                    icon={RiLock2Line}
                    name="password"
                    placeholder="Repetir senha"
                    error={formState.errors.replacepassword}
                    {...register('replacepassword')}
                  />
                  <button type="submit" className="btn-1">
                    Salvar alterações
                  </button>
                </form>
              </div>
              <div className={activeTab === '2' ? 'box-tab active' : 'box-tab'}>
                <form onSubmit={handleSubmit(handleEdit)}>
                  <Input
                    icon={RiUser6Line}
                    name="name"
                    placeholder="Nome"
                    type="text"
                    error={formState.errors.name}
                    {...register('name')}
                  />
                  <Input
                    icon={RiMailAddLine}
                    name="email"
                    placeholder="E-mail"
                    type="email"
                    error={formState.errors.email}
                    {...register('email')}
                  />
                  <Input
                    icon={RiLock2Line}
                    name="cnh"
                    placeholder="CNH"
                    type="cnh"
                    error={formState.errors.cnh}
                    {...register('cnh')}
                  />
                  <button type="submit" className="btn-1">
                    Salvar alterações
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="content-cars">
            <h2>Agendamentos feitos</h2>

            <div className="contianer-car">
              <div className="contianer-car-box-1">
                <div>
                  <p>Audi </p>
                  <span>RS 5 Coupé</span>
                  <div className="box-icon">
                    <div>
                      <p>Ao dia</p>
                      <span className="red">R$ 340</span>
                    </div>
                    <div>
                      <RiFlashlightLine size={32} color="#AEAEB3" />
                    </div>
                  </div>
                </div>
                <img src="/audi.png" alt="Carro" />
              </div>
              <div className="contianer-car-box-2">
                <p>Período DO ALUGUEL</p>
                <div>
                  <span>18 Jul 2021</span>
                  <RiArrowRightLine size={20} color="#AEAEB3" />
                  <span>20 Jul 2021</span>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </ContentHome>
    </Container>
  );
}
