<script>
import { formatPrice } from '@/utils/formatPrice';

export default {
    props: {
        product: {
            type: Object,
            required: true
        }
    },
    components: {

    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.product)
        },
        formatPrice
    }
}
</script>

<template>
    <div class="card" style="width: 18rem;">
        <img :src="product.imagen" :alt="product.nombre" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">{{ product.nombre }}</h5>
            <p class="card-text">{{ product.descripcion }}</p>
            <p><span>Precio: </span>{{ formatPrice(product.precio) }}</p>
        </div>
        <div class="card-body">
            <router-link :to="'/product/'+ product.id">Ver más</router-link>
        </div>
    </div>
</template>

<style scoped>

.card:hover{
    box-shadow: 0px 0px 6px #a3a3a3;
}

</style>