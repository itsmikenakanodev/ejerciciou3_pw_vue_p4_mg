<template>
  <div v-if="listado" class="container">
     <label class="r1"
      ><label>ID</label> <label>PLACA</label>
      <label>MARCA</label> <label>MODELO</label>
      <label>CAPACIDAD</label> <label>BUSCAR POR PLACA</label>
    </label>
    <label class="r" v-for="item in listado" :key="item"
      ><label>{{ item.id }}</label> <label>{{ item.placa }}</label>
      <label>{{ item.marca }}</label> <label>{{ item.modelo }}</label>
      <label>{{ item.capacidad }}</label> <button @click="buscarPorPlaca(item.placa)">Visualizar</button>
    </label>
  </div>

  <div v-if="listado" class="form">
    <label for="">Id:</label>
    <input type="text" v-model="id">
    <label for="">Placa:</label>
    <input type="text" v-model="placa">
    <label for="">Marca:</label>
    <input type="text" v-model="marca">
    <label for="">Modelo:</label>
    <input type="text" v-model="modelo">
    <label for="">Capacidad:</label>
    <input type="text" v-model="capacidad">
  </div>
</template>

<script>
import { consultarTodosFachada, consultarPorPlacaFachada } from "../helpers/VehiculoCliente";

export default {
  data() {
    return {
      listado: null,
      item: null,
      id:null,
      placa:null,
      marca:null,
      modelo:null,
      capacidad:null
    };
  },

  methods: {
    async buscarTodos() {
      const data = await consultarTodosFachada();

      console.log("DATOS EN DATA" + data);
      this.listado = data;
    },
    async buscarPorPlaca(placa) {
      const data = await consultarPorPlacaFachada(placa);

      this.id=data.id;
      this.placa=data.placa;
      this.marca=data.marca;
      this.modelo=data.modelo;
      this.capacidad=data.capacidad

    },
  },

  mounted() {
    this.buscarTodos();
  }
};
</script>

<style scoped>
.container{
  display: grid;
  grid-template-columns: span(6) 200px;
  border: 4px solid blueviolet;
}

.container .r label{
  margin-left: 50px;
  justify-content: center;
}

.container .r1 label{
  margin-left: 40px;
  justify-content: center;
}

.container2 {
  display: flex;
  flex-direction: column;
}
</style>