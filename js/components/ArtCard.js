class ArtCard {
    constructor(artwork) {
        this.artwork = artwork;
        this.element = null;
        this.render();
    }

    render() {
        // Get favorites from localStorage
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const isFavorite = favorites.includes(this.artwork.id);
        
        // Create card element
        const card = document.createElement('div');
        card.className = 'art-card';
        card.innerHTML = `
            <div class="art-image">
                <img src="${this.artwork.image}" alt="${this.artwork.title}">
                <div class="art-favorite ${isFavorite ? 'active' : ''}" data-id="${this.artwork.id}">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                </div>
            </div>
            <div class="art-details">
                <h3 class="art-title">${this.artwork.title}</h3>
                <p class="art-artist">by ${this.artwork.artist}</p>
                <p class="art-description">${this.artwork.description}</p>
                <div class="art-footer">
                    <span class="art-price">$${this.artwork.price}</span>
                    <button class="add-to-cart" data-id="${this.artwork.id}">Add to Cart</button>
                </div>
            </div>
        `;
        
        // Add event listeners
        const favoriteBtn = card.querySelector('.art-favorite');
        favoriteBtn.addEventListener('click', () => this.toggleFavorite(favoriteBtn));
        
        const addToCartBtn = card.querySelector('.add-to-cart');
        addToCartBtn.addEventListener('click', () => this.addToCart());
        
        this.element = card;
        return card;
    }
    
    toggleFavorite(element) {
        element.classList.toggle('active');
        
        // Get current favorites from localStorage
        let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        
        if (element.classList.contains('active')) {
            // Add to favorites if not already there
            if (!favorites.includes(this.artwork.id)) {
                favorites.push(this.artwork.id);
            }
        } else {
            // Remove from favorites
            favorites = favorites.filter(id => id !== this.artwork.id);
        }
        
        // Save updated favorites to localStorage
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    
    addToCart() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Check if product already exists in cart
        const existingProductIndex = cart.findIndex(item => item.id === this.artwork.id);
        
        if (existingProductIndex > -1) {
            // Product exists, increase quantity
            cart[existingProductIndex].quantity += 1;
        } else {
            // Product doesn't exist, add new item
            cart.push({
                id: this.artwork.id,
                name: this.artwork.title,
                price: this.artwork.price,
                image: this.artwork.image,
                quantity: 1
            });
        }
        
        // Save updated cart to localStorage
        localStorage.setItem('cart', JSON.stringify(cart));
        
        // Update cart count in the UI
        const cartCountElement = document.querySelector('.cart-count');
        if (cartCountElement) {
            cartCountElement.textContent = cart.reduce((total, item) => total + item.quantity, 0);
        }
        
        // Show confirmation message
        this.showNotification(`${this.artwork.title} added to cart!`);
    }
    
    showNotification(message) {
        // Create notification element
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
            }, 300); // Wait for fade out animation
        }, 3000);
    }
}

// Export the component
export default ArtCard;