import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { firebase, auth } from 'src/libs/firebase'
import { AppDispatch, AppThunk, RootState } from '.'

export interface User {
  uid?: string
  displayName: string
  photo?: string
}

interface AuthState {
  user?: User
}

const initialState: AuthState = {}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    }
  }
})

export const { setUser } = authSlice.actions

// export const signWithGoogle = (): AppThunk => {
//   return async (dispatch: AppDispatch) => {
//     try {
//       const result = await auth.signInWithPopup(
//         new firebase.auth.GoogleAuthProvider()
//       )

//       const { uid, displayName, photoURL } = result.user

//       const user = {
//         uid,
//         displayName,
//         photo: photoURL
//       }

//       dispatch(setUser(user))
//     } catch (e) {
//       console.log('error')
//     }
//   }
// }

export const selectUser = (state: RootState): User => state.auth.user

export default authSlice.reducer
