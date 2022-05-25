Vue.component('search', {
    data() {
        return {
            searchLine: '',
            filtered: [],
        }
    },
    methods: {
        filter(value){
            const regexp = new RegExp(value, 'i');
            this.filtered = this.$parent.$refs.catalog.products.filter(product => regexp.test(product.product_name));
            this.$parent.$refs.catalog.products.forEach(el => {
              const block = document.getElementById(`product-${el.id_product}`);
              if(!this.filtered.includes(el)){
                block.classList.add('invisible');
              } else {
                block.classList.remove('invisible');
              }
            })
        }
    },
    template: `<form action="#" class="search-form">
                <input type="text" class="search-field" v-model="searchLine">
                <button class="btn-search" type="submit" @click="filter(searchLine)">
                    <i class="fas fa-search"></i>
                </button>
                </form>`
});