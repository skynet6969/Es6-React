const display = () => {
  const prefix = '1F6'
  const digits4 = '01234567890ABCDEF'
  const digits5 = '01234'
  let emojis = ''
  for (const digit4 of digits4) {
    for (const digit5 of digits5) {
      const hexCode = '0x' + prefix + digit4 + digit5
      emojis += String.fromCodePoint(hexCode)
    }
  }
  console.log(emojis)
}
export default display
