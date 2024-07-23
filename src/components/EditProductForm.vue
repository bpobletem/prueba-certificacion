<template>
  <div class="edit-product-form">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="nombre">Nombre:</label>
        <input id="nombre" v-model.trim="localProduct.nombre" class="form-control" required />
        <div v-if="!isValid(localProduct.nombre)" class="text-danger">Por favor ingresa un nombre válido.</div>
      </div>
      <div class="form-group">
        <label for="categoria">Categoría:</label>
        <input id="categoria" v-model.trim="localProduct.categoria" class="form-control" required />
        <div v-if="!isValid(localProduct.categoria)" class="text-danger">Por favor ingresa una categoría válida.</div>
      </div>
      <div class="form-group">
        <label for="descripcion">Descripción:</label>
        <textarea id="descripcion" v-model.trim="localProduct.descripcion" class="form-control" required></textarea>
        <div v-if="!isValid(localProduct.descripcion)" class="text-danger">Por favor ingresa una descripción válida.</div>
      </div>
      <div class="form-group">
        <label for="precio">Precio:</label>
        <input id="precio" type="number" v-model.number="localProduct.precio" class="form-control" required :min="0" />
        <div v-if="!isValidPrice(localProduct.precio)" class="text-danger">El precio debe ser mayor que cero.</div>
      </div>
      <div class="form-group">
        <label for="stock">Stock:</label>
        <input id="stock" type="number" v-model.number="localProduct.stock" class="form-control" required />
        <div v-if="!isValidStock(localProduct.stock)" class="text-danger">Por favor ingresa un stock válido.</div>
      </div>
      <div class="form-group">
        <input class="form-check-input me-2" type="checkbox" id="destacado" v-model="localProduct.destacado">
        <label class="form-check-label" for="destacado">
          Destacado
        </label>
      </div>
      <div class="form-group">
        <label for="imagen">Imagen URL:</label>
        <input id="imagen" v-model.trim="localProduct.imagen" class="form-control" required />
        <div v-if="!isValid(localProduct.imagen)" class="text-danger">Por favor ingresa una URL de imagen válida.</div>
      </div>
      <button type="submit" class="btn btn-primary" :disabled="!formIsValid">Guardar</button>
    </form>
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
  computed: {
    formIsValid() {
      return (
        this.isValid(this.localProduct.nombre) &&
        this.isValid(this.localProduct.categoria) &&
        this.isValid(this.localProduct.descripcion) &&
        this.isValidPrice(this.localProduct.precio) &&
        this.isValidStock(this.localProduct.stock) &&
        this.isValid(this.localProduct.imagen)
      );
    }
  },
  methods: {
    isValid(value) {
      return typeof value === 'string' && value.trim() !== '';
    },
    isValidPrice(price) {
      return typeof price === 'number' && price > 0;
    },
    isValidStock(stock) {
      return typeof stock === 'number' && stock >= 0;
    },
    submitForm() {
      this.$emit('submit', this.localProduct);
    }
  }
};
</script>

<style scoped>
.edit-product-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
}

.edit-product-form h2 {
  margin-bottom: 20px;
}

.edit-product-form .form-group {
  margin-bottom: 15px;
}

.edit-product-form .btn {
  width: 100%;
}
</style>
