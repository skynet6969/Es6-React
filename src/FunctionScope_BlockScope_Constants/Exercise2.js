const display = () => {
  const guessMe1 = 1
  // eslint-disable-next-line prefer-const
  let guessMe2 = 2

  {
    // eslint-disable-next-line prefer-const
    let guessMe2 = 3
    console.log(guessMe1, guessMe2) // (A) 1 3
    console.log(guessMe1, guessMe2) // (B) 1 3
  }
  console.log(guessMe1, guessMe2); // (C) 1 2
  (() => {
    // eslint-disable-next-line no-var
    var guessMe1 = 5
    // eslint-disable-next-line prefer-const
    let guessMe2 = 6
    console.log(guessMe1) // (D) 5
    console.log(guessMe1, guessMe2) // (E) 5 6
  })()
  console.log(guessMe1, guessMe2) // (F) 1 2
}
export default display
