function display () {
  const maxCommon = ([head1, ...tail1], [head2, ...tail2], len = 0) => {
    if (typeof head1 === 'undefined' || typeof head2 === 'undefined') {
      return len
    }
    if (head1 === head2) return maxCommon(tail1, tail2, len + 1)
    const firstBranch = maxCommon(tail1, [head2, ...tail2], 0)
    const secondBranch = maxCommon([head1, ...tail1], tail2, 0)
    return Math.max(...[len, firstBranch, secondBranch])
  }
  console.log(maxCommon('123', '1'))
  console.log(maxCommon('11111', '11f111g'))
  console.log(maxCommon('abc', '111cab'))
}
export default display
