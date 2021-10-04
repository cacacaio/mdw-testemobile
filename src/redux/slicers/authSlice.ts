import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'login',
  initialState: {
    authenticated: false,
  },
  reducers: {
    authenticate(state) {
      state.authenticated = true
    },
    logout(state) {
      state.authenticated = false
    },
  },
})

export const { authenticate, logout } = authSlice.actions
export default authSlice.reducer
