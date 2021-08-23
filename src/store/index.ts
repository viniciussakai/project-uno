/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import authSlice from './auth'
import gameSlice from './game'

const store = configureStore({
  reducer: {
    auth: authSlice,
    game: gameSlice
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>
export const useAppDispatch = () => useDispatch<AppDispatch>()

export default store
