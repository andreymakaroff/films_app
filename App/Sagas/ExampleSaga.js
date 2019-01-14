import { put, call } from 'redux-saga/effects'
import UsersActions from 'App/Stores/Example/Actions'
import { LoremUserService } from 'App/Services/loremUserService'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch the weather filmList.
 * Feel free to remove it.
 */
const filterfilmList = (list) => {
  return list.map(({ title, year, releaseDate, urlPoster, countries, rating, idIMDB, urlIMDB }) => {
    return {
      title,
      year,
      releaseDate,
      urlPoster,
      countries,
      rating,
      idIMDB,
      urlIMDB,
    }
  })
}

export function* fetchFilms() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(UsersActions.fetchFilmsLoading())

  // Fetch the filmList from an API
  const filmList = yield call(LoremUserService.fetchFilms)
  if (filmList) {
    yield put(UsersActions.fetchFilmsSuccess(filterfilmList(filmList)))
  } else {
    yield put(UsersActions.fetchFilmsFailure('There was an error while fetching the filmList.'))
  }
}
