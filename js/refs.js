const refs = {
    product() {
        return document.querySelector('.product')
    },
    chevronUp() {
       const shevronsUp =document.querySelector('.fa-chevron-up');
        return shevronsUp

    },
    cartItem() {
      return document.querySelectorAll('.cart-item')
    },
    cartBtn: document.querySelector('.cart-btn'),
    cartOverlay: document.querySelector('.cart-overlay'),
    cart: document.querySelector('.cart'),
    closeCart: document.querySelector('.close-cart'),
    cartTotal: document.querySelector('.cart-total'),
    cartContent: document.querySelector('.cart-content'),
    clearCart: document.querySelector('.clear-cart'),
    removeItem() {
      return  document.querySelectorAll('.remove-item')
    } 
    
}

export default refs