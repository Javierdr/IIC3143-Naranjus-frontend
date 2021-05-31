<template>
    <div class="border p-3 p-md-5 bg-white rounded shadow">
        <h2> Ingresar </h2>
        <form>
            <div class="form-group">
                <div>
                    <label for="mailLogin">Correo Electronico</label>
                    <input id="mailLogin" placeholder="ejemplo@ejemplo.cl" class="form-control">
                </div>
                <label for="mailLogin" class ="mt-2">Contraseña</label>
                <input id="mailLogin"  class="form-control">
                <button type= "sumbit" class="btn btn-success mt-2">Inicar Session</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    mounted() {
        console.log("LOGIN MOUNTED");
    }
}
</script>
<style scoped>
    
</style>
