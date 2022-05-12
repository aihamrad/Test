import { combineReducers } from 'redux'
import userReducer from './user'

export const rootReducer = (asyncReducers) => {
  return combineReducers({
    user: userReducer
  })
}

export default rootReducer
