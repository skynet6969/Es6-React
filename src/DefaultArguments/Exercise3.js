const display = () => {
  function argList (productName, price = 100) {
    console.log(arguments.length)
    console.log(productName === arguments[0])
    console.log(price === arguments[1])
  };
  argList('Krill Oil Capsules')
}
export default display
