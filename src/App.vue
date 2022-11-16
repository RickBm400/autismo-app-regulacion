<template>
  <v-app>
   <navBar  v-if="!$route.fullPath.includes('/login')"></navBar>
    <side-bar v-if="!$route.fullPath.includes('/login') && $vuetify.breakpoint.mdAndUp"></side-bar>
    <FooterNav v-if="!$route.fullPath.includes('/login') && $vuetify.breakpoint.smAndDown"></FooterNav>
   
    <v-main class="pt-0">
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>

  </v-app>
</template>

<script>
import FooterNav from './components/landing/footerNav.vue'
import navBar from './components/landing/navBar.vue'
import sideBar from './components/landing/sideBar.vue'
export default {
    name: "App",
    data() {
        return {};
    },
    components: { FooterNav, navBar, sideBar }
};
</script>
<style>

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@300&display=swap');

*{
  font-family: 'Lato',  sans-serif;
}
</style>