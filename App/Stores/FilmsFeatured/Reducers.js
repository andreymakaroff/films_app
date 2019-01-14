import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { FilmFeaturedTypes } from './Actions'

export const addFilmFeatured = (state, { id }) => {
  const filmsFeatured = state.get('filmsFeatured').toJS()
  filmsFeatured[id] = id
  console.log('dsffsdf', filmsFeatured)
  return state.merge({
    filmsFeatured,
  })
}

export const removeFilmFeatured = (state, { id }) => {
  const filmsFeatured = state.get('filmsFeatured').toJS()
  delete filmsFeatured[id]
  return state.merge({
    filmsFeatured,
  })
}

export const makeSortFilmBy = (state, { key }) =>
  state.merge({
    sortFilmBy: key,
  })

export const reducer = createReducer(INITIAL_STATE, {
  [FilmFeaturedTypes.ADD_FILM_FEATURED]: addFilmFeatured,
  [FilmFeaturedTypes.REMOVE_FILM_FEATURED]: removeFilmFeatured,
  [FilmFeaturedTypes.MAKE_SORT_FILM_BY]: makeSortFilmBy,
})
