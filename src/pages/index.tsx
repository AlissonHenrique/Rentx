import Link from 'next/link';
import { ContainerBg, Container } from '../../styles/pages/index.module';

export default function Home() {
  return (
    <ContainerBg>
      <Container>
        <div>
          <img src="/logo.svg" alt="Logo" className="logo" />
          <h1>
            Alugue um
            <br />
            carro de maneira
            <br />
            simples e fácil
          </h1>
          <p>
            Vários modelos para você dirigir
            <br /> seguro, com conforto e segurança.
          </p>
          <Link href="/listcars">
            <button type="button">Começar agora</button>
          </Link>
        </div>
        <div>
          <img src="/carro.png" alt="Logo" className="car" />
        </div>
      </Container>
    </ContainerBg>
  );
}
