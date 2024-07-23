<script>
import { mapGetters, mapActions } from 'vuex'

import ProductTable from '../components/ProductTable.vue'
import HeaderComponent from '../components/HeaderComponent.vue'
import AddProductForm from '../components/AddProductForm.vue'

export default {
    components: {
        ProductTable,
        HeaderComponent,
        AddProductForm
    },
    computed: {
        ...mapGetters('products', ['allProducts'])
    },
    methods: {
        ...mapActions('products', ['fetchProducts', 'deleteProduct']),

        editProductRedirect(product) {
            this.$router.push(`/admin/products/${product.id}`);
        },
    },
    async mounted() {
        this.allProducts
    }
}
</script>

<template>
    <HeaderComponent class="mb-4" text="Gestión de productos"></HeaderComponent>
    <AddProductForm></AddProductForm>
    <main class="container mt-5">
        <ProductTable :products="allProducts" @edit-product="editProductRedirect" @delete-product="deleteProduct" />
    </main>
</template>

<style>

</style>