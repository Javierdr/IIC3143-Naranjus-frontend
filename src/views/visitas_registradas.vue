<template>
  <div>
    <h1>Registro de visitas</h1>
    <div class="container mt-5">
      <section class="data">
        <table class="table">
          <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">RUT</th>
            <th scope="col">Fecha</th>
            <th scope="col">Hora</th>
            <th scope="col">¿Auto?</th>
            <th scope="col">Patente</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(visita, index) in visitas">
            <td>
              <span>{{ visita.name }}</span>
            </td>
            <td>
              <span>{{visita.lastname}}</span>
            </td>
            <td>
              <span>{{visita.rut}}</span>
            </td>
            <td>
              <span>{{visita.fecha}}</span>
            </td>

            <td>
              <span>{{visita.hora1}}</span>
            </td>
            <td>
              <span>{{visita.in_auto ? "Si" : "No"}}</span>
            </td>
            <td>
              <span>{{visita.patente}}</span>
            </td>
          </tr>
          </tbody>
        </table>
      </section>
    </div>
    <router-link to="Menu">
      <b-btn size="sm" class="float-right" variant="info">
        Volver
      </b-btn>
    </router-link>
  </div>
</template>

<script>

const api = process.env.VUE_APP_BACKEND;
    export default {
        name: "registro_visitas",
        data() {
            return {
                visitas: []
            }
        },
        created() {
            this.BETAvisitas()
        },
        methods: {
            async BETAvisitas() { // TODO revisar cuando en backend esté implementado esto
                const res = await fetch(`${api}/visitors/`, {
                    method: 'GET',
                    cache: 'no-cache',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                        'Origin': process.env.VUE_APP_FRONTEND,
                        'Authorization': "Bearer " + localStorage.access,
                    }
                });
                const body = await res.json();
                if (res.status === 200) {
                    this.success = true;
                    this.visitas = body

                } else{
                    console.log("error");
                    console.log(res);
                }
            }
        },
    }
</script>

<style scoped>

</style>
