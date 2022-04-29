class ProductList {
    constructor(container = '.products') {
        this.container = document.querySelector(container);
        this.goods = [];
        this.productObjects = [];

        this.fetchGoods();
        this.render();
    }

    fetchGoods() {
        this.goods = [
            {id: 1, title: 'Notebook', price: 1000},
            {id: 2, title: 'Mouse', price: 100},
            {id: 3, title: 'Keyboard', price: 250},
            {id: 4, title: 'Gamepad', price: 150},
        ];
    }

    render () {
        for(const good of this.goods) {
            const productObject = new ProductItem(good);
            this.productObjects.push(productObject);
            this.container.insertAdjacentHTML('beforeend', productObject.getHTMLString());
        }
    }

    getTotalPrice() {
        let totalPrice = 0;
        for (const obj of this.productObjects) {
            totalPrice += obj.price;
        }
        return totalPrice;
    };
}

class ProductItem {
    constructor(product, img = 'https://via.placeholder.com/200x150') {
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.img = img;
    }

    getHTMLString() {
        return `<div class='product-item' data-id='${this.id}'>
                    <img src='${this.img}' alt='Placeholder'>
                    <div class='desc'>
                        <h3>${this.title}</h3>
                        <p>${this.price}</p>
                        <button class='by-btn'>Добавить</button>
                    </div>
              </div>`;
    }
}

let list = new ProductList();
let totalPrice = list.getTotalPrice();
console.log(totalPrice);

