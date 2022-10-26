const display = () => {
  const upper = (textArray, ...substitutions) => {
    let template = ''
    for (let i = 0; i < substitutions.length; ++i) {
      const sub = substitutions[i]
      template += textArray[i]
      template += typeof sub === 'string'
        ? sub.toUpperCase()
        : sub
    }
    template += textArray[textArray.length - 1]
    return template
  }
  const a = 1; const b = 'ab'; const c = 'DeF'
  console.log(upper`x ${a} x ${b} x ${c} x`)
}
export default display
