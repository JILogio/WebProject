<template>
    <div class="center">
        <h1>Actualizar Producto</h1>
        <form @submit.prevent="updateProduct">
            <tr v-for="product in products" :key="product._id">
                <label for="name">Nombre:</label>
                <input type="text" id="name" v-model="product['name']" required>
                <br>
                <label for="type">Tipo:</label>
                <input type="text" id="type" v-model="product['type']" required>
                <br>
                <label for="price">Precio:</label>
                <input type="number" id="price" v-model="product['price']" required>
                <br>
                <button type="submit">Actualizar</button>
            </tr>
        </form>
    </div>
</template>

<style scoped src="@/assets/css/AddProductStyle.css"></style>

<script>
import axios from 'axios';
import Global from '@/Global';

const apiClient = axios.create({
 withCredentials: true,
});
   
export default {
    name: "UpdateProduct",
    props: ['id'],
    data() {
       return {
         url: Global.url,
         products: {},
       };
    },
    created() {
       this.fetchProduct();
    },
    methods: {
    async fetchProduct() {
        try {
            const response = await apiClient.get(this.url+'Product/product?search='+this.id);
            if(response.data.status == 'success'){
                this.products = response.data.product;
            }
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    },
    async updateProduct() {
        try {
            const gou = this.products.map(item => {
            return {
                name: item.name,
                type: item.type,
                price: item.price
            };
            });

            const filteredData = gou.flatMap(item => Object.values(item));

            const data = {
                name: filteredData[0],
                type: filteredData[1],
                price: filteredData[2],
            }

            await apiClient.put(this.url+'Product/update/'+this.id, data);
            this.$router.push('/AdminProduct');
        } catch (error) {
            console.error('Error updating product:', error);
            }
        },
    },
};
</script>
