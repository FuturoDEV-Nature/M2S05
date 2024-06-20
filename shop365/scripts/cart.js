const cartListElement = document.querySelector('.products-cart')
const PRODUCTS_CART_KEY_LOCALSTORAGE = 'products-cart'

// <div class="product-cart-item">
//   <strong>MacBook Pro 13” Big Discount</strong>
//   <span>R$ 25.000</span>
// </div>

function createElementProductCart(product) {
  const productCardElement = document.createElement('div')
  productCardElement.classList.add('product-cart-item')

  const productTitleElement = document.createElement('strong')
  productTitleElement.innerText = product.title

  const productPriceElement = document.createElement('span')

  const priceFormmated = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)

  productPriceElement.innerText = priceFormmated

  productCardElement.appendChild(productTitleElement)
  productCardElement.appendChild(productPriceElement)

  return productCardElement;

}


// recuperar a lista no localstorage
// renderizar a lista
/** DTO
 * {
 *  id: 1,
 *   title: '',
 *   price: 0
 * }
 */
function getProductsCart() {
  const productsLocalStorage = localStorage.getItem(PRODUCTS_CART_KEY_LOCALSTORAGE)

  cartListElement.innerHTML = ""

  if (productsLocalStorage) {
    const products = JSON.parse(productsLocalStorage)

    products.forEach(product => {
      const productItemElement = createElementProductCart(product)

      cartListElement.appendChild(productItemElement)
    })
  }
}


// adicionar a lista o produto
export function addProductToCart(product) {
  console.log('adicionou')
  const productsLocalStorage = localStorage.getItem(PRODUCTS_CART_KEY_LOCALSTORAGE)

  if (productsLocalStorage) {
    const productsConvert = JSON.parse(productsLocalStorage) // [{},{}]

    productsConvert.push(product)

    localStorage.setItem(PRODUCTS_CART_KEY_LOCALSTORAGE, JSON.stringify(productsConvert))

  } else {
    const newCartList = [product]

    localStorage.setItem(PRODUCTS_CART_KEY_LOCALSTORAGE, JSON.stringify(newCartList))
  }

  getProductsCart()
}

getProductsCart()