<template>
  <div class="container-fluid m-0 p-0">
    <div id="home-page" class="full-height bg-danger p-4">
      <div class="container pt-3">
        <div class="row pb-5">
          <div class="col-lg-6 pt-4 my-auto">
            <div class="text-center mb-3 d-block d-lg-none">
              <h1 class="display-3">{{title}}</h1>
              <h3>Security Solutions</h3>
            </div>
            <img if="apppng" src="../assets/app2.png" class="img-fluig">
          </div>
          <div class="col-lg-6 my-auto pt-4">
            <div class="text-center mb-3 d-none d-lg-block">
              <h1 class="display-3">{{title}}</h1>
              <h3>Security Solutions</h3>

            </div>

            <div class="border p-3 p-md-5 bg-white rounded shadow">
              <h2> Ingresar </h2>
              <form>

                <div class="form-group">
                  <div>
                  <label for="mailLogin">Correo Electronico</label>
                  <input id="mailLogin" placeholder="ejemplo@ejemplo.cl" class="form-control">
                  </div>

                  <label for="mailLogin" class ="mt-2">Contraseña</label>
                  <input id="mailLogin"  class="form-control">
                  <button type= "sumbit" class="btn btn-success mt-2">Inicar Session</button>

                </div>
              </form>

            </div>

          </div>

        </div>
      </div>

    </div>


    <div id="footer" class="bg-primary p-4">

    </div>

  </div>
</template>

<script>
export default {
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
