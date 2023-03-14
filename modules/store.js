let cartItems = [];
let cartTotal = 0;

function addToCart(itemId) {
  cartItems.push(itemId);
  cartTotal += getItemPoints(itemId);
  displayCart();
}

// points for each item
function getItemPoints(itemId) {
  switch(itemId) {
    case 1:
      return 10;
    case 2:
      return 5;
    case 3:
      return 2;
    default:
      return 0;
  }
}

function displayCart() {
  let cartItemsElem = document.querySelector('.cart-items');
  let cartTotalElem = document.querySelector('.cart-total');
  let cartItemsList = '';

  cartItems.forEach((itemId) => {
    let itemName = getItemName(itemId);
    cartItemsList += `<li>${itemName}</li>`;
  });

  cartItemsElem.innerHTML = cartItemsList;
  cartTotalElem.textContent = cartTotal;
}

// there is definitely a better way to do this... oh well
function getItemName(itemId) {
  switch(itemId) {
    case 1:
      return 'Smithville High School T-Shirt';
    case 2:
      return 'Snack Voucher';
    case 3:
      return 'Smithville Branded Pen';
    default:
      return '';
  }
}


function clearCart() {
  cartItems = [];
  cartTotal = 0;
  displayCart();
}

require('jquery')(document).ready(($) =>{
  //modules
  const db_client = require("../modules/db_client")
  const cache = require("../modules/cache")
  //elements
  const username = $("#username")
  const points = $("#points")

  db_client.query("SELECT * FROM user_profiles WHERE Username = $1", [user], (err, res) => {
    if(!err){
        var isTeacher = res.rows[0].isteacher
        if(isTeacher == 0){
            user_role = "Student"
        } else if(isTeacher == 1){
            user_role = "Teacher"
        } else if(isTeacher == 2) {
            user_role = "Admin"
        }

        // if(res.rows[0].items === undefined){
        //     items.html("No Items")
        // } else {
        //     items.html("Items: " + res.rows[0].items)
        // }
        username.html(user)
        points.html("Points: " + res.rows[0].points)
        
    } else {
        throw err
    }
})
})