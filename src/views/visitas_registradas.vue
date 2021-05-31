<template>
  <div>
    <h1>Registro de visitas</h1>
    <div class="container mt-5">
      <section class="data">
        <table class="table">
          <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">RUT</th>
            <th scope="col">Fecha</th>
            <th scope="col">Destino</th>
            <th scope="col">Horas</th>
            <th scope="col">¿Auto?</th>
            <th scope="col">Patente</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(visita, index) in visitas">
            <td>{{ visita.id }}</td>
            <td>
              <span>{{ visita.nombre }}</span>
            </td>
            <td>
              <span>{{visita.apellido}}</span>
            </td>
            <td>
              <span>{{visita.RUT}}</span>
            </td>
            <td>
              <span>{{visita.fecha}}</span>
            </td>
            <td>
              <span>{{visita.destino}}</span>
            </td>
            <td>
              <span>{{visita.hora1}} - {{visita.hora2}}</span>
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
    export default {
        name: "registro_visitas",
        data() {
            return {}
        },
        methods: {},
        computed: {
            visitas() {
                return this.$store.getters.visitas
            }
        }
    }
</script>

<style scoped>

</style>
