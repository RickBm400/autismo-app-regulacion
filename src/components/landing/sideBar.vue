<template>
  <v-navigation-drawer app hide-overlay permanent right>
    <template v-slot:prepend>
      <v-list-item two-line>
        <v-list-item-avatar>
          <v-avatar color="blue" size="40">
              <v-icon color="white">mdi-account</v-icon>
          </v-avatar>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title style="font-weight: 800"
            >{{userTag}}</v-list-item-title
          >
          <v-list-item-subtitle style="font-weight:bolder" class="green--text">En linea</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </template>

    <v-divider></v-divider>
    <v-list dense class="mt-7">
      <v-list-item v-for="(item, i) in bottomIcons" :key="i" link :to="item.link">
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
        <div class="pa-2 pb-8 justify-center d-flex">
          <v-btn color="red" class="text-capitalize white--text rounded-pill" style="font-weight:800" @click="_logOut">
            Cerrar Sección
          </v-btn>
        </div>
      </template>
  </v-navigation-drawer>
</template>

<script>

import { mapState, mapMutations } from 'vuex';
export default {

    computed:{
        ...mapState('user',['user'])
    },
    mounted(){
        this.userTag=localStorage.getItem('user')!=null? JSON.parse(localStorage.getItem('user')).email:''
    },  
    methods:{
        ...mapMutations('user', ['logOut']),
        _logOut(){
            this.logOut()
            localStorage.clear()
            this.$router.go()
        }
    },

  data() {
    return {
      bottomIcons: [
        {
          icon: "mdi-home-assistant",
          link: "/home",
          title: "Home"
        },
        {
          icon: "mdi-file-tree",
          link: "/daily-routine",
          title: "Zona de desahogo",
        },
        {
          icon: "mdi-account-heart",
          link: "/user-advisor",
          title: "Herramientas"
        },
        {
          icon: "mdi-order-bool-ascending-variant",
          link: "/regulation-section",
          title: "Zona de regulación"
        },
      ],

      userTag:''
    };
  },
};
</script>