const display = () => {
  let fibonacci = n =>
    n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2)
  const originalFibonacci = fibonacci
  let fibCount = 0; let fib2Count = 0
  const memoMap = new Map()
  fibonacci = new Proxy(fibonacci, {
    apply: function (target, thisValue, args) {
      fibCount += 1
      if (args[0] === 2) {
        fib2Count += 1
      }
      if (memoMap.has(args[0])) {
        return memoMap.get(args[0])
      } else {
        const result = originalFibonacci(...args)
        memoMap.set(args[0], result)
        return result
      }
    }
  }
  )
  console.log('Result:', fibonacci(12))
  console.log('fibCount', fibCount)
  console.log('fib2Count', fib2Count)
  fibonacci = originalFibonacci
}
export default display
