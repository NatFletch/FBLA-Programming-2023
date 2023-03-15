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
  console.log(cartItemsList)
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



function checkout() {
  const db_client = require("../modules/db_client");
  const cache = require("../modules/cache");
  const dialogue = require('../modules/dialogue')

  var user;
  
  if(cache.getItem("logged_in") == null || cache.getItem("logged_in") == "none"){
    window.location.replace("./login.html")
  } else {
    user = cache.getItem("logged_in");
  }
    
  db_client.query("SELECT * FROM user_profiles WHERE Username = $1", [user], (err, res) => {
    if (!err) {
      const userPoints = res.rows[0].points;
      var totalCost = 0

      var prettyItems = []

      cartItems.forEach(item => {
        totalCost += getItemPoints(item)
        prettyItems.push(getItemName(item))
      })

      if (userPoints < totalCost) {
        window.alert("Insufficient points for checkout!");
      } else {
        const remainingPoints = userPoints - totalCost;
        console.log(remainingPoints)
        db_client.query("UPDATE user_profiles SET points = $1 WHERE Username = $2", [remainingPoints, user], (err, res) => {
          if (err) {
            throw err;
          }

          //add prizes to user's inventory
          // im not sure if this works
          db_client.query("INSERT INTO user_inventory (Username, Items) VALUES ($1, $2)", [user, prettyItems], (err, res) => {
            if (err) {
              throw err;
            }

            //clears cart
            clearCart();
            
          });


          dialogue.alert("Checkout successful!", 'success');
        });
      }
    } else {
      throw err;
    }
  });
}

// test this !
require("jquery")(document).ready(function($){
  const db_client = require("../modules/db_client");
  const cache = require("../modules/cache");
  const pointsDisplay = $("#points");

  var user;

  if(cache.getItem("logged_in") == null || cache.getItem("logged_in") == "none"){
    window.location.replace("./login.html")
  } else {
    user = cache.getItem("logged_in");
  }

  db_client.query("SELECT * FROM user_profiles WHERE Username = $1", [user], function(err, res) {
    if(!err){
      pointsDisplay.html("Points: " + res.rows[0].points);
    } else {
      throw err;
    }
  });
});
