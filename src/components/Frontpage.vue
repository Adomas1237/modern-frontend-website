<template>
  <section class="content">

    <a href="/#/collection"> <img class="catalogs__pictureitem" src="../assets/Pictures/frontpage/mensc.png"/> </a>
    <div class="catalogs__newsletter">
      <img class="catalogs__mail" src="../assets/Pictures/frontpage/icons/envelope.svg">
      <h1 class="catalogs__bigtext">GET OUR NEWSLETTER</h1>
      <h2 class="catalogs__text">JOIN OUR CATALOGS TO RECEIVE SPECIAL DISCOUNTS</h2>
      <input title="email" id="email" class="catalogs__email" type="text"/>

      <br/>
      <button class="catalogs__subscribe"><p class="catalogs__text">SUBSCRIBE</p></button>
    </div>
    <a href="/#/collection"> <img class="catalogs__pictureitem2" src="../assets/Pictures/frontpage/womenc.png"/> </a>

    <div class="topbrands">
      <div class="topbrands__text">
        <div style="margin: 0 auto; display: flex">
          <img class="topbrands__line" src="../assets/Pictures/frontpage/topbrands/line.png" />
          <h1 class="text--openSans" style="color: black">Top brands</h1>
          <img class="topbrands__line" src="../assets/Pictures/frontpage/topbrands/line.png"/>
        </div>
      </div>

      <div class="topbrands__brands">
        <img class="topbrands__brandimage" src="../assets/Pictures/frontpage/topbrands/mango.png"/>
        <img class="topbrands__brandimage" src="../assets/Pictures/frontpage/topbrands/michael.png"/>
        <img class="topbrands__brandimage" src="../assets/Pictures/frontpage/topbrands/missguided.png"/>
        <img class="topbrands__brandimage" src="../assets/Pictures/frontpage/topbrands/monik.png"/>
        <img class="topbrands__brandimage" src="../assets/Pictures/frontpage/topbrands/pullbear.png"/>

      </div>
    </div>
    <div class="adpics">
      <img class="adpics__biggerpicture" src="../assets/Pictures/frontpage/forherpost.png">
      <img class="adpics__pictures" src="../assets/Pictures/frontpage/percentoff.png">
      <img class="adpics__pictures" src="../assets/Pictures/frontpage/newsummerstyle.png">
    </div>
    <div class="products">
      <div class="products__filter">
        <div class="products__filterall">
          <h1 class="text--openSans products__text">
            New arrivals
          </h1>
          <h1 class="text--openSans products__text">
            Top sellers
          </h1>
          <h1 class="text--openSans products__text">
            Featured
          </h1>
        </div>

      </div>

      <div class="products__allitems">
        <div v-for="item in items" class="item">
          <a :href="'/#/products/' + item.id"><img class="item__picture" :src="item.picture"></a>
          <div class="item__bot">
            <h2 class="item__text">{{item.text}}</h2>
            <h1 class="item__price">{{item.price}}</h1>
            <button class="item__addbag"><img src="../assets/Pictures/frontpage/icons/shopping-bag.svg" style="width: 15px;">Add to bag</button>

          </div>
        </div>

      </div>
    </div>
    <div class="contentend">
      <div class="advertisement">
        <img class="advertisement__picture" src="../assets/Pictures/frontpage/allsummer.png"/>
      </div>
      <div class="review">
        <img class="review__image" src="../assets/Pictures/frontpage/reviewface.png">
        <h1 class="review__name">Jane Smith</h1>
        <p class="review__text">Far Far away, behind the word mountains, far from the countries Vokalia and Consonantia,
          there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics,
          a large language ocean.</p>
      </div>

    </div>
  </section>
</template>

<script>
 let  items = [
    { id:13, picture: require('../../static/collections/Photo1.png'), text: 'Pull&bear denim jacket', price: '$77' },
    { id:14, picture: require('../../static/collections/photo2.png'), text: 'Pull&bear utility detail playsuit', price: '$31' },
    { id:15, picture: require('../../static/collections/Photo3.png'), text: 'Pull&bear aztec printed jumpsuit', price: '$54' },
    { id:16, picture: require('../../static/collections/Photo4.png'), text: 'Pull&bear back playsuit', price: '$47' }


  ];
    export default {
        name: "frontpage",
    data() {
          return {
            items
          }
    }
    }
</script>

<style scoped>

</style>
