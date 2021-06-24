<template>
  <div>
    <h1>Logs de entrada</h1>
    <div class="container mt-5">
      <section class="data">
        <table class="table">
          <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">RUT</th>
            <th scope="col">Tipo</th>
            <th scope="col">Autorizado por</th>
            <th scope="col">Patente</th>
            <th scope="col">Fecha</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(leg, index) in logs_entrada_general">
            <td>
              <span>{{ leg.nombre }} {{leg.apellido}}</span>
            </td>
            <td>
              <span>{{leg.RUT}}</span>
            </td>
            <td>
              <span>{{leg.tipo}}</span>
            </td>
            <td>
              <span>{{leg.autorizacion}}</span>
            </td>
            <td>
              <span>{{leg.patente}}</span>
            </td>
            <td>
              <span>{{leg.fecha}}</span>
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
        name: "logs_entrada_general",
        data() {
            return {}
        },
        methods: {},
        computed: {
            logs() {
                return this.$store.getters.logs_entrada_general
            }
        }
    }
</script>

<style scoped>

</style>
