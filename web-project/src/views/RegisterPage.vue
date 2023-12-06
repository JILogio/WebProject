<template>
<main class="form-signin bg-rect w-50 m-auto py-5 px-4 rounded">
  <form @submit.prevent="submit">
    <img class="mb-4" src="../assets/logo/logo.png" style="width: 75%; display: block; margin: 0 auto;">
    <h1 class="h3 mb-3 fw-normal" style="text-align: center; color: white;">Please register</h1>

    <div class="form-floating">
      <input v-model="data.name" type="text" class="form-control" id="floatingName" placeholder="Name" required>
      <label for="floatingName">Name</label>
    </div>
    <div class="form-floating">
      <input v-model="data.email" type="email" class="form-control" id="floatingEmail" placeholder="name@example.com" required>
      <label for="floatingEmail">Email address</label>
    </div>
    <div class="form-floating">
      <input v-model="data.password" type="password" class="form-control password" id="floatingPassword" placeholder="Password" required>
      <label for="floatingPassword">Password</label>
    </div>
    <div class="form-floating">
      <input v-model="data.rePassword" type="password" class="form-control re-password" id="floatingRePassword" placeholder="Re-Password" required>
      <label for="floatingRePassword">Re-Password</label>
    </div>

    <button class="btn btn-primary w-100 py-2" type="submit">Submit</button>
  </form>
</main>
</template>

<style scoped src="@/assets/css/RegisterStyles.css"></style>

<script>
import Global from '@/Global';
import {reactive} from 'vue';
import axios from 'axios'
import { useRouter } from 'vue-router';

export default {
    name: 'RegisterPage',
    setup() {
        const url = Global.url;
        const data = reactive({
            name: '',
            email: '',
            role: 'client',
            password: '',
            rePassword: '',
        });
        const router = useRouter()

        const submit = async () =>{
          if (data.password !== data.rePassword) {
            alert('Password and Re-Password are not the same');
            return;
          }
            await axios.post(url+'User/register', data)
                .then(response => {
                    console.log(response.data)
                    router.push('/login')
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
