const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class Basket {
    constructor() {
        this.goods = [];

        this.getBasket();
    }

    getBasket() {
        return fetch(`${API}/getBasket.json`)
        .then((data) => {for (good of data.contents) {this.addGood(good)}})
        .catch(err => console.log(err));
    }

    /* не понял, как конкретно нужно было использовать информацию с api для добавления и удаления, поэтому сделал так */

    addGood(good) {
        this.goods.push(new Good(good));
    }

    deleteGood(good) {
        delete this.goods[good];
    }

    getTotalCost() {
        let totalCost = 0;
        for (good of this.goods) {
            totalCost += good.price;
        }
        return totalCost;
    }

    getTotalQuantity() {
        return this.goods.length;
    }
}

class Good {
    constructor(good) {
        this.id = good.id_product;
        this.name = good.product_name;
        this.price = good.price;
    }
}

new Basket();