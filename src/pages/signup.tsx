import { Sidebar } from '../components/sidebar';

import { Container, ContentHome } from '../../styles/pages/home.module';
import { ContainerLogin } from '../../styles/pages/signup.module';
import { Header } from '../components/Header';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { Input } from '../components/Form/Input';
import { InputPassword } from '../components/Form/InputPassword';
import { SubmitHandler, useForm } from 'react-hook-form';
import { RiCheckFill } from 'react-icons/ri';
import * as Yup from 'yup';
import {
  RiMailLine,
  RiLock2Line,
  RiUser6Line,
  RiCarLine,
} from 'react-icons/ri';

type SignUpFormData = {
  name: string;
  email: string;
  password: string;
  passwordConfirmation: string;
  cnh: string;
};
const sigIUpFormSchema = Yup.object().shape({
  name: Yup.string().required('Nome obrigatório'),
  email: Yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  cnh: Yup.string().required('CNH obrigatório'),
  password: Yup.string().required('Senha obrigatória'),
  passwordConfirmation: Yup.string().oneOf(
    [Yup.ref('password'), null],
    'Senhas diferentes',
  ),
});
import Modal from 'react-modal';
import { ModalSuccess } from '../components/Modal';
import { useRouter } from 'next/router';

export default function Signup() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const { register, handleSubmit, formState, reset } = useForm<SignUpFormData>({
    resolver: yupResolver(sigIUpFormSchema),
  });
  const history = useRouter();
  const handleSignIn: SubmitHandler<SignUpFormData> = async (data, e) => {
    //await new Promise((resolve) => setTimeout(resolve, 2000));
    //await router.push("/dashboard");
    setIsOpen(true);

    e.target.reset();
  };

  function closeModal() {
    setIsOpen(false);
  }
  function handleButtonOk() {
    setIsOpen(false);
    history.push('/signin');
  }
  return (
    <Container>
      <Sidebar />
      <ContentHome>
        <Header title="Perfil" />
        <ContainerLogin>
          <div className="box-2">
            <h1>Crie sua conta</h1>
            <p>Faça seu cadastro de forma rápida e fácil.</p>
            <form onSubmit={handleSubmit(handleSignIn)}>
              <Input
                icon={RiUser6Line}
                name="name"
                placeholder="Nome"
                error={formState.errors.name}
                {...register('name')}
              />
              <Input
                icon={RiMailLine}
                name="email"
                placeholder="E-mail"
                type="email"
                error={formState.errors.email}
                {...register('email')}
              />
              <Input
                icon={RiCarLine}
                name="cnh"
                placeholder="CNH"
                type="text"
                error={formState.errors.cnh}
                {...register('cnh')}
              />
              <InputPassword
                icon={RiLock2Line}
                name="password"
                placeholder="Senha"
                error={formState.errors.password}
                {...register('password')}
              />
              <InputPassword
                icon={RiLock2Line}
                name="passwordConfirmation"
                placeholder="Repetir senha"
                error={formState.errors.passwordConfirmation}
                {...register('passwordConfirmation')}
              />

              <button type="submit" className="btn-1">
                Cadastrar
              </button>
            </form>
          </div>
          <div className="box-1">
            <img src="/mustang.png" alt="Logo" className="car" />
          </div>
        </ContainerLogin>
      </ContentHome>
      <ModalSuccess
        title="Conta criada"
        description="Agora você parte da RentX. Faça seu login e comece a aproveitar."
        isOpen={modalIsOpen}
        handleModalOk={handleButtonOk}
        handleCloseModal={() => setIsOpen(false)}
      />
    </Container>
  );
}
