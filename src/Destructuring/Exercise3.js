const display = () => {
  const node = { left: { left: 3, right: 4 }, right: 5 }
  const { loft, right: val } = node
  console.log('loft = ', loft) // loft = undefined
  console.log('val = ', val) // val = right which is 5
}
export default display
