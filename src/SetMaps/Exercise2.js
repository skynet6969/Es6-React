const display = () => {
  {
    const x = {
      a: [1, 2]
    }
    // eslint-disable-next-line no-var
    var weakMap = new WeakMap()
    weakMap.set(x, 'Weak')
  }
  console.log(weakMap)
}

export default display
