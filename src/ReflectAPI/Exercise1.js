const display = () => {
  const target = class Account {
    constructor (Title, movieLength) {
      this.Title = Title
      this.movieLength = movieLength
    }
  }
  const args = [
    'Bolt',
    '2 Hours'
  ]
  const myAccount = Reflect.construct(target, args)
  console.log(myAccount)
}
export default display
