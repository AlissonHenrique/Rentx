import React from 'react';
import { RiHome2Line, RiCarFill, RiUser6Line } from 'react-icons/ri';
import { Container, BoxRed, BoxBlack, Nav, ContentNav } from './styles';

import { ActiveLink } from '../ActiveLink';
export function Sidebar() {
  return (
    <Container>
      <BoxRed>
        <img src="/logo-bar.svg" alt="RentX" />
      </BoxRed>
      <BoxBlack>
        <ContentNav>
          <ActiveLink href="/listcars" icon={RiHome2Line} />
          <ActiveLink href="/filterCars" icon={RiCarFill} />
          <ActiveLink href="/signin" icon={RiUser6Line} />
        </ContentNav>
      </BoxBlack>
    </Container>
  );
}
