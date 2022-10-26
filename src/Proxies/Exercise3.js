function display () {
  const payload = {
    website: 'zsoltnagy.eu',
    article: 'Proxies in Practice',
    viewCount: 15496
  }
  const objectAccessGuard = new Proxy({}, {
    get: function (target, key) {
      console.error(`Error: payload[${key}] does not exist.`)
    }
  }
  )

  Object.setPrototypeOf(
    payload,
    objectAccessGuard
  )

  console.log(payload.website)
  // console.log(payload.url) <!-- payload[url] does not exist. -->
}
display()