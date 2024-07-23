  <script>
  import { mapGetters, mapActions } from 'vuex';
  import EditProductForm from '../components/EditProductForm.vue';
  import HeaderComponent from '../components/HeaderComponent.vue'

  export default {
    components: {
      EditProductForm,
      HeaderComponent
    },
    data() {
      return {
        product: null
      };
    },
    computed: {
      ...mapGetters('products', ['getProductById'])
    },
    methods: {
      ...mapActions('products', ['editProduct']),
      updateProduct(product) {
        this.editProduct(product).then(() => {
          this.$router.push('/products');
        });
      }
    },
    mounted() {
      const productId = (this.$route.params.id);
      this.product = { ...this.getProductById(productId) };
    }
  };
</script>

<template>
  <HeaderComponent text="Editar producto"></HeaderComponent>
  <div>
    <EditProductForm :product="product" @submit="updateProduct" />
  </div>
</template>


