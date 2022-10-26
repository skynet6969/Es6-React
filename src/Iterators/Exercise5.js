const display = () => {
  let n
  const fib = [0, 1]

  for (n = 2; n <= 10; n++) {
    fib[n] = fib[n - 2] + fib[n - 1]
    console.log(fib[n])
  }
}
export default display
