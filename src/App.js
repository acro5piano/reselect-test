import React from 'react'
import { createSelector } from 'reselect'
import { Provider } from 'react-redux'
import store from './redux'
import TodoPage from './pages/TodoPage'

const App = () => (
  <Provider store={store}>
    <TodoPage />
  </Provider>
)
export default App
