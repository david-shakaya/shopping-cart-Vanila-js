import renderTamplate from './render.js'
renderTamplate()

document
const s = document.querySelector('.product-img')
 console.log(s)

const cart = {
  items: [],
  getItems() {
    return this.items;
  },
  abb(product) {
    for (const item of this.items) {
      if (product.name === item.name) {
        return (item.quantity += 1);
      }
    }

    product.quantity = 1;
    this.items.push(product);
  },
  minusResidue(prod) {
     for (const item of this.items) {
      if (prod.name === item.name) {
        return (item.residue -=1);
      }
    }
    this.items.push(prod);
  },
  remove(productName) {
    console.log(`Удаляем продукт ${productName}`);

    for (let i = 0; i < this.items.length; i += 1) {
      if (productName === this.items[i].name) {
        this.items.splice(i, 1);
      }
    }
  },
  clear() {
    this.items.splice(0); 
  },
  totalPrice() {
    let totalPrice = 0;
    for (const item of this.items) {
      totalPrice += item.price * item.quantity;
    }
    return totalPrice;
  },
};






