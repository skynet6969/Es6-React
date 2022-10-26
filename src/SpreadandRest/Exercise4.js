function display () {
  function sumArgs (...numbers) {
    return numbers.reduce((sum, num) => {
      console.log('(sum, num): ', sum, num)
      return sum + num
    }, 0)
  }
  sumArgs(2, 3, 4, 5, 6)
}
export default display
