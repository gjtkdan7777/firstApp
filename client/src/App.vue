<template>
  <div id="app">
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from "../src/components/router/Navigation.vue";
export default {
  components: {
    Nav,
  },
  name: "App",
};
</script>

<style></style>
