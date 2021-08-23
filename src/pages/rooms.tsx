import React, { useEffect, useState } from 'react'
import Navbar from '@/components/Navbar'
import { Container } from '@/styles/pages/rooms'
import List from '@/components/List'
import { Button } from '@/styles/UI'
import { AiOutlineImport, AiOutlinePlus } from 'react-icons/ai'
import Modal from '@/components/Modal'
import useSocket from 'src/hooks/useSocket'
import { useRouter } from 'next/router'
import { setPlayers } from 'src/store/game'
import { useDispatch } from 'react-redux'

const Rooms: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [room, setRoom] = useState('')
  const dispatch = useDispatch()

  const router = useRouter()
  const socket = useSocket()

  useEffect(() => {
    socket.on('goLobby', roomName => {
      router.push('/lobby/' + roomName)
    })

    socket.on('newPlayer', players => {
      dispatch(setPlayers(JSON.parse(players)))
    })
  }, [])

  const onChange = (selected, items) => {
    setRoom(items[selected].name)
  }

  const handleInRoom = () => {
    socket.emit('join', room)
  }
  return (
    <Container>
      <Navbar />

      <main>
        <h1>Lista de Salas</h1>

        <List onChange={onChange} />

        <div className="btn-group">
          <Button onClick={() => handleInRoom()}>
            <AiOutlineImport /> Entrar no Jogo
          </Button>
          <Button isOutline onClick={() => setModalOpen(true)}>
            <AiOutlinePlus />
            Criar Sala
          </Button>
        </div>
      </main>

      {modalOpen ? <Modal onClose={() => setModalOpen(false)} /> : ''}
    </Container>
  )
}

export default Rooms
