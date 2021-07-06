<template>
    <div id="container">
        <form class="form-horizontal">
                <h2>Crear nuevo usuario</h2>
                <div v-if="errors.length">
                    <div v-for="error in errors" v-bind:key="error">
                        <div class="alert alert-danger" role="alert">
                            {{ error }}
                        </div>
                    </div>
                </div>
                <div v-if="success">
                    <div class="alert alert-success" role="alert">
                        {{ successMessage }}
                    </div>
                </div>
                <div class="form-group row">
                    <label for="firstName" class="col-sm-3 control-label">Nombre</label>
                    <div class="col-sm-9">
                        <input v-model="firstName" type="text" id="firstName" placeholder="Nombre" class="form-control" autofocus>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="lastName" class="col-sm-3 control-label">Apellido</label>
                    <div class="col-sm-9">
                        <input v-model="lastName" type="text" id="lastName" placeholder="Apellido" class="form-control" autofocus>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="email" class="col-sm-3 control-label">Email</label>
                    <div class="col-sm-9">
                        <input v-model="email" type="text" id="email" placeholder="Email" class="form-control" autofocus>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="username" class="col-sm-3 control-label">Nombre de usuario</label>
                    <div class="col-sm-9">
                        <input v-model="username" type="text" id="username" placeholder="Nombre de usuario" class="form-control" autofocus>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="apartmentNumber" class="col-sm-3 control-label">Numero de domicilio</label>
                    <div class="col-sm-9">
                        <input v-model="apartmentNumber" type="text" id="apartment_number" placeholder="Numero de domicilio" class="form-control" autofocus>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="password" class="col-sm-3 control-label">Contraseña</label>
                    <div class="col-sm-9">
                        <input v-model="password" type="password" id="password" placeholder="" class="form-control" autofocus>
                    </div>
                </div>
          <div class="form-group row">
            <label class="col-3 col-form-label">Es Admin?</label>
            <div class="col-3">
              <div class="form-control">
                <input type="radio" v-bind:value="true" v-model="is_admin" />
                <label>Sí</label>
                <input type="radio" v-bind:value="false" v-model="is_admin" checked="checked" />
                <label>No</label>
              </div>
            </div>
          </div>
                <button @click="registerButton" :disabled="disabled" type="button" class="btn btn-primary btn-lg">Crear</button>
                <button @click="backButton" :disabled="disabled" type="button" class="btn btn-primary btn-lg">Volver a página de inicio</button>
        </form>
    </div>
</template>

<script>

const api = process.env.VUE_APP_BACKEND;

export default {
    name: 'Register',
    data() {
        return {
            errors: [],
            success: false,
            disabled: false,
            successMessage: 'Usuario creado con éxito!',
            firstName: '',
            lastName: '',
            email: '',
            apartmentNumber: '',
            username: '',
            password: '',
            is_admin: false,
        }
    },
    methods: {
        registerButton: async function() {
            this.disabled = true;
            this.success = false;
            const errors = this.checkErrors();
            if (errors) {
                this.disabled = false;
                return false;
            }

            const data = {
                "first_name": this.firstName,
                "last_name": this.lastName,
                "email": this.email,
                "username": this.username,
                "password": this.password,
                "apartment_number": this.apartmentNumber,
                "is_admin": this.is_admin,
            };

            const res = await fetch(`${api}/users/api/register`, {
                method: 'POST',
                cache: 'no-cache',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json',
                    'Origin': process.env.VUE_APP_FRONTEND
                },
                body: JSON.stringify(data)
            });
            const body = await res.json();

            if (res.status === 200) {
                this.success = true;
            } else{
                this.errors.push(body)
            }
            this.disabled = false;
        },
        checkErrors: function () {
            this.errors = [];

            if (this.firstName.length < 2) {
                this.errors.push("Nombre faltante o demasiado corto")
            }
            if (this.lastName.length < 2) {
                this.errors.push("Apellido faltante o demasiado corto")
            }
            if (!this.validEmail(this.email)) {
                this.errors.push("Email invalido");
            }
            if (this.username.length < 4) {
                this.errors.push("Nombre de usuario faltante o demasiado corto")
            }
            if (this.password.length < 4) {
                this.errors.push("Contraseña faltante o demasiado corto")
            }

            return this.errors.length ? true : false;
        },
        validEmail: function(email) {
            // Taken from the vue form validation page
            var regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return regex.test(email);
        },
        backButton: async function() {
            this.$router.push('/');
        }
        // validRut: function(rut) {
        //     var regex = /^(\d{1,3}(?:\.\d{1,3}){2}-[\dkK])$/;
        //     return regex.test(rut);
        // }
    }
}
</script>

<style scoped>
    #container {
        padding: 30px;
        background-color: #f2f2f2;
    }

    form {
        max-width: 1024px;
        margin: 0 auto;
    }

    form h2 {
        margin-bottom: 20px;
    }

    form label {
        margin-top: 5px;
        text-align: right;
    }

    li {
        color: red;
        list-style-position: inside;
    }

    #radio-container {
        text-align: left;
    }
</style>
