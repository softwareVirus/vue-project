<template>
    <div>
        <div class="category-container">
            <div class="category-card" v-for="(category, index) in filteredCategories" :key="index">
                <router-link :to="'products/' + category.id">
                    <div class="category-image">
                        <img :src="category.image" alt="Category Image">
                    </div>
                    <div class="category-title">{{ category.title }}</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            searchQuery: '',
            categories: [
                { title: "İnşaat - Yapı", image: require("@/assets/depositphotos_149444160-stock-illustration-materials-for-construction-3d-illustration.png"), id: 'insaat' },
                { title: "Tekstil", image: require("@/assets/sewing-background.png") , id: 'tekstil'},
                { title: "Kimya - İlaç", image: require("@/assets/bC3B6cek-imha-dezenfeksiyon-kimyasallarC4B1-seti.png"), id: 'kimya' },
                { title: "Mobilya - Ev", image: require("@/assets/evv.png"), id: 'mobilya'},
                { title: "Metalurji - Madencilik", image: require("@/assets/roll-of-steel-sheet-in-factory.png"), id: 'metalurji' },
                { title: "Kuru Gıda", image: require("@/assets/depositphotos_53255667-stock-photo-wheat-in-bag-and-scoop.png") , id: 'kurugida'}
            ]
        };
    },
    computed: {
        filteredCategories() {
            return this.categories.filter(category =>
                category.title.toLowerCase().includes(this.searchQuery.toLowerCase())
            );
        }
    }
};
</script>

<style scoped>
.category-container {
    display: flex;
    width: 80vw;
    margin: 2rem auto 0;
    flex-wrap: wrap;
    justify-content: space-between;
}

.category-card {
    width: calc(33.33% - 20px);
    margin-bottom: 20px;
    position: relative;
    cursor: pointer;
    transition: transform 0.3s ease;
    border-radius: 10px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
}

.category-card:hover {
    transform: translateY(-5px);
}

.category-image {
    width: 100%;
    height: 300px;
    /* Increased height */
    border-radius: 10px 10px 0 0;
    overflow: hidden;
}

.category-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.category-title {
    text-align: center;
    font-weight: bold;
    padding: 10px;
    background-color: #f2f2f2;
    border-radius: 0 0 10px 10px;
}
</style>
