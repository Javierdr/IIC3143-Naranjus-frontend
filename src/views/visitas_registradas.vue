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
          </tr>
          </tbody>
        </table>
      </section>
    </div>
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
