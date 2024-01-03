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
        })
    })
});




export const { useProductsGetQuery,useProductsDeleteMutation } = productsApi;