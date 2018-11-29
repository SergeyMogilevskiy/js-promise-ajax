class Fetch {
  static get({ url, routes }) {
    let arr = [];

    this.myFetch(`${url}${routes}`).then(data => {
      data.forEach(elem => {
        arr.push(elem);
      });
    });
    return arr;
  }

  static post({ url, product }) {
    this.myFetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(product)
    });
  }

  static put({ url, product }) {
    this.myFetch(`${url}/${product.id}`, {
      method: "PUT",
      body: JSON.stringify(product)
    });
  }

  static delete({ url, product }) {
    this.myFetch(`${url}/${product.id}`, {
      method: "DELETE",
      body: JSON.stringify(product)
    });
  }

  static myFetch(options) {
    return fetch(options).then(response => {
      if (response.status >= 400) {
        throw new Error("Error", response.tatus);
      }
      return response.json();
    });
  }
}

const testGetFetch = {
  url:
    "https://my-json-server.typicode.com/tkachenko-tatiana/shop-api/products",
  routes: "?price_gte=2"
};

let elem = Fetch.get(testGetFetch);
console.log(elem);

const testPostFetch = {
  url:
    "https://my-json-server.typicode.com/tkachenko-tatiana/shop-api/products",
  product: {
    name: "Ground almonds",
    price: 3,
    location: "Home baking",
    text: "The almond"
  }
};

Fetch.post(testPostFetch).catch(err => console.log(err));

const testPutFetch = {
  url:
    "https://my-json-server.typicode.com/tkachenko-tatiana/shop-api/products",
  product: {
    id: 6,
    name: "Ground almonds",
    price: 3,
    location: "Home baking",
    text: "The almond"
  }
};

Fetch.post(testPutFetch).catch(err => console.log(err));

Fetch.delete(testPutFetch).catch(err => console.log(err));
