import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { browserHistory } from 'react-router'
import makeRootReducer from './reducers'
import { routerMiddleware, routerReducer } from 'react-router-redux'

  const store = (initialState = {}) => {
    // ======================================================
    // Middleware Configuration
    // ======================================================
    const middleware = [thunk, routerMiddleware(browserHistory)]
  
    // ======================================================
    // Store Instantiation and HMR Setup
    // ======================================================
    const store = createStore(
      makeRootReducer(routerReducer),
      initialState,
      compose(
        applyMiddleware(...middleware)
      )
    )
    store.asyncReducers = {}
  
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        const reducers = require('./reducers').default
        store.replaceReducer(reducers(store.asyncReducers))
      })
    }
  
    return store
  }


 export default store
