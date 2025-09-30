const renderGifts = async () => {
    // Fetch the gift data from the server
    const response = await fetch('/gifts');
    const data = await response.json();
    
    // Get the mainContent element where the gifts will be rendered
    const mainContent = document.getElementById('main-content');

    // Clear any previous content in mainContent (if any)
    mainContent.innerHTML = '';

    // If data is available, render the gift cards
    if (data && data.length > 0) {
        data.forEach(gift => {
            // Create the card container
            const card = document.createElement('div');
            card.classList.add('card');

            // Create the top container and set the background image
            const topContainer = document.createElement('div');
            topContainer.classList.add('top-container');
            topContainer.style.backgroundImage = `url(${gift.image})`;

            // Create the bottom container
            const bottomContainer = document.createElement('div');
            bottomContainer.classList.add('bottom-container');

            // Add the gift name
            const name = document.createElement('h3');
            name.textContent = gift.name;
            bottomContainer.appendChild(name);

            // Add the price point
            const pricePoint = document.createElement('p');
            pricePoint.textContent = 'Price: ' + gift.pricePoint;
            bottomContainer.appendChild(pricePoint);

            // Add the audience
            const audience = document.createElement('p');
            audience.textContent = 'Great For: ' + gift.audience;
            bottomContainer.appendChild(audience);

            // Add the "Read More" link
            const link = document.createElement('a');
            link.textContent = 'Read More >';
            link.setAttribute('role', 'button');
            link.href = `/gifts/${gift.id}`;
            bottomContainer.appendChild(link);

            // Append top and bottom containers to the card
            card.appendChild(topContainer);
            card.appendChild(bottomContainer);

            // Append the card to mainContent
            mainContent.appendChild(card);
        });
    } else {
        // If no gifts, display the "No Gifts Available" message
        const message = document.createElement('h2');
        message.textContent = 'No Gifts Available 😞';
        mainContent.appendChild(message);
    }
}

// Call the function to render the gifts
renderGifts();
