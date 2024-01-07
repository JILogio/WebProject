<template>
    <h1>Productos</h1>
    <div class="grid-container">
        <div class="card" v-for="product in products" :key="product._id">
            <h2>{{ product.name }}</h2>
            <p>Precio: ${{ product.price }}</p>
            <input type="number" :ref="'input-'+product._id">
            <button @click="orderProduct(product._id, $event)">Order</button>
        </div>
    </div>
</template>

<style scoped src="@/assets/css/ProductStyle.css"></style>

<script>
import axios from 'axios';
import Global from '../Global'

const apiClient = axios.create({
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

export default {
    name: 'ProductPage',

    mounted(){
        this.getProductos();
    },
    data(){
        return {
            url: Global.url,
            products: {},
        }
    },
    methods: {
        getProductos(){
            apiClient.get(this.url+'Product/products')
                .then(res => {
                    if(res.data.status == 'success'){
                        this.products = res.data.products;
                    }
                })
                .catch (err => {
                    console.log(err)
                })
            },
        async orderProduct(id, event) {
            event.preventDefault();
            try {
            let data = this.$refs['input-'+id][0].value;
            if (data > 0 || isNaN(data)){
                const response = await axios.get(`${this.url}User/user`, {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                });
                const content = response.data;
                
                const order = {
                    idUser: content._id,
                    idProduct: id,
                    amount: data
                }

                const result = await apiClient.post(this.url+'Order/save',order)
                if(result.data.status == 'success'){
                    alert('Order realizada');
                    this.$refs['input-'+id][0].value = '';
                }
            }
            } catch (err){
                alert('Error al realizar el pedido');
            }
        }
    }
}
</script>