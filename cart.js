// Define an array to store items in the cart
let cartItems = [];

// Function to add an item to the cart
function addToCart(itemName, itemPrice) {
  const newItem = {
    name: itemName,
    price: itemPrice,
  };
  cartItems.push(newItem);
  updateCart();
}

// Function to update the cart display
function updateCart() {
  const cartElement = document.querySelector(".cart-count");
  if (cartElement) {
    cartElement.textContent = cartItems.length.toString();
  }
}

// Initialize the cart when the page loads
window.onload = function () {
  // Example: Adding an item to the cart when a "Add to Cart" button is clicked
  const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const itemName = button.getAttribute("data-name");
      const itemPrice = parseFloat(button.getAttribute("data-price"));
      addToCart(itemName, itemPrice);
    });
  });

  // Update the cart display
  updateCart();
};
