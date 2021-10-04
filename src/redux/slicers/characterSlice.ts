import {createSlice} from '@reduxjs/toolkit'
import {characters} from '../initials/characters'

const characterSlice = createSlice({
  name: 'characters',
  initialState: {
    characters,
  },
  reducers: {},
})

export default characterSlice.reducer
