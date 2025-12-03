
const foodItems = [
    { id: 1, name: 'Pizza', price: 12.99 },
    { id: 2, name: 'Burger', price: 8.99 },
    { id: 3, name: 'Pasta', price: 10.99 },
    { id: 4, name: 'Salad', price: 6.99 },
    { id: 5, name: 'Steak', price: 19.99 },
    { id: 6, name: 'Fish', price: 15.99 },
];

const foodItemsContainer = document.querySelector('.food-items');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');

let cart = [];

function renderFoodItems() {
    foodItems.forEach(item => {
        const foodItem = document.createElement('div');
        foodItem.classList.add('food-item');
        foodItem.innerHTML = `
            <h4>${item.name}</h4>
            <p>$${item.price.toFixed(2)}</p>
        `;
        foodItem.addEventListener('click', () => addToCart(item));
        foodItemsContainer.appendChild(foodItem);
    });
}

function addToCart(item) {
    cart.push(item);
    renderCart();
}

function renderCart() {
    cartItemsContainer.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsContainer.appendChild(cartItem);
        total += item.price;
    });
    cartTotal.textContent = total.toFixed(2);
}

renderFoodItems();
