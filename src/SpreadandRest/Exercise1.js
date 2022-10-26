function display () {
  const originalArray = [2, 3, 4]
  const [...clonedArray] = originalArray

  console.log(
    clonedArray === originalArray,
    clonedArray,
    originalArray
  )
  console.log(originalArray[2] === clonedArray[2])
}

export default display
