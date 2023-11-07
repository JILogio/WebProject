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
  </form>
</main>
</template>

<script>
import Global from '@/Global';
import { reactive } from 'vue';
import axios from 'axios'
import { useRouter } from 'vue-router';

const apiClient = axios.create({
  withCredentials: true,
});

export default {
  name: 'LoginPage',
  setup() {
    const url = Global.url;
    const data = reactive({
      email: '',
      password: ''
    });
    const router = useRouter();

    const submit = async () =>{
      await apiClient.post(url+'login', data)
                .then(() => {
                    router.push('/')
                })
                .catch(error => {
                    console.log(error)
                });
    }

    return {
      data,
      submit
    }
  }
}
</script>