import { Container } from '@/styles/pages/lobby'
import { Player } from '@/types/players'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import useSocket from 'src/hooks/useSocket'
import { selectPlayer, setPlayers } from 'src/store/game'

// import { Container } from './styles';

const Lobby: React.FC = () => {
  const players = useSelector(selectPlayer)
  const dispatch = useDispatch()
  const socket = useSocket()

  useEffect(() => {
    socket.on('newPlayer', players => {
      dispatch(setPlayers(JSON.parse(players) as Player[]))
    })
  }, [socket])

  return (
    <Container>
      <div className="player">
        <div className="player-header">
          <h2>Aguardando Jogadores</h2>
        </div>
        <div className="player-body">
          <ul className="players-list">
            {players &&
              players.map(player => {
                return (
                  <li key={player.name}>
                    <img />
                    {player}
                  </li>
                )
              })}
          </ul>

          <span>INICIANDO A PARTIDA EM 10S</span>
        </div>

        <div className="player-footer">
          <button className="btn-transparent">Voltar</button>
        </div>
      </div>
    </Container>
  )
}

export default Lobby
