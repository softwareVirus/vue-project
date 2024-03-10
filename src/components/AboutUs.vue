<template>
    <div class="about-us">
        <div>
            <div class="image-container">
                <div class="header">
                    <h2>About Us</h2>
                    <p>Welcome to Our Company</p>
                </div>
            </div>
            <div class="text-container">
                <h3>Our Story</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut ex vitae elit placerat fermentum nec
                    vitae diam. Nullam a lectus nec risus pharetra interdum eget id erat.</p>
                <p>Nullam eget odio ut velit tincidunt auctor. Proin nec orci ullamcorper, faucibus libero sed, eleifend
                    risus.</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutUs',
}
</script>

<style scoped>
.about-us {
    height: calc(100vh - 64px);
    background: url('@/assets/wp3704688-logistics-wallpapers.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
}

.about-us::after {
    content: '';
    position: absolute;
    top: 64px;
    left: 0;
    width: 100%;
    height: calc(100% - 64px);
    background-color: rgba(0, 0, 0, 0.3);
    /* Overlay color */
}

.about-us::before {
    content: '';
    position: absolute;
    top: 64px;
    left: 0;
    width: 100%;
    height: calc(100% - 64px);
    background-image: url('@/assets/wp3704688-logistics-wallpapers.jpg');
    filter: brightness(0.7);
    /* Apply brightness filter */
    z-index: -1;
    /* Send behind the overlay */
}

.image-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 300px;
    background-position: center center;
    text-align: center;
}

.header {
    position: absolute;
    top: 140px;
    left: 43%;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    /* Shadow effect */

    z-index: 999;
    /* White text color */
}

.header h2 {
    font-size: 36px;
    margin-bottom: 10px;
}

.header p {
    font-size: 18px;
}

.image-container img {
    max-width: 100%;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    /* Subtle shadow effect */
}

.text-container {
    padding: 20px;
    position: absolute;
    top: 350px;
    left: 5%;
    z-index: 999;
}

.text-container h3 {
    font-size: 36px;
    color: #333;
    color: #fff;
    /* Dark text color */
    margin-bottom: 20px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    /* Shadow effect */

}

.text-container p {
    font-size: 18px;
    color: #555;
    color: #fff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    /* Shadow effect */

    /* Medium-dark text color */
    line-height: 1.6;
    /* Increased line height for better readability */
}
</style>