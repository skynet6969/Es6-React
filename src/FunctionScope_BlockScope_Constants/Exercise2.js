function display () {
  const guessMe1 = 1
  const guessMe2 = 2

  {
    const guessMe2 = 3
    console.log(guessMe1, guessMe2) // (A) 1 3
    console.log(guessMe1, guessMe2) // (B) 1 3
  }
  console.log(guessMe1, guessMe2); // (C) 1 2
  (() => {
    const guessMe1 = 5
    const guessMe2 = 6
    console.log(guessMe1) // (D) 5
    console.log(guessMe1, guessMe2) // (E) 5 6
  })()
  console.log(guessMe1, guessMe2) // (F) 1 2
}
export default display
