const renderGift = async () => {
    // 1. Parse the requested ID from the URL
    const requestedID = parseInt(window.location.href.split('/').pop());

    // Make sure the requested ID is a valid number
    if (isNaN(requestedID)) {
        window.location.href = '../404.html'; // Redirect to 404 if the ID is invalid
        return;
    }

    // 2. Fetch the gift data
    const response = await fetch('/gifts');
    const data = await response.json();

    // 3. Get the gift content element
    const giftContent = document.getElementById('gift-content');
    if (!giftContent) {
        console.error('Gift content element not found!');
        return;
    }

    let gift = null;
    if (data) {
        // 4. Find the specific gift based on the requested ID
        gift = data.find(gift => gift.id === requestedID);
    }

    // 5. Redirect to 404.html if no gift is found
    if (!gift) {
        window.location.href = '../404.html'; // Redirect to 404 if gift not found
        return;
    }

    // 6. If gift is found, render its details
    document.getElementById('image').src = gift.image || '';  // Handle missing image gracefully
    document.getElementById('name').textContent = gift.name || 'Card Name Unavailable';
    document.getElementById('cardUsage').textContent = 'Usage: ' + (gift.cardUsage || 'Unknown');
    document.getElementById('elixir').textContent = 'Elixir: ' + (gift.elixir || 'N/A');
    document.getElementById('rarity').textContent = 'Rarity: ' + (gift.rarity || 'N/A');
    document.getElementById('cardType').textContent = 'Card Type: ' + (gift.cardType || 'Not Specified');
    document.getElementById('description').textContent = gift.description || 'No description available.';
    document.title = `UnEarthed - ${gift.name || 'Gift Details'}`;
};

// Call the function to render the gift when the page loads
renderGift();
