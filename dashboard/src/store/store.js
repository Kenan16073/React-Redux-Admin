import { configureStore } from "@reduxjs/toolkit";
import { apiCommon } from "./api";
import { loginSlice } from "./login/loginSlice";
import { productApiCommon } from "./apiProduct";
import { productsSlice } from "./product/productSlice";


export const store = configureStore({
    reducer : {
        [loginSlice.name] : loginSlice.reducer,
        [apiCommon.reducerPath] : apiCommon.reducer,
        [productApiCommon.reducerPath] : productApiCommon.reducer,
        [productsSlice.reducerPath] : productsSlice.reducer
    },
    middleware : (getDefaultMiddleware) =>{
        return getDefaultMiddleware()
        .concat(apiCommon.middleware)
        .concat(productApiCommon.middleware)
    }
})