import styled, { css } from "styled-components";

interface NavProps {
  activeClassName: boolean;
}

export const Container = styled.div`
  width: 100%;
  max-width: 80px;
  height: 100vh;
  background: #1b1b1f;
`;

export const BoxRed = styled.div`
  height: 80px;
  background: #dc1637;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentNav = styled.div`
  /* a.active {
        background: #000;
    } */
`;
export const BoxBlack = styled.div`
  padding: 275px 0 0 0;
`;
export const Nav = styled.div<NavProps>`
  height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${(props) =>
    props.activeClassName &&
    css`
      background: #000;
      border-left: 3px solid #dc1637;
    `}
`;
