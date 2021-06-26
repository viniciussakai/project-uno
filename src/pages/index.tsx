import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/index'
import Logo from '../public/logo.svg'
import { Button, GithubButton, GoogleButton, Input } from '@/styles/UI'
import { AiFillGithub, AiOutlineGoogle, AiOutlineExport } from 'react-icons/ai'

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Homepage</title>
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

            <Button>
              <AiOutlineExport /> Jogar
            </Button>
          </div>
        </main>
      </Container>
    </>
  )
}

export default Home
