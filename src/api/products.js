import axios from 'axios'

const productsApi=axios.create({
    baseURL:"http://127.0.0.1:8000/api/producto/"
})

export const getProducts=()=> productsApi.get("/")
export const getProduct= (id) => productsApi.get(`${id}/`)
export const createProduct = (product) => productsApi.post("/",product)
export const updateProduct = (id,product) => productsApi.put(`${id}/`)
export const deleteProduct = (id) => productsApi.delete(`${id}/`)
