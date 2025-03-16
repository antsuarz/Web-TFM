const cartElement = document.getElementById('cart'); 
const addToCartButtons = document.querySelectorAll('.card button'); 
let cartCount = 0; 
addToCartButtons.forEach(button => {
    button.addEventListener('click', function() { 
        cartCount++; 
        cartElement.textContent = cartCount;
    });
});