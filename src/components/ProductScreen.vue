<template>
    <div class="category-products">
        <div class="sidebar">
            <h2>Filters</h2>
            <div class="filter" v-for="kind in kinds" :key="kind">
                <input type="checkbox" :id="kind" v-model="selectedKinds" :value="kind">
                <label :for="kind">{{ kind }}</label>
            </div>
            <div class="filter">
                <h3>Price</h3>
                <input type="text" v-model="priceFilter" placeholder="Enter price...">
            </div>
        </div>
        <div>
            <h2>Products</h2>
            <div class="products">
                <div class="product" v-for="(product, index) in filteredProducts" :key="index">
                    <router-link :to="'/product-sellers/'+product.id">
                        <div class="product-image">
                            <img :src="product.image" :alt="'Product ' + index">
                        </div>
                        <div class="product-details">
                            <h3 class="product-title">{{ product.name }}</h3>
                            <p class="product-description">{{ product.description }}</p>
                        </div>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {products} from '../staticData.js'

export default {
    data() {
        return {
            selectedKinds: [],
            priceFilter: '',
            products: [],
            kinds: ['Kind 1', 'Kind 2', 'Kind 3'], // Example kinds
            placeholderImage: require('@/assets/building-placeholder.jpg') // Placeholder image
        };
    },
    computed: {
        filteredProducts() {
            let filtered = this.products;
            if (this.selectedKinds.length > 0) {
                filtered = filtered.filter(product => this.selectedKinds.includes(product.kind));
            }
            if (this.priceFilter) {
                filtered = filtered.filter(product => product.price <= parseInt(this.priceFilter));
            }
            return filtered;
        }
    },
    mounted() {
        let selectedCategory = this.$route.params.id
        //require('@/assets/building-placeholder.jpg')
        // Dummy data for demonstration
        console.log(selectedCategory, products, products[selectedCategory])
        this.products = products[selectedCategory]
    }
};
</script>

<style scoped>
.category-products {
    display: flex;
    width: 80vw;
    margin: 0 auto;
    align-items: flex-start;
    /* Align items to the start */
}

.sidebar {
    padding: 20px;
    background-color: #f2f2f2;
    border-radius: 10px;
    margin-right: 20px;
    margin-top: 5.5rem;
    max-width: 20vw;
    text-align: left;
    /* Align content to the left */
}

.products {
    padding: 20px;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
}

.filter {
    margin-bottom: 20px;
}

.filter input[type="checkbox"] {
    margin-right: 5px;
}

.product {
    width: calc(31.5%);
    /* Four products per row */
    margin-bottom: 20px;
    display: flex;
    flex-direction: column;
    border: 1px solid #dcdcdc;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
    cursor: pointer;
}

.product:hover {
    transform: translateY(-5px);
}

.product-image {
    width: 100%;
    height: 300px;
    margin-right: 20px;
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.product-details {
    flex: 1;
    padding: 10px;
}

.product-details .product-title {
    margin-bottom: 10px;
    font-size: 20px;
    color: #333;
}

.product-details .product-description {
    font-size: 16px;
    color: #666;
}
</style>
