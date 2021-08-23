import React, { useEffect, useRef, useState } from 'react'
import { Input } from '@/styles/UI'

import { Container } from './styles'
import useSocket from 'src/hooks/useSocket'

type Props = {
  onClose: () => void
}

const Modal: React.FC<Props> = ({ onClose }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [error, setError] = useState(false)

  const socket = useSocket()

  useEffect(() => {
    socket.on('roomExists', () => {
      setError(true)
    })
  }, [socket])

  const newRoom = () => {
    const roomName = inputRef.current?.value
    socket.emit('newGame', roomName)
  }

  return (
    <Container>
      <div className="modal">
        <div className="modal-header">
          <h2>Criar Sala</h2>
          <button onClick={() => onClose()}>×</button>
        </div>
        <div className="modal-body">
          <Input placeholder="Digite o nome da Sala" ref={inputRef} />

          {error ? <span>Essa sala ja existe</span> : ''}

          <Input placeholder="Senha (Opcional)" />
        </div>
        <div className="modal-footer">
          <button onClick={newRoom}>Criar</button>
          <button onClick={() => onClose()} className="btn-transparent">
            cancelar
          </button>
        </div>
      </div>
    </Container>
  )
}

export default Modal
