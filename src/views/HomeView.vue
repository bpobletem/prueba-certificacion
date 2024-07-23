
<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import HeaderComponent from '@/components/HeaderComponent.vue';
import ProductCard from '@/components/ProductCard.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderComponent,
    ProductCard
  },
  computed: {
    ...mapState('products', ['products']),
    ...mapGetters('products', ['productCategories', 'featuredProductsByCategory']),
    categories() {
      return Array.from(this.productCategories);
    }
  },
  methods: {
    ...mapActions('products', ['fetchProducts']),
    getFeaturedProducts(category) {
      return this.featuredProductsByCategory(category).filter(product => product.destacado);
    }
  },
  created() {
    this.fetchProducts(); // Cargar productos al montar el componente
  }
};
</script>

<template>
  <div class="container">
    <HeaderComponent text="Todos los productos que buscas para el hogar en un solo lugar"></HeaderComponent>
    <h2 class="mt-4">Productos destacados por categoría</h2>
    <div v-for="category in categories" :key="category">
      <h3>{{ category }}</h3>
      <div class="row">
        <div class="product-container col-md-4 mb-4" v-for="product in getFeaturedProducts(category)" :key="product.id">
          <ProductCard :product="product"></ProductCard>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
.container {
  margin-top: 2rem;
}

h3, h2{
  text-align: left;
  margin: 1rem 1rem;
}

.product-container{
  display: flex;
  justify-content: center;
}
</style>
