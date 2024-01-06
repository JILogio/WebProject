<template>
    <div class="center">
        <h1>Usuarios</h1>
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
            <tr v-for="user in users" :key="user._id">
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.role }}</td>
                <td>
                    <button @click="deleteUser(user._id, $event)">Delete</button>
                    <button @click="updateUser(user._id, $event)">Update</button>
                </td>
            </tr>
            </tbody>
        </table>
        <a href="/AddUser"><button>Añadir</button></a>
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
    name: "AdminUser",
    data() {
       return {
         url: Global.url,
         users: [],
       };
    },
    created() {
       this.fetchUsers();
    },
    methods: {
    async fetchUsers() {
        try {
            const response = await apiClient.get(this.url+'User/users');
            this.users = response.data.users;
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    },
    async deleteUser(id, event) {
        event.preventDefault();
        try {
            await apiClient.delete(this.url+`User/delete/${id}`);
            this.fetchUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
            }
        },
    async updateUser(id, event) {
        event.preventDefault();
        try {
            const product = await apiClient.get(this.url+'User/search?search='+id);
            if(product.data.status == 'success'){
                this.$router.push({ name: 'UpdateUser', params: { id: id } });
            }
        } catch (error) {
            console.error('Error, user doesnt exist:', error);
            }
        },
    },
   };
</script>