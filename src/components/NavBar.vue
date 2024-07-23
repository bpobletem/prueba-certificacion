<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'NavBar',
    components: {

    },
    computed: {
        ...mapGetters('auth', ['isAuthenticated', 'isAdmin'])
    },
    methods: {
        ...mapActions('auth', ['logout']),
        toggle() {
            this.isActive = !this.isActive
        }
    }
}
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand">
                <router-link to="/">
                    TodoHogar
                </router-link>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link"><router-link to="/">Inicio</router-link></a>
                    <a class="nav-link"><router-link to="/products">Productos</router-link></a>
                    <a v-if="isAdmin" class="nav-link"><router-link to="/admin">Administracion</router-link></a>
                    <a v-if="!isAuthenticated" class="nav-link"><router-link to="/login">Login</router-link></a>
                    <a v-if="isAuthenticated" class="nav-link"><router-link to="/login" @click="logout">Cerrar sesion</router-link></a>
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped></style>