const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
    el: '#app',
    data: {
        catalogUrl: '/catalogData.json',
        products: [],
        imgCatalog: 'https://via.placeholder.com/200x150',
        searchLine: '',
        filtered: [],
        cartProducts: []
    },
    methods: {
        getJson(url) {
            return fetch(url)
                .then(result => result.json())
                .catch(error => {
                    console.log(error);
                })
        },
        addProduct(product) {
            let item = this.cartProducts.find(prod => prod.id_product == product.id_product);
            if(!item) {
                /* this.cartProducts.push(product);
                this.cartProducts.find(prod => prod == product)['quantity'] = 1; */
                let prod = Object.assign({quantity: 1}, product);
                this.cartProducts.push(prod)
                /* мой вариант выше не менял количество реактивно. рабочий вариант пришлось взять из проверки дз */
            } else {
                item.quantity++;
            }
        },
        deleteProduct(product) {
            let item = this.cartProducts.find(prod => prod == product);
            if(item.quantity > 1) {
                item.quantity--;
            } else {
                this.cartProducts.splice(this.cartProducts.indexOf(item));
            }
        },
        filter(value){
            const regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(product => regexp.test(product.product_name));
            this.products.forEach(el => {
              const block = document.getElementById(`product-${el.id_product}`);
              if(!this.filtered.includes(el)){
                block.classList.add('invisible');
              } else {
                block.classList.remove('invisible');
              }
            })
        },
        showCart(){
            let cart = document.querySelector('.cart_block');
            if(cart.style.display == 'none') {
                cart.style.display = 'flex';
            } else {
                cart.style.display = 'none';
            }
        }
    },
    created() {
        this.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            });
    }
});
