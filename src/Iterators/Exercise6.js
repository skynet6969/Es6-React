const display = () => {
  function * fibonacci () {
    let a = 0; let b = 1
    yield a
    yield b
    while (true) {
      [a, b] = [b, a + b]
      yield b
    }
  }

  function * filter (iterable, filterFunction) {
    for (const element of iterable) {
      if (filterFunction(element)) yield element
    }
  }
  const evenFibonacci = filter(fibonacci(), x => x % 2 === 0)

  console.log(evenFibonacci.next())
  console.log(evenFibonacci.next())
  console.log(evenFibonacci.next())
  console.log(evenFibonacci.next())
  console.log(evenFibonacci.next())
}
export default display
