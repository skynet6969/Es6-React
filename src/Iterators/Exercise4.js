const display = () => {
  const errorDemo = function * () {
    yield 1
    // eslint-disable-next-line no-throw-literal
    throw 'Yield 2 is commented, it is unreachable'
    // yield 2; // unreachable code
  }
  const it = errorDemo()
  // Execute one statement at a time to avoid
  // skipping lines after the first thrown error.
  console.log(it.next())
  console.log(it.next())
  console.log([...errorDemo()])
  for (const element of errorDemo()) {
    console.log(element)
  }
}
export default display
