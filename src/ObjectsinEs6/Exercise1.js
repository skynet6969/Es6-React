const display = () => {
  const baskets = [
    {
      firstName: 'Andrew',
      email: 'andrew@aol.com'
    },
    {
      email: 'question@mark.com'
    },
    {
      firstName: 'David',
      email: 'david@spammail.com',
      basketValue: 55
    }
  ]
  const basket = baskets.map(item => Object.assign(
    { firstName: '-', basketValue: 0 },
    item
  ))
  console.log(basket)
}

export default display
