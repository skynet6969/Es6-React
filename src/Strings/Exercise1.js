import React from 'react'

const display = () => {
  const departures = [
    {
      id: 'KL 1255',
      destination: 'Amsterdam',
      departureTime: '21:55',
      gate: 'A13'
    },
    {
      id: 'OK 001',
      destination: 'Prague',
      departureTime: '20:40',
      gate: 'A13',
      status: 'Check-in'
    },
    {
      id: '4U 2011',
      destination: 'Stuttgart',
      departureTime: '20:35',
      gate: 'A11',
      status: 'Check-in'
    },
    {
      id: 'LX 911',
      destination: 'Zurich',
      departureTime: '20:15',
      expectedDepartureTime: '21:15',
      status: 'check-in'
    },
    {
      id: 'OS 133',
      destination: 'Vienna',
      departureTime: '19:25',
      gate: 'A06',
      status: 'Departed'
    }
  ]

  const headers = {
    id: 'Id',
    destination: 'Destination',
    departureTime: 'DepartureTime',
    expectedDepartureTime: 'Expected Departure Time',
    gate: 'Gate',
    status: 'Status'
  }
  const tableHeader =
        ` 
        <tr>
        <th>${headers.id}</th>
        <th>${headers.destination}</th>
        <th>${headers.departureTime}</th>
        <th>${headers.expectedDepartureTime}</th>
        <th>${headers.gate}</th>
        <th>${headers.status}</th>
        </tr> `
  const departure = departures[0]

  const tableRow = `
        <tr>
        <td>${departure.id}</td>
        <td>${departure.destination}</td>
        <td>${departure.departureTime}</td>
        <td>${departure.expectedDepartureTime}</td>
        <td>${departure.gate}</td>
        <td>${departure.status}</td>
        </tr>
    `

  const testTable = `<table>${tableHeader}${tableRow}</table>`
  const defaults = {
    destination: '-',
    departureTime: '-',
    gate: '-',
    status: '-',
    expectedDepartureTime: '-'
  }

  const presentedDepartures = departures.map(departure => Object.assign({}, defaults, departure))

  const tableRows = presentedDepartures.map(departure => `
        <tr>
        <td>${departure.id}</td>
        <td>${departure.destination}</td>
        <td>${departure.departureTime}</td>
        <td>${departure.expectedDepartureTime}</td>
        <td>${departure.gate}</td>
        <td>${departure.status}</td>
        </tr>
    `).join('')

  const table = `<table>${tableHeader}${tableRows}</table>`

  const tableRowData = `<table>
        <tr>
            <th>${headers.id}</th>
            <th>${headers.destination}</th>
            <th>${headers.departureTime}</th>
            <th>${headers.expectedDepartureTime}</th>
            <th>${headers.gate}</th>
            <th>${headers.status}</th>
        </tr>
        ${presentedDepartures.map(departure => `
        <tr>
            <td>${departure.id}</td>
            <td>${departure.destination}</td>
            <td>${departure.departureTime}</td>
            <td>${departure.expectedDepartureTime}</td>
            <td>${departure.gate}</td>
            <td>${departure.status}</td>
        </tr>
        `).join('')}
    </table>`
  return (
    <div>
            {tableRowData}
            {testTable}
            {table}
    </div>
  )
}
export default display
