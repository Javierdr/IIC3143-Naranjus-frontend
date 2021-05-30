<template>
  <div>
    <h1>Registro visitas</h1>
    <div class="container mt-5">
      <h2>Datos de la visita</h2>
<!--      TODO validar formulario-->
      <form action="" class="text-center">
        <div class="modal-body">
          <div class="form-group row">
            <label class="col-3 col-form-label">Nombre</label>
            <div class="col-3">
              <input v-model="nombre" @keyup.enter="crearVisita" type="text" class="form-control" placeholder="Nombre">
            </div>
            <label class="col-3 col-form-label">Apellido</label>
            <div class="col-3">
              <input v-model="apellido" @keyup.enter="crearVisita" type="text" name="apellido" placeholder="apellido"
                     class="form-control">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-3 col-form-label">RUT</label>
            <div class="col-3">
              <input v-model="RUT" @keyup.enter="crearVisita" type="text" name="RUT" placeholder="RUT"
                     class="form-control">
            </div>
            <label class="col-3 col-form-label">Fecha</label>
            <div class="col-3">
              <input v-model="fecha" @keyup.enter="crearVisita" type="date" name="fecha" class="form-control">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-3 col-form-label">Destino</label>
            <div class="col-9">
              <input v-model="destino" @keyup.enter="crearVisita" type="text" name="destino" placeholder="destino"
                     class="form-control">
            </div>
          </div>
          <input @click="crearVisita" type="button" value="Añadir" class="btn btn-success">
        </div>
      </form>
    </div>
  </div>
</template>

<script>
    export default {
        name: "registro_visitas",
        data() {
            return {
                nombre: "",
                apellido: "",
                RUT: "",
                fecha: "",
                destino: "",
                idcount: 0
            }
        },
        methods: {
            crearVisita: function () {
                const a = {
                    // TODO agregar el id de quien registra a la visita (el current_user.id)
                    id: this.$store.getters.idVisitaCounter,
                    nombre: this.nombre,
                    apellido: this.apellido,
                    RUT: this.RUT,
                    fecha: this.fecha,
                    destino: this.destino,
                };
                this.$store.dispatch('addVisitasAction', a);
                this.$store.dispatch('idVisitaCounterAction');
                this.nombre = "";
                this.apellido = "";
                this.RUT = "";
                this.fecha = "";
                this.destino = "";
            }
        }
    }
</script>

<style scoped>

</style>
