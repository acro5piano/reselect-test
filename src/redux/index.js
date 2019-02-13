import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Todo } from '../models'

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

const todos = (todos = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...todos, action.todo]
    case TOGGLE_TODO:
      return todos.filter(todo => (todo.id === action.id ? todo.toggleComplete() : todo))
    default:
      return todos
  }
}

const reducers = { todos }

const store = createStore(combineReducers(reducers), applyMiddleware(thunk))

export default store
