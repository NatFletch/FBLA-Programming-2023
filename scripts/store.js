let cartItems = [];
let cartTotal = 0;

/**
 * addToCart(itemId) takes in an integer field, to which it simply adds to car then calls displayCart(). Points are handled by getItemPoints.
 * 
 *  If you want to add an item to the store, you need to add it to the switch statement in getItemPoints() and getItemName()
 *  and then add a case to the switch statement in addToCart() that calls the function that adds the item to the cart.
 *  Make sure you refrence it in the image in the HTML file as well. Store images in /images.
 * 
 * 
 * @param {integer} itemId 
 * 
 */
function addToCart(itemId) {
  cartItems.push(itemId);
  cartTotal += getItemPoints(itemId);
  displayCart();
}

/**
 * This function refrences the itemId var that then gives the points value of the item. 
 * 
 * @param {integer} itemId 
 * @returns {integer}
 * 
 */

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

/**
 * displayCart() is the function that dynamically updates the cart whenever a user adds an item to their cart. 
 * Items are stored in a list called CartItemsList, which the item's name comes from getItemName()
 */
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

/**
 * 
 * @param {int} itemId 
 * @returns {string} 
 * 
 * getItemName(itemId) returns a string given the item's name, refrenced via itemId.
 */
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

/**
 * clearCart() is the almighty function that returns cartItems to an empty list and cartTotal to 0. 
 */
function clearCart() {
  cartItems = [];
  cartTotal = 0;
  displayCart();
}

/**
 * checkout() is the function that handles the checkout process.
 *  It checks if the user has enough points to purchase the items in their cart, first, and if not it displays so.
 *  Else, it deducts the points from their account and adds the items to their inventory.
 */
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

          db_client.query("UPDATE user_inventory (Username, Item) VALUES ($1, $2)", [user, prettyItems], (err, res) => {
            if (err) {
              throw err;
            }

            //clears cart
            clearCart();
            
          });


          dialogue.alert("Checkout successful! Please talk to the front office to claim your prize.", 'success');
        });
      }
    } else {
      throw err;
    }
  });
}

/* this is the code that runs when the page loads , gives the user their points or returns them to the login page if they are not logged in */
require("jquery")(document).ready(function($){
  const db_client = require("../modules/db_client");
  const cache = require("../modules/cache");
  const pointsDisplay = $("#points");

  var user;

  if(cache.getItem("logged_in") == null || cache.getItem("logged_in") == "none"){
    // window.location.replace("./login.html")
    // maybe do something here later, but for now just leave it blank
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
