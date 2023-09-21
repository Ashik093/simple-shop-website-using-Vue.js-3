<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'



</script>

<template>

    <div>
      <NavBar/>
      <div class="mt-14">
        <router-view></router-view>
      </div>
      
      <Footer/>
    </div>

</template>
