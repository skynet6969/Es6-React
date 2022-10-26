const display = () => {
  const arr = ['cat', 'dog;, fish, cat']
  const removeDuplicatesFromArray = () => {
    console.log([...new Set(arr)])
  }
  removeDuplicatesFromArray()
}
export default display
