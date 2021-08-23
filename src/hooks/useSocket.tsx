import { useEffect, useState } from 'react'
import io, { Socket } from 'socket.io-client'
const socket = io('http://localhost:3333')

const useSocket = (): Socket => {
  return socket
}

export default useSocket
