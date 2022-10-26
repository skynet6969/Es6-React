const display = () => {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err))
}
export default display
