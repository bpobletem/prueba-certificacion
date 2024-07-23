<script>
import { mapGetters, mapActions } from 'vuex';
import ProductDetail from '../components/ProductDetail.vue';
import HeaderComponent from '../components/HeaderComponent.vue'

export default {
  components: {
    ProductDetail,
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
<HeaderComponent text="Producto"></HeaderComponent>
<div class="container">
  <section>
    <ProductDetail :product="product" @submit="updateProduct" />
  </section>
</div>
</template>


