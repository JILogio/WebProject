<template>
  <header>
    <HeaderLoginPage v-if="role === ''"/>
    <HeaderAdminPage v-if="role === 'admin'"/>
    <MainHeaderPage v-if="role === 'client'"/>
    <HeaderEmployeePage v-if="role === 'employee'" />
  </header>
  <RouterView/>
  <FooterPage v-if="!hideFooter"/>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap-vue/dist/bootstrap-vue.css'
import HeaderLoginPage from './components/HeaderLoginPage.vue';
import MainHeaderPage from './components/MainHeaderPage.vue';
import HeaderAdminPage from '@/components/HeaderAdminPage.vue';
import HeaderEmployeePage from '@/components/HeaderEmployeePage.vue'
import FooterPage from './components/FooterPage.vue';

import {onMounted,ref} from 'vue';
import axios from 'axios';
import Global from '@/Global';
import { RouterView } from 'vue-router';

export default {
    name: "App",
    components: { HeaderLoginPage, MainHeaderPage, RouterView, HeaderAdminPage,HeaderEmployeePage,FooterPage},

    data() {
    return {
      hideFooter: false,
      };
    },
    watch: {
    '$route.path': {
      handler(newValue) {
        this.hideFooter = newValue === '/login' || newValue === '/register';
      },
        immediate: true,
      },
    },

    setup() {
      const url = Global.url;
      const role = ref('')

      onMounted(async () =>{
        try{
          const response = await axios.get(`${url}User/user`, {
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
