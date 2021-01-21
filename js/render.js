const listProductsRef = document.querySelector('.list-products-js');

import refs from './refs.js'
import cart from './shopping-cart.js';

const getProducts= async () => {
    const response = await fetch('../products.json');
    const products = response.json();
  return products;
};
let numberData =0
let result = ''
 getProducts().then(products => {
     products.items.forEach(el => {
         numberData+=1
            result += `<li class="product">
          <div class="img-container">
            <img
              src="${el.img.url}"
              alt="product"
              class="product-img"
            />
            <button class="bag-btn" data-id="${numberData}">
              <i class="fas fa-shopping-cart"></i>
              add to bag
            </button>
          </div>
          <h3>${el.name}</h3>
          <h4>${el.price} грн.</h4>
        </li>`
    });
     listProductsRef.insertAdjacentHTML('beforeend', result)  
     
   addedProductInCart(products)
 })



  

//    divName.innerHTML = markup;
  // console.log('вы добаили' + FindIdCurrentEl().name);

   function addedProductInCart (products) {
     listProductsRef.addEventListener('click', (e) => {
         console.log('sddssds');
    if (e.target.nodeName !== 'BUTTON') {
        return
    }
    const getDataAtrOnClick = () => e.target.attributes[1].value
         const items = products.items
         const FindIdCurrentEl =(getData)=> items.find(el => {
             if (el.id === getData) {
       return el
           }
         })
       cart.abb(FindIdCurrentEl(getDataAtrOnClick()))
       console.log(cart.totalPrice());
       
       renderProductInCartContent()
       

         
        //  console.log(refs.chevronUp());
        // const chevronId = refs.cartItem().children   /* [2].firstElementChild *//* .dataset.id */

      

       })
}
   
function fnRemove(e) {
  console.log(e.target.nextElementSibling);
  const numberItem = (Number(e.target.dataset.id));
  cart.getItems().find(el => {
    if (el.id === e.target.dataset.id) {
      console.log(el);
       cart.abb(el)
      refs.cartContent.innerHTML = refs.cartItem();
      renderProductInCartContent()
      
  }
})
  // if (cart.items.id[+e.target.dataset.id]) {
  //   console.log(cart.items.id[+e.target.dataset.id]);
  // }
  
}

function renderProductInCartContent() {
  const markupProductInCart =cart.items.reduce(
  (acc, el) => acc + 
                   ` <div class="cart-item">
                    <img src="${el.img.url}" alt="${el.name}">
                    <div>
                        <h4>${el.name}</h4>
                        <h5>${el.price}</h5>
                        <span class="remove-item">Удалить</span>
                    </div>
                    <div>
                        <i class="fas fa-chevron-up" data-id="${el.id}"></i>
                        <p class="item-amount">${el.quantity}</p>
                        <i class="fas fa-chevron-down" data-id="${el.id}"></i>
                    </div></div>`, ''
  )
  
  refs.cartContent.innerHTML = markupProductInCart;
  refs.cartTotal.innerHTML = `${cart.totalPrice()} грн.`
   refs.cartItem().forEach(item => {
            item.children[2].firstElementChild.addEventListener('click', fnRemove)
           })

  // console.log('вы добаили' + FindIdCurrentEl().name);
}