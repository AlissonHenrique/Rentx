import styled from 'styled-components';

export const ContainerBg = styled.div`
  background: #1b1b1f;
  width: 100vw;
  height: 100vh;
`;

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  height: calc(100vh - 5rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: 540px;
    .logo {
      width: 100%;
      max-width: 200px;
      margin-top: 36px;
    }
    .car {
      width: 100%;
      max-width: 608px;
    }
    h1 {
      font-family: Archivo;
      font-style: normal;
      font-weight: 600;
      font-size: 54px;
      line-height: 54px;
      color: #ffffff;
    }
    p {
      font-weight: 400;
      font-size: 20px;
      line-height: 30px;
      color: #ffffff;
    }
    button {
      width: 292px;
      height: 80px;
      background: #dc1637;
      border: 0;
      color: #fff;
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
      transition: background-color 0.2s;
      &:hover {
        background-color: #76081a;
        transition: 0.2s;
      }
    }
  }
`;
