<script>
    export default {
        name: 'HeaderComponent',
        props: {
            text: {
                type: String,
                required: true
            }
        }
    }
</script>


<template>  
    <header>
        <h1 class="text-center" >{{ text }}</h1>
    </header>
</template>