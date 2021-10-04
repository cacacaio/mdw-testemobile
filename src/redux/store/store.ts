import { configureStore } from '@reduxjs/toolkit'
import characterReducer from '../slicers/characterSlice'
import comicSlice from '../slicers/comicSlice'
import featuredCharactersSlice from '../slicers/featuredCharacterSlice'
import featuredComicsSlice from '../slicers/featuredComicsSlice'
import featuredMoviesSlice from '../slicers/featuredMoviesSlice'
import moviesSlice from '../slicers/moviesSlice'

export const store = configureStore({
  reducer: {
    characters: characterReducer,
    featuredCharacters: featuredCharactersSlice,
    featuredMovies: featuredMoviesSlice,
    movies: moviesSlice,
    comics: comicSlice,
    featuredComics: featuredComicsSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
