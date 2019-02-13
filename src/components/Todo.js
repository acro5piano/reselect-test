import React, { useState } from 'react'
import { connect } from 'react-redux'
import { ADD_TODO, TOGGLE_TODO } from '../redux'
import { Todo } from '../models'
import { createSelector } from 'reselect'
import styled from 'styled-components'

const Card = styled.div`
  background: #fff;
  padding: 24px;
  border: solid 1px #eee;
`

const incompleteTodosSelector = state => state.todos.filter(todo => !todo.completed)

const incompleteTodosCountSelector = createSelector(
  incompleteTodosSelector,
  todos => todos.length,
)

function mapStateToProps(state) {
  return {
    incompleteTodosCount: incompleteTodosCountSelector(state),
    todos: state.todos,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addTodo: title =>
      dispatch({
        type: ADD_TODO,
        todo: new Todo({ title }),
      }),
    toggleTodo: id =>
      dispatch({
        type: TOGGLE_TODO,
        id,
      }),
  }
}

export const TodoPage = ({ todos, incompleteTodosCount, addTodo, toggleTodo }) => {
  const [value, setValue] = useState('')

  const submit = () => {
    addTodo(value)
    setValue('')
  }

  return (
    <Card>
      <div>{incompleteTodosCount} tasks remains.</div>
      {todos.map(todo => (
        <div key={todo.id} onClick={() => toggleTodo(todo.id)}>
          {todo.id} {todo.title} {todo.completed ? '✔' : ''}
        </div>
      ))}
      <input onChange={e => setValue(e.target.value)} value={value} />
      <button onClick={submit}>addTodo</button>
    </Card>
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodoPage)
