<template>
  <v-container fluid>
    <v-sheet class="pa-2 mb-5" :class="$vuetify.breakpoint.smAndDown?'pa-2':'pa-5'">
      <v-row>
        <v-col :cols="$vuetify.breakpoint.smAndDown?12:6" >
          <span class="text-h3 d-flex  green--text"> <v-img src="@/assets/IMG/landing/apple-touch-icon.png"  max-height="41" max-width="41"></v-img> Health Mate</span>
          <p class="pt-5" :class="$vuetify.breakpoint.smAndDown?'text-center':''">
            Herramienta para el manejo y la gestión de emociones en un entorno cotidiano. Permitiendo desenvolverse en aspectos personales y sociales
          </p>
        </v-col>

      </v-row>
    </v-sheet>

      <div class="pa-5 pb-0 d-flex flex-column align-center">
        <span class="d-flex mb-3 d-flex justify-center text-h5"
          >Componentes</span
        >
        <p>
          Recursos principales de la aplicación. 
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
          content: "Interface de usuario facil e intuitiva de comprender",
          icon: "mdi-spa-outline",
        },
        {
          color: "yellow",
          title: "Herramientas",
          content: "Consejos y apoyo en diversos aspectos de la vida cotidiana",
          icon: "mdi-tools",
        },
        {
          color: "purple",
          title: "Desahogo",
          content: "Sección para liberar pensamientos e ideas personales para llevar un seguimiento.",
          icon: "mdi-account-voice",
        },
        {
          color: "green",
          title: "Acerca De",
          content: "Información adicional de la aplicación y sus creadores",
          icon: "mdi-checkbox-marked-circle-outline",
        },
      ],
    };
  },
};
</script>

<style scoped>
</style>