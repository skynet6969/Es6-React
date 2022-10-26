const display = () => {
  let lineNumber = 0
  const getLineNumber = function () {
    lineNumber += 1
    return lineNumber
  }
  function printComment (comment = 'Hello', line = getLineNumber()) {
    console.log(line, comment)
    return printComment()
  }
  console.log(printComment())
}
export default display
