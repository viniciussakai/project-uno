import React from 'react'
import Logo from '../../public/logo.svg'
import { Container } from './styles'

const Navbar: React.FC = () => {
  return (
    <Container>
      <Logo />

      <div>
        <span>Bem Vindo, Jogador</span>
        <img src="https://static.wikia.nocookie.net/mortalkombat/images/0/09/Img_mk9_2011_freddy.jpg/revision/latest/top-crop/width/360/height/450?cb=20210412233802&path-prefix=pt-br" />
      </div>
    </Container>
  )
}

export default Navbar
