<template>
    <div class="center">
        <h1>Productos</h1>
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
                    <button @click="deleteProduct(product._id, $event)">Delete</button>
                    <button @click="updateProduct(product._id, $event)">Update</button>
                </td>
            </tr>
            </tbody>
        </table>
        <a href="/AddProduct"><button>Añadir</button></a>
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
    name: "AdminProduct",
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
            await apiClient.delete(this.url+`Product/delete/${id}`);
            this.fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
            }
        },
    async updateProduct(id, event) {
        event.preventDefault();
        try {
            const product = await apiClient.get(this.url+'Product/product?search='+id);
            if(product.data.status == 'success'){
                this.$router.push({ name: 'UpdateProduct', params: { id: id } });
            }
        } catch (error) {
            console.error('Error, product doesnt exist:', error);
            }
        },
    },

   };
</script>
