<template>
    <div class="signup-container">
        <h2>Sign Up</h2>
        <form @submit.prevent="submitForm">
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" v-model="formData.username" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="formData.email" required>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" v-model="formData.password" required>
            </div>
            <div class="form-group">
                <label for="confirmPassword">Confirm Password:</label>
                <input type="password" id="confirmPassword" v-model="formData.confirmPassword" required>
            </div>
            <button type="submit">Sign Up</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                username: '',
                email: '',
                password: '',
                confirmPassword: ''
            }
        };
    },
    methods: {
        submitForm() {
            if (this.formData.password !== this.formData.confirmPassword) {
                alert('Passwords do not match');
                return;
            }
            // Handle form submission
            console.log('Form submitted:', this.formData);
            // You can make an API call here to submit the form data to your backend
        }
    }
};
</script>

<style scoped>
.signup-container {
    max-width: 400px;
    margin: 5rem auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
input[type="password"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

button {
    display: block;
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    background-color: #007bff;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
}

button:hover {
    background-color: #0056b3;
}
</style>