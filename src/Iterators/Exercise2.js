const display = () => {
  const getCountdownIterator = function * () {
    let i = 10
    while (i > 0) { yield --i }
  }
  console.log([...getCountdownIterator()])
}
export default display
