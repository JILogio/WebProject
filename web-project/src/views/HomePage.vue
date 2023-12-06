<template>
    <section class="Welcome">
        <div class="container1">
            <h1>Bienvenidos</h1>
            <!-- <p>{{ message }}</p> -->
            <p>Disfruta tus mejores momentos con un café. </p>
            <button class="started">About Us</button>
        </div>
    </section>
</template>

<style scoped src="@/assets/css/HomeStyle.css"></style>

<script>
import { onMounted, ref } from 'vue';
import { useStore } from 'vuex';
import axios from 'axios';
import Global from '@/Global';

export default {
    name: 'HomePage',
    setup() {
        const message = ref('No estás logeado');

        const store = useStore();
        const url = Global.url;

        onMounted(async () => {
            try {
                const response = await axios.get(`${url}User/user`, {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                });

                const content = response.data;

                message.value = `Hola ${content.name}`;

                await store.dispatch('setAuth', true);
            } catch (err) {
                await store.dispatch('setAuth', false);
            }
        });

        return {
            message
        };
    }
};
</script>