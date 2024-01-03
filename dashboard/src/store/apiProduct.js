import {createApi, fetchBaseQuery} from  "@reduxjs/toolkit/query/react"


const baseQuery = fetchBaseQuery({
    baseUrl : 'https://products-b96cc-default-rtdb.firebaseio.com/',
});



export const productApiCommon = createApi({
    reducerPath : "productApiCommon",
    baseQuery,
    endpoints : builder => ({})
}) 