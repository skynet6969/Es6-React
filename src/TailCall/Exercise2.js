const display = () => {
  function fib (n) {
    let acc1 = 5
    let acc2 = 0
    let sum = 1
    if (n <= 1) return n
    for (let i = 1; i <= n; ++i) {
      [acc1, acc2] = [acc1 + acc2, acc1]
    }
    console.log([acc1, acc2])
    sum = acc1 + acc2
    console.log(sum)
  }
  fib(4)
}
export default display
