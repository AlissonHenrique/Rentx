import { Sidebar } from '../../components/sidebar';
import {
  Container,
  ContentHome,
  Content,
} from '../../../styles/pages/home.module';
import { Header } from '../../components/Header';
import { Car } from '../../components/Car';
export default function Listcars() {
  return (
    <>
      <Container>
        <Sidebar />
        <ContentHome>
          <Header title="Início" />
          <Content>
            <div className="header">
              <h1>Carros disponíveis</h1>
              <span>Total 12 carros</span>
            </div>
            <div className="content-car">
              <Car type={'hibrido'} />
              <Car type={'eletrico'} />
              <Car type={'gasolina'} />
              <Car type={'hibrido'} />
              <Car type={'eletrico'} />
              <Car type={'gasolina'} />
            </div>
          </Content>
        </ContentHome>
      </Container>
    </>
  );
}
