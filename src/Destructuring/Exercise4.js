const display = () => {
  const x = { A: ['t', 'e', 's', 't'] }
  const { A: [, , A_2] } = x
  console.log(A_2)
}
export default display
