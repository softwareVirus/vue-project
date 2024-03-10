<template>
    <div class="modal" v-show="showModal">
        <div class="modal-content">
            <div style="display: flex; justify-content: flex-end;">
                <span class="close" @click="closeModal">&times;</span>
            </div>
            <h2 class="modal-title">Select Amount</h2>
            <div class="modal-body">
                <p class="modal-price">Max Amount: {{ selectedAd.amount }}</p>
                <p class="modal-price">Price: ${{ selectedAd.price * amount }}</p>
                <input class="modal-input" type="number" v-model="amount" min="1" :max="selectedAd.amount">
                <button class="modal-button" @click="addToCart">Add to Cart</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalScreen',
    props: ['selectedAd'],
    data() {
        return {
            showModal: false,
            amount: 1
        };
    },
    methods: {
        openModal() {
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
        },
        addToCart() {
            // Handle adding to cart
            console.log("Added to cart:", this.selectedAd.title, "Amount:", this.amount);
            this.closeModal();
        }
    }
};
</script>

<style scoped>
.modal {
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
}

.modal-content {
    background-color: #ffffff;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    padding: 20px;
    max-width: 400px;
    width: 80%;
}

.close {
    color: #aaaaaa;
    font-size: 24px;
    top: 10px;
    text-align: right;
    width: 100%;
    right: 10px;
    cursor: pointer;
}

.modal-title {
    font-size: 24px;
    margin-bottom: 10px;
}

.modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.modal-price {
    font-size: 18px;
    margin: 0 0 1rem;
}

.modal-input {
    width: 100%;
    padding: 10px;
    border: 1px solid #dddddd;
    border-radius: 4px;
    margin-bottom: 10px;
}

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
</style>