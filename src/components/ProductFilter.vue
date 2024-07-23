<script>
export default {
    props: {
        genres: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            nameFilter: '',
            genreFilter: ''
        }
    },
    methods: {
        applyFilter() {
            this.$emit('filter-books', { name: this.nameFilter, genre: this.genreFilter })
        }
    }
}
</script>

<template>
    <section class="filter-container">
        <input type="text" v-model="nameFilter" @input="applyFilter" placeholder="Cafetera">
        <select v-model="genreFilter" @change="applyFilter">
            <option value="">Todos los géneros </option>
            <option v-for="(genre, index) in genres" :key="index" :value="genre">{{ genre }}</option>
        </select>
    </section>
</template>

<style scoped>
input{
  margin-right: 1.5rem
}

input, select {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #a3a3a3;
}

input:focus, select:focus {
  outline: none;
  box-shadow: 0 0 15px #cecece;
}

@media (max-width: 768px) {
  .filter-container {
    flex-direction: column;
    width: 100%;
  }

  input, select {
    width: 100%;
    margin-bottom: 1rem;
  }
}
</style>