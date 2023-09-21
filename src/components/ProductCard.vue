<script setup>
import ProductCardComponent from './Product/ProductCardComponent.vue';
import {onBeforeMount} from 'vue'
import { useProductsStore } from '../store/product';
const productStore = useProductsStore()
onBeforeMount(() => {
  productStore.getAllProduct()
})


</script>
<template>
    
    <div class="text-center p-10">
        <h1 class="font-bold text-4xl mb-4">Products</h1>
    </div>
    <section class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"> 
      <ProductCardComponent :products="productStore.products"></ProductCardComponent>
    </section>
    <div class="text-center py-20 px-10">
      <button @click="productStore.loadMoreProduct()" class="rounded-lg px-8 py-2 text-xl bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">Load More</button>
    </div>
</template>