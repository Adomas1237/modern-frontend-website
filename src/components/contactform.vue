<template>



  <form class="contactform" @submit="checkForm" action="/" method="get">
<fieldset>

    <div class="contactform__inputs">
      <label class="contactform__text text--openSans" for="name">Name</label>
        <input class="contactform__field" type="text" name="name" id="name" v-model="name">
    </div>

    <div class="contactform__inputs">
      <label class="contactform__text text--openSans"  for="email">Email</label>
        <input class="contactform__field" type="email" name="email" id="email" v-model="email"/>
    </div>

    <div class="contactform__inputs">
      <label class="contactform__text text--openSans" for="message">Message</label>
      <input class="contactform__field" type="text" name="message" id="message" v-model="message"/>

    </div>

    <p>
      <input class="contactform__button" type="submit" value="Submit">
    </p>
</fieldset>
  </form>


</template>

<script>
    export default {
      name: "contactform",

      data(){
          return {
            errors:[],
            name: null,
            email: null,
            message: null
          }
      }

    }

</script>

<style scoped>

</style>
