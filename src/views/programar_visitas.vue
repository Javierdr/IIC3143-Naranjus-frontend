<template>
  <div>
    <h1>Programar visitas</h1>
    <div class="container mt-5">
      <h2>Datos de la visita</h2>
<!--      TODO validar formulario-->
      <form action="" class="text-center">
        <div class="modal-body">
          <div class="form-group row">
            <label class="col-3 col-form-label">Nombre</label>
            <div class="col-3">
              <input v-model="nombre" type="text" class="form-control" placeholder="Nombre">
            </div>
            <label class="col-3 col-form-label">Apellido</label>
            <div class="col-3">
              <input v-model="apellido" type="text" name="apellido" placeholder="apellido"
                     class="form-control">
            </div>
          </div>
          <div class="form-group row">
            <label class="col-3 col-form-label">RUT</label>
            <div class="col-3">
              <input v-model="RUT" type="text" name="RUT" placeholder="RUT"
                     class="form-control">
            </div>
            <label class="col-3 col-form-label">Fecha</label>
            <div class="col-3">
              <input v-model="fecha" type="date" name="fecha" class="form-control">
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
              <input v-model="destino" type="text" name="destino" placeholder="destino"
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
                <input v-model="patente" type="text" name="patente" class="form-control">
              </div>
            </template>
          </div>
          <input @click="BETAcrearVisita" type="button" value="Añadir" class="btn btn-success">
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

const api = process.env.VUE_APP_BACKEND;

    export default {
        name: "programar_visitas",
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
                idcount: 0,
                errors: []
            }
        },
        methods: {
            crearVisita: function () {
                const a = {
                    // TODO agregar el id de quien registra a la visita (el current_user.id)
                    id: this.$store.getters.idVisitaProgramadaCounter,
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
                this.$store.dispatch('addVisitasProgramadasAction', a);
                this.$store.dispatch('idVisitaProgramadaCounterAction');
                this.nombre = "";
                this.apellido = "";
                this.RUT = "";
                this.fecha = "";
                this.patente = "";
                this.in_auto = false;
                this.show = true; //TODO esto debe estar en un fetch esperando al server
            },

            BETAcrearVisita: async function () { // TODO revisar cuando en backend esté implementado esto
                const a = {
                    name: this.nombre,
                    lastname: this.apellido,
                    rut: this.RUT,
                    fecha: this.fecha,
                    destino: this.destino,
                    patente: this.patente,
                    in_auto: this.in_auto,
                    hora1: this.hora1,
                    hora2: this.hora2,
                };
                console.log("Bearer " + localStorage.access);
                
                const res = await fetch(`${api}/visitors/create/`, {
                    method: 'POST',
                    cache: 'no-cache',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                        'Origin': process.env.VUE_APP_FRONTEND,
                        'Authorization': "Bearer " + localStorage.access
                    },
                    body: JSON.stringify(a)
                });
                console.log(res);

                const body = await res;

                if (res.status === 200) {
                    this.success = true;
                } else{
                    this.errors.push(body)
                }
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
