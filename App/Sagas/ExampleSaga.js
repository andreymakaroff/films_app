import { put, call } from 'redux-saga/effects'
import UsersActions from 'App/Stores/Example/Actions'
import { LoremUserService } from 'App/Services/loremUserService'

/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch the weather userList.
 * Feel free to remove it.
 */
const filterUserList = (list) => {
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

export function* fetchUsers() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(UsersActions.fetchUsersLoading())

  // Fetch the userList from an API
  const userList = yield call(LoremUserService.fetchUsers)
  if (userList) {
    yield put(UsersActions.fetchUsersSuccess(filterUserList(userList)))
  } else {
    yield put(UsersActions.fetchUsersFailure('There was an error while fetching the userList.'))
  }
}
