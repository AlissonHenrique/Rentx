import { Sidebar } from '../components/sidebar';
import Link from 'next/link';
import { Container, ContentHome } from '../../styles/pages/home.module';
import { ContainerLogin } from '../../styles/pages/login.module';
import { Header } from '../components/Header';
import React from 'react';
import { Input } from '../components/Form/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RiMailLine, RiLock2Line } from 'react-icons/ri';
import { yupResolver } from '@hookform/resolvers/yup';

import * as Yup from 'yup';
type SignInFormData = {
  email: string;
  password: string;
};
const sigIUpFormSchema = Yup.object().shape({
  email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: Yup.string().required('Senha obrigatória'),
});
export default function Login() {
  const { register, handleSubmit, formState } = useForm<SignInFormData>({
    resolver: yupResolver(sigIUpFormSchema),
  });

  const handleSignIn: SubmitHandler<SignInFormData> = async data => {
    //await new Promise((resolve) => setTimeout(resolve, 2000));
    //await router.push("/dashboard");
  };

  return (
    <Container>
      <Sidebar />
      <ContentHome>
        <Header title="Login" />
        <ContainerLogin>
          <div className="box-1">
            <img src="/carro-2.png" alt="Logo" className="car" />
          </div>
          <div className="box-2">
            <h1>Estamos quase lá.</h1>
            <p>Faça seu login para começar uma experiência incrível.</p>
            <form>
              <Input
                icon={RiMailLine}
                name="email"
                placeholder="E-mail"
                type="email"
                error={formState.errors.email}
                {...register('email')}
              />
              <Input
                icon={RiLock2Line}
                name="password"
                placeholder="Senha"
                type="password"
                error={formState.errors.password}
                {...register('password')}
              />
            </form>
            <Link href="/resetPassword">Esqueci minha senha</Link>

            <button
              type="button"
              className="btn-1"
              onClick={handleSubmit(handleSignIn)}
            >
              Login
            </button>

            <Link href="/signup">
              <button type="button" className="btn-2">
                Criar conta gratuita
              </button>
            </Link>
          </div>
        </ContainerLogin>
      </ContentHome>
    </Container>
  );
}
