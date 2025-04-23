document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    const clearCartBtn = document.getElementById('clear-cart-btn');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Load cart from localStorage
    function loadCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        renderCartItems(cart);
        updateCartTotal(cart);
        updateCartCount(cart);
    }

    // Render cart items
    function renderCartItems(cart) {
        cartItemsContainer.innerHTML = '';

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }

        cart.forEach((item) => {
            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>Price: $${item.price}</p>
                    <p>Quantity: <span class="item-quantity">${item.quantity}</span></p>
                </div>
                <div class="cart-item-actions">
                    <button class="btn-increase" data-id="${item.id}">+</button>
                    <button class="btn-decrease" data-id="${item.id}">-</button>
                    <button class="btn-remove" data-id="${item.id}">Remove</button>
                </div>
            `;
            cartItemsContainer.appendChild(cartItem);
        });

        // Add event listeners for buttons
        addCartActionListeners();
    }

    // Add event listeners for cart actions
    function addCartActionListeners() {
        const increaseButtons = document.querySelectorAll('.btn-increase');
        const decreaseButtons = document.querySelectorAll('.btn-decrease');
        const removeButtons = document.querySelectorAll('.btn-remove');

        increaseButtons.forEach((button) => {
            button.addEventListener('click', function () {
                const productId = parseInt(this.dataset.id);
                updateCartItemQuantity(productId, 1);
            });
        });

        decreaseButtons.forEach((button) => {
            button.addEventListener('click', function () {
                const productId = parseInt(this.dataset.id);
                updateCartItemQuantity(productId, -1);
            });
        });

        removeButtons.forEach((button) => {
            button.addEventListener('click', function () {
                const productId = parseInt(this.dataset.id);
                removeCartItem(productId);
            });
        });
    }

    // Update cart item quantity
    function updateCartItemQuantity(productId, change) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const itemIndex = cart.findIndex((item) => item.id === productId);

        if (itemIndex > -1) {
            cart[itemIndex].quantity += change;

            // Remove item if quantity is 0 or less
            if (cart[itemIndex].quantity <= 0) {
                cart.splice(itemIndex, 1);
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            loadCart();
        }
    }

    // Remove cart item
    function removeCartItem(productId) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter((item) => item.id !== productId);

        localStorage.setItem('cart', JSON.stringify(cart));
        loadCart();
    }

    // Update cart total
    function updateCartTotal(cart) {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        cartTotalElement.textContent = total.toFixed(2);
    }

    // Update cart count in the header
    function updateCartCount(cart) {
        const cartCountElements = document.querySelectorAll('.cart-count');
        const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

        cartCountElements.forEach((element) => {
            element.textContent = totalQuantity;
        });
    }

    // Clear cart
    clearCartBtn.addEventListener('click', function () {
        localStorage.removeItem('cart');
        loadCart();
    });

    // Checkout button
  // Checkout button
   checkoutBtn.addEventListener('click', function () {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        alert('Your cart is empty. Please add items to proceed to checkout.');
    } else {
        window.location.href = 'checkout.html'; // Redirect to the checkout page
    }
     });

    // Initialize cart
    loadCart();
});