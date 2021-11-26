import { Container } from './styles';
import { RiDropLine, RiFlashlightLine, RiLeafLine } from 'react-icons/ri';
import Link from 'next/link';

interface CarProps {
  type: string;
}

export function Car({ type }: CarProps) {
  return (
    <Link href="/listcars/profile">
      <Container>
        <div className="box-img">
          <img src="/Audi.png" alt="Audi" />
        </div>
        <div className="box-footer">
          <div>
            <p>Audi </p>
            <span>RS 5 Coupé</span>
          </div>
          <div>
            <p>Ao dia</p>
            <span className="red">R$ 640</span>
          </div>
          {type === 'gasolina' ? (
            <RiDropLine size={26} color="#AEAEB3" />
          ) : type === 'hibrido' ? (
            <RiLeafLine size={26} color="#AEAEB3" />
          ) : (
            <RiFlashlightLine size={26} color="#AEAEB3" />
          )}
        </div>
      </Container>
    </Link>
  );
}
