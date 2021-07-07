<template>
  <div>
    <h1>Proveedores Programados</h1>
    <div class="container mt-5">
      <section class="data">
        <table class="table">
          <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Descrpcion</th>
            <th scope="col">Fecha</th>
            <th scope="col">Horas</th>
            <th scope="col">¿Auto?</th>
            <th scope="col">Patente</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="visita in visitas">
            <td>{{ visita.pk }}</td>
            <td>
              <span>{{ visita.name }}</span>
            </td>
            <td>
              <span>{{visita.description}}</span>
            </td>
            <td>
              <span>{{visita.fecha}}</span>
            </td>
            <td>
              <span>{{visita.scheduled_entry_hour}} - {{visita.scheduled_exit_hour}}</span>
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
        name: "visitas_programadas",
        data() {
            return {
                visitas: []
            }
        },
        created() {
            this.BETAvisitasButton()
        },
        methods: {
            async BETAvisitasButton() { // TODO revisar cuando en backend esté implementado esto

                const res = await fetch(`${api}/providers/`, {
                    method: 'GET',
                    cache: 'no-cache',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                        'Origin': process.env.VUE_APP_FRONTEND,
                        'Authorization': "Bearer " + localStorage.access,
                    },
                });
                const body = await res.json();
                if (res.status === 200) {
                    this.success = true;
                    this.visitas = body

                } else{
                    console.log("error");
                    console.log(res);
                }
                /*

                const res2 = await fetch(`${api}/plates/`, {
                    method: 'GET',
                    cache: 'no-cache',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json',
                        'Origin': process.env.VUE_APP_FRONTEND,
                        'Authorization': "Bearer " + localStorage.access,
                    },
                });
                const body = await res.json();
                if (res.status === 200) {
                    this.success = true;
                    this.visitas = body

                } else{
                    console.log("error");
                    console.log(res);

                }
                */
            }

        },
        computed: {
            // visitas() {
            //     return this.$store.getters.visitasProgramadas
            // },
        }
    }
</script>

<style scoped>

</style>
