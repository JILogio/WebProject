<template>
    <h1>Agregar Usuario</h1>
    <div class="center">
       <form @submit.prevent="handleSubmit">
         <label for="name">Nombre:</label>
         <input type="text" id="name" v-model="name" required />
         
         <label for="email">Email:</label>
         <input type="text" id="email" v-model="email" required />
         
         <label for="role">Rol:</label>
         <input type="text" id="rol" v-model="role" required />

         <label for="role">Password:</label>
         <input type="password" id="password" v-model="password" required/>
         
         <button type="submit">Enviar</button>
       </form>
    </div>
</template>

<style scoped src="@/assets/css/AddProductStyle.css"></style>
   
<script>
import axios from 'axios';
import Global from '../Global'

const apiClient = axios.create({
  withCredentials: true,
});
   
   export default {
    name: 'AddUser',
    data() {
       return {
         name: '',
         email: '',
         role: '',
         password: '',
       };
    },
    methods: {
        async handleSubmit() {
         const user = {
           name: this.name,
           email: this.email,
           role: this.role,
           password: this.password
        };
        const url = Global.url;

         try {
           const response = await apiClient.post(url+'User/register',user);
           if(response.data.status != 'error'){
            alert('Usuario agregado con éxito');
            this.name = '';
            this.email = '';
            this.role = '';
            this.password = '';

            this.$router.push('/AdminProduct');
           } else{
            console.log(response.data,user)
           }
         } catch (error) {
           console.log(error);
           alert(error);
         }
       }
    }
   };
</script>