/** @jest-environment jsdom */
import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import createStore from '../../store/createStore';
import App from '../../App';
import Login from '.';


describe('render login component', () => {
  it('renders  without crashing', () => {
      const store = createStore()
    render(<Provider store={store} ><App><Login/></App></Provider>)
  })
})