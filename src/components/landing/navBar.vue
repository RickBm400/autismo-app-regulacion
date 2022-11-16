<template>
  <v-container fluid>
    <v-app-bar app elevation="0" color="white">
      <v-icon v-if="$vuetify.breakpoint.smAndDown"> mdi-account </v-icon>
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
export default {
  data() {
    return {
      list: ["Acerca de", "Encuesta de Satisfacción", "Contactanos"],
    };
  },
};
</script>
