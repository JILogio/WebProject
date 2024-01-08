<template>
    <div>
        <form @submit.prevent="submitForm">
            <label for="street">Calle:</label>
            <input type="text" id="street" v-model="location.street" required>
            
            <label for="district">Distrito:</label>
            <input type="text" id="district" v-model="location.district" required>
            
            <label for="postal">Código postal:</label>
            <input type="text" id="postal" v-model="location.postal" required>

            <button type="submit">Enviar</button>
        </form>
    </div>
</template>
    
<script>
import axios from 'axios';
import Global from '@/Global';
    
const apiClient = axios.create({
    withCredentials: true,
});
    
export default {
    name: 'RealizarPedido',
    props: ['orders','total'],
    data() {
        return {
            url: Global.url,
            location: {
                street: '',
                district: '',
                postal: '',
            },
            ordersCopy: {},
            invoice: {
                idOrder: {},
                date: '',
                totalValue: 0,
                idLocation: ''
            },
          };
        },
    created(){
        this.ordersCopy = JSON.parse(this.orders);
    },
    methods: {
    async submitForm() {
        try {
            //Obetner fecha actual en el formato correcto
            let hoy = new Date();
            let dia = hoy.getDate();
            let mes = hoy.getMonth() + 1;
            let anio = hoy.getFullYear();
            let diaFormateado = String(dia).padStart(2, '0');
            let mesFormateado = String(mes).padStart(2, '0');
            let anioFormateado = String(anio);

            let fechaFormateada = `${diaFormateado}/${mesFormateado}/${anioFormateado}`;

            //Guardar primeramente la ubicación para obtener su id
            const locationResult = await apiClient.post(this.url+'Location/save', this.location);

            if(locationResult.data.status != 'error'){
                const locationID = locationResult.data._id;
                this.invoice = {
                    idOrder: this.ordersCopy,
                    date: fechaFormateada,
                    totalValue: this.total,
                    idLocation: locationID
                }

                await apiClient.post(this.url+'Invoice/save',this.invoice);
                alert('Orden realizado correctamente');
                this.$router.push('/product');
            } else {
                alert('Error al ingresar la ubicación');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
      }
    }
}
</script>