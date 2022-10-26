function display () {
  const nullVector = () => new Array(10).fill(null)
  const nullArray = nullVector().map(nullVector)
  console.log(nullArray)
}
export default display
