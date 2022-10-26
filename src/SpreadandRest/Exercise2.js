function display () {
  const f = () => [...'12345']
  const A = f().map(f)
  console.table(A)
}
export default display
