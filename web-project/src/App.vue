<template>
  <HeaderPage></HeaderPage>
</template>

<script>
import HeaderPage from './components/HeaderPage.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';

export default {
  name: 'App',
  components: {
    HeaderPage,
}
}
</script>

<style>
@import './assets/css/styles.css';
</style>
