<template>
  <main id="main-container">
<div v-if="['products'].indexOf($route.name) > -1">
  <web_header2/>
</div>
    <div v-else>
   <web_header></web_header>
    </div>
    <router-view/>
<footerbot></footerbot>
  </main>
</template>

<script>
import Web_header from "./components/web_header";
  import Footerbot from "./components/Footerbot";
import Web_header2 from "./components/web_header2";




export default {
  components: {
    Web_header2,
    Footerbot,
    Web_header},
  name: 'App'
}

</script>

<style lang="sass">
@import "./assets/styles/style"


@import url('https://fonts.googleapis.com/css?family=Open+Sans')

</style>
