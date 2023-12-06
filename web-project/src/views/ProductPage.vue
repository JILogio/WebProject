<template>
    <h1>Productos</h1>
    <div class="grid-container">
        <div class="card" v-for="product in products" :key="product._id">
            <h2>{{ product.name }}</h2>
            <p>Precio: ${{ product.price }}</p>
            <button>Order</button>
        </div>
    </div>
</template>

<style scoped src="@/assets/css/ProductStyle.css"></style>

<script>
import axios from 'axios';
import Global from '../Global'

export default {
    name: 'ProductPage',

    mounted(){
        this.getProductos();
    },
    data(){
        return {
            url: Global.url,
            products: {}
        }
    },
    methods: {
        getProductos(){
            axios.get(this.url+'/Product/products')
                .then(res => {
                    if(res.data.status == 'success'){
                        this.products = res.data.products;
                        console.log(this.personas)
                    }
                })
        },
    }
}
</script>