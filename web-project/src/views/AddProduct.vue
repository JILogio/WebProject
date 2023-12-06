<template>
    <h1>Agregar Producto</h1>
    <div class="center">
       <form @submit.prevent="handleSubmit">
         <label for="name">Nombre:</label>
         <input type="text" id="name" v-model="name" required />
         
         <label for="type">Tipo:</label>
         <input type="text" id="type" v-model="type" required />
         
         <label for="price">Precio:</label>
         <input type="number" id="price" v-model="price" required />
         
         <button type="submit">Enviar</button>
       </form>
    </div>
</template>

<style scoped src="@/assets/css/AddProductStyle.css"></style>
   
<script>
import axios from 'axios';
import Global from '../Global'
   
   export default {
    name: 'AddProduct',
    data() {
       return {
         name: '',
         type: '',
         price: '',
       };
    },
    methods: {
        async handleSubmit() {
         /*const product = {
           name: this.name,
           type: this.type,
           price: this.price
        };*/
        const url = Global.url;

         try {
           const response = await axios.post(url+'Product/save',{
                                            headers: {'Content-Type': 'application/json'},
                                            withCredentials: true});
           if(response.data.status != 'error'){
            alert('Producto agregado con éxito');
            this.name = '';
            this.type = '';
            this.price = '';
           } else{
            console.log(response.data)
           }
         } catch (error) {
           console.log(error);
           alert(error);
         }
       }
    }
   };
</script>