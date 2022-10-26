const display = () => {
  function executeCallback (callback, delay = 1000) {
    setTimeout(callback, delay)
  }

  executeCallback(() => console.log('done'))
}

export default display
