/** @jest-environment jsdom */
import React from 'react'
import { render } from '@testing-library/react'
import App from './App'
import { Provider } from 'react-redux'
import createStore from './store/createStore'

describe('render App component', () => {
  it('renders  without crashing', () => {
      const store = createStore()
    render(<Provider store={store} ><App /></Provider>)
  })
})