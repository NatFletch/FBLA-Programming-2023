/**
 * admin.js contains the code for the admin page. It is used to display the user inventory. Check the comments on the file itself for more details.
*/
require('jquery')(document).ready(function($){
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
      console.log('dsass')
      console.log(row)
      const tr = document.createElement('tr')
  
      // Add a cell for the username
      const usernameCell = document.createElement('td')
      usernameCell.innerHTML = row.username
      tr.appendChild(usernameCell)
  
      // Add a cell for the items
      const itemsCell = document.createElement('td')
      itemsCell.innerHTML = row.items
      tr.appendChild(itemsCell)
  
      // Add the row to the table body
      tableBody.appendChild(tr)
    })
  })
})