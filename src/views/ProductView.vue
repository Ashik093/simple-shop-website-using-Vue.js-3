<script setup>
import ProductView from './../components/ProductView.vue' 
import { onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import { useProductsStore } from '../store/product';

const productStore = useProductsStore()
const route = useRoute();
onBeforeMount(() => {
  productStore.getProductById(route.params.id)

})

</script>
<template>
    <ProductView :product="productStore.singleProduct"/>
</template>