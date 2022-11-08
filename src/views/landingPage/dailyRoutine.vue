<template>
  <v-container fluid>
    <v-card class="py-2" width="100%" elevation="0">
      <v-row>
        <v-col cols="9">
          <v-card-title class="text-h5 font-weight-bold pb-5"> Zona de desahogo </v-card-title>
            <v-card-subtitle class="text-left" style="line-height:1rem;">
              Escribe aquí tus entradas diarias sobre pensamientos, ideas o recuerdos importantes.
            </v-card-subtitle>
        </v-col>
        <v-col cols="3" class="d-flex align-center justify-center ">
          <v-btn
            icon
            plain
            elevation="0"
            class="green white--text"
            :ripple="false"
          >
            <v-icon> mdi-plus </v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card>

    <v-dialog v-for="(item, i) in values" :key="i">
      <template v-slot:activator="{ on, attrs }">
      <v-card 
      flat
      elevation="6"
      class="rounded-lg my-3 mx-2 d-flex"
      height="auto"
      width="auto"
      >
        <v-card :color="item.icon.color" 
        class="rounded-l-lg rounded-r-0 d-flex justify-center" style="width:10%;">
          <v-icon color="white">
            {{item.icon.status}}
          </v-icon>
        </v-card>
        <v-card
        style="width:90%"
        class="rounded-l-0"
        elevation="0"
        >
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title class="font-weight-bold">
                {{ item.title }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ item.content }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions class="pt-0 px-5 d-flex justify-space-between">
            <div>
              <v-icon class="mr-3"
              v-bind="attrs"
              v-on="on" color="green">mdi-pencil</v-icon>
              <v-icon color="red">mdi-delete-variant</v-icon>
            </div>
            <span style="font-size: 11px">{{ item.date }}</span>
          </v-card-actions>
        </v-card>
      </v-card>
      </template>
      <template v-slot:default="dialog">
        <v-sheet :color="item.icon.color" class="rounded-t-xl"  height="22" ></v-sheet>
        <v-card height="460" color="white" class="rounded-b-xl rounded-t-0" flat>
          <v-text-field
            class="pt-7 mx-5 text-h5"
            solo
            flat
            :hide-details="true"
            label="Titulo"
            v-model="item.title"
          >
          </v-text-field>
          <v-card-text class="py-0">
            <v-textarea
              :full-width="true"
              :color="item.icon.color"
              label="Nueva entrada"
              :hide-details="true"
              :value="item.content"
              rows="8"
              v-model="item.content"
            >
            </v-textarea>
          </v-card-text>

          <v-card-actions class="d-flex flex-column">
            <v-sheet class="d-flex justify-space-around pt-0" width="100%">
              <v-btn
                v-for="item in statusButtons"
                :key="item"
                fab
                plain
                active-class="font-weight-bold"
                small
                elevation="0"
              >
                <v-icon :color="item.color">
                  {{ item.icon }}
                </v-icon>
              </v-btn>
            </v-sheet>

            <v-sheet width="100%" class="d-flex justify-center pt-5">
              <v-btn
                color="green"
                text
                @click="dialog.value = false"
                class="rounded-pill pt-2 white--text"
              >
                <v-icon>mdi-check</v-icon>
                <span>Guardar</span>
              </v-btn>
            </v-sheet>
          </v-card-actions>
        </v-card>
      </template>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      statusButtons: [
        {
          icon: "mdi-emoticon-excited-outline",
          color: "green",
        },
        {
          icon: "mdi-emoticon-outline",
          color: "yellow",
        },
        {
          icon: "mdi-emoticon-neutral-outline",
          color: "orange",
        },
        {
          icon: "mdi-emoticon-sad-outline",
          color: "red",
        },
        {
          icon: "mdi-emoticon-cry-outline",
          color: "purple",
        },
      ],

      values: [
        {
          title: "Entrada",
          content:
            "Este es un texto de prueba que ilustra el seguimiento diario del usuario",
          icon: {
            color: "red",
            status: "mdi-emoticon-sad-outline",
          },
          date: "10-10-2022",
        },
        {
          title: "Entrada",
          content:
            "Este es un texto de prueba que ilustra el seguimiento diario del usuario",
          icon: {
            color: "yellow",
            status: "mdi-emoticon-neutral-outline",
          },
          date: "10-10-2022",
        },
        {
          title: "Entrada",
          content:
            "Este es un texto de prueba que ilustra el seguimiento diario del usuario",
          icon: {
            status: "mdi-emoticon-cry-outline",
            color: "purple",
          },
          date: "10-10-2022",
        },
        {
          title: "Entrada",
          content:
            "Este es un texto de prueba que ilustra el seguimiento diario del usuario",
          icon: {
            status: "mdi-emoticon-excited-outline",
            color: "green",
          },
          date: "10-10-2022",
        },
      ],
    };
  },

  methods:{
    
  }
};
</script>
