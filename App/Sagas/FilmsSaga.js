import { put, call } from 'redux-saga/effects'
import FilmsActions from 'App/Stores/Films/Actions'
import { FilmsIMDB_Service } from 'App/Services/FilmsIMDB_Service'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch the weather filmList.
 * Feel free to remove it.
 */
const modifyfilmList = (list) => {
  // SAVE in store only what need
  return list.map(
    ({ title, year, urlPoster, countries, rating, genres, directors, idIMDB, urlIMDB }) => {
      return {
        title,
        year,
        urlPoster,
        countries,
        rating,
        directors,
        genres,
        idIMDB,
        urlIMDB,
      }
    }
  )
}

export function* fetchFilms() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(FilmsActions.fetchFilmsLoading())

  // Fetch the filmList from an API
  const filmList = yield call(FilmsIMDB_Service.fetchFilms)
  if (filmList) {
    yield put(FilmsActions.fetchFilmsSuccess(modifyfilmList(filmList)))
  } else {
    yield put(FilmsActions.fetchFilmsFailure('There was an error while fetching the filmList.'))
  }
}
