let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
  const cartCount = document.getElementById('cart-count');

  cartItems.innerHTML = '';
  let total = 0;
  let count = 0;

  cart.forEach((item, index) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;
    count += item.quantity;

    const itemElement = document.createElement('div');
    itemElement.innerHTML = `
      <span>${item.name} (${item.quantity})</span>
      <span>$${itemTotal.toFixed(2)}</span>
      <button onclick="removeFromCart(${index})">Remove</button>
    `;
    cartItems.appendChild(itemElement);
  });

  cartTotal.textContent = total.toFixed(2);
  cartCount.textContent = count;

  localStorage.setItem('cart', JSON.stringify(cart));
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCart();
}

function clearCart() {
  cart = [];
  updateCart();
}

function toggleCart() {
  const cartElement = document.getElementById('cart');
  cartElement.classList.toggle('active');
}

// Initialize cart on page load
updateCart();