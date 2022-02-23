const cart = function() {
    const cartBtn = document.querySelector('.button-cart');
    const cart= document.getElementById('modal-cart');
    const closeBtn = cart.querySelector('.modal-close');

    cartBtn.addEventListener('click', () => cart.style.display = 'flex');
    closeBtn.addEventListener('click', () => cart.style.display = '');
}

cart();