

class Fetch {
  
  static get(url, option) {

  }
  static post(url, option) {}
  static put(url, option) {}
  static delete(url, option) {}
  
  fetch(url, option) {
    fetch(`${url}/products`)
    .then(response => {
      response.json().then(products => {
        console.log(products);
      });
    })
    .catch(err => console.log(err));
  }  
}

const URL = "https://my-json-server.typicode.com/tkachenko-tatiana/shop-api";


shopApi.get(URL)

