<template>
<main class="form-signin w-100 m-auto">
  <form @submit.prevent="submit">
    <img class="mb-4" src="../assets/logo.png" style="width: 75%; display: block; margin: 0 auto;">
    <h1 class="h3 mb-3 fw-normal" style="text-align: center;">Please sign in</h1>

    <div class="form-floating">
      <input v-model="data.email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required>
      <label for="floatingInput">Email address</label>
    </div>
    <div class="form-floating">
      <input v-model="data.password" type="password" class="form-control" id="floatingPassword" placeholder="Password" required>
      <label for="floatingPassword">Password</label>
    </div>

    <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
    <div v-if="message" style="color: red;">{{ message }}</div>
  </form>
</main>
</template>

<style scoped src="@/assets/css/LoginStyles.css"></style>

<script>
import Global from '@/Global';
import { reactive,ref } from 'vue';
import axios from 'axios'
import { useRouter } from 'vue-router';

const apiClient = axios.create({
  withCredentials: true,
});

export default {
  name: 'LoginPage',
  setup() {
    const url = Global.url;
    const message = ref('')
    const data = reactive({
      email: '',
      password: ''
    });
    const router = useRouter();

    const submit = async () =>{
    try{
      const response = await apiClient.post(url+'User/login', data)
      if(response.data.status != 'error'){
        router.push('/')
      }  
    } catch(err){
      message.value = `${err.response.data.message}`
    }
    }

    return {
      data,
      message,
      submit,
    }
  }
}
</script>
