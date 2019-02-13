import uuid from 'uuid'

export class Todo {
  id = uuid()
  title = ''
  completed = false

  constructor({ title }) {
    this.title = title
  }

  toggleComplete() {
    this.completed = !this.completed
    return this
  }
}
