<template>
    <button @click="getAllInvoices">Obtener facturas</button>
    <button @click="FindProductsByDistrict">Listar productos por distrito</button>
    <input v-model="inputValue">

    <!-- Invoices Template -->
    <div v-if="tabSelected === 'invoices'">
        <h2>Facturas</h2>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Fecha</th>
                    <th>Total</th>
                    <th>Distrito</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="invoice in invoices" :key="invoice.id">
                    <td>{{ invoice.name }}</td>
                    <td>{{ invoice.date }}</td>
                    <td>{{ invoice.totalValue }}</td>
                    <td>{{ invoice.district }}</td>
                </tr>
            </tbody>
        </table>
    </div>

    <!-- Products Template -->
    <div v-if="tabSelected === 'products'">
        <h2>Productos</h2>
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td>{{ product.name }}</td>
                    <td>{{ product.price }}</td>
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
  name: "ReportPage",
  data() {
     return {
       url: Global.url,
       invoices: [],
       products: [],
       inputValue: '',
       tabSelected: 'invoices',
     };
  },
  methods: {
    async getAllInvoices() {
        try {
            const response = await apiClient.get(this.url+'Report/InvoicesWithDistrict');
            this.invoices = response.data;
            this.tabSelected = 'invoices'
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    },
    async FindProductsByDistrict(){
        try {
            const response = await apiClient.get(this.url+'Report/InvoicesLocation/'+this.inputValue);
            this.products = response.data;
            this.tabSelected = 'products'
        } catch (error) {
            console.error('Error', error);
        }
    },
  },

 };
</script>
