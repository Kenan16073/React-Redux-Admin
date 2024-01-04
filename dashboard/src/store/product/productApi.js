import { productApiCommon } from "../apiProduct"


export const productsApi = productApiCommon.injectEndpoints({
    endpoints: builder => ({
        productsGet: builder.query({
            providesTags: ['Products'],
            query: () => {
                return {
                    url: 'products.json',
                    method: 'GET',
                }
            },
            invalidatesTags: ['Products']
        }),
        productsDelete: builder.mutation({
            query: (id) => {
                return {
                    url: `products/${id}.json`,
                    method: 'DELETE'
                }
            },
            invalidatesTags: ['Products']
        }),
        productsGetOne: builder.query({
            query: (id) => {
                return {
                    url: `products/${id}.json`,
                    method : 'GET',
                }
            }
        }),
        productsEdit: builder.mutation({
            query: (products_edit) => {
                return {
                    url: `products/${products_edit.id}.json`,
                    method : 'PATCH',
                    body : products_edit
                }
            },
            invalidatesTags: ['Products']
        }),
    })
});




export const { useProductsGetQuery,useProductsDeleteMutation,useProductsGetOneQuery,useProductsEditMutation } = productsApi;