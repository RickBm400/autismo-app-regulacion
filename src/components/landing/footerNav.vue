<template>
    <v-container fluid>
        <v-footer app fixed class="flex justify-center justify-space-between py-4 px-14">
                    <v-btn active-class="" v-for="icon,i in bottomIcons" :key="i" 
                    fab small elevation="0" :to="icon.link" class="d-flex flex-column"
                    >
                        <v-icon>
                            {{icon.icon}}
                        </v-icon>
                        <span>{{icon.name}}</span>
                    </v-btn>
        </v-footer>
    </v-container>
</template>
<script>
export default {
    data(){
        return{
            bottomIcons: [
                {   
                    icon: 'mdi-newspaper',
                    link: '/news'
                },
                {
                    icon: 'mdi-alert',
                    link: '/panic-secction'
                },
                {
                    icon: 'mdi-home-assistant',
                    link: '/home'
                },
                {
                    icon: 'mdi-comment-check',
                    link: '/daily-routine'
                },
                {
                    icon: 'mdi-file-tree',
                    link: '/other-sections'
                },
            ],
        
        }
    },


}
</script>