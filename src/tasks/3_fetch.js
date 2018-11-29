const URL = "https://my-json-server.typicode.com/tkachenko-tatiana/shop-api";


class Fetch {
  constructor(url) {
    this.url = url
  }

  get(url) {
    fetch(`${url}/products`)
      .then(response => {
        response.json().then(products => {
          console.log(products);
        });
      })
      .catch(err => console.log(err));
  }
}

let shopApi = new Fetch(URL)

