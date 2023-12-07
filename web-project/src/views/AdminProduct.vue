<template>
    <div>
        <table>
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Precio</th>
                <th>Accion</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="product in products" :key="product._id">
                <td>{{ product.name }}</td>
                <td>{{ product.type }}</td>
                <td>{{ product.price }}</td>
                <td>
                    <button @click="deleteProduct(product.name, $event)">Delete</button>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped src="@/assets/css/AdminProductStyle.css"></style>
   
<script>
import axios from 'axios';
import Global from '@/Global';

const apiClient = axios.create({
  withCredentials: true,
});
   
   export default {
    data() {
       return {
         url: Global.url,
         products: [],
       };
    },
    created() {
       this.fetchProducts();
    },
    methods: {
    async fetchProducts() {
        try {
            const response = await apiClient.get(this.url+'Product/products');
            this.products = response.data.products;
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    },
    async deleteProduct(id, event) {
        event.preventDefault();
        try {
            console.log(id)
            await apiClient.delete(this.url+'Product/delete/'+'id');
            this.fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
            }
        },
    },
   };
</script>
