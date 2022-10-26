const display = () => {
  class Stack extends Array {
    peek () {
      return this[this.length - 1]
    }

    isEmpty () {
      return this.length === 0
    }

    size () {
      return this.length
    }
  }
  const stack = new Stack()
  console.log(stack.push(1))
  console.log(stack.push(2))
  console.log(stack.pop())
  console.log(stack.isEmpty())

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const stack1 = new Stack()
  return stack1
}
export default display
