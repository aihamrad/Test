/** @jest-environment jsdom */
import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'

import App from '../../../App';
import PostCard from './PostCard';
import createStore from '../../../store/createStore';


describe('render login component', () => {
  it('renders  without crashing', () => {
      const store = createStore()
    render(<Provider store={store} ><App><PostCard/></App></Provider>)
  })
})