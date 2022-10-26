const display = () => {
  const course = {
    name: 'ES6 in Practice',
    _price: 99,
    currency: '€',
    get price () {
      return `${this._price}${this.currency}`
    }
  }

  const revocableDiscount = Proxy.revocable(course, {
    get: function (target, key) {
      if (key === 'price') {
        const newPrice = target._price * 0.1
        return `${newPrice}${target.currency}`
      }
      return target[key]
    }
  }
  )
  const discountedCourse = revocableDiscount.proxy

  const delay = 300000
  setTimeout(() => {
    this.revocableDiscount.revoke()
  }, delay)

  console.log(discountedCourse.price)
  console.log(course.price)
}
display()
