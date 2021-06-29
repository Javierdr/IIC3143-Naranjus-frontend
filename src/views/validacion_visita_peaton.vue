<template>
  <div>
    <h1>Validación visitas</h1>
    <div class="container mt-5">
      <h2>Datos de la visita</h2>
      <!--      TODO validar formulario-->
      <form action="" class="text-center">
        <div class="modal-body">

          <div class="form-group row">
            <label class="col-3 col-form-label">RUT</label>
            <div class="col-3">
              <input v-model="RUT" :disabled="disabled" @keyup.enter="validarVisita" type="text" name="RUT" placeholder="RUT"
                     class="form-control">
            </div>
          </div>

          <input @click="validarVisita" type="button" value="Validar" class="btn btn-success">
          <router-link to="Menu">
            <b-btn class="btn btn-info float-right">
              Volver
            </b-btn>
          </router-link>
        </div>
      </form>
    </div>
    <b-modal id="modalInvoice" size="lg"  :title="titulo" v-model="show">
      <div v-if="error.length" class="alert alert-danger" role="alert">
        {{ error }}
      </div>
      <div slot="modal-footer" class="w-100">
        <b-btn size="sm" class="float-right" variant="success" @click="show=false">
          Continuar
        </b-btn>
      </div>
    </b-modal>
  </div>
</template>

<script>
    export default {
        name: "validacion_visita_peaton",
        data() {
            return {
                // nombre: "",
                // apellido: "",
                RUT: "",
                show: false,
                disabled: false,
                error: "",
                validVisit: false,
                titulo: "",
            }
        },
        methods: {
            validarVisita: async function () {
                const a = {
                    // nombre: this.nombre,
                    // apellido: this.apellido,
                    RUT: this.RUT,
                };
                this.disabled = true;
                this.error = "";
                const res = await fetch('http://localhost:8000/vistas/api/validate', {
                    method: 'POST',
                    cache: 'no-cache',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                        'Origin': 'http://localhost:8080'
                    },
                    body: JSON.stringify(a)
                });
                // const body = await res.json();
                console.log("ID");
                console.log(localStorage.access);
                console.log("res");
                console.log(res);
                const body = res;

                if (res.status === 200) {  // OK
                    this.validVisit = body.isValid;
                    if (!this.validVisit) {
                        this.error = 'Su visita no está registrada en este horario, contacte con el guardia';
                    }
                } else {  // ERROR
                    this.error = 'No ha sido posible contactar con el servidor, contacte con el guardia';
                }
                console.log("${process.env.VUE_APP_SERVER}");
                console.log(process.env);
                this.titulo = this.validVisit ? "Validación Exitosa" : "Visita no autorizada";
                this.RUT = "";
                this.show = true; //TODO esto debe estar en un fetch esperando al server
                this.disabled = false;
            }
        }
    }
</script>

<style scoped>

</style>
