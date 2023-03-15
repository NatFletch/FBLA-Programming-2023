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


db_client.query("SELECT * FROM user_profiles WHERE Username = $1", [user], (err, res) => {
  if (!err) {
    const userPoints = res.rows[0].points;
    const totalCost = cartItems.reduce((total, item) => total + item.price, 0);

    if (userPoints < totalCost) {
      window.alert("Insufficient points for checkout!");
    } else {
      const remainingPoints = userPoints - totalCost;
      db_client.query("UPDATE user_profiles SET points = $1 WHERE Username = $2", [remainingPoints, user], (err, res) => {
        if (err) {
          throw err;
        }

        clearCart();
        window.alert("Checkout successful!");
      });
    }
  } else {
    throw err;
  }
});