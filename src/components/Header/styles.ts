import styled from 'styled-components';

export const Container = styled.div`
    width: calc(100vw - 80px);
    height: 80px;
    padding: 28px 116px;
    background: #fff;
    border-bottom: 1px solid #ebebf0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const BoxTit = styled.div`
    p {
        font-style: normal;
        font-weight: 600;
        font-size: 20px;
        line-height: 25px;
        color: #47474d;
    }
`;
export const BoxLogin = styled.div`
    display: flex;
    align-items: center;
    p {
        font-family: Inter;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 26px;
        text-align: right;
        color: #47474d;
    }
    .avatar {
        display: flex;
        align-items: center;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        margin-left: 16px;
        background: #ebebf0;
        justify-content: center;
    }
`;
