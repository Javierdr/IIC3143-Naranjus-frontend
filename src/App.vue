<template>
  <div id="app">
    <Menu />

    <router-view/>
  </div>
</template>

<script>

import Menu from '@/components/Menu'

console.log("HOLA")
console.log(process.env.VUE_APP_VAR);
console.log(process.env.VUE_APP_NEWVAR);


export default {
  name: 'App',

  data() {
    return {
      currentUser: localStorage.access
    }
  }
}


</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family:;
  
}

.nav {
  background-color:#2c3e50;
  color:white;
}



.full-height{
  min-height: 100vh;
}


</style>
