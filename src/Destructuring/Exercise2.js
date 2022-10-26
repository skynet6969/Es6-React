const display = () => {
  const fib = (n = 7) => {
    let fibCurrent = 1
    let fibLast = 0
    if (n < 0) return NaN
    if (n <= 1) return n
    for (let fibIndex = 1; fibIndex < n; fibIndex++) {
      [fibCurrent, fibLast] = [fibCurrent + fibLast, fibCurrent]
    }
    return console.log(fibCurrent)
  }

  fib()
}
export default display
