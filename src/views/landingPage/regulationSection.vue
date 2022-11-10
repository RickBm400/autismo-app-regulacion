<template>
  <v-container fluid class="pt-8">
    <v-card elevation="0" class="mb-7">
      <v-card-title
        style="font-size: 30px"
        class="font-weight-bold justify-center mb-2"
      >
        Zona de Regulación
      </v-card-title>
      <v-card-text class="text-center">
        Realiza un checkeo diario de ciertas actividades que quieres realizar,
        de este modo puedes llevar un seguimiento de cosas que has realizado.
      </v-card-text>
    </v-card>

    <!-- Listado de preguntas a realizar -->
    <div v-for="(item, i) in questions" :key="i" class="px-5">
      <!-- Carta con titulo del grupo de preguntas -->
      <v-card
        height="60"
        class="my-3 rounded-lg d-flex align-center"
        elevation="7"
        @click="item.expand = !item.expand"
      >
        <v-row class="px-2">
          <v-col cols="2" class="d-flex justify-center">
            <v-icon
              :color="
                item.content.map((e) => e.answer).some((e) => e == null)
                  ? 'orange'
                  : 'green'
              "
            >
              mdi-alert-octagon
            </v-icon>
          </v-col>
          <v-col cols="10">
            <span class="font-weight-bold">{{ item.subName }}</span>
          </v-col>
        </v-row>
      </v-card>
      <!-- Fin Carta -->
      <!-- Cuadro de expansión con todo el listado de cartas -->
      <v-expand-transition>
        <v-card v-show="item.expand" elevation="0">
          <!-- tarjetas con cada pregunta a realizar -->
          <v-card
            v-for="(itema, j) in item.content"
            :key="j"
            elevation="1"
            class="mb-2 pa-5 rounded-lg"
            height="auto"
          >
            <v-row>
              <v-col cols="12" class="pb-0">
                <span>{{ itema.quest }}</span>
              </v-col>
              <v-col cols="12" class="d-flex justify-end pt-0">
                <!-- Iconos de respuesta -->
                <div class="mr-2">
                  <span class="mr-2">No</span>
                  <v-icon
                    color="red"
                    @click="
                      itema.answer == null || itema.answer == true
                        ? (itema.answer = false)
                        : (itema.answer = null)
                    "
                    v-text="
                      itema.answer == false
                        ? 'mdi-checkbox-blank-circle'
                        : 'mdi-checkbox-blank-circle-outline'
                    "
                  >
                  </v-icon>
                </div>
                <div class="mr-2">
                  <span class="mr-2">Si</span>
                  <v-icon
                    color="green"
                    @click="
                      itema.answer == false || itema.answer == null
                        ? (itema.answer = true)
                        : (itema.answer = null)
                    "
                    v-text="
                      itema.answer == true
                        ? 'mdi-checkbox-blank-circle'
                        : 'mdi-checkbox-blank-circle-outline'
                    "
                  >
                  </v-icon>
                </div>
                <!-- Fin iconos de respuesta -->
              </v-col>
            </v-row>
          </v-card>
        </v-card>
      </v-expand-transition>
      <!-- Fin Cuadro -->
    </div>
    <div class="mt-7 px-5 justify-center d-flex">
      <v-btn
        elevation="2"
        :disabled="
          questions
            .map((e) => e.content.map((e) => e.answer))
            .flat()
            .some((e) => e == null)
            ? true
            : false
        "
        @click="saveData"
        class="rounded-pill text-capitalize"
        ><v-icon>mdi-content-save</v-icon> <span>Guardar</span></v-btn
      >
    </div>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  data() {
    return {
      questions: [
        {
          subName: "Alimentación",
          expand: false,
          content: [
            {
              quest: "¿Has comido alimentos recientemente?",
              answer: null,
            },
            {
              quest: "¿Has desayunado el día de hoy?",
              answer: null,
            },
            {
              quest: "¿Has almorzado el día de hoy?",
              answer: null,
            },
            {
              quest: "¿Has cenado el día de hoy?",
              answer: null,
            },
            {
              quest: "¿Has comido algo rico el día de hoy?",
              answer: null,
            },
            {
              quest: "¿Ya has merendado?",
              answer: null,
            },
          ],
        },
        {
          subName: "Cuidado corporal",
          expand: false,
          content: [
            {
              quest: "¿Te has estirado en la última hora?",
              answer: null,
            },
            {
              quest: "¿Has estado en la misma posición mucho tiempo?",
              answer: null,
            },
            {
              quest: "¿Has meditado recientemente?",
              answer: null,
            },
          ],
        },
        {
          subName: "Actividades diarias",
          expand: false,
          content: [
            {
              quest: "¿Ya has dedicado tiempo a tu hobby?",
              answer: null,
            },
            {
              quest: "¿Hay algún tema interesante que quieras averiguar?",
              answer: null,
            },
            {
              quest: "¿Te has relajado con cosas divertidas ya?",
              answer: null,
            },
          ],
        },
        {
          subName: "Comunicación",
          expand: false,
          content: [
            {
              quest:
                "¿Has hablado con alguien el día de hoy sin intenciones académicas o laborales?",
              answer: null,
            },
            {
              quest: "¿Has compartido algo de ti mismo con alguien?",
              answer: null,
            },
            {
              quest: "¿Has pensado en saludar a alguien?",
              answer: null,
            },
          ],
        },
        {
          subName: "Descanso mental",
          expand: false,
          content: [
            {
              quest:
                "¿Ya te has dado un tiempo para descansar?",
              answer: null,
            },
            {
              quest: "¿Hiciste ejercicios para relajarte que te ayuden? ¿Respirar profundo? ¿Mover las manos?",
              answer: null,
            },
            {
              quest: "No sonreir no está mal, ¿te estás forzando a mostrarte feliz? ",
              answer: null,
            },
          ],
        },
      ],
      expand: false,
      estado: null,
    };
  },
  methods: {
    ...mapActions("regulation", ["dotState"]),

    saveData() {
      this.dotState(this.dotVisibility);
      
    },
  },

  computed:{
    ...mapState('regulation',['dotVisibility'])
  }
};
</script>
<style scoped>
.v-card--link:before {
  background: none;
}
</style>