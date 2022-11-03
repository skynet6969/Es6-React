const display = () => {
  const todoList = {
    todoItems: [],
    * [Symbol.iterator] () {
      yield * this.todoItems
    },
    addItem (description) {
      this.todoItems.push({ description, done: false })
      return this
    },
    crossOutItem (index) {
      if (index < this.todoItems.length) {
        this.todoItems[index].done = true
      }
      return this
    }
  }
  todoList.addItem('task 1').addItem('task 2').crossOutItem(0)

  const todoListGenerator = function * () {
    yield * todoList.todoItems
  }
  const iterableTodoList = todoListGenerator()
  for (const item of iterableTodoList) {
    console.log(item)
  }
}
export default display
