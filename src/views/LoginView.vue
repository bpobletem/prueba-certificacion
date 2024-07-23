<script>
import LoginForm from '@/components/LoginForm.vue';
import HeaderComponent from '@/components/HeaderComponent.vue'
export default {
    components:{
        LoginForm, 
        HeaderComponent
    }
}
</script>

<template>
    <main>
        <HeaderComponent text="Iniciar sesión"></HeaderComponent>
        <LoginForm />
    </main>
</template>

<style scoped >
main {
    height: auto;
    margin-top: 2rem;
    min-height: 50vh;
}
</style>