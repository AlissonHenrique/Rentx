import styled from "styled-components";

export const Container = styled.div`
  background: #ffffff;
  border: 1px solid #ebebf0;
  width: 100%;
  max-width: 360px;
  cursor: pointer;
  .box-img {
    padding: 32px;
    img {
      display: block;
      margin: 0 auto;
    }
  }
  .box-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 24px;
    border-top: 1px solid #ebebf0;
    p {
      font-size: 12px;
      line-height: 13px;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #aeaeb3;
      margin-bottom: 8px;
    }
    span {
      display: block;
      font-family: Archivo;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 22px;
      color: #47474d;
      &.red {
        color: #dc1637;
        font-size: 20px;
      }
    }
  }
`;
