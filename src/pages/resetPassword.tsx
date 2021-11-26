import { Sidebar } from '../components/sidebar';
import Link from 'next/link';
import { Container, ContentHome } from '../../styles/pages/home.module';
import { ContainerLogin } from '../../styles/pages/login.module';
import { Header } from '../components/Header';
import React from 'react';
import { Input } from '../components/Form/Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RiMailLine, RiLock2Line } from 'react-icons/ri';

type SignInFormData = {
  email: string;
  password: string;
};
export default function ResetPassword() {
  const { register, handleSubmit, formState } = useForm<SignInFormData>({});

  const handleSignIn: SubmitHandler<SignInFormData> = async data => {
    //await new Promise((resolve) => setTimeout(resolve, 2000));
    //await router.push("/dashboard");
  };
  return (
    <Container>
      <Sidebar />
      <ContentHome>
        <Header title="Perfil" />
        <ContainerLogin>
          <div className="box-1">
            <img src="/carro-2.png" alt="Logo" className="car" />
          </div>
          <div className="box-2">
            <h1>Recuperar senha</h1>
            <p>Insira seu e-mail para receber um link de recuperação</p>
            <form>
              <Input
                icon={RiMailLine}
                name="email"
                placeholder="E-mail"
                type="email"
                error={formState.errors.email}
                {...register('email')}
              />
            </form>

            <button
              type="button"
              className="btn-1"
              onClick={handleSubmit(handleSignIn)}
            >
              Enviar
            </button>
          </div>
        </ContainerLogin>
      </ContentHome>
    </Container>
  );
}
