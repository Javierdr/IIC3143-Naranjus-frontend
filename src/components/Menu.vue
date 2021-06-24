<template>
  <div>
    
    <h1> Bienvenido a Naranjus Security Solutions, usuario </h1>
    <img src="assets/logonombre.png" class="img-fluig">
    <ul class="list-group">
    <li class="list-group-item"><router-link to="plates">Camaras </router-link></li>
    <li class="list-group-item"><router-link to="programar_visitas">Programar visitas</router-link></li>
    <li class="list-group-item"><router-link to="visitas_programadas">Visitas Programadas </router-link></li>
    <li class="list-group-item"><router-link to="registro_visitas">Registro de visitas </router-link></li>
    <li class="list-group-item"><router-link to="visitas_registradas">Visitas Registradas </router-link></li>
    <li class="list-group-item"><router-link to="logs_entrada_general">Logs entrada general </router-link></li>
    </ul>

  </div>

</template>


<script>
export default {
    data: {
      
    }

}

</script>

<style>

.list-group-item{
  background-color: rgb(32, 184, 176);
  font-family: Helvetica;
  font-size: 18px;
}

.router-link {
  color: 
}
</style>
