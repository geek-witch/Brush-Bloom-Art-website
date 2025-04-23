document.addEventListener('DOMContentLoaded', function() {
    // Sample data for artwork
    const allArtwork = [
        {
            id: 1,
            title: "Serene Landscape",
            artist: "Emma Chen",
            description: "A peaceful landscape painting capturing the beauty of nature.",
            price: 450,
            image: "../assets/images/artwork-1.jpg",
            category: "painting",
            date: "2023-05-15"
        },
        {
            id: 2,
            title: "Abstract Emotions",
            artist: "Marcus Rivera",
            description: "An abstract piece exploring the depth of human emotions.",
            price: 380,
            image: "../assets/images/artwork-2.jpg",
            category: "painting",
            date: "2023-04-20"
        },
        {
            id: 3,
            title: "Urban Dreams",
            artist: "Sophia Kim",
            description: "A vibrant cityscape showcasing urban life and architecture.",
            price: 520,
            image: "../assets/images/artwork-3.jpg",
            category: "painting",
            date: "2023-06-10"
        },
        {
            id: 4,
            title: "Ocean Whispers",
            artist: "James Wilson",
            description: "A mesmerizing seascape with waves crashing against the shore.",
            price: 490,
            image: "../assets/images/artwork-4.jpg",
            category: "painting",
            date: "2023-03-25"
        },
        {
            id: 5,
            title: "Digital Dystopia",
            artist: "Alex Morgan",
            description: "A futuristic digital artwork exploring themes of technology and society.",
            price: 320,
            image: "../assets/images/artwork-5.jpg",
            category: "digital",
            date: "2023-05-30"
        },
        {
            id: 6,
            title: "Marble Elegance",
            artist: "Isabella Romano",
            description: "A stunning marble sculpture with flowing, elegant lines.",
            price: 780,
            image: "../assets/images/artwork-6.jpg",
            category: "sculpture",
            date: "2023-02-15"
        },
        {
            id: 7,
            title: "Urban Solitude",
            artist: "Michael Chen",
            description: "A black and white photograph capturing the solitude of city life.",
            price: 290,
            image: "../assets/images/artwork-7.jpg",
            category: "photography",
            date: "2023-04-05"
        },
        {
            id: 8,
            title: "Digital Flora",
            artist: "Zoe Williams",
            description: "A vibrant digital illustration of fantastical flora and fauna.",
            price: 250,
            image: "../assets/images/artwork-8.jpg",
            category: "digital",
            date: "2023-06-20"
        },
        {
            id: 9,
            title: "Bronze Harmony",
            artist: "David Miller",
            description: "A bronze sculpture depicting musical instruments in harmony.",
            price: 850,
            image: "../assets/images/artwork-9.jpg",
            category: "sculpture",
            date: "2023-01-10"
        },
        {
            id: 10,
            title: "Mountain Majesty",
            artist: "Emma Chen",
            description: "A breathtaking landscape of mountain ranges at sunset.",
            price: 480,
            image: "../assets/images/artwork-10.jpg",
            category: "painting",
            date: "2023-03-15"
        },
        {
            id: 11,
            title: "Street Stories",
            artist: "Michael Chen",
            description: "A series of street photography telling urban stories.",
            price: 320,
            image: "../assets/images/artwork-11.jpg",
            category: "photography",
            date: "2023-05-05"
        },
        {
            id: 12,
            title: "Digital Dreams",
            artist: "Alex Morgan",
            description: "A surreal digital artwork exploring the realm of dreams.",
            price: 280,
            image: "../assets/images/artwork-12.jpg",
            category: "digital",
            date: "2023-04-12"
        }
    ];

    // Get DOM elements
    const artworkContainer = document.getElementById('artwork-container');
    const paginationContainer = document.getElementById('pagination');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const categoryFilter = document.getElementById('category-filter');
    const priceFilter = document.getElementById('price-filter');
    const sortFilter = document.getElementById('sort-filter');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    // Pagination state
    let currentPage = 1;
    const itemsPerPage = 6;
    let filteredArtwork = [...allArtwork];

    // Get URL parameters for filtering
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    
    // Set initial filter if category parameter exists
    if (categoryParam) {
        categoryFilter.value = categoryParam;
        filteredArtwork = allArtwork.filter(item => item.category === categoryParam);
    }

    // Apply filters and update display
    function applyFilters() {
        const category = categoryFilter.value;
        const priceRange = priceFilter.value;
        const sortBy = sortFilter.value;
        const searchTerm = searchInput.value.toLowerCase();
        
        // Filter by category
        filteredArtwork = allArtwork.filter(item => {
            if (category && item.category !== category) return false;
            
            // Filter by price range
            if (priceRange) {
                const [min, max] = priceRange.split('-');
                if (min && max && (item.price < parseInt(min) || item.price > parseInt(max))) return false;
                if (min && !max && item.price < parseInt(min)) return false;
            }
            
            // Filter by search term
            if (searchTerm && 
                !item.title.toLowerCase().includes(searchTerm) && 
                !item.artist.toLowerCase().includes(searchTerm) && 
                !item.description.toLowerCase().includes(searchTerm)) {
                return false;
            }
            
            return true;
        });
        
        // Sort results
        switch(sortBy) {
            case 'price-low':
                filteredArtwork.sort((a, b) => a.price - b.price);
                break;
            case 'price-high':
                filteredArtwork.sort((a, b) => b.price - a.price);
                break;
            case 'popular':
                // In a real app, this would sort by popularity metrics
                // For now, we'll just use a random order
                filteredArtwork.sort(() => Math.random() - 0.5);
                break;
            case 'newest':
            default:
                filteredArtwork.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
        }
        
        // Reset to first page and render
        currentPage = 1;
        renderArtwork();
        renderPagination();
    }

    // Render artwork for current page
    function renderArtwork() {
        // Clear container
        artworkContainer.innerHTML = '';
        
        // Calculate start and end indices
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, filteredArtwork.length);
        
        // Get current page items
        const currentItems = filteredArtwork.slice(startIndex, endIndex);
        
        // Get favorites from localStorage
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        
        // Render items
        if (currentItems.length > 0) {
            currentItems.forEach(artwork => {
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
                        <p class="art-artist">by <a href="artist.html?id=${artwork.artist.replace(/\s+/g, '-').toLowerCase()}">${artwork.artist}</a></p>
                        <p class="art-description">${artwork.description}</p>
                        <div class="art-footer">
                            <span class="art-price">$${artwork.price}</span>
                            <button class="add-to-cart" onclick="addToCart(${artwork.id}, '${artwork.title}', ${artwork.price}, '${artwork.image}')">Add to Cart</button>
                        </div>
                    </div>
                `;
                artworkContainer.appendChild(artCard);
            });
        } else {
            // No results
            artworkContainer.innerHTML = `
                <div class="no-results">
                    <h3>No artwork found</h3>
                    <p>Try adjusting your filters or search terms</p>
                </div>
            `;
        }
    }

    // Render pagination
    function renderPagination() {
        // Calculate total pages
        const totalPages = Math.ceil(filteredArtwork.length / itemsPerPage);
        
        // Clear pagination (except prev/next buttons)
        const pageNumbers = paginationContainer.querySelectorAll('.pagination-item');
        pageNumbers.forEach(item => item.remove());
        
        // Add page numbers
        for (let i = 1; i <= totalPages; i++) {
            const pageItem = document.createElement('div');
            pageItem.className = `pagination-item ${i === currentPage ? 'active' : ''}`;
            pageItem.textContent = i;
            pageItem.addEventListener('click', () => {
                currentPage = i;
                renderArtwork();
                renderPagination();
            });
            
            // Insert before next button
            paginationContainer.insertBefore(pageItem, nextPageBtn);
        }
        
        // Update prev/next buttons
        prevPageBtn.classList.toggle('disabled', currentPage === 1);
        nextPageBtn.classList.toggle('disabled', currentPage === totalPages || totalPages === 0);
    }

    // Event listeners
    categoryFilter.addEventListener('change', applyFilters);
    priceFilter.addEventListener('change', applyFilters);
    sortFilter.addEventListener('change', applyFilters);
    searchButton.addEventListener('click', applyFilters);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            applyFilters();
        }
    });
    
    prevPageBtn.addEventListener('click', function() {
        if (currentPage > 1) {
            currentPage--;
            renderArtwork();
            renderPagination();
        }
    });
    
    nextPageBtn.addEventListener('click', function() {
        const totalPages = Math.ceil(filteredArtwork.length / itemsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            renderArtwork();
            renderPagination();
        }
    });
    
    // Initial render
    applyFilters();
});