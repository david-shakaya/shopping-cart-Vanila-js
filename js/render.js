const listProductsRef = document.querySelector('.list-products-js');

const getProducts= async () => {
    const response = await fetch('../products.json');
    const products = response.json();
  return products;
};


export default function renderTamplate() {
    let result = ''
    getProducts().then(products => {
     products.items.forEach(el => {
            result += `<li class="product">
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
          <h4>${el.price}</h4>
        </li>`
    });
        listProductsRef.insertAdjacentHTML('beforeend', result)  
        return result
});
}













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