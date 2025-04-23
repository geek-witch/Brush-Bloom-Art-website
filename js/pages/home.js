document.addEventListener('DOMContentLoaded', function () {
    // Sample data for featured artwork
    const featuredArtwork = [
        {
            id: 1,
            title: "Serene Landscape",
            artist: "Emma Chen",
            description: "A peaceful landscape painting capturing the beauty of nature.",
            price: 450,
            image: "assets/images/artwork-1.jpg"
        },
        {
            id: 2,
            title: "Abstract Emotions",
            artist: "Marcus Rivera",
            description: "An abstract piece exploring the depth of human emotions.",
            price: 380,
            image: "assets/images/artwork-2.jpg"
        },
        {
            id: 3,
            title: "Urban Dreams",
            artist: "Sophia Kim",
            description: "A vibrant cityscape showcasing urban life and architecture.",
            price: 520,
            image: "assets/images/artwork-3.jpg"
        }
    ];

    // Sample data for featured artists
    const featuredArtists = [
        {
            id: 1,
            name: "Emma Chen",
            specialty: "Oil Painting",
            bio: "Award-winning landscape artist with a passion for capturing natural beauty.",
            image: "assets/images/artist-1.jpg"
        },
        {
            id: 2,
            name: "Marcus Rivera",
            specialty: "Abstract Art",
            bio: "Contemporary artist known for bold colors and emotional depth in abstract works.",
            image: "assets/images/artist-2.jpg"
        },
        {
            id: 3,
            name: "Sophia Kim",
            specialty: "Urban Landscapes",
            bio: "Architectural designer turned artist, specializing in detailed cityscapes.",
            image: "assets/images/artist-3.jpg"
        },
        {
            id: 4,
            name: "Emma Chen",
            specialty: "Oil Painting",
            bio: "Renowned landscape artist known for capturing the serene beauty of natural environments with luminous detail.",
            image: "assets/images/artist-4.jpg"
        }
    ];

    // Render featured artwork
    const featuredArtworkContainer = document.getElementById('featured-artwork-container');
    if (featuredArtworkContainer) {
        featuredArtwork.forEach((artwork) => {
            // Get favorites from localStorage
            const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            const isFavorite = favorites.includes(artwork.id);

            const artCard = document.createElement('div');
            artCard.className = 'art-card';
            artCard.innerHTML = `
                <div class="art-image">
                    <img src="${artwork.image}" alt="${artwork.title}">
                    <div class="art-favorite ${isFavorite ? 'active' : ''}" onclick="toggleFavorite(this, ${artwork.id})">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                        </svg>
                    </div>
                </div>
                <div class="art-details">
                    <h3 class="art-title">${artwork.title}</h3>
                    <p class="art-artist">by ${artwork.artist}</p>
                    <p class="art-description">${artwork.description}</p>
                    <div class="art-footer">
                        <span class="art-price">$${artwork.price}</span>
                        <button class="add-to-cart" onclick="addToCart(${artwork.id}, '${artwork.title}', ${artwork.price}, '../${artwork.image}')">Add to Cart</button>
                </div>
            `;
            featuredArtworkContainer.appendChild(artCard);
        });
    }

    // Render featured artists
    const featuredArtistsContainer = document.getElementById('featured-artists-container');
    if (featuredArtistsContainer) {
        featuredArtists.forEach((artist) => {
            const artistCard = document.createElement('div');
            artistCard.className = 'artist-card';
            artistCard.innerHTML = `
                <div class="artist-image">
                    <img src="${artist.image}" alt="${artist.name}">
                </div>
                <div class="artist-details">
                    <h3 class="artist-name">${artist.name}</h3>
                    <p class="artist-specialty">${artist.specialty}</p>
                    <p class="artist-bio">${artist.bio}</p>
                    <a href="pages/artist.html?id=${artist.id}" class="view-profile">View Profile</a>
                </div>
            `;
            featuredArtistsContainer.appendChild(artistCard);
        });
    }
});