<template>
  <div>
    <h1>Programar Proveedor</h1>
    <div class="container mt-5">
      <h2>Datos de la proveedor</h2>
<!--      TODO validar formulario-->
      <form action="" class="text-center">
        <div class="modal-body">
          <div class="form-group row">
            <label class="col-3 col-form-label">Nombre Proveedor</label>
            <div class="col-3">
              <input v-model="name_proveedor" type="text" class="form-control" placeholder="Nombre">
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
            <label class="col-3 col-form-label">Descripcion</label>
            <div class="col-9">
              <input v-model="descripcion" type="text" name="descripcion" placeholder="descripcion"
                     class="form-control">
            </div>
          </div>

          <input @click="BETAcrearProveedor" type="button" value="Añadir" class="btn btn-success">
          <router-link to="Menu">
            <b-btn class="btn btn-info float-right">
              Volver
            </b-btn>
          </router-link>
        </div>
      </form>
    </div>
    <b-modal id="modalInvoice" size="lg"  title="Registro Exitoso" v-model="show">
      Desea registrar más proveedores?
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
        name: "programar_proveedor",
        data() {
            return {
                name_proveedor: "",
                patente: "",
                hora1: "",
                hora2: "",
                descripcion: "",
                show: false,
                idcount: 0,
                errors: []
            }
        },
        methods: {

            BETAcrearProveedor: async function () { // TODO revisar cuando en backend esté implementado esto
                const a = {
                    name: this.name_proveedor,
                    description: this.descripcion,
                    scheduled_entry_hour: "16:30:00",
                    scheduled_exit_hour: "16:30:01",
                    //scheduled_entry_hour: this.hora1,
                    //scheduled_exit_hour: this.hora2,

                };

                console.log(JSON.stringify(a));
                this.success = false;
                console.log("Bearer " + localStorage.access);

                const res = await fetch(`${api}/providers/`, {
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
                this.descripcion = "";
                this.hora1 ="";
                this.hora2 = "";
                this.show = true;
            }
        }
    }
</script>

<style scoped>

</style>
