import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  getFilmsFeatured: null,
  addFilmFeatured: ['id'],
  removeFilmFeatured: ['id'],
  makeSortFilmBy: ['key'],
})

export const FilmFeaturedTypes = Types
export default Creators
