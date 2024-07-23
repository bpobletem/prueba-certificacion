<script>
import { mapGetters, mapActions } from 'vuex'

import ProductCard from '../components/ProductCard.vue'
import ProductFilter from '../components/ProductFilter.vue'
import HeaderComponent from '../components/HeaderComponent.vue'

export default {
    components: {
        ProductCard,
        ProductFilter,
        HeaderComponent
    },
    data() {
        return {

            filteredBooks: []

        }
    },
    computed: {
        ...mapGetters('products',['allProducts', 'productCategories'])
    },
    methods: {
        ...mapActions('products', ['fetchProducts']),
        filterBooks(filters) {
            this.filteredBooks = this.allProducts.filter(book => {
                return (
                    (!filters.name || book.nombre.toLowerCase().includes(filters.name.toLowerCase()))
                    &&
                    (!filters.genre || book.categoria === filters.genre)
                )
            })
        }
    },
    mounted() {
        this.fetchProducts()
        this.filteredBooks = this.allProducts
    }
}
</script>

<template>
<div class="container">
    <HeaderComponent text="Nuestros productos"></HeaderComponent>
    <main>
        <ProductFilter :genres="productCategories" @filter-books="filterBooks" class="book-filter"/>
        
        <div v-if="filteredBooks.length > 0">
            <div class="contenedor">
                <div v-for="product in filteredBooks" :key="product.id">
                    <ProductCard :product="product" @add-to-cart="addProductToCart" />
                </div>
            </div>
        </div>
        <div v-else>
            <h2>No se encontraron productos</h2>
        </div>
    </main>
</div>


</template>

<style>
.container {
    margin-top: 2rem;
}

.fade-in-up {
  animation: fadeInUp 1s ease-in-out forwards;
}

h1 {
    margin-top: 4rem;
}

main {
  width: 70%;
  margin: 0 auto;
  padding: 2rem 0 20rem 0;
}

.book-filter {
  margin: 0 auto;
  padding: 2rem 0;
}

.contenedor {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

@media (max-width: 768px) {
  main {
    width: 90%;
    padding: 1rem 0;
  }

  .contenedor {
    flex-direction: column;
    align-items: stretch;
  }
}
</style>