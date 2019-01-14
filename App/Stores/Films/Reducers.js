/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { FilmsTypes } from './Actions'

export const fetchFilmsLoading = (state) =>
  state.merge({
    filmListIsLoading: true,
    filmListErrorMessage: '',
  })

export const fetchFilmsSuccess = (state, { filmList }) =>
  state.merge({
    filmList: filmList,
    filmListIsLoading: false,
    filmListErrorMessage: null,
  })

export const fetchFilmsFailure = (state, { errorMessage }) =>
  state.merge({
    filmList: null,
    filmListIsLoading: false,
    filmListErrorMessage: errorMessage,
  })

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [FilmsTypes.FETCH_FILMS_LOADING]: fetchFilmsLoading,
  [FilmsTypes.FETCH_FILMS_SUCCESS]: fetchFilmsSuccess,
  [FilmsTypes.FETCH_FILMS_FAILURE]: fetchFilmsFailure,
})
