<template>
  <v-container fluid>
    <v-sheet class="pa-5">
      <v-row>
        <v-col cols="9">
          <span class="text-h4">Health Mate</span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </v-col>
      </v-row>
    </v-sheet>

    <div class="pa-5 pb-0">
      <span class="d-flex mb-3 justify-center font-weight-bold text-h5">Componentes</span>
      <p>La aplicación cuenta con distintos recursos a los que puedes acceder por medio de la barra inferior, dale un vistazo.</p>
    </div>
    <v-row class=" pa-3">
        <v-col cols="6" v-for="( item , i ) in cards" :key="i">
        <v-card
          height="150"
          width="170"
          class="rounded-xl d-flex flex-column align-center justify-center"
          elevation="3"
        >
          <v-card-title class="pb-0 font-weight-bold">
            {{ item.title }}
          </v-card-title>
          <v-icon :color="item.color" class="py-2" large>
            {{item.icon}}
          </v-icon>
          <v-card-subtitle class="pt-0" style="font-size:10px; text-align:center">
            {{item.content}}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          color: '#ed9ac4',
          title: 'Contenido',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          icon: 'mdi-spa-outline'
        },
        {
          color: '#dfed9a',
          title: 'Contenido',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          icon: 'mdi-checkbox-marked-circle-outline'
        },
        {
          color: '#a99aed',
          title: 'Contenido',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          icon: 'mdi-checkbox-marked-circle-outline',
        },
        {
          color: '#edb89a',
          title: 'Contenido',
          content:
            'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
          icon: 'mdi-checkbox-marked-circle-outline'
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>