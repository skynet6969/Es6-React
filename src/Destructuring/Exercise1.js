const display = () => {
  let text1 = 'swap'; let text2 = 'me';
  [text1, text2] = [text2, text1]
  console.log('Before')
  console.log(text2, text1 + '\n') // swap me
  console.log('After')
  console.log(text1, text2) // me swap
}
export default display
