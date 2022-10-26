const display = () => {
  const message = 'okkkkkkkkkkkkkk'
  const messageIterator = message[Symbol.iterator]()
  messageIterator.next()
  for (const item of messageIterator) {
    console.log(item)
  }
}
export default display
