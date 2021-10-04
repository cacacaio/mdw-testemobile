import { createSlice } from '@reduxjs/toolkit'
import featuredComics from '../initials/featuredComics'

const featuredComicsSlice = createSlice({
  name: 'featuredComics',
  initialState: {
    featuredComics,
  },
  reducers: {},
})

export default featuredComicsSlice.reducer
