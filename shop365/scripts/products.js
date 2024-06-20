import { addProductToCart } from './cart.js'

const productListElement = document.querySelector('.products')

async function getAllProducts() {
  try {
    const response = await fetch('https://dummyjson.com/products?limit=10')

    const data = await response.json()

    return data.products

  } catch (error) {
    console.log(error)
    return []
  }
}

/**
 * Função responsavel por criar elemento de produtos
 */
function createElementProduct(product) {
  /**
   * div => .product-card
   *  --- strong => titulo
   *  --- span => valor
   *  --- button => adicionar ao carrinho
   */
  const productCardElemento = document.createElement('div')
  productCardElemento.classList.add('product-card')

  const productImageElement = document.createElement('img')
  productImageElement.src = product.thumbnail
  productImageElement.alt = product.title

  const tituloElemento = document.createElement('strong')
  tituloElemento.innerHTML = product.title

  const priceFormatted = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)

  const valorElemento = document.createElement('span')
  valorElemento.innerHTML = priceFormatted

  const buttonElemento = document.createElement('button')

  /** Evento p/ adicionar no carrinho de compras */
  buttonElemento.addEventListener('click', () => addProductToCart({
    id: product.id,
    title: product.title,
    price: product.price
  }))

  buttonElemento.innerText = "Adicionar"

  productCardElemento.appendChild(productImageElement)
  productCardElemento.appendChild(tituloElemento)
  productCardElemento.appendChild(valorElemento)
  productCardElemento.appendChild(buttonElemento)

  return productCardElemento;
}


async function renderProducts() {
  const products = await getAllProducts()
  // console.log(products)
  productListElement.innerHTML = ""

  products.forEach(product => {
    const productItemElemento = createElementProduct(product)
    productListElement.appendChild(productItemElemento)
  })
}

renderProducts()