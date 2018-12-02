class Fetch {
  static get({ url, routes }) {
    return this.myFetch(`${url}${routes}`).then(data => {
      console.log(data.json());
      return data;
    });
  }

  static post({ url, product }) {
    this.myFetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(product)
    }).catch(err => console.log(err));
  }

  static put({ url, product }) {
    this.myFetch(`${url}/${product.id}`, {
      method: "PUT",
      body: JSON.stringify(product)
    }).catch(err => console.log(err));
  }

  static delete({ url, product }) {
    this.myFetch(`${url}/${product.id}`, {
      method: "DELETE",
      body: JSON.stringify(product)
    }).catch(err => console.log(err));
  }

  static myFetch(url, options = null) {
    return fetch(url, options).then(response => {
      if (response.status >= 400) {
        throw new Error("Error", response.tatus);
      }
      return response;
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

Fetch.post(testPutFetch);

Fetch.delete(testPutFetch);
