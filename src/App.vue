<template>
  <svg-sprite />
  <Aside />
  <main>
    <router-view />
  </main>
</template>

<script>
import Aside from "./components/Aside.vue";

export default {
  components: {
    Aside
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/reset.scss";

*,
*::after,
*::before {
  box-sizing: border-box;
}
body {
  margin: 0;
  background: #282a34;
  color: #fff;
  font-family: "Poppins", sans-serif;
}
main {
  background-color: #3c3f51;
  width: 100%;
  margin-left: 300px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  padding: 20px;
  z-index: 1;
  height: 100vh;
  overflow-y: scroll;
}
#app {
  display: flex;
}
</style>
