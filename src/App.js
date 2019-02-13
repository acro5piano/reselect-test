import React from 'react'
import { createSelector } from 'reselect'
import { Provider } from 'react-redux'
import store from './redux'
import Todo from './components/Todo'
import BarChart from './components/BarChart'

const App = () => (
  <Provider store={store}>
    <Todo />
    <BarChart />
  </Provider>
)
export default App
