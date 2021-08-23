import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/index'
import Logo from '../public/logo.svg'
import { Button, GithubButton, GoogleButton, Input } from '@/styles/UI'
import { AiFillGithub, AiOutlineGoogle, AiOutlineExport } from 'react-icons/ai'
import { useRouter } from 'next/router'

const Login: React.FC = () => {
  const router = useRouter()

  return (
    <>
      <Head>
        <title>Loginpage</title>
      </Head>

      <Container>
        <aside className="illustration">
          <Logo />
        </aside>
        <main>
          <div>
            <div className="social">
              <GithubButton>
                <AiFillGithub /> Entre com o GitHub
              </GithubButton>
              <GoogleButton>
                <AiOutlineGoogle /> Entre com o Google
              </GoogleButton>
            </div>

            <div className="divider">
              <span>ou entre como convidado</span>
            </div>

            <Input placeholder="Digite seu apelido" />

            <Button onClick={() => router.push('rooms')}>
              <AiOutlineExport /> Jogar
            </Button>
          </div>
        </main>
      </Container>
    </>
  )
}

export default Login
