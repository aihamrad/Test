import React from 'react'
import { createRoot } from 'react-dom/client';
import createStore from './store/createStore'
import App from './App'
import { Provider } from 'react-redux'

import './modules/styles/core.scss'


const store = createStore()


function AppWithCallbackAfterRender() {


  return <Provider store={store}><App /></Provider>
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<AppWithCallbackAfterRender />);
