<template>
  <v-app>
   
    <router-view></router-view>
    <FooterNav></FooterNav>
   
  </v-app>
</template>

<script>
import FooterNav from './components/landing/footerNav.vue'
import navBar from './components/landing/navBar.vue'
export default {
    name: "App",
    data() {
        return {};
    },
    components: { FooterNav, navBar }
};
</script>
