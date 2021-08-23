import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import ListSelect from 'react-list-select'
import useSocket from 'src/hooks/useSocket'
import { Container } from './styles'

type Props = {
  onChange: (select, items) => void
}

const List: React.FC<Props> = ({ onChange }) => {
  const [items, setItems] = useState([])
  const router = useRouter()

  const socket = useSocket()

  useEffect(() => {
    socket.emit('getRooms')
  }, [])

  useEffect(() => {
    socket.on('rooms', rooms => {
      setItems(JSON.parse(rooms))
    })

    socket.on('newRoom', rooms => {
      setItems(JSON.parse(rooms))
    })
    socket.on('goLobby', roomName => {
      router.push('/lobby/' + roomName)
    })
  }, [])

  const generateItems = () => {
    return items.map(item => {
      return (
        <>
          <span>{item.name}</span> <span>{item.players}/4</span>
        </>
      )
    })
  }

  return (
    <Container>
      <div className="list-head">
        <span>Nome da Sala</span> <span>Jogadores</span>
      </div>

      <ListSelect
        items={generateItems()}
        onChange={selected => onChange(selected, items)}
      />
    </Container>
  )
}

export default List
