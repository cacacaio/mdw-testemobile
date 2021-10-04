import { createSlice } from '@reduxjs/toolkit'
import { movies } from '../initials/movies'

const movieSlice = createSlice({
  name: 'movies',
  initialState: {
    movies,
  },
  reducers: {
    filterCronology(state) {
      state.movies.sort((a, b) => a.cronologyDate - b.cronologyDate)
    },
    filterRelease(state) {
      state.movies.sort((a, b) => a.launchDate - b.launchDate)
    },
  },
})

export const { filterCronology, filterRelease } = movieSlice.actions
export default movieSlice.reducer
