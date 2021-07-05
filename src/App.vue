<template>
  <div id="app">
  <Navbar v-if="currentUser" />
  <router-view/>
  </div>
</template>

<script>
import Navbar from './components/Navbar'


export default {
  name: 'App',
  components: {
    Navbar
  },
  data() {
    return {
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters.getCurrentUser
    },
  },
}


</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;  
  margin-bottom: 30px;
}

.nav {
  background-color:#2c3e50;
  color:white;
}



.full-height{
  min-height: 100vh;
}


</style>
