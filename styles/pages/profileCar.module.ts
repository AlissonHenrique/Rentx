import styled from 'styled-components';
export const Container = styled.div``;
export const Content = styled.div`
  width: 100%;

  padding: 40px 108px;

  .header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-bottom: 24px;
    border-bottom: 1px solid #dedee3;

    svg {
      cursor: pointer;
    }
    div {
      padding: 0 48px;

      p {
        font-family: Archivo;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 15px;
        letter-spacing: 0.04em;
        text-transform: uppercase;
        color: #aeaeb3;
        margin-bottom: 4px;
      }
      span {
        font-family: Archivo;
        font-style: normal;
        font-weight: 600;
        font-size: 36px;
        line-height: 39px;
        color: #47474d;
        &.red {
          font-weight: 600;
          font-size: 36px;
          line-height: 39px;
          color: #dc1637;
        }
      }
    }
  }
  .content-box {
    display: flex;
    justify-content: space-between;
    img {
      margin-top: 102px;
    }
    .box-2 {
      width: 100%;
      max-width: 384px;

      .option-box {
        margin-top: 40px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        gap: 8px;

        .option-box-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          div {
            height: 64px;
            background: #ebebf0;
            &:nth-child(1) {
              display: flex;
              align-items: center;
              justify-content: center;
              margin-right: 2px;
              width: 62px;
            }
            &:nth-child(2) {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              width: 121px;
              padding-left: 16px;
            }
            p {
              font-family: Inter;
              font-style: normal;
              font-weight: 500;
              font-size: 18px;
              line-height: 22px;
              color: #7a7a80;
            }
          }
        }
      }
      .tabs {
        display: flex;
        justify-content: space-between;

        margin-top: 34px;
        div {
          padding: 14px 34px;
          cursor: pointer;
          flex: 1;
          border-bottom: 1px solid #dedee3;
          p {
            font-weight: 600;
            font-size: 14px;
            line-height: 17px;
            text-align: center;
            text-transform: uppercase;
            color: #dedee3;
          }
          &.active {
            border-bottom: 2px solid #dc1637;
            p {
              color: #47474d;
            }
          }
        }
      }
      .box-text {
        margin-top: 24px;
        display: none;
        &.active {
          display: block;
        }
        p {
          font-weight: 400;
          font-size: 16px;
          line-height: 26px;
          color: #7a7a80;
        }
        .box-text-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 48px;

          p {
            font-family: Archivo;
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 13px;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            color: #aeaeb3;
          }
          span {
            margin-top: 8px;
            display: block;
            font-family: Inter;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            color: #47474d;
          }
          .box-icon {
            background: #dc1637;
            height: 48px;
            width: 48px;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;
          }
        }
        .box-text-body {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 48px;
          border-top: 1px solid #ebebf0;
          padding-top: 16px;
          margin-top: 16px;
          p {
            font-family: Archivo;
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 13px;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            color: #aeaeb3;
          }
          p.total {
            font-family: Archivo;
            font-style: normal;
            font-weight: 500;
            font-size: 36px;
            line-height: 39px;

            color: #10a754;
          }
          span {
            margin-top: 8px;
            display: block;
            font-family: Inter;
            font-style: normal;
            font-weight: 500;
            font-size: 18px;
            line-height: 22px;
            color: #47474d;
          }
        }
      }
      button.btn-red {
        width: 100%;
        margin-top: 113px;
        background: #dc1637;
        color: #ffffff;
        border: 0;
        padding: 30px 73px;
        transition: background-color 0.2s;
        &:hover {
          opacity: unset;
          transition: 0.2s;
          background-color: #dc1637;
        }
      }
      button.btn-green {
        width: 100%;
        margin-top: 113px;
        background: #03b352;
        color: #ffffff;
        border: 0;
        padding: 30px 73px;
        transition: background-color 0.2s;
        &:hover {
          transition: 0.2s;
          background-color: #03b252;
        }
      }
    }
  }
`;
export const CalendarContainer = styled.div`
  .container-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #1b1b1f;
    padding: 26px 32px;
    h1 {
      color: #fff;
      font-family: Archivo;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 28px;
    }
    svg {
      cursor: pointer;
    }
  }
  .container-calendario {
    display: flex;
    justify-content: space-between;

    padding: 48px 48px;
    .box-1 {
      .rdp-head {
        border-bottom: 1px solid #ebebf0;
        margin-bottom: 32px;
      }
      .rdp-caption_label {
        font-family: Archivo;
        font-style: normal;
        font-weight: 600;
        font-size: 24px;
        line-height: 30px;
        color: #47474d;
        text-transform: capitalize;
      }
      .rdp-head_cell {
        span {
          color: #aeaeb3;
          letter-spacing: 0.08em;
          font-family: Archivo;
          font-style: normal;
          font-weight: 600;
        }
      }
      .rdp-day {
        border-radius: 0;
        span {
          font-family: Inter;
          font-style: normal;
          font-weight: normal;
          color: #47474d;
        }
      }
      .rdp-day_today {
        span {
          color: #dc1637;
        }
      }
      .rdp-day_outside {
        span {
          color: #aeaeb3;
        }
      }
      .rdp-button:hover:not([disabled]) {
        background-color: #fdedef;
      }
      .rdp-button:focus:not([disabled]),
      .rdp-button:active:not([disabled]) {
        border: unset;
      }
      .rdp-day_selected {
        background-color: #dc1637;
        span {
          color: #fff;
        }
        &:hover {
          background-color: #dc1637 !important;
        }
      }
      .rdp-day_range_middle {
        background-color: #fdedef;
        span {
          color: #dc1637;
        }
      }
    }
    .box-2 {
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      width: 100%;
      max-width: 256px;
      padding-top: 24px;
      .box {
        height: 56px;

        border-bottom: 1px solid #aeaeb3;
        margin-bottom: 48px;
        p {
          font-family: Archivo;
          font-style: normal;
          font-weight: 500;
          font-size: 14px;
          line-height: 15px;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #aeaeb3;
          margin-bottom: 8px;
        }
        span {
          font-family: Inter;
          font-style: normal;
          font-weight: 600;
          font-size: 30px;
          line-height: 36px;
          color: #47474d;
        }
      }
      button {
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
        &:disabled {
          cursor: not-allowed;
        }
      }
    }
  }
`;
