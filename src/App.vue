<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-logo">
        <img src="@/assets/logo.png" alt="Logo">
      </div>
      <div class="navbar-categories">
        <select v-model="selectedCategory" @change="filterByCategory">
          <option value="">All Categories</option>
          <option v-for="(category, index) in categories" :key="index" :value="category.title">{{ category.title }}
          </option>
        </select>
      </div>
      <div class="navbar-search">
        <input type="text" v-model="searchQuery" placeholder="Search...">
      </div>
      <div class="navbar-links">
        <router-link to="/about-us" class="navbar-link">About</router-link>
        <router-link to="/contact-us" class="navbar-link">Contact Us</router-link>
        <router-link to="/sign-up" class="navbar-link">Sign Up</router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      searchQuery: '',
      selectedCategory: '',
      categories: [
        { title: "İnşaat - Yapı", image: "https://via.placeholder.com/300x200", id: 'insaat' },
        { title: "Tekstil", image: "https://via.placeholder.com/300x200" },
        { title: "Kimya - İlaç", image: "https://via.placeholder.com/300x200" },
        { title: "Mobilya - Ev", image: "https://via.placeholder.com/300x200" },
        { title: "Metalurji - Madencilik", image: "https://via.placeholder.com/300x200" },
        { title: "Kuru Gıda", image: "https://via.placeholder.com/300x200" },
        { title: "Otomotiv", image: "https://via.placeholder.com/300x200" },
        { title: "Elektronik", image: "https://via.placeholder.com/300x200" },
        { title: "Enerji", image: "https://via.placeholder.com/300x200" },
        { title: "İş Güvenliği Ekipmanları", image: "https://via.placeholder.com/300x200" }
      ]
    };
  },
  methods: {
    filterByCategory() {
      this.$router.push({ path: '/products/'+this.selectedCategory.id, query: { category: this.selectedCategory, search: this.searchQuery } });
    }
  }
}
</script>

<style>
/* Existing CSS styles remain unchanged */

a {
  color: inherit;
  text-decoration: none;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

#app {
  text-align: center;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  padding: 10px 20px;
  background-color: #007bff; /* Green */
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-logo img {
  height: 40px;
}

.navbar-categories {
  flex-grow: 1;
  /* to center the category dropdown */
  text-align: center;
  /* to center the dropdown */
}

.navbar-categories select,
.navbar-search input[type="text"] {
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  /* add border */
  background-color: #fff;
  /* white background */
}

.navbar-categories select {
  width: 200px;
  /* set width */
  appearance: none;
  /* remove default styling */
  -webkit-appearance: none;
  /* remove default styling for webkit */
  -moz-appearance: none;
  /* remove default styling for firefox */
}

.navbar-search input[type="text"] {
  width: 200px;
}

.navbar-links {
  display: flex;
  align-items: center;
  color: white
}

.navbar-links .navbar-link {
  margin-left: 20px;
  color: white;
  font-weight: bold;
  transition: color 0.3s ease;
}

.navbar-links .navbar-link:hover {
  color: white;
}
</style>
