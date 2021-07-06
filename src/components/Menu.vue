<template>
<div>
  <h1>Vista del menú</h1>
</div>
</template>

<script>
import Login from './Login';

export default {
  components: {
    Login
  },
  data () {
    return {
      title: 'Naranjus'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#home-page{
  background-color: #92D2F2;
  background: url('../assets/img1.jpg') no-repeat center center;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}
#apppng{
  max-height: 80vh;
}
</style>
