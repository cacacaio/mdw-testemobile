import { createSlice } from '@reduxjs/toolkit'
import featured from '../initials/featuredMovies'

const featuredMovies = createSlice({
  name: 'featuredMovies',
  initialState: {
    featuredMovies: featured,
  },
  reducers: {},
})

export default featuredMovies.reducer
