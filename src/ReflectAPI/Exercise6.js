const display = () => {
  // eslint-disable-next-line no-unused-vars
  const response = (function () {
    const target = {}
    const key = 'status'
    const attributes = {
      value: 200,
      writable: true,
      configurable: true
    }
    Reflect.defineProperty(
      target,
      key,
      attributes
    )
    return target
  }())

  console.log("is response configurable? i don't know")
}
export default display
