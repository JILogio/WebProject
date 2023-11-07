<template>
  <div>
    <div v-html="ejsContent"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ejsContent: './components/IndexContent.ejs'
    };
  }
}
</script>
