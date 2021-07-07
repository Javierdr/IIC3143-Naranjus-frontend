<template>
  <div>
    <h1>Patentes en la aplicación</h1>
    <div class="container mt-5">
      <section class="data">
          <table class="table">
          <thead>
          <tr>
            <th scope="col">Patente</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(patente, index) in patentes">
          
            <td>
              <span>{{patente.text}}</span>
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
        name: "patentes",
        data() {
            return {
                patentes: []
            }
        },
        created() {
            this.getPlates()
        },
        methods: {
            async getPlates() { // TODO revisar cuando en backend esté implementado esto
                const res = await fetch(`${api}/plates/`, {
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
                    this.patentes = body

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
