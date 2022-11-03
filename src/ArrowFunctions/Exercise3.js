const display = () => {
  const Entity = function (name, delay) {
    this.name = name
    this.delay = delay
  }
  Entity.prototype.greet = function () {
    setTimeout(() => {
      console.log('Hi, I am ' + this.name)
    }, this.delay)
  }
  const java = new Entity('Java', 5000)
  const cpp = new Entity('C++', 30)
  java.greet()
  cpp.greet()
  return display
}
export default display
