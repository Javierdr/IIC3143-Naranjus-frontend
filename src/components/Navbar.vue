<template>

  <div id="naranjus_navbar">
  <b-navbar toggleable="lg" type="dark" variant="danger" class="navbar-horizontal primary">

    <b-navbar-brand to="/" class="nav-link active" href="#">
      <img src="../assets/logocolor.png" height="54.4" width="38.6" class="logo">Naranjus
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <li v-if="currentUser.is_admin" class="nav-item">
          <router-link to="plates" class="nav-link active" arial-currente="page">Cámara</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/PlatesPage" class="nav-link active" arial-currente="page">Patentes</router-link>
        </li>
        <li v-if="!currentUser.is_admin" class="nav-item">
          <router-link to="/programar_visitas" class="nav-link active" arial-currente="page">Programar Visita</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/visitas_programadas" class="nav-link active" arial-currente="page">Visitas Programadas</router-link>
        </li>
        <li v-if="currentUser.is_admin" class="nav-item">
          <router-link to="/validacion_peaton" class="nav-link active" arial-currente="page">Validar visita</router-link>
        </li>
        <li v-if="currentUser.is_admin" class="nav-item">
          <router-link to="/registro_visitas" class="nav-link active" arial-currente="page">Registar visita</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/visitas_registradas" class="nav-link active" arial-currente="page">Historico Visitas</router-link>
        </li>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <li class="nav-item">
              <router-link to="/Profile" class="nav-link active" arial-currente="page">{{currentUser.username}}</router-link>
         </li>
         <li class="nav-item" @click="logOutAction">
              <router-link to ="/Login" class="nav-link active" arial-currente="page">Cerrar sesión</router-link>
         </li>
        </b-nav-form>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  computed: {
    currentUser() {
      return this.$store.getters.getCurrentUser
    },
  },
  methods: {
    logOutAction() {
      this.$store.dispatch('deleteSessionAction');
      this.$router.push('/')
    }
  }
}

</script>

<style>

.list-group-item{
  background-color: rgb(32, 184, 176);
  font-family: Helvetica;
  font-size: 18px;
}
.primary{
  background-color: #f6b26b !important;
}
.nav-link{
  color: #010101 !important;
}
.nav-link:hover{
  color: grey !important;
}
.logo{
  margin-right: 12px;
}
#naranjus_navbar{
  margin-bottom: 30px;
}
</style>
