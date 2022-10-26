const display = () => {
  class C {
    constructor () {
      const privateProperty = 'a'
      Object.assign(this, {
        logPrivateProperty () { console.log(privateProperty) }
      })
    }
  }
  class D extends C {
    constructor () {
      super()
      console.log('Constructor of D')
    }
  }
  const c = new C()
  c.logPrivateProperty() // a
  const d = new D()
  d.logPrivateProperty() // Constructor of D, a
}
export default display
