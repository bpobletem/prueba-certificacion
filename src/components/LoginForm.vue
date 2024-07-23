<script>
import { mapActions } from 'vuex'

import FormButton from './FormButton.vue'


export default {
  components: {
    FormButton
  },
  data() {
    return {
      textButton: "Iniciar sesión",
      email: '',
      password: ''
    }
  },
  methods: {
    ...mapActions('auth', ['loginUser']),

    onSubmitLogin() {
      try {
        this.loginUser({ email: this.email, password: this.password })
        alert(`Bienvenido ${this.email}`)
        this.$router.push('/')
      } catch (error) {
        alert('Credenciales Invalidas')
      }
    }
  }
}
</script>

<template>
  <div class="container mx-auto col-12 col-md-6">
    <form @submit.prevent="onSubmitLogin">
      <div class="mb-3">
        <label for="email" class="form-label">Correo</label>
        <input v-model="email" type="email" class="form-control" id="email" aria-describedby="emailHelp" required>
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input v-model="password" type="password" class="form-control" id="password" required>
      </div>
      <FormButton :text="textButton" />
    </form>
  </div>
</template>

<style scoped>

</style>