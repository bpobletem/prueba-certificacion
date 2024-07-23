<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
    }
}
</script>

<template>
    <button type="submit" class="btn btn-primary" >{{ text }}</button>
</template>

<style scoped>


</style>