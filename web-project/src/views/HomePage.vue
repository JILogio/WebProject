<template>
    {{ message }}
</template>

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