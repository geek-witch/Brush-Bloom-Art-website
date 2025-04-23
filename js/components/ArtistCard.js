class ArtistCard {
    constructor(artist) {
        this.artist = artist;
        this.element = null;
        this.render();
    }

    render() {
        // Create card element
        const card = document.createElement('div');
        card.className = 'artist-card';
        card.innerHTML = `
            <div class="artist-image">
                <img src="${this.artist.image}" alt="${this.artist.name}">
            </div>
            <div class="artist-details">
                <h3 class="artist-name">${this.artist.name}</h3>
                <p class="artist-specialty">${this.artist.specialty}</p>
                <p class="artist-bio">${this.artist.bio}</p>
                <a href="pages/artist.html?id=${this.artist.id}" class="view-profile">View Profile</a>
            </div>
        `;
        
        this.element = card;
        return card;
    }
}

// Export the component
export default ArtistCard;