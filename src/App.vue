<template>
  <div id="app">
  <Menu v-if="currentUser" />
  <router-view/>

  </div>
</template>

<script>
import Menu from './components/Menu'

export default {
  name: 'App',
  components: {
    Menu
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
}

.nav {
  background-color:#2c3e50;
  color:white;
}



.full-height{
  min-height: 100vh;
}


</style>
