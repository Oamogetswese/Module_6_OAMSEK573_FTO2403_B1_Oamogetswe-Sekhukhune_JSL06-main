// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: [{name: "Garlic Bread", price: 30}, {name: "Bruschetta", price: 55}],
    MainCourses: [{name: "Margherita Pizza", price: 120}, {name: "Spaghetti Carbonara", price: 150}],
    Desserts: [{name: "Tiramisu", price: 45}, {name: "Cheesecake", price: 80}]
};


function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuContainer = document.getElementById('menu');

    // Loop through each category and its items in the menu object
    for (const category in menu) {
        // Create an element to represent the category
        const categoryElement = document.createElement('h3');
        
        // Set the text content of the category element to the category name
        categoryElement.textContent = category;
        
        // Append the category element to the menu container
        menuContainer.appendChild(categoryElement);

        // Create an element to represent a list of items
        const itemList = document.createElement('ul');
        
        // Append the list of items element to the menu container
        menuContainer.appendChild(itemList);

        // Loop through the items in the category and create list items
        menu[category].forEach(item => {
            // Create a list item element
            const listItem = document.createElement('li');
            
            // Set the text content of the list item element to the item name
            listItem.textContent = `${item.name} - R${item.price}`;
            
            // Attach a click event listener to the list item to add it to the order
            listItem.addEventListener('click', () => {
                addToOrder(item);
            });
            
            // Append the list item to the list of items
            itemList.appendChild(listItem);
        });
    }
}

function addToOrder(item) {
    // Get the order items list and the order total element from the HTML
    const orderItemsList = document.getElementById('order-items-list');
    const orderTotalElement = document.getElementById('order-total');

    // Create a list item for the order
    const orderListItem = document.createElement('li');
    
    // Set the text content of the list item to the item name
    orderListItem.textContent = `${item.name} - R${item.price}`;
    
    // Append the list item to the order items list
    orderItemsList.appendChild(orderListItem);

    // Calculate and update the total price
    totalOrderPrice += item.price;

    // Update the text content of the order total element with the new total
    orderTotalElement.textContent = `Total: R${totalOrderPrice}`;
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);
