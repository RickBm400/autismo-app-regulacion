<template>
    <v-container fluid class="d-flex justify-center">
        <v-card elevation="0" max-width="500">
            <v-row>
            <v-col cols="12" class="pb-0" >
              <v-sheet class="pa-5 d-flex flex-column justify-end" height="300">
                <span class="text-h4 font-weight-bold">Iniciar Sección</span>
                <span>Reistra tus datos para continuar.</span> 
              </v-sheet>
            </v-col>
            <v-col cols="12" >
                <v-card class="pa-5" elevation="0">
                    <v-text-field
                    label="Correo"
                    dense
                    prepend-inner-icon="mdi-account"
                    rounded
                    v-model="email"
                    color="green"
                    class="rounded-pill"
                    filled
                    />
                    <v-text-field
                    filled
                    dense
                    v-model="password"
                    rounded
                    prepend-inner-icon="mdi-lock"
                    color="green"
                    class="rounded-pill"
                    label="Contraseña"></v-text-field>

                    <v-card-actions class="d-flex justify-center">
                        <v-btn @click="login()" class="rounded-pill white--text text-capitalize px-5" color="green">
                            Ingresar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
        </v-card>
        <v-card>
            
        </v-card>
    </v-container>
</template>
<script>

import  firebase from '@/firebase/index.js'
import { mapMutations } from 'vuex';
import { signInWithEmailAndPassword } from '@firebase/auth';
import {  ref, onValue} from "firebase/database";

export default {
    data(){
        return{
            email:'rick@gmail.com',
            password:'test1234',
        }
    },
    methods:{
        ...mapMutations('user', ['setUser']),

        login(){
           signInWithEmailAndPassword(firebase.authentication, this.email, this.password).then((credential) =>{
                const user = credential
                    let data = {
                        _id:user.user.uid,
                        email:user.user.email,
                        access:user.user.accessToken
                    }
                    console.log(data);
                    this.setData(data)
                }).catch((error)=>{
                    console.log(error)
                })
        },

        setData(userData){
            onValue(ref(firebase.db, 'users'),(snapshot)=>{
                const data = (snapshot.val())[userData._id]
                this.setUser(data)
                localStorage.setItem('user', JSON.stringify(userData))
                this.$router.go()
            })
        }

    }
}

</script>