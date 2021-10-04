import { createSlice } from '@reduxjs/toolkit'
import { comics } from '../initials/comics'

const comicSlice = createSlice({
  name: 'comics',
  initialState: {
    comics,
  },
  reducers: {},
})

export default comicSlice.reducer
