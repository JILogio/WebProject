<template>
  <body>
     <nav class="navbar navbar-expand-lg bg-body-tertiary d-flex justify-content-between align-items-center">
         <div class="container-fluid">
           <a class="navbar-brand" href="/">Home</a>
 
           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
             <span class="navbar-toggler-icon"></span>
           </button>
 
           <div class="collapse navbar-collapse" id="navbarSupportedContent">
             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
               <li class="nav-item">
                 <a class="nav-link active" aria-current="page" href="#">Productos</a>
               </li>
               <li class="nav-item">
                 <a class="nav-link" href="#">About Us</a>
               </li>
             </ul>
             <ul class="navbar-nav">
               <li class="nav-item">
                <a href="/login" class="nav-link" @click="logout">Logout</a>
               </li>
             </ul>
             <form class="d-flex" role="search">
                 <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                 <button class="btn btn-outline-success" type="submit">Search</button>
             </form>
           </div>
         </div>
       </nav>
  </body>
 </template>

<script>
import {computed} from 'vue';
import {useStore} from 'vuex';
import Global from '@/Global';
import axios from 'axios';

export default {
  name: 'MainHeaderPage',
  setup() {
    const url = Global.url;
    const store = useStore();

    const auth = computed(() => store.state.authenticated)

    const logout = async () =>{
      await axios.post(url+'logout',{}, {withCredentials: true})
    }

    return {
      auth,
      logout,
    }
 }
}
</script>