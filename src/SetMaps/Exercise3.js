const display = () => {
  const union = (set1, set2) =>
    new Set([...set1, ...set2])

  const intersection = (set1, set2) => new Set([...set1].filter((elem) => set2.has(elem)))

  const difference = (set1, set2) =>
    new Set([...set1].filter((elem) => !set2.has(elem))
    )

  const set1 = new Set([1, 2])
  const set2 = new Set([2, 3])
  console.log(union(set1, set2))
  console.log(intersection(set1, set2))
  console.log(difference(set1, set2))
}
export default display
