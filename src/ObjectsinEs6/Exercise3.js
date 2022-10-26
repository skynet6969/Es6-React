const display = () => {
  const basketProto = {
    value: 0,
    addToBasket (itemValue) {
      this.value += itemValue
    },
    clearBasket () {
      this.value = 0
    },
    getBasketValue () {
      return this.value
    },
    pay () {
      console.log(this.getBasketValue() + ' has been paid')
    }
  }
  const myBasket = {
    items: [],
    addToBasket (itemName, itemPrice) {
      this.items.push({ itemName, itemPrice })
      super.addToBasket(itemPrice)
    },
    clearBasket () {
      this.items = []
      super.clearBasket()
    }
  }
  Object.setPrototypeOf(myBasket, basketProto)

  myBasket.addToBasket('Cream', 5)
  myBasket.addToBasket('Cake', 8)
  myBasket.getBasketValue()
  console.log(myBasket.items)

  myBasket.clearBasket()
  myBasket.getBasketValue()
  console.log(myBasket.items)
}
export default display
