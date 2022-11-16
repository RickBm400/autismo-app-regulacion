<template>
  <v-container fluid>
    <v-card width="100%" elevation="0">
      <v-footer app fixed>
        <v-card
          color="transparent"
          elevation="0"
          class="d-flex align-center justify-space-around pa-0"
          width="100%"
          height="50"
        >
          <v-btn
            active-class="green--text font-weight-bold"
            plain
            :ripple="false"
            color="black"
            v-for="(icon, i) in bottomIcons"
            :key="i"
            :to="icon.link"
          >
            <v-badge 
                dot color="red" :value="dotVisibility" v-if="icon.link == '/regulation-section'">
              <v-icon>
                {{ icon.icon }}
              </v-icon>
            </v-badge>
            <v-icon v-else>
              {{ icon.icon }}
            </v-icon>
          </v-btn>
        </v-card>
      </v-footer>
    </v-card>
  </v-container>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {
      bottomIcons: [
        {
          icon: "mdi-file-tree",
          link: "/daily-routine",
        },
        {
          icon: "mdi-home-assistant",
          link: "/home",
        },
        {
          icon: "mdi-account-heart",
          link: "/user-advisor",
        },
        {
          icon: "mdi-order-bool-ascending-variant",
          link: "/regulation-section",
        },
      ],
    };
  },

  computed:{
    ...mapState('regulation',['dotVisibility'])
  }
};
</script>