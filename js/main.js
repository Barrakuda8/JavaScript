const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
// переписать на промис (!!!!!!!не fetch !!!!!!!!!!)
// Далее НЕ ИСПОЛЬЗОВАТЬ В КОДЕ!
let getRequest = (url) => {
  let xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = (a) => {
    return new Promise((resolve, reject) => {
        if (xhr.readyState === 4) {
            if(a === 200) {
                resolve(xhr.responseText);
            } else {
                reject('Error');
            }
        }
    });
  };
  xhr.send();
};
// ---------------------------------

class ProductList {
  constructor(container = '.products') {
    this.container = document.querySelector(container);
    this.goods = [];
    this.productObjects = [];

    this.getProducts()
        .then((data) => {
          this.goods = data;
          this.render();
        });
  }

  getProducts() {
    return fetch(`${API}/catalogData.json`)
        .then(response => response.json())
        .catch(err => console.log(err));
  }

  render() {
    for (const good of this.goods) {
      const productObject = new ProductItem(good);
      console.log(productObject);
      this.productObjects.push(productObject);

      this.container.insertAdjacentHTML('beforeend', productObject.getHTMLString());
    }
  }
}

class ProductItem {
  constructor(product, img='https://via.placeholder.com/200x150') {
    this.id = product.id;
    this.title = product.title;
    this.price = product.price;
    this.img = img;
  }

  getHTMLString() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
  }
}

new ProductList();


