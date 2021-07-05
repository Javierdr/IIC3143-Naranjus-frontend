<template>
    <div id="container" class="border p-3 p-md-5 bg-white rounded shadow">
        <h2> Ingresar </h2>
        <div v-if="error.length" class="alert alert-danger" role="alert">
            {{ error }}
        </div>
        <form>
            <div class="form-group">
                <div>
                    <label for="username">Nombre de usuario</label>
                    <input v-model="username" type="text" id="username" placeholder="Nombre de usuario" class="form-control">
                </div>
                <label for="password" class ="mt-2">Contraseña</label>
                <input v-model="password"  type="password" id="password"  class="form-control">
                <button @click="onSubmit" :disabled="disabled" type= "sumbit" class="btn btn-success mt-2">Iniciar sesión</button>
                <h4> No tienes cuenta? Registrate! </h4>
                <button @click="registerButton" :disabled="disabled" type= "sumbit" class="btn btn-success mt-2">Registrarse</button>
            </div>
        </form>
    </div>
</template>
<script>
const api = 'http://localhost:8000';

export default {
    data() {
        return {
            username: '',
            password: '',
            error: '',
            disabled: false,
        }
    },
    methods: {
        onSubmit: async function() {
            this.error = '';
            this.disabled = true;

            const data = {
                "username": this.username,
                "password": this.password,
            };
            const res = await fetch(`${api}/api/token/`, {
                method: 'POST',
                cache: 'no-cache',
                headers: {
                    'Content-Type': 'application/json',
                    'Origin': 'http://localhost:8080'
                },
                body: JSON.stringify(data)
            });
            const body = await res.json();

            if (res.status === 200) {  // OK
                localStorage.access = body.access;
                localStorage.refresh = body.refresh;
                this.setCurrentUser()
                this.$router.push('Menu');
            } else {  // ERROR
                this.error = 'El usuario y la contraseña no coinciden!';
            }

            this.disabled = false;
        },
        registerButton: async function(){
            this.$router.push('Register');

        setCurrentUser() {
          this.$store.dispatch('setCurrentUserAction', localStorage.access)
        }
    }
}
</script>
<style scoped>
    #container {
        background-color: #f2f2f2;
    }
</style>
