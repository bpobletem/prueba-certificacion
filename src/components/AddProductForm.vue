<template>
  <div class="form-container">
    <form ref="productForm" @submit.prevent="submitForm">
      <div class="row">
        <div class="form-group col-md-6">
          <label for="nombre">Nombre:</label>
          <input type="text" class="form-control" v-model="nombre" required />
          <div v-if="!isValid(nombre)" class="text-danger">Por favor ingresa un nombre válido.</div>
        </div>
        <div class="form-group col-md-6">
          <label for="categoria">Categoría:</label>
          <input type="text" class="form-control" v-model="categoria" required />
          <div v-if="!isValid(categoria)" class="text-danger">Por favor ingresa una categoría válida.</div>
        </div>
      </div>
      <div class="form-group mt-2">
        <label for="descripcion">Descripción:</label>
        <textarea class="form-control" v-model="descripcion" required></textarea>
        <div v-if="!isValid(descripcion)" class="text-danger">Por favor ingresa una descripción válida.</div>
      </div>
      <div class="row mt-2">
        <div class="form-group col-md-6">
          <label for="stock">Stock:</label>
          <input type="number" class="form-control" v-model.number="stock" required />
          <div v-if="!isValidStock(stock)" class="text-danger">Por favor ingresa un stock válido.</div>
        </div>
        <div class="form-group col-md-6">
          <label for="precio">Precio:</label>
          <input type="number" class="form-control" v-model.number="precio" required />
          <div v-if="!isValidPrice(precio)" class="text-danger">El precio debe ser mayor que cero.</div>
        </div>
      </div>
      <div class="mt-2">
        <input class="form-check-input me-2" type="checkbox" id="destacado" v-model="destacado">
        <label class="form-check-label" for="destacado">
          Destacado
        </label>
      </div>
      <div class="form-group mt-2">
        <label for="imagen">URL de la Imagen:</label>
        <input type="text" class="form-control" v-model.trim="imagen" required />
        <div v-if="!isValid(imagen)" class="text-danger">Por favor ingresa una URL de imagen válida.</div>
      </div>
      <button class="btn btn-primary mt-2" type="submit" :disabled="!formIsValid">Agregar producto</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      nombre: '',
      categoria: '',
      descripcion: '',
      stock: 0,
      precio: 0,
      imagen: '',
      destacado: false,
    };
  },
  methods: {
    ...mapActions('products', ['addProduct']),
    submitForm() {
      if (!this.formIsValid) {
        return; // Evita enviar el formulario si no es válido
      }
      const newProduct = {
        id: Date.now(),
        nombre: this.nombre,
        categoria: this.categoria,
        descripcion: this.descripcion,
        stock: this.stock,
        precio: this.precio,
        imagen: this.imagen,
        destacado: this.destacado,
      };
      this.addProduct(newProduct);
      this.$refs.productForm.reset(); 
      this.nombre = ''; 
      this.categoria = '';
      this.descripcion = '';
      this.stock = 0;
      this.precio = 0;
      this.imagen = '';
      this.destacado = false;
    },
    isValid(value) {
      return typeof value === 'string' && value.trim() !== '';
    },
    isValidPrice(price) {
      return typeof price === 'number' && price > 0;
    },
    isValidStock(stock) {
      return typeof stock === 'number' && stock >= 0;
    }
  },
  computed: {
    formIsValid() {
      return (
        this.isValid(this.nombre) &&
        this.isValid(this.categoria) &&
        this.isValid(this.descripcion) &&
        this.isValidPrice(this.precio) &&
        this.isValidStock(this.stock) &&
        this.isValid(this.imagen)
      );
    }
  }
};
</script>

<style scoped>
.form-container {
  max-width: 600px;
  margin: 2rem auto;
  padding: 2rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: var(--neutral-color-light200);
}
</style>
