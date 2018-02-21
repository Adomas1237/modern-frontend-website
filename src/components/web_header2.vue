<template>
  <header class="header">
    <nav class="header__menu header__catalogue">
      <div>
        <div class="header__logo">
          <a href="/"> <img src="../assets/Pictures/frontpage/logo.png"/></a>
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
      </div>
    </nav>
    <div>
      <img class="message" src="../assets/Pictures/header2.png">
    </div>

  </header>
</template>

<script>
    export default {
        name: "web_header2"
    }
</script>

<style scoped>

</style>
