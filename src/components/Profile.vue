<template>

<div>
    
    <h1>{{currentUser.firstName}} {{currentUser.lastName}}</h1>
    <p>Email {{currentUser.email}}</p>
    <p>Departamento {{currentUser.apartment_number}}</p>

</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },

  computed: {
    currentUser() {
      return this.$store.getters.getCurrentUser
    },
  },

}
</script>

<style>

</style>