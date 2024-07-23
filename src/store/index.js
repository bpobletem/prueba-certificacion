import { createStore } from 'vuex'


import products from "./modules/products.js";
import auth from './modules/auth.js';

export default createStore({

  modules: {
    products,
    auth
  }
})
