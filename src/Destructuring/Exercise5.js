const display = () => {
  function drawChart (data, {
    chartType = 0,
    bullColor = 'green',
    bearColor = 'red',
    days = 30
  }) {
    console.log(chartType, bullColor, bearColor, days)
  };
  drawChart([], {})
  drawChart([], { chartType: 1, days: 60 })
}
export default display
