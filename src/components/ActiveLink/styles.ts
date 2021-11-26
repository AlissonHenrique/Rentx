import styled, { css } from 'styled-components';

interface ContainerProps {
    activeClassName: string;
}
export const Container = styled.div<ContainerProps>`
    height: 54px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    ${props =>
        props.activeClassName === 'active' &&
        css`
            background: #000;
            border-left: 3px solid #dc1637;
            svg {
                fill: #fff;
            }
        `}
`;
