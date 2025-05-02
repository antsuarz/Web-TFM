document.addEventListener('DOMContentLoaded', () => {

    const addToCartButtons = document.querySelectorAll('section > button');
    const cart = document.getElementById('cart');
    const cartCount = document.getElementById('cart-count');
    const cartModal = document.getElementById('cart-modal');
    const closeModal = document.getElementById('close-modal');
    const cartItemsList = document.getElementById('cart-items-list');
    const totalPrice = document.getElementById('total-price');

    let cartItemCount = 0;
    let cartItems = [];
    let total = 0;

    /**
     * Actualiza el carrito de la compra mostrando los productos añadidos y el precio total.
     */
    function updateCart() {
        cartItemsList.innerHTML = '';
        cartItems.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.name} - ${item.price.toFixed(2)} €`;

            createCartRemoveButton(index, listItem);
            cartItemsList.appendChild(listItem);
        });

        totalPrice.textContent = `${total.toFixed(2)} €`;
    }

    /**
     * Función que añade un producto al carrito de la compra.
     * @param {*} productName, nombre del producto que se añade al carrito. 
     * @param {*} productPrice , precio del producto que se añade al carrito.
     */
    function addToCart(productName, productPrice) {
        cartItemCount++;
        cartCount.textContent = cartItemCount;

        cartItems.push({ name: productName, price: productPrice });

        total += productPrice;
        updateCart();
    }

    /**
     * Función que elimina un producto del carrito de la compra.
     * @param {*} index, índice del producto que se quiere eliminar del carrito.
     */
    function removeItem(index) {
        const item = cartItems.splice(index, 1)[0];
        cartItemCount--;
        if (cartItemCount == 0) {
            cartCount.textContent = '';
            cartModal.style.display = 'none';
        }
        else {
            cartCount.textContent = cartItemCount;
        }

        total -= item.price;
        updateCart();
    }

    /**
     * Función que crea un botón para eliminar un producto del carrito de la compra.
     * @param {*} index, índice del producto que se quiere eliminar del carrito.
     * @param {*} listItem, elemento de la lista donde se añade el botón.
    */

    function createCartRemoveButton(index, listItem) {
        const removeButton = document.createElement('button');
        removeButton.classList.add('remove-item');
        removeButton.id = 'remove-button';
        removeButton.style.backgroundImage = 'url("./img/delete.png")';
        removeButton.style.backgroundSize = 'contain';
        removeButton.style.backgroundRepeat = 'no-repeat';
        removeButton.style.backgroundPosition = 'center';
        removeButton.style.width = '20px';
        removeButton.style.height = '20px';
        removeButton.style.border = 'none';
        removeButton.style.cursor = 'pointer';
        removeButton.addEventListener('click', () => removeItem(index));
    
        listItem.appendChild(removeButton);
    }

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const cardContent = e.target.closest('.card-content');
            const productName = cardContent.querySelector('h4').textContent;
            const productPrice = parseFloat(cardContent.querySelector('p').textContent.replace(' €', ''));

            addToCart(productName, productPrice);
        });
    });

    cart.addEventListener('click', () => {
        if (cartItemCount != 0) {
            cartModal.style.display = 'block';
            updateCart();
        }

    });

    closeModal.addEventListener('click', () => {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });
});




