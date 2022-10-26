document.body.innerHTML = `
<input type="text" class="js-textfield" />
<button class="js-button">
Enable the Textfield
</button>` +
document.body.innerHTML
const enableFields = function () {
  document.querySelector('.js-textfield')
    .removeAttribute('disabled')
  document.querySelector('.js-button')
    .removeAttribute('disabled')
}
const disableFields = function () {
  document.querySelector('.js-textfield')
    .setAttribute('disabled', true)
  document.querySelector('.js-button')
    .setAttribute('disabled', true)
}
const parse = function (response) {
  const element = document.querySelector('.js-names')
  element.innerHTML =
  JSON.parse(response)
    .map(element => element.name)
    .join(',')
  enableFields()
}
const errorHandler = function () {
  console.log('error')
  enableFields()
}
new Promise(function (resolve, reject) {
  disableFields()
  const request = new XMLHttpRequest()
  request.onreadystatechange = function () {
    if (this.status === 200 && this.readyState === 4) {
      resolve(this.response)
    }
  }
  request.onerror = function () {
    reject(new Error(this.statusText))
  }
  request.open(
    'GET',
    'http://erroneousurl.com/users'
  )
  request.send()
}).then(parse)
  .catch(errorHandler)
