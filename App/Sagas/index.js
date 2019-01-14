import { takeLatest } from 'redux-saga/effects'
import { FilmsTypes } from 'App/Stores/Films/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { fetchFilms } from './FilmsSaga'
import { startup } from './StartupSaga'

export default function* root() {
  yield [
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchFilms()` when a `FETCH_FILMS` action is triggered
    takeLatest(FilmsTypes.FETCH_FILMS, fetchFilms),
  ]
}
