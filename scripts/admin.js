const db_client = require('../modules/db_client')

// Get a reference to the table body element
const tableBody = document.querySelector('#inventory-body')

// Select all the items from the user_inventory table
db_client.query('SELECT * FROM user_inventory', (err, res) => {
  if (err) {
    console.error(err)
    return
  }

  // Clear any existing rows from the table
  tableBody.innerHTML = ''

  // Loop over each row in the result set and add a row to the table for each one
  res.rows.forEach(row => {
    const tr = document.createElement('tr')

    // Add a cell for the username
    const usernameCell = document.createElement('td')
    usernameCell.textContent = row.Username
    tr.appendChild(usernameCell)

    // Add a cell for the items
    const itemsCell = document.createElement('td')
    itemsCell.textContent = row.Item
    tr.appendChild(itemsCell)

    // Add the row to the table body
    tableBody.appendChild(tr)
  })
})
