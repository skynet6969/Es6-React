
const display = () => {
  const AbstractUser = function () {
    if (new.target === AbstractUser) {
      throw new Error('Abstract class')
    }
    this.accessMatrix = {}
  }
  AbstractUser.prototype.hasAccess = function (page) {
    return this.accessMatrix[page]
  }
  const SuperUser = function () {
    AbstractUser.call(this)
  }
  SuperUser.prototype = Object.create(AbstractUser.prototype)
  SuperUser.prototype.constructor = SuperUser
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  SuperUser.prototype.hasAccess = function (page) {
    return true
  }
  // let su = new SuperUser();
  // let au = new AbstractUser();
  console.log(' Abstract class cannot be instantiated')
}
export default display
