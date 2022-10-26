const display = () => {
  class Character {
    constructor (id, name, x, y) {
      this.id = id
      this.name = name
      this.x = x
      this.y = y
    }

    get position () {
      return { x: this.x, y: this.y }
    }
  }
  class PlayerCharacter extends Character {
  }
  class NonPlayerCharacter extends Character {
  }
  // eslint-disable-next-line no-unused-vars
  function createPlayer (id, name) {
    const x = Math.floor(Math.random() * 10)
    const y = Math.floor(Math.random() * 10)
    return new PlayerCharacter(id, name, x, y)
  }
  // eslint-disable-next-line no-unused-vars
  function createNonPlayer (id, name) {
    const x = Math.floor(Math.random() * 10)
    const y = Math.floor(Math.random() * 10)
    return new NonPlayerCharacter(id, name, x, y)
  }
}
export default display
