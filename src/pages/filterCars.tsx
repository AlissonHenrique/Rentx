import { Sidebar } from '../components/sidebar';
import { Container, ContentHome } from '../../styles/pages/home.module';
import { Header } from '../components/Header';
import { Content } from '../../styles/pages/filterCars.module';
export default function filterCars() {
  return (
    <>
      <Container>
        <Sidebar />
        <ContentHome>
          <Header title="Filtrar carros" />
          <Content>
            <div className="header">
              <h1>
                Escolha uma data <br /> de início e fim do aluguel
              </h1>
            </div>
            <div className="content-calendar">sad</div>
          </Content>
        </ContentHome>
      </Container>
    </>
  );
}
