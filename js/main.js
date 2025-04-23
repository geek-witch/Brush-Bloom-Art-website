// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
        if (
            navLinks &&
            navLinks.classList.contains('active') &&
            !event.target.closest('.main-nav') &&
            !event.target.closest('.mobile-menu-toggle')
        ) {
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });

    // Newsletter Form Submission
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && emailInput.value) {
                alert('Thank you for subscribing to our newsletter!');
                emailInput.value = '';
            }
        });
    }

    // Initialize cart count from localStorage
    updateCartCount();
});

// Update cart count in the header
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);

    cartCountElements.forEach((element) => {
        element.textContent = totalQuantity;
    });
}

// Add item to cart
function addToCart(productId, productName, productPrice, productImage) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex((item) => item.id === productId);

    if (existingProductIndex > -1) {
        cart[existingProductIndex].quantity += 1;
    } else {
        cart.push({
            id: productId,
            name: productName,
            price: productPrice,
            image: productImage, // Ensure this path is correct
            quantity: 1,
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${productName} added to cart!`);
}

// Show notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;

    // Add to DOM
    document.body.appendChild(notification);

    // Add visible class after a small delay (for animation)
    setTimeout(() => {
        notification.classList.add('visible');
    }, 10);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.classList.remove('visible');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300); // Wait for fade-out animation
    }, 3000);
}

// Toggle favorite status
function toggleFavorite(element, productId) {
    element.classList.toggle('active');

    const isFavorite = element.classList.contains('active');
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    if (isFavorite) {
        if (!favorites.includes(productId)) {
            favorites.push(productId);
        }
    } else {
        favorites = favorites.filter((id) => id !== productId);
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
}

// Remove item from cart
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter((item) => item.id !== productId);

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    showNotification('Item removed from cart!');
}

// Update item quantity in cart
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
        updateCartCount();
    }
}