import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products', {
    state: () => ({ products: [], productsData: {}, singleProduct: {} }),
    getters: {

    },
    actions: {
        async getAllProduct() {
            try {
                let data = await (await fetch('https://dummyjson.com/products')).json()
                this.products = data.products
                this.productsData = data
                console.log(this.products)
            } catch (error) {
                console.log(error)
            }
        },
        async loadMoreProduct() {
            try {
                let data = await (await fetch('https://dummyjson.com/products?skip=' + Number(this.productsData.skip + this.productsData.limit))).json()
                this.products = [...this.products, ...data.products];
                this.productsData = data
            } catch (error) {
                console.log(error)
            }
        },
        async getProductById(productId) {
            try {
                let url = 'https://dummyjson.com/products/' + productId

                let data = await (await fetch(url)).json()
                this.singleProduct = data
            } catch (error) {
                console.log(error)
            }
        }
    },
})