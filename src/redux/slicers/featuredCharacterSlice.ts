import {createSlice} from '@reduxjs/toolkit'
import featured from '../initials/featuredCharacters'

const featuredCharacters = createSlice({
  name: 'characters',
  initialState: {
    featuredCharacters: featured,
  },
  reducers: {},
})

export default featuredCharacters.reducer
