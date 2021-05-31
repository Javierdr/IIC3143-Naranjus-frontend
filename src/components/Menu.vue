<template>
  <div>
    <h1> Bienvenido, {{ username }} </h1>
    <ul>
    <li><router-link to="registro_visitas">Registro Visitas</router-link></li>
    <li><router-link to="visitas_registradas">Visitas Registradas</router-link></li>
    <li><router-link to="LogsEntrada">Logs de entrada </router-link></li>

    </ul>

  </div>


</template>


<script>
export default {
    data: {
      username: 'asdd'
    }

}

</script>

<style>

</style>
