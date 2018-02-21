
<template>
  <header class="header">
    <nav class="header__menu">
      <div class="header__logo">
        <a href="/">  <img src="../assets/Pictures/frontpage/logo.png"/> </a>
      </div>
      <nav class="menu">
        <div class="menu__login menu--floatl">
          <img src="../assets/Pictures/frontpage/icons/login-icon.png"/>
          <a class="text--openSans" href="/#/contact"> Login </a>
        </div>
        <div class="menu__shop menu--floatl">
          <img src="../assets/Pictures/frontpage/icons/shop-icon.png"/>
          <a class="text--openSans" href="#">Items</a>
        </div>
        <img class="menu--floatl" src="../assets/Pictures/frontpage/icons/search-icon.png"/>
        <img class="menu--floatl" src="../assets/Pictures/frontpage/icons/Menu-icon.png"/>
      </nav>
    </nav>
    <section class="slider">


        <div
          v-for="number in [currentNumber]"
        >
          <img class="slider__picture"
            :src="images[Math.abs(currentNumber) % images.length]"
            v-on:mouseover="stopRotation"
            v-on:mouseout="startRotation"
          />
        </div>


      <button class="slider__button button--black button--display-left" @click="prev">&#10094;</button>
      <button class="slider__button button--black button--display-right" @click="next">&#10095;</button>

    </section>
  </header>

</template>

<script>

  export default {
    name: "web_header",
    data() {
      return {
        images: [require('../assets/Pictures/frontpage/Slider1.png'),require('../assets/Pictures/frontpage/Slider2.png'),require('../assets/Pictures/frontpage/Slider3.png')],
        currentNumber: 0,
        timer: null
      }
    },

    ready: function () {
      this.startRotation();
    },

    methods: {
      startRotation: function() {
        this.timer = setInterval(this.next, 3000);
      },

      stopRotation: function() {
        clearTimeout(this.timer);
        this.timer = null;
      },

      next: function() {
        this.currentNumber += 1
      },
      prev: function() {
        this.currentNumber -= 1
      }
    }
  }




</script>


<style lang="scss" scoped>

</style>
