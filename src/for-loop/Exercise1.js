const display = () => {
  let text = ''
  const nodes = document.querySelectorAll('h1, h2, h3, h4, h5, h6')
  for (const node of nodes) {
    text += node.childNodes[0].textContent[0]
  };
  console.log(text)
}
export default display
