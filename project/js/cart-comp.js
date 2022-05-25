Vue.component('cart', {
    data() {
        return {
            cartProducts: []
        }
    },
    methods: {
        addProduct(product) {
            let item = this.cartProducts.find(prod => prod.id_product == product.id_product);
            if(!item) {
                let prod = Object.assign({quantity: 1}, product);
                this.cartProducts.push(prod)
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
        showCart(){
            console.log('yes');
            let cart = document.querySelector('.cart_block');
            if(cart.style.display == 'none') {
                cart.style.display = 'flex';
            } else {
                cart.style.display = 'none';
            }
        }
    },
    template: ` <div>
                    <button class="btn-cart" type="button" @click="showCart()">Корзина</button>
                    <div class="cart_block" style="display: none">
                        <div class="cart_product_block" v-for="product of cartProducts" :key="product.id_product" :id="'cart-' + product.id_product">
                            <img :src="$parent.$refs.catalog.imgCatalog" alt="Some img" class="cart_product_img">
                            <div class="cart_product">
                                <h3>{{product.product_name}}</h3>
                                <p>{{product.quantity}}</p>
                                <p>x{{product.price * product.quantity}}₽</p>
                                <button class="cart_button" @click="deleteProduct(product)">Убрать</button>
                            </div>
                        </div>
                        <span id="no_products" v-if="!cartProducts.length">Ваша корзина пуста</span>
                    </div>
                </div>`
});

