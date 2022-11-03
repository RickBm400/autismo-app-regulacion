<template>
  <v-container fluid>
    <span class="px-5 d-flex justify-center" style="font-size: 20px"
      >Actividades Diarias</span
    >
    <v-dialog v-for="(item, i) in values" :key="i">
      <template v-slot:activator="{ on, attrs }">
        <v-card
          v-bind="attrs"
          v-on="on"
          flat
          elevation="2"
          class="rounded-lg my-3 mx-2"
          height="100"
        >
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>
                {{ item.title + " " + i }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ item.content }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-card-actions class="pt-0 px-3 d-flex justify-space-between">
            <v-icon :color="item.icon.color">
              {{ item.icon.status }}
            </v-icon>
            <span style="font-size: 11px">{{ item.date }}</span>
          </v-card-actions>
        </v-card>
      </template>
      <template v-slot:default="dialog">
        <v-card flat height="500" class="rounded-lg">
          <v-toolbar extended :color="item.icon.color" flat>
            <v-card
              style="top: 230px; background-color: transparent"
              height="450"
              class="rounded-lg  mb-5"
              flat
            >
              <v-card flat>
                <v-card-title>Holamundo</v-card-title>
                <v-card height="300" class=" overflow-auto pa-0" flat>
                  <v-card-text>
                    {{item.content}}
                  </v-card-text>
                </v-card>
              </v-card>

              <v-card-actions class="d-flex flex-column">
                <v-sheet class="d-flex justify-space-around pt-4" width="100%">
                  <v-btn
                    v-for="item in statusButtons"
                    :key="item"
                    fab
                    small
                    elevation="0"
                  >
                    <v-icon :color="item.color">
                      {{ item.icon }}
                    </v-icon>
                  </v-btn>
                </v-sheet>

                <v-sheet width="100%" class="mt-4 d-flex justify-center">
                  <v-btn color="green"
                  x-small
                  text
                  @click="dialog.value=false"
                  class="rounded-pill white--text">
                    <v-icon>mdi-check</v-icon>
                    <span>Guardar</span>
                  </v-btn>
                </v-sheet>
              </v-card-actions>
            </v-card>
          </v-toolbar>
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
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis nihil ipsam sint maxime. csdckjsdnckjsdnkcsndjcnsd",
          icon: {
            color: "red",
            status: "mdi-emoticon-sad-outline",
          },
          date: "10-10-2022",
        },
        {
          title: "Entrada",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis nihil ipsam sint maxime. csdckjsdnckjsdnkcsndjcnsd",
          icon: {
            color: "yellow",
            status: "mdi-emoticon-neutral-outline",
          },
          date: "10-10-2022",
        },
        {
          title: "Entrada",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis nihil ipsam sint maxime. csdckjsdnckjsdnkcsndjcnsd",
          icon: {
            color: "purple",
            status: "mdi-emoticon-excited-outline",
          },
          date: "10-10-2022",
        },
        {
          title: "Entrada",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis nihil ipsam sint maxime. csdckjsdnckjsdnkcsndjcnsd",
          icon: {
            color: "green",
            status: "mdi-emoticon-outline",
          },
          date: "10-10-2022",
        },
        {
          title: "Entrada",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis nihil ipsam sint maxime. csdckjsdnckjsdnkcsndjcnsd",
          icon: {
            color: "blue",
            status: "mdi-emoticon-sad-outline",
          },
          date: "10-10-2022",
        },
        {
          title: "Entrada",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis nihil ipsam sint maxime. csdckjsdnckjsdnkcsndjcnsd",
          icon: {
            color: "red",
            status: "mdi-emoticon-sad-outline",
          },
          date: "10-10-2022",
        },
        {
          title: "Entrada",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis nihil ipsam sint maxime. csdckjsdnckjsdnkcsndjcnsd",
          icon: {
            color: "red",
            status: "mdi-emoticon-sad-outline",
          },
          date: "10-10-2022",
        },
        {
          title: "Entrada",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste perferendis nihil ipsam sint maxime. csdckjsdnckjsdnkcsndjcnsd",
          icon: {
            color: "red",
            status: "mdi-emoticon-sad-outline",
          },
          date: "10-10-2022",
        },
      ],
    };
  },
};
</script>
