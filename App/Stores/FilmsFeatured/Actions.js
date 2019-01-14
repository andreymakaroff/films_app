import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  getFilmsFeatured: null,
  addFilmFeatured: ['id'],
  removeFilmFeatured: ['id'],
})

export const FilmFeaturedTypes = Types
export default Creators
