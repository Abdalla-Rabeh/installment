import { defineStore } from 'pinia';

export const GetClient = defineStore('ClientDataShera', {
  state: () => ({
    ClientData: {},
  }),
  
});
export const Products = defineStore('products', {
  state: () => ({
    ProductsData: {},
  }),
  
});

