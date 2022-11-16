<template>
  <v-container fluid>
    <v-sheet class="pa-5">
      <v-row>
        <v-col cols="9">
          <span class="text-h4">Health Mate</span>
          <p>
            Aplicación web creada con la finalidad de brindar apoyo y
            acompañamiento emocional.
          </p>
        </v-col>
      </v-row>
    </v-sheet>

      <div class="pa-5 pb-0 d-flex flex-column align-center">
        <span class="d-flex mb-3 d-flex justify-center font-weight-bold text-h5"
          >Componentes</span
        >
        <p>
          La aplicación cuenta con distintos recursos a los que puedes acceder
          por medio de la barra inferior, dale un vistazo.
        </p>
      </div>
      <v-sheet>
        <v-row class="pt-3">
          <v-col :cols="$vuetify.breakpoint.smAndDown?12:3"  v-for="(item, i) in cards" :key="i" class="d-flex justify-center">
            <v-card
              :height="$vuetify.breakpoint.smAndDown?150:200"
              :width="$vuetify.breakpoint.smAndDown?300:230"
              class="rounded-xl d-flex flex-column align-center justify-center"
              elevation="10"
            >
              <v-card-title
                class="pb-0 font-weight-bold text-center"
                style="word-break: break-word; font-size: 22px"
              >
                {{ item.title }}
              </v-card-title>
              <v-icon :color="item.color" class="py-2" large>
                {{ item.icon }}
              </v-icon>
              <v-card-subtitle
                class="pt-0"
                style="font-size: 14px; text-align: center; font-weight: 500;"
              >
                {{ item.content }}
              </v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
      </v-sheet>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          color: "red",
          title: "Contenido",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          icon: "mdi-spa-outline",
        },
        {
          color: "yellow",
          title: "Herramientas",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          icon: "mdi-tools",
        },
        {
          color: "purple",
          title: "Desahogo",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          icon: "mdi-account-voice",
        },
        {
          color: "green",
          title: "Acerca De",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
          icon: "mdi-checkbox-marked-circle-outline",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>