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
            <label class="col-3 col-form-label">Rango hora</label>
            <div class="col-3">
              <input v-model="hora1" type="time" name="hora1" class="form-control">
            </div>
            -
            <div class="col-3">
              <input v-model="hora2" type="time" name="hora2" class="form-control">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-3 col-form-label">Destino</label>
            <div class="col-9">
              <input v-model="destino" @keyup.enter="crearVisita" type="text" name="destino" placeholder="destino"
                     class="form-control">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-3 col-form-label">Viene en auto?</label>
            <div class="col-3">
            <div class="form-control">
              <input type="radio" v-bind:value="true" v-model="in_auto" />
              <label>Sí</label>
              <input type="radio" v-bind:value="false" v-model="in_auto" checked="checked" />
              <label>No</label>
            </div>
            </div>
            <template v-if="in_auto">
              <label class="col-3 col-form-label">Patente</label>
              <div class="col-3">
                <input v-model="patente" @keyup.enter="crearVisita" type="text" name="patente" class="form-control">
              </div>
            </template>
          </div>
          <input @click="crearVisita" type="button" value="Añadir" class="btn btn-success">
          <router-link to="Menu">
            <b-btn class="btn btn-info float-right">
              Volver
            </b-btn>
          </router-link>
        </div>
      </form>
    </div>
    <b-modal id="modalInvoice" size="lg"  title="Registro Exitoso" v-model="show">
      Desea registrar más visitas?
      <div slot="modal-footer" class="w-100">
        <router-link to="Menu">
          <b-btn size="sm" class="float-right" variant="info" @click="show=false">
            Volver
          </b-btn>
        </router-link>
        <b-btn size="sm" class="float-right" variant="success" @click="show=false">
          Seguir
        </b-btn>
      </div>
    </b-modal>
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
                patente: "",
                hora1: "",
                hora2: "",
                in_auto: false,
                show: false,
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
                    patente: this.patente,
                    in_auto: this.in_auto,
                    hora1: this.hora1,
                    hora2: this.hora2,
                };
                this.$store.dispatch('addVisitasAction', a);
                this.$store.dispatch('idVisitaCounterAction');
                this.nombre = "";
                this.apellido = "";
                this.RUT = "";
                this.fecha = "";
                this.patente = "";
                this.in_auto = false;
                this.show = true; //TODO esto debe estar en un fetch esperando al server
            }
        }
    }
</script>

<style scoped>

</style>
