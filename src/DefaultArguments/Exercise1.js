const display = () => {
  function executeCallback (callback, delay = 1000) {
    setTimeout(callback, delay)
  }
  executeCallback(() => console.log('done'), 2000)
}
export default display
