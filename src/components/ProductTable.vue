<script>
import { formatPrice } from '@/utils/formatPrice';

export default {

    props: {
        products: {
            type: Array,
            required: true
        }
    },
    methods: {
        editProduct(product) {
            this.$emit('edit-product', product);
        },
        deleteProduct(product) {
            this.$emit('delete-product', product.id);
        },
        formatPrice
    }
}
</script>

<template>
    <div class="table-responsive">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Imagen</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="product in products" :key="product.id">
                    <td>{{ product.id }}</td>
                    <td><img :src="product.imagen" :alt="product.nombre" class="img-thumbnail" /></td>
                    <td>{{ product.nombre }}</td>
                    <td>{{ product.categoria }}</td>
                    <td>{{ product.stock }}</td>
                    <td>{{ formatPrice(product.precio) }}</td>
                    <td>
                        <button class="btn btn-primary me-1" @click="editProduct(product)">
                            Editar
                        </button>

                        <button class="btn btn-danger my-1" @click="deleteProduct(product)">
                            Eliminar
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
img {
    width: 3rem;
    height: 5rem;
}

table {
    border-radius: 50px;
}
</style>