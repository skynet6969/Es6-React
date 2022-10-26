const display = () => {
  function fib (n) {
    let acc1 = 1
    let acc2 = 0
    let sum
    n = 10
    for (let i = 2; i < n; i++) {
      sum = acc1 + acc2
      console.log('' + sum)
      acc1 = acc2
      acc2 = sum
    }
  }
  fib()
}
export default display
