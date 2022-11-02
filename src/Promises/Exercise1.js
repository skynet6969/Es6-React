// const display = () => {
//   fetch('https://jsonplaceholder.typicode.com/users')
//     .then((res) => res.json())
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))
// }
// export default display
const display = () => {
  const parse = function (response) {
    const element = document.querySelector('.js-names')
    element.innerHTML = JSON.parse(response).map(element => element.name).join(',')
    console.log(response)
  }
  const errorHandler = function () {
    console.log('fuck')
  }
  const myPromise = new Promise((resolve, reject) => {
    const request = new XMLHttpRequest()
    request.onreadystatechange = function () {
      if (this.status === 200 && this.readyState === 4) {
        resolve(this.response)
      }
    }
    request.onerror = function () {
      reject(new Error(this.statusText))
    }
    request.open('GET', 'http://jsonplaceholder.typicode.com/users').request.send()
    request.send()
  }
  ).then(parse).catch(errorHandler)
  return myPromise
}
display()
