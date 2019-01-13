/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { ExampleTypes } from './Actions'

export const fetchUsersLoading = (state) =>
  state.merge({
    userListIsLoading: true,
    userListErrorMessage: '',
  })

export const fetchUsersSuccess = (state, { userList }) =>
  state.merge({
    userList: userList,
    userListIsLoading: false,
    userListErrorMessage: null,
  })

export const fetchUsersFailure = (state, { errorMessage }) =>
  state.merge({
    userList: null,
    userListIsLoading: false,
    userListErrorMessage: errorMessage,
  })

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [ExampleTypes.FETCH_USERS_LOADING]: fetchUsersLoading,
  [ExampleTypes.FETCH_USERS_SUCCESS]: fetchUsersSuccess,
  [ExampleTypes.FETCH_USERS_FAILURE]: fetchUsersFailure,
})
