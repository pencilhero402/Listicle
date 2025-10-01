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

// Dropdown Menu Button
const dropdownButton = document.createElement('button');
dropdownButton.textContent = 'Menu'; // Button text for the dropdown

// Create the dropdown menu
const dropdownMenu = document.createElement('div');
dropdownMenu.className = 'dropdown-menu';
dropdownMenu.style.display = 'none'; // Initially hidden
dropdownMenu.style.position = 'absolute'; // Positioning the dropdown menu below the button
dropdownMenu.style.backgroundColor = '#fff'; // Menu background color
dropdownMenu.style.boxShadow = '0px 4px 8px rgba(0, 0, 0, 0.1)'; // Shadow for the dropdown

// Sample dropdown items with text and url
const menuItems = [ 
  {text: 'Troop', url: '/troops'},
  {text: 'Spell', url: '/spells'},
  {text: 'Building', url: '/buildings'}
];

// Create menu items dynamically
menuItems.forEach(item => {
  const menuItem = document.createElement('a');
  menuItem.textContent = item.text; // Set menu item text
  menuItem.href = item.url; // Set the URL for each menu item
  menuItem.style.padding = '10px';
  menuItem.style.display = 'block'; // Ensure each item takes full width of dropdown
  menuItem.style.textDecoration = 'none'; // Remove underline
  menuItem.style.color = '#333'; // Item text color

  // Add a hover effect for the items
  menuItem.addEventListener('mouseover', () => {
    menuItem.style.backgroundColor = '#f0f0f0'; // Light hover effect
  });
  menuItem.addEventListener('mouseout', () => {
    menuItem.style.backgroundColor = 'transparent'; // Reset hover effect
  });

  dropdownMenu.appendChild(menuItem);
});

// Toggle dropdown visibility when clicking the dropdown button
dropdownButton.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent event from propagating to the body click listener
  dropdownMenu.style.display = dropdownMenu.style.display === 'none' ? 'block' : 'none'; // Toggle menu visibility
});

// Close the dropdown menu if user clicks anywhere outside
document.addEventListener('click', () => {
  dropdownMenu.style.display = 'none';
});

// Append the dropdown menu and button to the header right container
headerRight.appendChild(dropdownButton);
headerRight.appendChild(dropdownMenu);

// Append the left and right parts to the header container
headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);

// Append the entire header container to the header element in the DOM
header.appendChild(headerContainer);
