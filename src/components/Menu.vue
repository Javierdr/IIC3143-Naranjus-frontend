<template>

  <div id="naranjus_navbar">
  <b-navbar toggleable="lg" type="dark" variant="danger" class="navbar-horizontal">

    <b-navbar-brand to="/" class="nav-link active" href="#">Naranjus</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <li class="nav-item">
          <router-link to="/LogsEntrada" class="nav-link active" arial-currente="page">Residentes</router-link>
        </li>
        <li class="nav-item">
          <router-link  to="/LogsEntradaVU" class="nav-link active" arial-currente="page">Visitas</router-link>
        </li>
        <li class="nav-item">
          <router-link to="plates" class="nav-link active" arial-currente="page">Nuevo Usuario</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/PlatesPage" class="nav-link active" arial-currente="page">Patentes</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Register" class="nav-link active" arial-currente="page">Registro</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/programar_visitas" class="nav-link active" arial-currente="page">Programar Visita</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/visitas_programadas" class="nav-link active" arial-currente="page">Visitas Programadas</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/registro_visitas" class="nav-link active" arial-currente="page">Registro de visita</router-link>
        </li>
      </b-navbar-nav>
<!--      <ul class="list-group">-->
<!--        <li class="list-group-item"><router-link to="plates">Camaras </router-link></li>-->
<!--        <li class="list-group-item"><router-link to="programar_visitas">Programar visitas</router-link></li>-->
<!--        <li class="list-group-item"><router-link to="visitas_programadas">Visitas Programadas </router-link></li>-->
<!--        <li class="list-group-item"><router-link to="registro_visitas">Registro de visitas </router-link></li>-->
<!--        <li class="list-group-item"><router-link to="visitas_registradas">Visitas Registradas </router-link></li>-->
<!--        <li class="list-group-item"><router-link to="logs_entrada_general">Logs entrada general </router-link></li>-->
<!--        <li class="list-group-item"><router-link to="validacion_peaton">Validar Visita Peatón</router-link></li>-->
<!--      </ul>-->
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <li class="nav-item">

            <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
            <template #button-content>
              <em>User</em>
            </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
         </li>

         <li class="nav-item">
              <router-link to="/Login" class="nav-link active" arial-currente="page">Login</router-link>
         </li>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>



</template>

<router-view></router-view>


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
