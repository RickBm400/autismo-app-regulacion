<template>
  <v-container fluid :class="$vuetify.breakpoint.smAndDown?'pa-0':'d-flex'">
    <v-card  :width="$vuetify.breakpoint.smAndDown?'100%': '40%'" elevation="0" class="align-center">
      <v-row >
        <v-col :cols="$vuetify.breakpoint.smAndDown? 12:12">
          <v-card-title class="text-h5 font-weight-bold pb-5">
            Zona de desahogo
          </v-card-title>
          <v-card-subtitle class="text-left pt-5" style="line-height: 23px">
            Escribe aquí tus entradas diarias sobre pensamientos, ideas o
            recuerdos importantes. Puedes agregarle un estado de animo a tus pensamientos haciendo click en cualquier icono de tu gusto.
          </v-card-subtitle>
        </v-col>
        <v-col :cols="$vuetify.breakpoint.smAndDown? 12:12" class="d-flex align-center justify-center">
          <v-dialog max-width="400">
            <template v-slot:activator="{ on, off }">
              <v-btn
               
                plain
                v-bind="off"
                v-on="on"
                elevation="0"
                class="green white--text rounded-pill"
                :ripple="false"
              >
                <v-icon> mdi-plus </v-icon>
                <span style="font-weight:800" class=" text-capitalize white--text">Nueva Entrada</span>
              </v-btn>
            </template>
            <template v-slot:default="dialog" >
              <v-sheet
                :color="newRegist.icon.color || '#9e9e9e'"
                class="rounded-t-0"
                height="22"
              ></v-sheet>
              <v-card
                height="420"
                color="white"
                class="rounded-b-0 rounded-t-0"
                flat
              >
                <v-text-field
                  class="pt-3 mx-5 text-h5 font-weight-bold"
                  solo
                  flat
                  :hide-details="true"
                  label="Nueva entrada"
                  v-model="newRegist.title"
                >
                </v-text-field>
                <v-card-text class="py-0">
                  <v-textarea
                    :full-width="true"
                    color="gray"
                    label="..."
                    :hide-details="true"
                    rows="8"
                    v-model="newRegist.content"
                  >
                  </v-textarea>
                </v-card-text>

                <v-card-actions class="d-flex flex-column">
                  <v-sheet
                    class="d-flex justify-space-around pt-0"
                    width="100%"
                  >
                    <v-btn
                      v-for="(item, i) in statusButtons"
                      :key="i"
                      fab
                      text
                      active-class="font-weight-bold"
                      small
                      @click="changeStatus(item)"
                      elevation="0"
                    >
                      <v-icon :color="item.color">
                        {{ item.icon }}
                      </v-icon>
                    </v-btn>
                  </v-sheet>

                  <v-sheet width="100%" class="d-flex justify-center pt-2">
                    <v-btn
                      color="green"
                      @click="dialog.value = false, setNewData()"
                      class="rounded-pill pt-0 white--text"
                    >
                      <v-icon>mdi-check</v-icon>
                      <span>Guardar</span>
                    </v-btn>
                  </v-sheet>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-col>
      </v-row>
    </v-card>

<v-card :width="$vuetify.breakpoint.smAndDown?'100%':'60%'" :height="$vuetify.breakpoint.mdAndUp?'600':'auto'" :class="$vuetify.breakpoint.mdAndUp?'overflow-auto':''" class="mt-5 pt-3 px-3 " elevation="0">
  <v-row>
      <v-col
        :cols="$vuetify.breakpoint.smAndDown ? 12 : 12"
        v-for="(item, i) in values"
        :key="i"
      >
        <v-dialog max-width="400">
          <template v-slot:activator="{ on, attrs }">
            <v-card
              flat
              elevation="6"
              class="rounded-lg mx-2 d-flex"
              height="auto"
              width="auto"
            >
              <v-card
                :color="item.icon.color"
                class="rounded-l-lg rounded-r-0 d-flex justify-center"
                style="width: 10%"
              >
                <v-icon color="white">
                  {{ item.icon.icon }}
                </v-icon>
              </v-card>
              <v-card style="width: 90%" class="rounded-l-0 rounded-r-lg" elevation="0">
                <div class="align-center">
                 <v-row>
                  <v-col cols="9">
                    <v-list-item two-line class="pr-0">
                    <v-list-item-content>
                      <v-list-item-title class="font-weight-bold">
                        {{ item.title }}
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        {{ item.content }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  </v-col>
                  <v-col cols="3" class="d-flex align-center ">
                    <v-btn @click="deleteEntrance(item)" elevation="0" plain class="px-4">
                    <v-icon color="red">mdi-delete-variant</v-icon>
                  </v-btn>
                  </v-col>
                 </v-row>

                  


                </div>

                <v-card-actions class="pt-0 px-5 d-flex justify-space-between">
                  <div>
                    <v-icon class=" d-flex justify-center" v-bind="attrs" v-on="on" color="green"
                      >mdi-pencil</v-icon>
                  </div>
                  <span style="font-size: 11px">{{ item.date }}</span>
                </v-card-actions>
              </v-card>
            </v-card>
          </template>
          <template v-slot:default="dialog">
            <v-sheet
              :color="item.icon.color"
              class="rounded-t-0"
              height="22"
            ></v-sheet>
            <v-card
              height="420"
              color="white"
              class="rounded-b-0 rounded-t-0"
              flat
            >
              <v-text-field
                class="pt-3 mx-5 text-h5 font-weight-bold"
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
                    v-for="(icon, i) in statusButtons"
                    :key="i"
                    fab
                    plain
                    active-class="font-weight-bold"
                    small
                    @click="updateIcon(icon, item)"
                    elevation="0"
                  >
                    <v-icon :color="icon.color">
                      {{ icon.icon }}
                    </v-icon>
                  </v-btn>
                </v-sheet>

                <v-sheet width="100%" class="d-flex justify-center pt-2">
                  <v-btn
                    color="green"
                    text
                    @click="dialog.value = false, updateData(item)"
                    class="rounded-pill pt-0 white--text"
                  >
                    <v-icon>mdi-check</v-icon>
                    <span>
                      Actualizar
                    </span>
                  </v-btn>
                </v-sheet>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </v-col>
  </v-row>
</v-card>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import { onValue, ref, set, update } from "firebase/database";
import firebase from "@/firebase/index";

export default {
  computed: {
    ...mapState("user", ["user"]),
  },
  mounted() {
    if (this.user._id) {
      this.values = this.user.entries;
    } else {
      let tokenId = (JSON.parse(localStorage.getItem('user')))._id
      onValue(ref(firebase.db, `users/${tokenId}/entries`),(snapshot=>{
        this.values = snapshot.val();
      }))
    }
  },
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

      newRegist: {
        title: "",
        content: "",
        icon: {
          icon: "mdi-emoticon-neutral-outline",
          color: "orange",
        },
        date: "",
      },
      newRegist1: {
        title: "",
        content: "",
        icon: {
          icon: "mdi-emoticon-neutral-outline",
          color: "orange",
        },
        date: "",
      },

      values: [],
      // {
      //   title: "Entrada",
      //   content:
      //     "Este es un texto de prueba que ilustra el seguimiento diario del usuario",
      //   icon: {
      //     color: "red",
      //     status: "mdi-emoticon-sad-outline",
      //   },
      //   date: "10-10-2022",
      // },
    };
  },

  methods: {
    changeStatus(item){
      this.newRegist.icon = {
        color:item.color,
        icon:item.icon
      }
    },  

    setNewData(){
      let keyId=(JSON.parse(localStorage.getItem('user')))._id
      set(ref(firebase.db, `users/${keyId}/entries/${this.values!=null?this.values.length:0}`), {
        title: this.newRegist.title,
        content: this.newRegist.content ,
        icon: {
          color: this.newRegist.icon.color,
          icon: this.newRegist.icon.icon,
        },
        date: this.getActualDate(),
      });
      this.newRegist=this.newRegist1
    },

    updateIcon(icon, item){
      this.values[this.values.indexOf(item)].icon={
        color: icon.color,
        icon: icon.icon
      }
    },  

    getActualDate(){
      const date = new Date()
      return date.toJSON().slice(0,10)
    },

    deleteEntrance(item){
      let keyId=(JSON.parse(localStorage.getItem('user')))._id
      let indexValue = this.values.indexOf(item);
      this.values.splice(indexValue,1)
      const updates = {}
      updates[`users/${keyId}/entries`]=this.values
      update(ref(firebase.db), updates)
      // remove(ref(firebase.db,`users/${keyId}/entries/${indexValue}`))
    },  

    updateData(data){
      let keyId=(JSON.parse(localStorage.getItem('user')))._id
      let indexValue = this.values.indexOf(data)
      const updates = {}
      updates[`users/${keyId}/entries/${indexValue}`]={
        title: data.title,
        content: data.content,
        icon: {
          color: data.icon.color,
          icon: data.icon.icon,
        },
        date: this.getActualDate(),
      }

      update(ref(firebase.db), updates)
      this.newRegist=this.newRegist1
    }
  },
};
</script>
<style >
*::-webkit-scrollbar {
  width: 10px;
}

*::-webkit-scrollbar-track {
  background-color: #e4e4e4;
  border-radius: 100px;
}

*::-webkit-scrollbar-thumb {
  background-color: #94918c;
  border-radius: 100px;
}
</style>
