<script setup>
defineProps({
  product:Object
})
</script>
<template>
    <div class="antialiased">
        <div class="py-6">
        
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            <div class="flex flex-col md:flex-row -mx-4">
              <div class="md:flex-1 px-4">
                <div x-data="{ image: 1 }" x-cloak>
                  <div class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                    <div x-show="image === 1" class="h-64 md:h-80 rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                      <img :src="product.thumbnail" class="w-full h-full relative inset-0 object-cover"/>
                    </div>
        
                   
                  </div>
        
                  <div class="flex -mx-2 mb-4">
                    <template x-for="i in 4">
                      <div class="flex-1 px-2">
                        <button x-on:click="image = i" :class="{ 'ring-2 ring-indigo-300 ring-inset': image === i }" class="focus:outline-none w-full rounded-lg h-24 md:h-32 bg-gray-100 flex items-center justify-center">
                          <span x-text="i" class="text-2xl"></span>
                        </button>
                      </div>
                    </template>
                  </div>
                </div>
              </div>
              <div class="md:flex-1 px-4">
                <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{{ product.title }} | {{product.description}}</h2>
                <p class="text-gray-500 text-sm"> <a href="#" class="text-indigo-600 hover:underline">{{product.brand}}</a></p>
        
                <div class="flex items-center space-x-4 my-4">
                  <div>
                    <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                      <span class="text-indigo-400 mr-1 mt-1">$</span>
                      <span class="font-bold text-indigo-600 text-3xl">{{product.price}}</span>
                    </div>
                  </div>
                  <div class="flex-1">
                    <p class="text-green-500 text-xl font-semibold">Save {{product.discountPercentage}}%</p>
                    <p class="text-gray-400 text-sm">Inclusive of all Taxes.</p>
                  </div>
                </div>
        
                <p class="text-gray-500">{{product.description}}</p>
        
                <div class="flex py-4 space-x-4">
                  
                <div class="flex items-center">

                    <svg v-for="number in [1,2,3,4,5]" class="w-4 h-4" :class="[Number(number)<Number(product.rating)?'text-yellow-300 mr-1':'text-gray-300 mr-1 dark:text-gray-500']" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                  </svg>

                 


                 
                  <p class="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{{ product.rating }} out of 5</p>
                </div>

                </div>
              </div>
            </div>
          </div>
        </div>
          </div>
</template>