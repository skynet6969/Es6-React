const display = () => {
  const message = 'ok'
  const messageIterator = message[Symbol.iterator]()
  messageIterator.next()
  for (const item of messageIterator) {
    console.log(item)
  }
}
export default display
