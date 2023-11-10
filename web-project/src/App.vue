<template>
  <HeaderLoginPage v-if="role === ''"/>
  <HeaderAdminPage v-if="role === 'admin'"/>
  <MainHeaderPage v-if="role === 'client'"/>
  <RouterView/>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import HeaderLoginPage from './components/HeaderLoginPage.vue';
import MainHeaderPage from './components/MainHeaderPage.vue';
import HeaderAdminPage from '@/components/HeaderAdminPage.vue'

import {onMounted,ref} from 'vue';
import axios from 'axios';
import Global from '@/Global';
import { RouterView } from 'vue-router';

export default {
    name: "App",
    components: { HeaderLoginPage, MainHeaderPage, RouterView, HeaderAdminPage},

    setup() {
      const url = Global.url;
      const role = ref('')

      onMounted(async () =>{
        try{
          const response = await axios.get(`${url}user`, {
                      headers: { 'Content-Type': 'application/json' },
                      withCredentials: true
                  });

          const content = response.data;
          role.value = `${content.role}`
        } catch(err){
          console.log(err)
        }
      });

      return {
        role
      }
    }
}
</script>

<style>
@import './assets/css/styles.css';
body {
  height: 100%;
}

.form-signin {
  max-width: 330px;
  padding: 1rem;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
</style>
