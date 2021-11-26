import Link, { LinkProps } from 'next/link';

import React from 'react';
import { RiUser6Line } from 'react-icons/ri';
import { Container, BoxTit, BoxLogin } from './styles';
interface HeaderProps {
    title: string;
}
export function Header({ title }: HeaderProps) {
    return (
        <Container>
            <BoxTit>
                <p>{title}</p>
            </BoxTit>
            <BoxLogin>
                <p>Faça login</p>
                <div className="avatar">
                    <RiUser6Line size={20} color="#7A7A80" />
                </div>
            </BoxLogin>
        </Container>
    );
}
