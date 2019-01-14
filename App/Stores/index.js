import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as FilmsReducer } from './Films/Reducers'
import { reducer as FilmsFeatured } from './FilmsFeatured/Reducers'

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    films: FilmsReducer,
    filmsFeatured: FilmsFeatured,
  })

  return configureStore(rootReducer, rootSaga)
}
