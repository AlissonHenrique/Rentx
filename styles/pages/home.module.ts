import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
`;
export const Content = styled.div`
  padding: 0 108px;
  .header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 40px 0 24px 0;
    border-bottom: 1px solid #dedee3;
    padding-bottom: 24px;

    h1 {
      font-family: Archivo;
      font-style: normal;
      font-weight: 600;
      font-size: 36px;
      line-height: 39px;
      color: #47474d;
    }
    span {
      display: block;
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #7a7a80;
    }
  }

  .content-car {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
  }
`;

export const ContentHome = styled.div`
  width: 100%;
`;
