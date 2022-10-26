const display = () => {
  class Movie {
    constructor (title, movieLength) {
      this.title = title
      this.movieLength = movieLength
    }

    toString () {
      return `${this.title} (${this.movieLength} minutes)`
    }
  }
  console.log(
    Reflect.apply(
      Movie.prototype.toString,
      {
        title: 'Rush',
        movieLength: 123
      },
      []
    )
  )
}
export default display
