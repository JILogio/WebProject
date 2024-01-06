<template>
    <div class="center">
        <h1>Actualizar Usuario</h1>
        <form @submit.prevent="updateUser">
            <tr v-for="user in users" :key="user._id">
                <label for="name">Nombre:</label>
                <input type="text" id="name" v-model="user['name']" required>
                <br>
                <label for="type">Email:</label>
                <input type="text" id="email" v-model="user['email']" required>
                <br>
                <label for="price">Rol:</label>
                <input type="text" id="role" v-model="user['role']" required>
                <br>
                <br>
                <label for="price">Password:</label>
                <input type="text" id="password" v-model="user['password']" required>
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
    name: "UpdateUser",
    props: ['id'],
    data() {
       return {
         url: Global.url,
         users: {},
       };
    },
    created() {
       this.fetchUser();
    },
    methods: {
    async fetchUser() {
        try {
            const response = await apiClient.get(this.url+'User/search?search='+this.id);
            if(response.data.status == 'success'){
                this.users = response.data.user;
            }
        } catch (error) {
            console.error('Error fetching user:', error);
        }
    },
    async updateUser() {
        try {
            const gou = this.users.map(item => {
            return {
                name: item.name,
                email: item.email,
                role: item.role,
                password: item.password
            };
            });

            const filteredData = gou.flatMap(item => Object.values(item));

            const data = {
                name: filteredData[0],
                email: filteredData[1],
                role: filteredData[2],
                password: filteredData[3]
            }

            await apiClient.put(this.url+'User/update/'+this.id, data);
            this.$router.push('/AdminUser');
        } catch (error) {
            console.error('Error updating user:', error);
            }
        },
    },
};
</script>
