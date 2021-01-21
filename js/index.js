import './render.js'
import refs from './refs.js'

refs.cartBtn.addEventListener('click', onHandleShowCart)
refs.closeCart.addEventListener('click', onHandlecloseCart)

function onHandleShowCart() {
  refs.cart.classList.add('showCart')
  refs.cartOverlay.classList.add('transparentBcg')
}


function onHandlecloseCart() {
    refs.cart.classList.remove('showCart')
  refs.cartOverlay.classList.remove('transparentBcg')
}




