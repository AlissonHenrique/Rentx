import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  margin-top: 40px;
  h2 {
    font-family: Archivo;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 34px;
    color: #47474d;
    margin-bottom: 24px;
  }
  .content-profile {
    border-right: 1px solid #dedee3;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 0px 72px;

    flex: 1;
    .content-img {
      display: flex;
      align-items: flex-end;
      img {
        width: 180px;
        height: 180px;
        border-radius: 50%;
      }
      .bg-icon {
        width: 40px;
        height: 40px;
        background: #dc1637;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 4px;
        margin-left: -44px;
      }
    }
    .box-tab {
      display: none;

      &.active {
        display: unset;
      }
      form {
        margin: 40px 0 24px 0;

        & > div {
          margin-bottom: 16px;
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
      }
    }

    .container-profile {
      margin-top: 40px;
      width: 100%;
      max-width: 380px;
      .tab-profile {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #dedee3;
        width: 100%;
        padding: 0 84px;
        margin-bottom: 24px;
        cursor: pointer;
        p {
          font-family: Archivo;
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: 22px;
          color: #aeaeb3;
          padding-bottom: 14px;
        }
        .active {
          p {
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 22px;
            color: #41414d;
          }
          border-bottom: 2px solid #dc1637;
        }
      }
    }
  }
  .content-cars {
    flex: 1;
    padding: 0px 72px;
    .contianer-car {
      .contianer-car-box-1 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #ffffff;
        border: 1px solid #ebebf0;
        padding: 22px 32px;
        margin-bottom: 4px;
        p {
          font-weight: 500;
          font-size: 14px;
          line-height: 15px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #aeaeb3;
        }
        span {
          font-weight: 500;
          font-size: 24px;
          line-height: 26px;
          display: block;
          color: #47474d;
          margin-top: 6px;
          &.red {
            color: #dc1637;
          }
        }
        img {
          height: 132px;
        }

        .box-icon {
          margin-top: 24px;
          display: flex;
          justify-content: space-between;
        }
      }
      .contianer-car-box-2 {
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #ffffff;
        border: 1px solid #ebebf0;
        padding: 22px 32px;
        div {
          display: flex;
          justify-content: space-between;
          width: 100%;
          max-width: 265px;
        }
        p {
          font-family: Archivo;
          font-weight: 500;
          font-size: 12px;

          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #aeaeb3;
        }
        span {
          font-weight: 500;
          font-size: 18px;
          display: block;
          color: #47474d;
        }
      }
    }
  }
`;
