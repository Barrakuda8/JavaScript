Vue.component('catalog', {
    data() {
        return {
            catalogUrl: '/catalogData.json',
            products: [],
            imgCatalog: 'https://via.placeholder.com/200x150'
        }
    },
    template: `<div class="products">
                    <div class="product-item" v-for="product of products" :key="product.id_product" :id="'product-' + product.id_product">
                        <img :src="imgCatalog" alt="Some img">
                        <div class="desc">
                            <h3>{{product.product_name}}</h3>
                            <p>{{product.price}}₽</p>
                            <button class="buy-btn" @click="$parent.$refs.cart.addProduct(product)">Купить</button>
                        </div>
                    </div>
                </div>`,
    created() {
        this.$parent.getJson(`${API + this.catalogUrl}`)
            .then(data => {
                for (let el of data) {
                    this.products.push(el);
                }
            });
    }
});