async function getAllProducts() {
  const response = await fetch('https://dummyjson.com/products')

  const data = await response.json()

  console.log(data)
}

async function getProduct(idProduct) {
  const response = await fetch('https://dummyjson.com/products/' + idProduct)

  const data = await response.json()

  console.log(data)
}

async function addProduct(product) {
  const response = await fetch('https://dummyjson.com/products/add', {
    method: 'POST',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify(product)
  })

  const data = await response.json()

  console.log(data)
}

async function updateProduct(idProduct, product) {
  const response = await fetch('https://dummyjson.com/products/' + idProduct, {
    method: 'PUT',
    headers: new Headers({
      'content-type': 'application/json',
    }),
    body: JSON.stringify(product)
  })

  const data = await response.json()

  console.log(data)
}

async function deleteProduct(idProduct) {
  const response = await fetch('https://dummyjson.com/products/' + idProduct, {
    method: 'DELETE',
  })

  const data = await response.json()

  console.log(data)
}
// async function iniciarProcesso() {
//   const product = await getProduct()
//   // ..
// }

const objJs = {
  name: "Amora",
  age: 0.5,
}

// const jsonEx = "{\"name\":\"Amora\",\"age\":0.5}"

// console.log(JSON.parse(jsonEx))
// console.log(JSON.stringify(objJs))

// addProduct({
//   title: 'Macbook M24 - Modelo novinho',
//   price: 15000,
// })
// updateProduct(1, {
//   title: 'Meu produto atualizado',
//   description: 'Lorem impsum, mussum.',
//   price: 0.25,
// })  

// deleteProduct(1)

getAllProducts()

