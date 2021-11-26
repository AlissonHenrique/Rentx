import styled, { css } from 'styled-components';
interface ContainerProps {
  isFocused: boolean;
  isField: boolean;
  isError: boolean;
}
export const Container = styled.div<ContainerProps>`
  display: flex;
  background: #ffffff;
  border: 1px solid #ebebf0;
  height: 64px;
  justify-content: space-between;
  ${props =>
    props.isError &&
    css`
      border: 1px solid #c53030;
    `}
  div.icon {
    svg {
      flex: 1;
      fill: #7a7a80;
      ${props =>
        props.isFocused &&
        css`
          fill: #c53030;
        `}
      ${props =>
        props.isFilled &&
        css`
          fill: #10a754;
        `}
    }
    border-right: 1px solid #ebebf0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 71px;
  }
  div.icon-2 {
    cursor: pointer;
    svg {
      flex: 1;
      margin-right: 20px;
    }
    border-right: 1px solid #ebebf0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input {
    width: 100%;
    flex: 1;
    border: 0;
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    color: #aeaeb3;
    padding: 0 24px;
  }
`;
export const ErrorMessage = styled.div`
  font-size: 14px;
`;
