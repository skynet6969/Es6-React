function display () {
  const guessMe1 = 1
  // eslint-disable-next-line prefer-const
  let guessMe2 = 2
  {
    try {
      // eslint-disable-next-line no-use-before-define
      console.log(guessMe1, guessMe2) // (A) guessMe1 = 1 guessMe2 =
    } catch (_) {}
    // eslint-disable-next-line prefer-const
    let guessMe2 = 3
    console.log(guessMe1, guessMe2) // (B) guessMe1 = 1 guessMe2 = 3
  }
  console.log(guessMe1, guessMe2); // (C) guessMe1 = 1 guessMe2 = 3

  // eslint-disable-next-line no-unused-expressions
  () => {
    // eslint-disable-next-line no-use-before-define
    console.log(guessMe1) // (D) guessMe1 = 1 missing parenthesis
    // eslint-disable-next-line no-var
    var guessMe1 = 5
    // eslint-disable-next-line prefer-const
    let guessMe2 = 6
    console.log(guessMe1, guessMe2) // guessMe = 5 guessMe = 6, missing parenthesis
  }
  console.log(guessMe1, guessMe2) // var guessMe1 = 1;    let guessMe2 = 2;
}
export default display
