import Vue from 'vue'
import Router from 'vue-router'
import Web_header from "@/components/web_header"
import Frontpage from "@/components/Frontpage"
// import Slider from "./assets/Slider"
import Footerbot from "@/components/Footerbot"
import Collection from "@/components/Collection"
import products from "@/components/Products"
import contactform from "@/components/contactform"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component:
      Frontpage
    },
    {
      path: '/collection',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/products/:id',
      name: 'products',
      component: products
    },
    {
      path: '/contact',
      name: 'contactform',
      component: contactform
    }
  ]
})
