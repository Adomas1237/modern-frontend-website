<template>
  <section class="one-product">
    <div class="one-product__picture">
      <img :src= "product.picture"/>
    </div>
      <div class="one-product__description">
        <div class="one-product__text"><h1 class="text--openSans one-product__text-h1"> {{product.text}}</h1> </div>
        <div class="one-product__price">
          <h1> {{product.price}} </h1>
          <p class="one-product__smalltext text--openSans"><img class="one-product__icon" src="../assets/Pictures/internet.svg"/> Free Shipping Worldwide </p>


        </div>
        <div class="one-product__button"><button class="one-product__button-b">
          <p class="text--openSans one-product__text-but"> Black </p> </button></div>
        <div class="one-product__button"><button class="one-product__button-b">
          <p class="text--openSans one-product__text-but"> Select size </p> </button></div>
        <div class="one-product__button"><button class="one-product__button-bl">
          <p class="text--openSans one-product__text-butB">
            <img class="one-product__icon" src="../assets/Pictures/frontpage/icons/shop-icon.png">
            Add to bag </p> </button></div>
      </div>
    <div class="large-text">
      <h1 class="text--openSans large-text__bigger">Sharpen your look</h1>
      <p class="text--openSans large-text__smaller">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Dolore dolorum natus reprehenderit suscipit voluptatum? Accusamus, at consequatur, doloremque iste magni molestias,
        nemo odit quae quaerat rerum sed unde veniam voluptate.Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Dolore dolorum natus reprehenderit suscipit voluptatum? Accusamus, at consequatur, doloremque iste magni molestias,
        nemo odit quae quaerat rerum sed unde veniam voluptate.</p>
    </div>
    <div class="information">
    <img class="information__picture" :src = "product.picture"/>
    <div class="information__text">
      <div class="information__content">
        <h1 class="information__bigtext text--openSans">Extraordinary design</h1>
        <p class="text--openSans information__smalltext">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          , asperiores beatae dolore, earum nemo quidem quisquam quos repellat temporibus ullam, vel vitae.
          Commodi consectetur dolorum inventore quod saepe tempore vitae.</p>
        <div class="information__icons">
          <div class="information__icon">
            <img class="information__icon-pic" src="../assets/Pictures/eyeglasses.svg"/>
            <p class="text--openSans">Elegant style</p>
          </div>
          <div class="information__icon">
            <img class="information__icon-pic" src="../assets/Pictures/hanger.svg"/>
            <p class="text--openSans">Elegant style</p>
          </div>
          <div class="information__icon">
            <img class="information__icon-pic" src="../assets/Pictures/suit.svg"/>
            <p class="text--openSans">Elegant style</p>
          </div>
        </div>
        <br/>
        <button class="information__button">
          Read more
        </button>
      </div>
    </div>
  </div>
    <div class="information">
      <div class="information__text secondinfo__text">
        <div class="information__content">
          <h1 class="information__bigtext text--openSans secondinfo__bigtext">Extraordinary design</h1>
          <p class="text--openSans information__smalltext secondinfo__smalltext">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            , asperiores beatae dolore, earum nemo quidem quisquam quos repellat temporibus ullam, vel vitae.
            Commodi consectetur dolorum inventore quod saepe tempore vitae.</p>
          <div class="information__icons">
            <div class="information__icon">
              <img class="information__icon-pic" src="../assets/Pictures/eyeglasses.svg"/>
              <p class="text--openSans secondinfo__ic">Elegant style</p>
            </div>
            <div class="information__icon">
              <img class="information__icon-pic" src="../assets/Pictures/hanger.svg"/>
              <p class="text--openSans secondinfo__ic">Elegant style</p>
            </div>
            <div class="information__icon">
              <img class="information__icon-pic" src="../assets/Pictures/suit.svg"/>
              <p class="text--openSans  secondinfo__ic">Elegant style</p>
            </div>
          </div>
          <br/>
          <button class="information__button secondinfo__button">
            Read more
          </button>
        </div>
      </div>
      <img class="information__picture" :src = "product.picture"/>

    </div>
    <div class="one-product__botpic">
      <img style="width: 100%;" src="../assets/Pictures/productpic.png"/>
    </div>


  </section>
</template>

<script>
  import axios from 'axios';
  // let pic = this.product;
  export default {
        name: "products",
      data () {
          return {
            product:'',
          }
      },
      created: function () {
        this.getProductById();
      },
      watch: {
          '$route' (to,from) {
            this.getProductById();
          }
      },
      methods: {
          getProductById: function () {
            let id= this.$route.params.id;
            axios
              .get('/static/products.json')
              .then(response => {this.product = response.data.filter(product => product.id == id)[0]})
              .catch(error => {console.log(error);})
          }
      }

    }
</script>

<style scoped>

</style>
