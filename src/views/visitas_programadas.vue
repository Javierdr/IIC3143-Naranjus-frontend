<template>
  <div>
    <h1>Visitas Programadas</h1>
    <div class="container mt-5">
      <section class="data">
        <table class="table">
          <thead>
          <tr>
<!--            <th scope="col">id</th>-->
            <th scope="col">Nombre</th>
            <th scope="col">Apellido</th>
            <th scope="col">RUT</th>
            <th scope="col">Fecha</th>
            <th scope="col">Dpto. Destino</th>
            <th scope="col">¿Auto?</th>
            <th scope="col">Patente</th>
            <th></th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="visita in visits">
<!--            <td v-if="(visitors[visita.visitor].resident.username == currentUser.username || currentUser.is_admin) && visita.date >= checkDate">{{ visita.visitor }}</td>-->
            <td v-if="(visitors[visita.visitor].resident.apartment_number == currentUser.apartment_number || currentUser.is_admin) && visita.date >= checkDate">
              <span>{{ visitors[visita.visitor].name }}</span>
            </td>
            <td v-if="(visitors[visita.visitor].resident.apartment_number == currentUser.apartment_number || currentUser.is_admin) && visita.date >= checkDate">
              <span>{{visitors[visita.visitor].lastname}}</span>
            </td>
            <td v-if="(visitors[visita.visitor].resident.apartment_number == currentUser.apartment_number || currentUser.is_admin) && visita.date >= checkDate">
              <span>{{visitors[visita.visitor].rut}}</span>
            </td>
            <td v-if="(visitors[visita.visitor].resident.apartment_number == currentUser.apartment_number || currentUser.is_admin) && visita.date >= checkDate">
              <span>{{visita.date}}</span>
            </td>
            <td v-if="(visitors[visita.visitor].resident.apartment_number == currentUser.apartment_number || currentUser.is_admin) && visita.date >= checkDate">
              <span>{{visitors[visita.visitor].resident.apartment_number}}</span>
            </td>
            <td v-if="(visitors[visita.visitor].resident.apartment_number == currentUser.apartment_number || currentUser.is_admin) && visita.date >= checkDate">
              <span>{{visita.plate ? "Si" : "No"}}</span>
            </td>
            <td v-if="(visitors[visita.visitor].resident.apartment_number == currentUser.apartment_number || currentUser.is_admin) && visita.date >= checkDate">
              <span>{{visita.plate ? plates[visita.plate].text : ""}}</span>
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
                visits: [],
                visitors: {},
                plates: {},
                today: "",
            }
        },
        created() {
            this.getVisitors();
            this.getPlates();
            this.getVisits();
        },
        methods: {
            async getVisitors() {
                const res = await fetch(`${api}/visitors/`, {
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
                    let aux = {};
                    body.map(x => {
                        aux[x.pk] = x;
                    });
                    this.visitors = aux
                } else{
                    console.log("error");
                    console.log(res);
                }
            },
            async getVisits() {
                const res = await fetch(`${api}/visits/`, {
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
                    this.visits = body.filter(x => x.visitor)
                } else{
                    console.log("error");
                    console.log(res);
                }
            },
            async getPlates() {
                const res = await fetch(`${api}/plates/`, {
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
                    let aux = {};
                    body.map(x => {
                        aux[x.id] = x;
                    });
                    this.plates = aux;
                } else{
                    console.log("error");
                    console.log(res);
                }
            }
        },
        computed: {
            currentUser() {
                return this.$store.getters.getCurrentUser
            },
            checkDate() {
                let q = new Date();
                let dd = String(q.getDate()).padStart(2, '0');
                let mm = String(q.getMonth() + 1).padStart(2, '0'); //January is 0!
                let yyyy = q.getFullYear();

                return yyyy + '-' + mm + '-' + dd;

            }
        }
    }
</script>

<style scoped>

</style>
