

// ------------------------------------
// Constants
// ------------------------------------
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'


// ------------------------------------
// Actions
// ------------------------------------

export function requestSuccess (user) {
  return {
    type    : LOGIN_SUCCESS,
    userDetails:user,
    isAuthenticated: true,
  }
}

export function logoutSuccess () {
  return {
    type    : LOGIN_SUCCESS,
    userDetails:{},
    isAuthenticated: false
  }
}

export function login (credentials, source) {
  return (dispatch, getState) => { 
    localStorage.setItem('user', JSON.stringify({...credentials}) )
    dispatch(requestSuccess(credentials))
  }
}

export function logout (credentials, source) {
  return (dispatch, getState) => { 

    localStorage.removeItem('user')
    dispatch(logoutSuccess())
  }
}


// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
    [LOGIN_SUCCESS] : (state, action) => ({ ...state, ...action }),
    [LOGOUT_SUCCESS] : (state, action) => ({ ...state, ...action }),
  }

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
    userDetails: {},
    isAuthenticated: false,
}

export default function userReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
