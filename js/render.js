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
     
     
    //  console.log(refs.product());


     listProductsRef.addEventListener('click', (e) => {
    if (e.target.nodeName !== 'BUTTON') {
        return
    }
    const getDataAtrOnClick = () => e.target.attributes[1].value
         const items = products.items
         const FindIdCurrentEl =()=> items.find(el => {
             if (el.id === getDataAtrOnClick()) {
                //  console.log(el);
       return el
           }
         })
      //  console.log(FindIdCurrentEl());
       cart.abb(FindIdCurrentEl())
      //  console.log(cart.items);
       console.log(cart.totalPrice());
       refs.cartTotal.innerHTML = `${cart.totalPrice()} грн.`
      })
 })

 const markupProductInCart =cart.items.reduce(
  (acc, el) => acc + `
  <div class="wrapper-elem" id="${el.name}">
  <button class="btn-remove-elem" id="${el.name}">X</button>
  <p>${el.name}  -  ${el.quantity} шт.</p>
  </div>`,
  ''
)

  

//    divName.innerHTML = markup;
  // console.log('вы добаили' + FindIdCurrentEl().name);









// let result =''
//     .then(products => {
//         products.forEach(el => {
//             result = `<li class="product">
//           <div class="img-container">
//             <img
//               src="./images/product-1.jpeg"
//               alt="product"
//               class="product-img"
//             />
//             <button class="bag-btn" data-id="1">
//               <i class="fas fa-shopping-cart"></i>
//               add to bag
//             </button>
//           </div>
//           <h3>queen bed</h3>
//           <h4>${el.price}</h4>
//         </li>`
        
//         listProductsRef.insertAdjacentHTML('beforeend',result)
//         });
//         const s = document.querySelector('.product-img')
//  console.log(s);

//     })
        





        /* <li class="product">
          <div class="img-container">
            <img
              src="./images/product-1.jpeg"
              alt="product"
              class="product-img"
            />
            <button class="bag-btn" data-id="1">
              <i class="fas fa-shopping-cart"></i>
              add to bag
            </button>
          </div>
          <h3>queen bed</h3>
          <h4>48 грн.</h4>
        </li>
        <li class="product">
          <div class="img-container">
            <img
              src="./images/product-1.jpeg"
              alt="product"
              class="product-img"
            />
            <button class="bag-btn" data-id="1">
              <i class="fas fa-shopping-cart"></i>
              add to bag
            </button>
          </div>
          <h3>queen bed</h3>
          <h4>75 грн.</h4>
        </li>
        <li class="product">
          <div class="img-container">
            <img
              src="./images/product-1.jpeg"
              alt="product"
              class="product-img"
            />
            <button class="bag-btn" data-id="1">
              <i class="fas fa-shopping-cart"></i>
              add to bag
            </button>
          </div>
          <h3>queen bed</h3>
          <h4>150 грн.</h4>
        </li>
        <li class="product">
          <div class="img-container">
            <img
              src="./images/product-1.jpeg"
              alt="product"
              class="product-img"
            />
            <button class="bag-btn" data-id="1">
              <i class="fas fa-shopping-cart"></i>
              add to bag
            </button>
          </div>
          <h3>queen bed</h3>
          <h4>1200 грн.</h4>
        </li>
        <li class="product">
          <div class="img-container">
            <img
              src="./images/product-1.jpeg"
              alt="product"
              class="product-img"
            />
            <button class="bag-btn" data-id="1">
              <i class="fas fa-shopping-cart"></i>
              add to bag
            </button>
          </div>
          <h3>queen bed</h3>
          <h4>10 грн.</h4>
        </li>
        <li class="product">
          <div class="img-container">
            <img
              src="./images/product-1.jpeg"
              alt="product"
              class="product-img"
            />
            <button class="bag-btn" data-id="1">
              <i class="fas fa-shopping-cart"></i>
              add to bag
            </button>
          </div>
          <h3>queen bed</h3>
          <h4>120 грн.</h4>
        </li>
        <li class="product">
          <div class="img-container">
            <img
              src="./images/product-1.jpeg"
              alt="product"
              class="product-img"
            />
            <button class="bag-btn" data-id="1">
              <i class="fas fa-shopping-cart"></i>
              add to bag
            </button>
          </div>
          <h3>queen bed</h3>
          <h4>85 грн.</h4>
        </li>
        <li class="product">
          <div class="img-container">
            <img
              src="./images/product-1.jpeg"
              alt="product"
              class="product-img"
            />
            <button class="bag-btn" data-id="1">
              <i class="fas fa-shopping-cart"></i>
              Добавить в корзину
            </button>
          </div>
          <h3>queen bed</h3>
          <h4>15 грн.</h4>
        </li>
      </ul> */