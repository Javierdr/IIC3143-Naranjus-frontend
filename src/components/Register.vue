<template>
    <div id="container">
        <form class="form-horizontal">
                <h2>Registration</h2>
                <div class="form-group row">
                    <label for="firstName" class="col-sm-3 control-label">First Name</label>
                    <div class="col-sm-9">
                        <input v-model="firstName" type="text" id="firstName" placeholder="First Name" class="form-control" autofocus>
                    </div>
                </div>
        </form>
    </div>
</template>
<script>
export default {
    name: 'Register',
    data() {
        return {
            firstName: '',
        }
    },
    methods: {
        async registerButton() {
            console.log("SEND TO API HERE")
        }
    }
}
</script>
<style scoped>
    #container {
        padding: 30px;
        background-color: #f2f2f2;
    }

    #container form {
        max-width: 1024px;
        margin: 0 auto;
    }

    form label {
        margin-top: 5px;
    }
</style>
