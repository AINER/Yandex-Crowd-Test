const products = document.querySelectorAll('.product');
let currentDraggedElement;

products.forEach((element) => {
  element.addEventListener('dragstart', (event) => {
    currentDraggedElement = event.target;
  })
})

const dropTarget = document.querySelector('.dropzone');

dropTarget.addEventListener('dragover', (event) => {
  event.preventDefault(); // prevent default to allow drop
})

let addedProducts = 0;
const minQuantityOfAddedProductsForPurchase = 3;
const productInCartContainer = document.querySelector('.product-in-cart-container');

dropTarget.addEventListener('drop', function (e) {
  console.log(currentDraggedElement);
  productInCartContainer.appendChild(currentDraggedElement);
  addedProducts += 1;

  if (addedProducts >= minQuantityOfAddedProductsForPurchase) {
    const payButton = document.querySelector('.pay-button');
    payButton.classList.remove('button-inactive')
  }
})
