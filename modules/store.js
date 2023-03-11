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

