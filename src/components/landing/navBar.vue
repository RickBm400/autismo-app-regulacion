<template>
  <v-container fluid>
    <v-app-bar app elevation="0" color="white">
      <v-dialog v-if="$vuetify.breakpoint.smAndDown">
        <template v-slot:activator="{on, off}" >
          <v-btn
          icon
          fab
          v-bind="off"
          v-on="on"
          plain>
          <v-icon > mdi-account </v-icon>
          </v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card height="auto" class="rounded-xl pa-5" elevation="0"> 
            <v-card-text class=" d-flex flex-column align-center">
              <v-avatar color="blue" class="mb-2" size="50">
                <v-icon class="white--text">mdi-account</v-icon>
              </v-avatar>

              <span class="font-weight-bold">{{userTag}}</span>
              <span style="color:green; font-weight:bold">En linea</span>
            </v-card-text>

            <v-card-actions class="d-flex justify-center mt-5">
              <v-btn @click="_logOut(), dialog.value=false" color="red"  class="text-capitalize rounded-pill white--text">
              Cerrar Sección
            </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
      <v-spacer v-if="$vuetify.breakpoint.smAndDown"></v-spacer>
      <v-menu>
        <template v-slot:activator="{ on, off }">
          <v-icon v-on="on" v-bind="off"> mdi-dots-vertical </v-icon>
        </template>
        <v-list>
          <v-list-item v-for="it in list" :key="it">
            <v-list-item-title>{{ it }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  computed:{
        ...mapState('user',['user'])
    },
  data() {
    return {
      list: ["Acerca de", "Encuesta de Satisfacción", "Contactanos"],
      userTag:localStorage.getItem('user')!=null? JSON.parse(localStorage.getItem('user')).email:''
    };
  },

  methods:{
    ...mapMutations('user', ['logOut']),
        _logOut(){
            this.logOut()
            localStorage.clear()
            this.$router.go()
        }
  }
};
</script>
