import { Map } from 'immutable'

/**
 * The initial values for the redux state.
 */
export const INITIAL_STATE = Map({
  filmList: null,
  filmListErrorMessage: null,
  filmListIsLoading: false,
})
