<template>
    <div class="card mb-3 m-4 p-4">
        <div class="row g-0 align-items-center">
            <div class="col-md-6">
                <img :src="localProduct.imagen" class="img-fluid rounded-start" :alt="localProduct.nombre">
            </div>
            <div class="col-md-6">
                <div class="card-body">
                    <h4 class="card-title">{{ localProduct.nombre }}</h4>
                    <p class="card-title">{{ localProduct.descripcion }}</p>
                    <p class="card-text">Precio: {{ localProduct.precio }}</p>
                    <p class="card-text">Stock: {{ localProduct.stock }}</p>
                    <p class="card-text">Categoría: {{ localProduct.categoria }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product: {
            type: Object,
            default: () => ({
                nombre: '',
                categoria: '',
                descripcion: '',
                destacado: false,
                precio: 0,
                stock: 0,
                imagen: ''
            })
        }
    },
    data() {
        return {
            localProduct: { ...this.product }
        };
    },
    watch: {
        product: {
            handler(newProduct) {
                this.localProduct = { ...newProduct };
            },
            deep: true,
            immediate: true
        }
    },
    methods: {
        submitForm() {
            this.$emit('submit', this.localProduct);
        }
    }
};
</script>

<style scoped></style>