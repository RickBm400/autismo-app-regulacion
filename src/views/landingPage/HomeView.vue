<template>
    <v-container >

        <v-sheet class="d-flex flex-row-reverse">
            <v-btn :ripple="false" retain-focus-on-click fab small text elevation="0">
                <v-icon>
                    mdi-account-circle
                </v-icon>
                
            </v-btn>
        </v-sheet>

        <v-card class="ma-5" height="500" rounded="xl" elevation="5">
            <v-img src="@/assets/IMG/landing/background_landing.png" height="200">
            </v-img>

            <v-sheet class="px-5">
                <v-card-title class="font-weight-bold">
                    Novedades
                </v-card-title>
                <v-card-text class="pt-3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni temporibus odio cupiditate excepturi molestias rem unde modi facilis cum minus inventore provident, dolores officia eum, alias aspernatur praesentium tenetur nobis.
                </v-card-text>

            </v-sheet>
        </v-card>
      
    </v-container>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>

<style scoped>

</style>