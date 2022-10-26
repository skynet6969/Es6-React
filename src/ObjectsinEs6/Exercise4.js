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
  myBasket.removeFromBasket = function (index) {
    if (typeof index !== 'number' ||
    index < 0 ||
    index >= this.items.length) return
    const removedElement = this.items.splice(index, 1)[0]
    Object.getPrototypeOf(this).addToBasket
      .call(this, -removedElement.itemPrice)
  }

  Object.setPrototypeOf(myBasket, basketProto)
  basketProto.pay()

  myBasket.addToBasket('Cream', 5)
  myBasket.addToBasket('Cake', 8)
  myBasket.addToBasket('Cookie', 2)
  myBasket.removeFromBasket(1)
  myBasket.getBasketValue()
  console.log(myBasket.items)
}
export default display
