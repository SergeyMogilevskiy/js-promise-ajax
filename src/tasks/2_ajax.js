const URL = "https://my-json-server.typicode.com/tkachenko-tatiana/shop-api";

// task 1 +
function getProducts() {
  fetch(`${URL}/products`).then(response => {
    response.json().then(products => {
      console.log(products)
    })
  })
  .catch(err => console.log(err))
}

getProducts();

// task 2 +
function getProductById(id) {
  fetch(`${URL}/products/${id}`).then(response => {
    response.json().then(product => {
      console.log(product)
    })
  })
  .catch(err => console.log(err))
}

getProductById();


// task 3 +
function createProduct (product) {
  fetch(`${URL}/products`, {
    method: "POST",
    body: JSON.stringify(product)
  })
  .catch(err => console.log(err))
}

createProduct();


// task 4+
function updateProduct (product) {
  fetch(`${URL}/products/${product.id}`, {
    method: "PUT",
    body: JSON.stringify(product)
  })
  .catch(err => console.log(err))
}

updateProduct();

// task 5 +/-
function deleteProduct (id) {
  fetch(`${URL}/products/${id}`, {
    method: "delete"
  })
  .catch(err => console.log(err))
}

deleteProduct();

// task 6
// Вывести 5 товаров, спросить у пользователя "Показать больше?"
// Если да - показать еще 5 товаров, если нет выйти и т.д.
let page = 1
function getProductsList() {
  fetch(`${URL}/products?_page=${page++}&_limit=5`).then(response => {
    response.json().then(products => {
      console.log(products)
    })
  })

}

async function showProducts () {
  
  await getProductsList()
  let question = confirm("Show more ?");
  if (question == true) {
    showProducts ();
  }
}

showProducts();


//task 7+
// Вывести все товары, найменование которых равно аргументу функции
function getProductByName(name) {
  fetch(`${URL}/products?name=${name}`).then(response => {
    response.json().then(products => {
      console.log(products)
    })
  })
  .catch(err => console.log(err))

}

getProductByName();

// task 8+
// Вывести все товары, цена которых больше или равна аргумента функции
function getProductsByPrice(price) {
  fetch(`${URL}/products?price_gte=${price}`).then(response => {
    response.json().then(products => {
      console.log(products)
    })
  })
  .catch(err => console.log(err))

}

getProductsByPrice();

// task 9+
// Вывести все товары в порядке убывания/возрастания цены в зависимости от аргумента функции
function sortByPrice(order) {
  fetch(`${URL}/products?_sort=price&_order=${order}`).then(response => {
    response.json().then(products => {
      console.log(products)
    })
  })
  .catch(err => console.log(err))

}

sortByPrice("desc");

