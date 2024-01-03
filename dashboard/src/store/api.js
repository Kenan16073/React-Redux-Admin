import {createApi, fetchBaseQuery} from  "@reduxjs/toolkit/query/react"


const baseQuery = fetchBaseQuery({
    baseUrl : 'https://identitytoolkit.googleapis.com/v1',
});


export const apiCommon = createApi({
    reducerPath : "apiCommon",
    baseQuery,
    endpoints : builder => ({})
}) 