<template>
  <section class="collection">
    <div class="products">
      <div class="products__filter">
        <div class="products__filterall">
          <h1 class="text--openSans products__text">
            New collection
          </h1>
          <h1 class="text--openSans products__text">
            Sort by <img style="width:15px;" src="../assets/Pictures/collections/downwards.svg"/>
          </h1>
          <h1 class="text--openSans products__text">
            Features <img style="width:15px;" src="../assets/Pictures/collections/downwards.svg"/>
          </h1>
          <h1 class="text--openSans products__text">
            Size <img style="width:15px;" src="../assets/Pictures/collections/downwards.svg"/>
          </h1>
          <h1 class="text--openSans products__text">
            Colour <img style="width:15px;" src="../assets/Pictures/collections/downwards.svg"/>
          </h1>
          <h1 class="text--openSans products__text">
            Price <img style="width:15px;" src="../assets/Pictures/collections/downwards.svg"/>
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
  </section>
</template>

<script>
  let items = [
    { id:1, picture: require('../assets/Pictures/collections/Layer 25.png'), text: 'Crotchet black playsuit', price: '$77' },
    { id:2, picture: require('../assets/Pictures/collections/Layer 26.png'), text: 'Pull&bear utility detail playsuit', price: '$31' },
    { id:3, picture: require('../assets/Pictures/collections/Layer 27.png'), text: 'Pull&bear aztec printed jumpsuit', price: '$54' },
    { id:4, picture: require('../assets/Pictures/collections/Layer 28.png'), text: 'Pull&bear back playsuit', price: '$47' },
    { id:5, picture: require('../assets/Pictures/collections/Layer 29.png'), text: 'Denim jacket', price: '$54' },
    { id:6, picture: require('../assets/Pictures/collections/Layer 30.png'), text: 'Pull&bear back playsuit', price: '$25' },
    { id:7, picture: require('../assets/Pictures/collections/Layer 31.png'), text: 'Pull&bear utility detail playsuit', price: '$35' },
    { id:8, picture: require('../assets/Pictures/collections/Layer 32.png'), text: 'Crotchet black playsuit', price: '$84' },
    { id:9, picture: require('../assets/Pictures/collections/Layer 33.png'), text: 'Denim jacket', price: '$100' },
    { id:10, picture: require('../assets/Pictures/collections/Layer 34.png'), text: 'Pull&bear utility detail playsuit', price: '$75' },
    { id:11, picture: require('../assets/Pictures/collections/Layer 35.png'), text: 'Pull&bear aztec printed jumpsuit', price: '$52' },
    { id:12, picture: require('../assets/Pictures/collections/Layer 36.png'), text: 'Pull&bear aztec printed jumpsuit', price: '$59' }


  ];
    export default {
        name: "collection",
      data() {
          return {
            items
          }
      }
    }
</script>

<style scoped>

</style>
