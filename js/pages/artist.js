document.addEventListener('DOMContentLoaded', function() {
    // Sample data for artists
    const allArtists = [
        {
            id: "emma-chen",
            name: "Emma Chen",
            specialty: "Oil Painting",
            bio: "Award-winning landscape artist with a passion for capturing natural beauty. Emma's work has been featured in galleries across North America and Europe.",
            fullBio: "Emma Chen is a renowned landscape artist whose work captures the serene beauty of natural environments. Born in Vancouver, Canada, she studied Fine Arts at the Emily Carr University of Art + Design before traveling extensively throughout Asia and Europe to develop her unique style. Her paintings are characterized by their luminous quality and attention to the subtle interplay of light and shadow. Emma has received numerous awards for her work, including the National Landscape Artist Award in 2021. Her pieces can be found in private collections worldwide and have been featured in prestigious galleries across North America and Europe.",
            image: "../assets/images/artist-1.jpg",
            gallery: [
                "../assets/images/artwork-1.jpg",
                "../assets/images/artwork-10.jpg",
                "../assets/images/artwork-4.jpg"
            ],
            joinDate: "2020-03-15",
            popular: true,
            // Added social media links
            socialMedia: {
                instagram: "https://instagram.com/emmachen_art",
                facebook: "https://facebook.com/emmachenartist",
                twitter: "https://twitter.com/emmachen_art"
            },
            // Added exhibition history
            exhibitions: [
                {
                    title: "Natural Perspectives",
                    venue: "Vancouver Art Gallery",
                    location: "Vancouver, Canada",
                    year: "2023"
                },
                {
                    title: "Landscapes of Light",
                    venue: "Contemporary Arts Center",
                    location: "New York, USA",
                    year: "2022"
                },
                {
                    title: "Harmony in Nature",
                    venue: "European Fine Arts Museum",
                    location: "Paris, France",
                    year: "2021"
                }
            ]
        },
        {
            id: "marcus-rivera",
            name: "Marcus Rivera",
            specialty: "Abstract Art",
            bio: "Contemporary artist known for bold colors and emotional depth in abstract works. His pieces evoke strong emotional responses.",
            fullBio: "Marcus Rivera is a contemporary abstract artist whose work is characterized by bold colors, dynamic compositions, and profound emotional depth. Born in Mexico City and raised in Chicago, Marcus draws inspiration from both his cultural heritage and urban experiences. After completing his MFA at the School of the Art Institute of Chicago, he quickly gained recognition for his distinctive style that blends traditional techniques with innovative approaches. His work explores themes of identity, memory, and human connection. Marcus has exhibited in solo and group shows throughout the United States and internationally. His paintings are known for evoking strong emotional responses from viewers, creating spaces for reflection and introspection.",
            image: "../assets/images/artist-2.jpg",
            gallery: [
                "../assets/images/artwork-2.jpg"
            ],
            joinDate: "2020-05-22",
            popular: true,
            // Added social media links
            socialMedia: {
                instagram: "https://instagram.com/marcusrivera_art",
                facebook: "https://facebook.com/marcusriveraart",
                artstation: "https://artstation.com/marcusrivera"
            },
            // Added exhibition history
            exhibitions: [
                {
                    title: "Chromatic Emotions",
                    venue: "Museum of Contemporary Art",
                    location: "Chicago, USA",
                    year: "2024"
                },
                {
                    title: "Identity & Expression",
                    venue: "Galería Nacional",
                    location: "Mexico City, Mexico",
                    year: "2022"
                },
                {
                    title: "Abstract Perspectives",
                    venue: "International Art Fair",
                    location: "Miami, USA",
                    year: "2021"
                }
            ]
        },
        {
            id: "sophia-kim",
            name: "Sophia Kim",
            specialty: "Urban Landscapes",
            bio: "Architectural designer turned artist, specializing in detailed cityscapes that capture the essence of urban environments.",
            fullBio: "Sophia Kim is an architectural designer turned artist who specializes in intricate urban landscapes. With a background in architecture from Cornell University, Sophia brings a unique perspective to her artwork, combining technical precision with artistic expression. Her pieces capture not just the physical structures of cities, but their energy, character, and hidden stories. Based in New York City, she finds endless inspiration in the urban environment around her, from historic neighborhoods to modern skyscrapers. Sophia's work has been commissioned by major corporations and civic institutions, and she has participated in numerous exhibitions focused on urban art and design. Her detailed cityscapes invite viewers to explore familiar environments with fresh eyes, discovering new aspects of spaces they thought they knew.",
            image: "../assets/images/artist-3.jpg",
            gallery: [
                "../assets/images/artwork-3.jpg"
            ],
            joinDate: "2021-01-10",
            popular: false,
            // Added social media links
            socialMedia: {
                instagram: "https://instagram.com/sophiakim_urbanart",
                linkedin: "https://linkedin.com/in/sophiakimartist",
                behance: "https://behance.net/sophiakimdesign"
            },
            // Added exhibition history
            exhibitions: [
                {
                    title: "Urban Perspectives",
                    venue: "Architectural Design Gallery",
                    location: "New York, USA",
                    year: "2023"
                },
                {
                    title: "Metropolitan Visions",
                    venue: "City Arts Center",
                    location: "Seoul, South Korea",
                    year: "2022"
                },
                {
                    title: "Structure & Space",
                    venue: "Cornell University Gallery",
                    location: "Ithaca, USA",
                    year: "2020"
                }
            ]
        },
        {
            id: "james-wilson",
            name: "James Wilson",
            specialty: "Oil Painting",
            bio: "Classical painter specializing in seascapes and maritime scenes with a focus on historical accuracy and atmospheric conditions.",
            fullBio: "James Wilson is a classical painter whose work focuses on seascapes and maritime scenes. Based in Maine, James has spent his life near the ocean, developing an intimate understanding of its moods and movements. His paintings are renowned for their historical accuracy, atmospheric conditions, and emotional resonance. After studying at the Rhode Island School of Design, James honed his craft through years of observation and practice. His work has been featured in maritime museums and coastal galleries throughout New England. James is particularly known for his ability to capture the interaction of light with water and his meticulous attention to the details of historical vessels. His paintings transport viewers to specific moments in time, allowing them to experience the majesty and power of the sea.",
            image: "../assets/images/artist-4.jpg",
            gallery: [
                "../assets/images/artwork-4.jpg"
            ],
            joinDate: "2021-03-05",
            popular: false,
            // Added social media links
            socialMedia: {
                instagram: "https://instagram.com/jameswilson_maritime",
                facebook: "https://facebook.com/jameswilsonart",
                youtube: "https://youtube.com/c/jameswilsonpainting"
            },
            // Added exhibition history
            exhibitions: [
                {
                    title: "Maritime Heritage",
                    venue: "New England Maritime Museum",
                    location: "Portland, Maine, USA",
                    year: "2024"
                },
                {
                    title: "The Living Sea",
                    venue: "Coastal Arts Gallery",
                    location: "Boston, USA",
                    year: "2022"
                },
                {
                    title: "Oceanic Light & Shadow",
                    venue: "Rhode Island School of Design Gallery",
                    location: "Providence, USA",
                    year: "2020"
                }
            ]
        },
        {
            id: "alex-morgan",
            name: "Alex Morgan",
            specialty: "Digital Art",
            bio: "Innovative digital artist pushing the boundaries of technology and art through immersive and interactive digital experiences.",
            fullBio: "Alex Morgan is at the forefront of digital art, constantly pushing the boundaries of what's possible at the intersection of technology and creativity. With a background in computer science and fine arts from MIT, Alex creates immersive and interactive digital experiences that challenge conventional notions of art. Their work explores themes of virtual identity, digital consciousness, and the relationship between humans and technology. Based in San Francisco, Alex has collaborated with tech companies and art institutions to create groundbreaking installations and digital experiences. Their pieces have been featured in major digital art festivals worldwide and have received acclaim for their innovative approach and technical sophistication. Alex is particularly interested in how digital art can create new forms of connection and expression in an increasingly virtual world.",
            image: "../assets/images/artist-5.jpg",
            gallery: [
                "../assets/images/artwork-5.jpg",
                "../assets/images/artwork-12.jpg"
            ],
            joinDate: "2021-06-18",
            popular: true,
            // Added social media links
            socialMedia: {
                instagram: "https://instagram.com/alexmorgan_digital",
                twitter: "https://twitter.com/alexmorganart",
                github: "https://github.com/alexmorganart",
                artstation: "https://artstation.com/alexmorgan"
            },
            // Added exhibition history
            exhibitions: [
                {
                    title: "Digital Frontiers",
                    venue: "SIGGRAPH Art Gallery",
                    location: "San Francisco, USA",
                    year: "2024"
                },
                {
                    title: "Virtual Realities",
                    venue: "Tech Art Festival",
                    location: "Berlin, Germany",
                    year: "2023"
                },
                {
                    title: "Code as Canvas",
                    venue: "MIT Media Lab",
                    location: "Cambridge, USA",
                    year: "2021"
                }
            ]
        },
        {
            id: "isabella-romano",
            name: "Isabella Romano",
            specialty: "Sculpture",
            bio: "Italian sculptor working primarily with marble and bronze, creating pieces that blend classical techniques with contemporary themes.",
            fullBio: "Isabella Romano is an Italian sculptor whose work seamlessly blends classical techniques with contemporary themes. Born in Florence and trained at the Accademia di Belle Arti, Isabella works primarily with marble and bronze to create pieces that honor traditional craftsmanship while exploring modern concepts. Her sculptures are characterized by their flowing lines, emotional expressiveness, and technical virtuosity. Isabella's work has been exhibited in galleries and public spaces throughout Europe and has been commissioned for both private collections and public installations. She is particularly interested in exploring the human form and how it can express universal emotions and experiences. Isabella divides her time between her studio in Florence and teaching sculpture at various international workshops, where she shares her passion for the timeless art of sculpture.",
            image: "../assets/images/artist-6.jpg",
            gallery: [
                "../assets/images/artwork-6.jpg",
                "../assets/images/artwork-9.jpg"
            ],
            joinDate: "2020-09-30",
            popular: false,
            // Added social media links
            socialMedia: {
                instagram: "https://instagram.com/isabellaromano_scultura",
                facebook: "https://facebook.com/isabellaromanosculpture",
                vimeo: "https://vimeo.com/isabellaromano"
            },
            // Added exhibition history
            exhibitions: [
                {
                    title: "Contemporary Classical",
                    venue: "Galleria degli Uffizi",
                    location: "Florence, Italy",
                    year: "2023"
                },
                {
                    title: "Form & Emotion",
                    venue: "European Sculpture Biennial",
                    location: "Vienna, Austria",
                    year: "2022"
                },
                {
                    title: "Marble and Bronze: A Dialogue",
                    venue: "Accademia di Belle Arti",
                    location: "Florence, Italy",
                    year: "2020"
                }
            ]
        },
        {
            id: "michael-chen",
            name: "Michael Chen",
            specialty: "Photography",
            bio: "Documentary photographer capturing urban stories and human moments with a distinctive black and white style.",
            fullBio: "Michael Chen is a documentary photographer known for his powerful black and white images that capture urban stories and human moments. Based in Hong Kong, Michael's work explores the intersection of personal narratives and public spaces, documenting the changing face of cities and the people who inhabit them. After studying photojournalism at the International Center of Photography in New York, Michael developed a distinctive style characterized by strong contrasts, thoughtful composition, and an eye for decisive moments. His photographs have been published in major international magazines and exhibited in galleries across Asia, Europe, and North America. Michael's ongoing projects include documenting traditional neighborhoods facing gentrification and exploring the concept of belonging in rapidly changing urban environments. Through his lens, ordinary moments become extraordinary, revealing the complex tapestry of urban life.",
            image: "../assets/images/artist-7.jpg",
            gallery: [
                "../assets/images/artwork-7.jpg",
                "../assets/images/artwork-11.jpg"
            ],
            joinDate: "2022-01-15",
            popular: true,
            // Added social media links
            socialMedia: {
                instagram: "https://instagram.com/michaelchen_photo",
                twitter: "https://twitter.com/michaelchenphoto",
                flickr: "https://flickr.com/michaelchenphotography",
                linkedin: "https://linkedin.com/in/michaelchenphotographer"
            },
            // Added exhibition history
            exhibitions: [
                {
                    title: "Urban Chronicles",
                    venue: "Hong Kong Arts Centre",
                    location: "Hong Kong",
                    year: "2024"
                },
                {
                    title: "Decisive Moments",
                    venue: "International Center of Photography",
                    location: "New York, USA",
                    year: "2023"
                },
                {
                    title: "City Transitions",
                    venue: "Asian Photography Festival",
                    location: "Tokyo, Japan",
                    year: "2022"
                }
            ]
        },
        {
            id: "zoe-williams",
            name: "Zoe Williams",
            specialty: "Digital Art",
            bio: "Botanical digital artist creating vibrant, fantastical flora and fauna inspired by both real and imagined ecosystems.",
            fullBio: "Zoe Williams is a botanical digital artist whose work celebrates the beauty and diversity of plant life through vibrant digital illustrations. Based in Portland, Oregon, Zoe combines her background in botany and digital design to create fantastical flora and fauna inspired by both real and imagined ecosystems. Her digital creations feature intricate details, luminous colors, and otherworldly compositions that invite viewers into enchanted natural realms. Zoe's work has been featured in digital art collections, botanical publications, and has been commissioned for book covers and editorial illustrations. She is particularly interested in using digital art to raise awareness about biodiversity and environmental conservation. Through workshops and online tutorials, Zoe also shares her techniques with emerging artists, helping to foster a community of digital creators focused on natural themes.",
            image: "../assets/images/artist-8.jpg",
            gallery: [
                "../assets/images/artwork-8.jpg"
            ],
            joinDate: "2022-03-20",
            popular: false,
            // Added social media links
            socialMedia: {
                instagram: "https://instagram.com/zoewilliams_botanical",
                twitter: "https://twitter.com/zoewilliamsart",
                patreon: "https://patreon.com/zoewilliams",
                pinterest: "https://pinterest.com/zoewilliamsart"
            },
            // Added exhibition history
            exhibitions: [
                {
                    title: "Digital Botanical Garden",
                    venue: "Portland Museum of Digital Art",
                    location: "Portland, USA",
                    year: "2024"
                },
                {
                    title: "Flora Fantasia",
                    venue: "Botanical Illustration Society",
                    location: "Seattle, USA",
                    year: "2023"
                },
                {
                    title: "Imagined Ecosystems",
                    venue: "Environmental Art Showcase",
                    location: "San Francisco, USA",
                    year: "2022"
                }
            ]
        },
        {
            id: "david-miller",
            name: "David Miller",
            specialty: "Sculpture",
            bio: "Contemporary sculptor working with bronze and found objects to create pieces that explore music, rhythm, and harmony.",
            fullBio: "David Miller is a contemporary sculptor whose work explores the themes of music, rhythm, and harmony through three-dimensional form. Working primarily with bronze and found objects, David creates sculptures that capture the essence of musical expression and movement. His background as a professional musician informs his artistic practice, allowing him to translate auditory experiences into visual and tactile forms. Based in Austin, Texas, David's sculptures range from intimate tabletop pieces to large-scale public installations. His work has been commissioned for concert halls, music schools, and public spaces throughout the United States. David is particularly interested in how sculpture can evoke sensory experiences beyond the visual, creating pieces that seem to resonate with silent music. His innovative approach to materials and form has earned him recognition in both the art and music communities.",
            image: "../assets/images/artist-9.jpg",
            gallery: [
                "../assets/images/artwork-9.jpg"
            ],
            joinDate: "2021-11-05",
            popular: false,
            // Added social media links
            socialMedia: {
                instagram: "https://instagram.com/davidmiller_sculpture",
                facebook: "https://facebook.com/davidmillerart",
                spotify: "https://open.spotify.com/artist/davidmillermusic",
                youtube: "https://youtube.com/c/davidmillerartist"
            },
            // Added exhibition history
            exhibitions: [
                {
                    title: "Sound in Bronze",
                    venue: "Austin Contemporary Art Museum",
                    location: "Austin, USA",
                    year: "2024"
                },
                {
                    title: "Musical Forms",
                    venue: "Music & Arts Festival",
                    location: "Nashville, USA",
                    year: "2023"
                },
                {
                    title: "Rhythm & Structure",
                    venue: "National Sculpture Society",
                    location: "New York, USA",
                    year: "2022"
                }
            ]
        }
    ];

    // Sample data for artwork (simplified version from product.js)
    const allArtwork = [
        {
            id: 1,
            title: "Serene Landscape",
            artist: "Emma Chen",
            artistId: "emma-chen",
            description: "A peaceful landscape painting capturing the beauty of nature.",
            price: 450,
            image: "../assets/images/artwork-1.jpg",
            category: "painting"
        },
        {
            id: 2,
            title: "Abstract Emotions",
            artist: "Marcus Rivera",
            artistId: "marcus-rivera",
            description: "An abstract piece exploring the depth of human emotions.",
            price: 380,
            image: "../assets/images/artwork-2.jpg",
            category: "painting"
        },
        {
            id: 3,
            title: "Urban Dreams",
            artist: "Sophia Kim",
            artistId: "sophia-kim",
            description: "A vibrant cityscape showcasing urban life and architecture.",
            price: 520,
            image: "../assets/images/artwork-3.jpg",
            category: "painting"
        },
        {
            id: 4,
            title: "Ocean Whispers",
            artist: "James Wilson",
            artistId: "james-wilson",
            description: "A mesmerizing seascape with waves crashing against the shore.",
            price: 490,
            image: "../assets/images/artwork-4.jpg",
            category: "painting"
        },
        {
            id: 5,
            title: "Digital Dystopia",
            artist: "Alex Morgan",
            artistId: "alex-morgan",
            description: "A futuristic digital artwork exploring themes of technology and society.",
            price: 320,
            image: "../assets/images/artwork-5.jpg",
            category: "digital"
        },
        {
            id: 6,
            title: "Marble Elegance",
            artist: "Isabella Romano",
            artistId: "isabella-romano",
            description: "A stunning marble sculpture with flowing, elegant lines.",
            price: 780,
            image: "../assets/images/artwork-6.jpg",
            category: "sculpture"
        },
        {
            id: 7,
            title: "Urban Solitude",
            artist: "Michael Chen",
            artistId: "michael-chen",
            description: "A black and white photograph capturing the solitude of city life.",
            price: 290,
            image: "../assets/images/artwork-7.jpg",
            category: "photography"
        },
        {
            id: 8,
            title: "Digital Flora",
            artist: "Zoe Williams",
            artistId: "zoe-williams",
            description: "A vibrant digital illustration of fantastical flora and fauna.",
            price: 250,
            image: "../assets/images/artwork-8.jpg",
            category: "digital"
        },
        {
            id: 9,
            title: "Bronze Harmony",
            artist: "David Miller",
            artistId: "david-miller",
            description: "A bronze sculpture depicting musical instruments in harmony.",
            price: 850,
            image: "../assets/images/artwork-9.jpg",
            category: "sculpture"
        },
        {
            id: 10,
            title: "Mountain Majesty",
            artist: "Emma Chen",
            artistId: "emma-chen",
            description: "A breathtaking landscape of mountain ranges at sunset.",
            price: 480,
            image: "../assets/images/artwork-10.jpg",
            category: "painting"
        },
        {
            id: 11,
            title: "Street Stories",
            artist: "Michael Chen",
            artistId: "michael-chen",
            description: "A series of street photography telling urban stories.",
            price: 320,
            image: "../assets/images/artwork-11.jpg",
            category: "photography"
        },
        {
            id: 12,
            title: "Digital Dreams",
            artist: "Alex Morgan",
            artistId: "alex-morgan",
            description: "A surreal digital artwork exploring the realm of dreams.",
            price: 280,
            image: "../assets/images/artwork-12.jpg",
            category: "digital"
        }
    ];

    // Get DOM elements - Add error handling for each element
    const artistProfileSection = document.getElementById('artist-profile');
    const allArtistsSection = document.getElementById('all-artists');
    const artistsContainer = document.getElementById('artists-container');
    const paginationContainer = document.getElementById('pagination');
    const prevPageBtn = document.getElementById('prev-page');
    const nextPageBtn = document.getElementById('next-page');
    const specialtyFilter = document.getElementById('specialty-filter');
    const sortFilter = document.getElementById('sort-filter');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    // Debug: Log elements
    console.log("Elements loaded:", {
        artistProfileSection,
        allArtistsSection,
        artistsContainer,
        paginationContainer
    });

    // Ensure DOM elements exist before proceeding
    if (!artistsContainer) {
        console.error("Artists container not found!");
        return; // Exit if critical elements are missing
    }

    // Pagination state
    let currentPage = 1;
    const itemsPerPage = 6;
    let filteredArtists = [...allArtists];

    // Define toggleFavorite and addToCart functions globally
    window.toggleFavorite = function(btn, artworkId) {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const index = favorites.indexOf(artworkId);
        
        if (index === -1) {
            favorites.push(artworkId);
            btn.classList.add('active');
        } else {
            favorites.splice(index, 1);
            btn.classList.remove('active');
        }
        
        localStorage.setItem('favorites', JSON.stringify(favorites));
    };
    
    window.addToCart = function(id, title, price, image) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Check if item is already in cart
        const existingItem = cart.find(item => item.id === id);
        
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                id: id,
                title: title,
                price: price,
                image: image,
                quantity: 1
            });
        }
        
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        
        // Show confirmation
        alert(`"${title}" added to your cart!`);
    };
    
    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const count = cart.reduce((total, item) => total + item.quantity, 0);
        const cartCountElement = document.querySelector('.cart-count');
        
        if (cartCountElement) {
            cartCountElement.textContent = count;
            cartCountElement.style.display = count > 0 ? 'flex' : 'none';
        }
    }
    
    // Initialize cart count
    updateCartCount();

    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const artistId = urlParams.get('id');
    
    // Debug: Log URL params
    console.log("URL params:", { artistId });
    
    // Check if we're viewing a specific artist
    if (artistId) {
        // Show artist profile, hide all artists
        if (artistProfileSection) artistProfileSection.style.display = 'block';
        if (allArtistsSection) allArtistsSection.style.display = 'none';
        
        // Find the artist
        const artist = allArtists.find(a => a.id === artistId);
        
        if (artist) {
            renderArtistProfile(artist);
            console.log("Rendering artist profile:", artist.name);
        } else {
            // Artist not found, redirect to all artists
            console.error("Artist not found:", artistId);
            window.location.href = 'artist.html';
        }
    } else {
        // Show all artists, hide artist profile
        if (artistProfileSection) artistProfileSection.style.display = 'none';
        if (allArtistsSection) allArtistsSection.style.display = 'block';
        
        // Apply filters and render
        console.log("Showing all artists");
        applyFilters();
    }

    // Apply filters and update display
    function applyFilters() {
        const specialty = specialtyFilter ? specialtyFilter.value : '';
        const sortBy = sortFilter ? sortFilter.value : 'name-asc';
        const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
        
        console.log("Applying filters:", { specialty, sortBy, searchTerm });
        
        // Filter by specialty
        filteredArtists = allArtists.filter(artist => {
            if (specialty && artist.specialty !== specialty) return false;
            
            // Filter by search term
            if (searchTerm && 
                !artist.name.toLowerCase().includes(searchTerm) && 
                !artist.specialty.toLowerCase().includes(searchTerm) && 
                !artist.bio.toLowerCase().includes(searchTerm)) {
                return false;
            }
            
            return true;
        });
        
        // Sort results
        try {
            switch(sortBy) {
                case 'name-asc':
                    filteredArtists.sort((a, b) => a.name.localeCompare(b.name));
                    break;
                case 'name-desc':
                    filteredArtists.sort((a, b) => b.name.localeCompare(a.name));
                    break;
                case 'popular':
                    filteredArtists.sort((a, b) => (b.popular === a.popular) ? 0 : b.popular ? 1 : -1);
                    break;
                case 'newest':
                    filteredArtists.sort((a, b) => new Date(b.joinDate) - new Date(a.joinDate));
                    break;
            }
        } catch (err) {
            console.error("Error sorting artists:", err);
        }
        
        console.log("Filtered artists:", filteredArtists.length);
        
        // Reset to first page and render
        currentPage = 1;
        renderArtists();
        renderPagination();
    }

    // Render artists for current page
    function renderArtists() {
        console.log("Rendering artists...");
        
        // Ensure container exists
        if (!artistsContainer) {
            console.error("Artists container not found!");
            return;
        }
        
        // Clear container
        artistsContainer.innerHTML = '';
        
        // Calculate start and end indices
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = Math.min(startIndex + itemsPerPage, filteredArtists.length);
        
        console.log("Pagination:", { currentPage, startIndex, endIndex, total: filteredArtists.length });
        
        // Get current page items
        const currentItems = filteredArtists.slice(startIndex, endIndex);
        
        // Render items
        if (currentItems.length > 0) {
            currentItems.forEach(artist => {
                const artistCard = document.createElement('div');
                artistCard.className = 'artist-card';
                artistCard.innerHTML = `
                    <div class="artist-image">
                        <img src="${artist.image} " alt="${artist.name}">
                    </div>
                    <div class="artist-details">
                        <h3 class="artist-name">${artist.name}</h3>
                        <p class="artist-specialty">${artist.specialty}</p>
                        <p class="artist-bio">${artist.bio}</p>
                        <div class="artist-social">
                            ${renderSocialLinks(artist.socialMedia)}
                        </div>
                        <a href="artist.html?id=${artist.id}" class="view-profile">View Profile</a>
                    </div>
                `;
                artistsContainer.appendChild(artistCard);
            });
        } else {
            // No results
            artistsContainer.innerHTML = `
                <div class="no-results">
                    <h3>No artists found</h3>
                    <p>Try adjusting your filters or search terms</p>
                </div>
            `;
        }
    }

    // Helper function to render social media links
    function renderSocialLinks(socialMedia) {
        if (!socialMedia) return '';
        
        const socialIcons = {
            instagram: '<i class="fab fa-instagram"></i>',
            facebook: '<i class="fab fa-facebook-f"></i>',
            twitter: '<i class="fab fa-twitter"></i>',
            linkedin: '<i class="fab fa-linkedin-in"></i>',
            youtube: '<i class="fab fa-youtube"></i>',
            pinterest: '<i class="fab fa-pinterest-p"></i>',
            behance: '<i class="fab fa-behance"></i>',
            vimeo: '<i class="fab fa-vimeo-v"></i>',
            github: '<i class="fab fa-github"></i>',
            artstation: '<i class="fab fa-artstation"></i>',
            spotify: '<i class="fab fa-spotify"></i>',
            flickr: '<i class="fab fa-flickr"></i>',
            patreon: '<i class="fab fa-patreon"></i>'
        };
        
        let links = '';
        
        for (const [platform, url] of Object.entries(socialMedia)) {
            if (socialIcons[platform]) {
                links +=links += `<a href="${url}" target="_blank" class="social-icon" title="${platform}">${socialIcons[platform]}</a>`;
            }
        }
        
        return links;
    }

    // Render pagination controls
    function renderPagination() {
        if (!paginationContainer) return;
        
        const totalPages = Math.ceil(filteredArtists.length / itemsPerPage);
        
        // Update pagination container
        const pageInfoElement = document.getElementById('page-info');
        if (pageInfoElement) {
            pageInfoElement.textContent = `Page ${currentPage} of ${totalPages}`;
        }
        
        // Enable/disable pagination buttons
        if (prevPageBtn) {
            prevPageBtn.disabled = currentPage === 1;
        }
        
        if (nextPageBtn) {
            nextPageBtn.disabled = currentPage === totalPages || totalPages === 0;
        }
        
        // Show/hide pagination based on results
        paginationContainer.style.display = filteredArtists.length > itemsPerPage ? 'flex' : 'none';
    }

    // Render artist profile page
    function renderArtistProfile(artist) {
        if (!artistProfileSection) return;
        
        // Find artist's artwork
        const artistArtworks = allArtwork.filter(artwork => artwork.artistId === artist.id);
        
        // Build profile HTML
        const profileHTML = `
            <div class="artist-profile-header">
                <div class="artist-image">
                    <img src="${artist.image}" alt="${artist.name}">
                </div>
                <div class="artist-info">
                    <h1>${artist.name}</h1>
                    <p class="artist-specialty">${artist.specialty}</p>
                    <div class="artist-social">
                        ${renderSocialLinks(artist.socialMedia)}
                    </div>
                </div>
            </div>
            
            <div class="artist-bio-section">
                <h2>About the Artist</h2>
                <p>${artist.fullBio}</p>
            </div>
            
            <div class="artist-exhibitions">
                <h2>Exhibition History</h2>
                <ul class="exhibition-list">
                    ${artist.exhibitions.map(exhibition => `
                        <li>
                            <div class="exhibition-title">${exhibition.title}</div>
                            <div class="exhibition-details">
                                ${exhibition.venue}, ${exhibition.location} (${exhibition.year})
                            </div>
                        </li>
                    `).join('')}
                </ul>
            </div>
            
            <div class="artist-gallery">
                <h2>Artwork Gallery</h2>
                <div class="artwork-grid">
                    ${renderArtistArtwork(artistArtworks)}
                </div>
            </div>
            
            <div class="back-to-artists">
                <a href="artist.html" class="btn btn-primary">Back to All Artists</a>
            </div>
        `;
        
        // Insert profile HTML
        artistProfileSection.innerHTML = profileHTML;
    }

    // Render artist's artwork
    function renderArtistArtwork(artworks) {
        if (!artworks || artworks.length === 0) {
            return '<p class="no-artwork">No artwork available for this artist.</p>';
        }
    
        // Get favorites from localStorage
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
        return artworks.map(artwork => {
            const isFavorite = favorites.includes(artwork.id);
    
            return `
                <div class="artwork-card">
                    <div class="artwork-image">
                        <img src="${artwork.image}" alt="${artwork.title}">
                        <button class="favorite-btn ${isFavorite ? 'active' : ''}" 
                                onclick="toggleFavorite(this, ${artwork.id})">
                            <i class="fas fa-heart"></i>
                        </button>
                    </div>
                    <div class="artwork-details">
                        <h3>${artwork.title}</h3>
                        <p class="artwork-description">${artwork.description}</p>
                        
                    </div>
                </div>
            `;
        }).join('');
    }

    // Add event listeners
    if (prevPageBtn) {
        prevPageBtn.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                renderArtists();
                renderPagination();
                window.scrollTo(0, 0);
            }
        });
    }
    
    if (nextPageBtn) {
        nextPageBtn.addEventListener('click', () => {
            const totalPages = Math.ceil(filteredArtists.length / itemsPerPage);
            if (currentPage < totalPages) {
                currentPage++;
                renderArtists();
                renderPagination();
                window.scrollTo(0, 0);
            }
        });
    }
    
    // Add event listeners for filters
    if (specialtyFilter) {
        specialtyFilter.addEventListener('change', applyFilters);
    }
    
    if (sortFilter) {
        sortFilter.addEventListener('change', applyFilters);
    }
    
    // Add event listener for search
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function(e) {
            e.preventDefault();
            applyFilters();
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                applyFilters();
            }
        });
    }

    // Initialize specialty filter options dynamically
    if (specialtyFilter) {
        const specialties = [...new Set(allArtists.map(artist => artist.specialty))];
        specialties.sort();
        
        specialtyFilter.innerHTML = `
            <option value="">All Specialties</option>
            ${specialties.map(specialty => `<option value="${specialty}">${specialty}</option>`).join('')}
        `;
    }

    // Initialize page load
    if (!artistId) {
        renderArtists();
        renderPagination();
    }

    // Handle hash changes for SPA-like navigation
    window.addEventListener('hashchange', function() {
        const hash = window.location.hash;
        
        if (hash.startsWith('#artist=')) {
            const artistId = hash.replace('#artist=', '');
            const artist = allArtists.find(a => a.id === artistId);
            
            if (artist) {
                if (artistProfileSection) artistProfileSection.style.display = 'block';
                if (allArtistsSection) allArtistsSection.style.display = 'none';
                renderArtistProfile(artist);
            }
        } else {
            if (artistProfileSection) artistProfileSection.style.display = 'none';
            if (allArtistsSection) allArtistsSection.style.display = 'block';
            applyFilters();
        }
    });
});