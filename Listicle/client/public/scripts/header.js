const header = document.querySelector('header');
const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';

// Left part of the header (logo + title)
const headerLeft = document.createElement('div');
headerLeft.className = 'header-left';

// Use flex to align logo and title horizontally
headerLeft.style.display = 'flex'; // Align logo and title horizontally
headerLeft.style.alignItems = 'center'; // Vertically center them

const headerLogo = document.createElement('img');
headerLogo.src = '/logo.png'; // Set logo source here
headerLogo.style.width = '100px'; // Resize logo (optional)
headerLogo.style.height = 'auto'; // Maintain aspect ratio
headerLogo.style.marginRight = '10px'; // Add some space between the logo and title

const headerTitle = document.createElement('h1');
headerTitle.textContent = 'Listicle'; // Title text

headerLeft.appendChild(headerLogo);
headerLeft.appendChild(headerTitle);

// Right part of the header (Home button)
const headerRight = document.createElement('div');
headerRight.className = 'header-right';

// Create the Home button
const headerButton = document.createElement('button');
headerButton.textContent = 'Home'; // Set button text

headerButton.addEventListener('click', function handleClick(event) {
  window.location = '/'; // Redirect to the homepage when clicked
});

headerRight.appendChild(headerButton);

// Append the left and right parts to the header container
headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);

// Append the entire header container to the header element in the DOM
header.appendChild(headerContainer);