import {createSlice} from '@reduxjs/toolkit'




const initialState = {
    user: {
        email: '',
        password: ''
    },
    token: sessionStorage.getItem('token')
}


const loginSlice = createSlice({
    name : 'login',
    initialState,
    reducers : {
        setUser(state,action){
            state.user.email = action.payload.email
            state.user.password = action.payload.password
        },
        setToken(state,action){
            state.token = action.payload
            sessionStorage.setItem('token',action.payload);
        },
        Logout(state){
            sessionStorage.removeItem("token");
            state.token = null;
        }
    }

})

export const {setUser ,setToken,Logout} = loginSlice.actions


export {loginSlice}