var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var cart = getCart();
 cart.push({itemName: item, itemPrice: Math.floor(Math.random() * 100 + 1)})
 return `${item} has been added to your cart.`;
}

function viewCart() {
  var cart = getCart();
  var statement = "In your cart, you have ";
  if(cart.length > 0){
    for (var i = 0; i < cart.length -1; i++){
      if(i )
      statement += `${cart[i].itemName} at $${cart[i].itemPrice}`
    }
  } else {
    return "Your shopping cart is empty.";
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
