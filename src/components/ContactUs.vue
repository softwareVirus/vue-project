<template>
    <div class="contact-us">
        <h2>Contact Us</h2>
        <div class="contact-info">
            <div class="contact-details">
                <h3>Our Address</h3>
                <p>123 Main Street City, State, ZIP</p>
            </div>
            <div class="contact-details">
                <h3>Email</h3>
                <p>info@example.com</p>
            </div>
            <div class="contact-details">
                <h3>Phone</h3>
                <p>+1 234 567 890</p>
            </div>
        </div>
        <form class="contact-form" @submit.prevent="submitForm">
            <h3>Send Us a Message</h3>
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" v-model="formData.name" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" v-model="formData.email" required>
            </div>
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" v-model="formData.message" rows="5" required></textarea>
            </div>
            <button type="submit">Send</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'ContactUs',
    data() {
        return {
            formData: {
                name: '',
                email: '',
                message: ''
            }
        };
    },
    methods: {
        submitForm() {
            // Send form data to server or handle as needed
            console.log('Form submitted:', this.formData);
            // Clear form fields
            this.formData.name = '';
            this.formData.email = '';
            this.formData.message = '';
        }
    }
};
</script>

<style scoped>
.contact-us {
    text-align: center;
}

.contact-info {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}

.contact-details {
    margin: 0 20px;
}

.contact-details h3 {
    font-size: 20px;
    margin-bottom: 10px;
}

.contact-details p {
    font-size: 16px;
    color: #666;
}

.contact-form {
    max-width: 500px;
    margin: 0 auto;
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    font-size: 16px;
    margin-bottom: 5px;
}

input[type="text"],
input[type="email"],
textarea {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

textarea {
    resize: vertical;
    min-height: 100px;
}

button {
    padding: 10px 20px;
    font-size: 18px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover {
    background-color: #0056b3;
}
</style>