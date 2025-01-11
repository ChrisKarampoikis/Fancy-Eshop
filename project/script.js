// Initialize cart
let cart = [];

// DOM elements
const cartBtn = document.getElementById('cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeCartBtn = document.getElementById('close-cart-btn');
const checkoutBtn = document.getElementById('checkout-btn');
const cartItemsList = document.getElementById('cart-items');
const totalPriceEl = document.getElementById('total-price');
const loadingSpinner = document.getElementById('loading-spinner');

// Add item to cart
const addToCartBtns = document.querySelectorAll('.add-to-cart');
addToCartBtns.forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));

    cart.push({ name, price });
    updateCartDisplay();
  });
});

// Open the cart modal
cartBtn.addEventListener('click', () => {
  cartModal.style.display = 'flex';
});

// Close the cart modal
closeCartBtn.addEventListener('click', () => {
  cartModal.style.display = 'none';
});

// Checkout button (simulated)
checkoutBtn.addEventListener('click', () => {
  alert('Proceeding to checkout!');
});

// Update cart UI
function updateCartDisplay() {
  // Update cart count
  cartBtn.innerText = `🛒 Cart (${cart.length})`;

  // Clear previous cart items
  cartItemsList.innerHTML = '';
  let totalPrice = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerText = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsList.appendChild(li);
    totalPrice += item.price;
  });

  totalPriceEl.innerText = totalPrice.toFixed(2);
}
