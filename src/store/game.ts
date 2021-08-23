import { GameState } from '@/types/game'
import { Player } from '@/types/players'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '.'

const initialState: GameState = {}

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    setPlayers: (state, action: PayloadAction<Player[]>) => {
      state.players = action.payload
    }
  }
})

export const { setPlayers } = gameSlice.actions

export const selectGame = (state: RootState): GameState => state.game
export const selectPlayer = (state: RootState): Player[] => state.game.players

export default gameSlice.reducer
