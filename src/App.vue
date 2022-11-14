<template>
  <v-app>
   <navBar  v-if="!$route.fullPath.includes('/login')"></navBar>
    <router-view></router-view>
    <FooterNav v-if="!$route.fullPath.includes('/login')"></FooterNav>
   
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
<style>

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');

*{
  font-family: 'Lato',  sans-serif;
}
</style>