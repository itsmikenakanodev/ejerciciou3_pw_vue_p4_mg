<template>
  <VehiculoConsultarTodos/>
</template>

<script>
import VehiculoConsultarTodos from "./modules/inventario/pages/VehiculoConsultarTodos.vue";

export default {
  name: "App",
  components: {
    VehiculoConsultarTodos,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
