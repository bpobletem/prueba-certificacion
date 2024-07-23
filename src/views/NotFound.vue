<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
export default {
    name: 'NotFound',
    components: {
        HeaderComponent
    }
}
</script>

<template>
    <section>
        <HeaderComponent text="Not found"></HeaderComponent>
        <h3>404</h3>
        <p>No pudimos encontrar el enlace que buscas</p>
        <router-link to="/">Volver a inicio</router-link>
    </section>
</template>

<style scoped>
section {
    text-align: center;
    margin-top: 2rem;
}
</style>