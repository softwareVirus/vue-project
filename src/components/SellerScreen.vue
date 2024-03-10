<template>
    <div>
        <div class="product-info">
            <div class="product-image">
                <img :src="require('@/assets/evv.png')" alt="Product Image">
            </div>
            <div class="product-details">
                <h3>Product Title</h3>
                <p>Product Description</p>
            </div>
        </div>
        <div class="product-ads">
            <h2>{{ productName }} Ads</h2>
            <div class="ads">
                <div class="ad" v-for="(ad, index) in ads" :key="index">
                    <div class="ad-details">
                        <div class="ad-left">
                            <img :src="ad.image" alt="Product Image">
                        </div>
                        <div
                            style="width: 50%; display: flex; flex-direction: column; align-items: flex-start; justify-content: center;">
                            <h3>{{ ad.title }}</h3>
                            <p>{{ ad.description }}</p>
                        </div>
                        <div class="ad-right" style="justify-content: center; display: flex; flex-direction: column;">
                            <p style="margin: 0.5rem 0"><strong>Seller:</strong> {{ ad.sellerName }}</p>
                            <p style="margin: 0.5rem 0"> {{ ad.price }}$</p>
                            <button class="modal-button" @click="openModal(ad)">Select Amount</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ModalScreen :selectedAd="selectedAd" ref="modal"></ModalScreen>
    </div>
</template>

<script>
import ModalScreen from './ModalScreen.vue';
import {products} from '../staticData.js'
export default {
    components: {
        ModalScreen
    },
    data() {
        return {
            productName: "Product X",
            ads: [
            ],
            selectedAd: {}
        };
    },
    mounted() {
        let selectedCategory = this.$route.params.id
        //require('@/assets/building-placeholder.jpg')
        // Dummy data for demonstration
        console.log(selectedCategory)
        this.ads = products[selectedCategory]
    },
    methods: {
        openModal(ad) {
            this.selectedAd = ad;
            this.$refs.modal.openModal();
        }
    }
};
</script>


<style scoped>
.modal-button {
    padding: 10px 20px;
    background-color: #007bff;
    color: #ffffff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.modal-button:hover {
    background-color: #0056b3;
}

.product-ads {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 80vw;
    margin: 2rem auto
}

.ads {
    margin-top: 20px;
    width: 100%;
}

.ad {
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    max-height: 20vh;
    align-items: center;
    overflow: hidden;
}

.ad-details {
    width: 100%;
    justify-content: space-between;
    display: flex;
}

.ad-left {
    flex: 1;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-right: 1rem;
}

.ad-left img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.ad-right {
    width: 15%;
    margin-right: 2rem;
}

.ad-right button {
    margin-top: 5px;
}

.product-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90vw;
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    max-height: 16rem;
    margin: 3rem auto 0;
    overflow: hidden;
    border-radius: 0.5rem;
}

.product-image {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.product-image img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.product-details {
    flex: 2;
    padding: 0 20px;
}

.product-details h3 {
    font-size: 20px;
}

.product-details p {
    font-size: 16px;
    color: #666;
}
</style>
