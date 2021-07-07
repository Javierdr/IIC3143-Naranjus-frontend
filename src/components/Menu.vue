<template>
  <div>
  <h1>Naranjus</h1>
  <div class="mt-3">
  <b-card-group deck class="mb-3">
    <b-card border-variant="warning" header="Bienvenidos a Naranjus" class="text-center">
      <b-card-text>Bienvenidos al portal líder en seguridad vecinal. En este sitio podrás ingresar visitas que vengan a tu casa, automatizar el ingreso de tu coche al condominio y más.</b-card-text>
    </b-card>

    <b-card border-variant="warning" header="Sobre nosotros" align="center">
      <b-card-text>Como Naranjus, desde el 2021, estamos buscando formas de
      hace más seguro, simple y moderno la administraciones de los condominios, con el fin de
    entregar más tranquilidad y menos trabajo a todos los vecinos de una comunidad. </b-card-text>
    </b-card>
  </b-card-group>
</div>
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
