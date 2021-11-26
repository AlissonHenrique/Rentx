import styled from 'styled-components';

export const ContainerLogin = styled.div`
  padding: 64px 116px 0 116px;
  display: flex;
  justify-content: space-between;
  .box-1 {
    flex: 1;
    .car {
      width: 100%;
      max-width: 608px;
    }
  }
  .box-2 {
    flex: 1;
    max-width: 384px;

    h1 {
      font-family: Archivo;
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 39px;
      color: #41414d;
      margin-bottom: 24px;
      margin-top: 34px;
    }
    p {
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 26px;
      color: #7a7a80;
    }
    a {
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #737380;
      display: block;
    }
    form {
      margin: 40px 0 24px 0;

      & > div {
        margin-bottom: 16px;
      }
    }

    button.btn-1 {
      margin-top: 24px;
      background: #dc1637;
      font-family: Inter;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #ffffff;
      width: 100%;
      height: 64px;

      border: 0;
      transition: background-color 0.2s;
      &:hover {
        opacity: unset;
        transition: 0.2s;
        background-color: #dc1637;
      }
    }

    button.btn-2 {
      margin-top: 16px;
      background: transparent;
      border: 1px solid #dedee3;
      font-family: Inter;
      width: 100%;
      height: 64px;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      text-align: center;
      color: #47474d;
    }
  }
`;
