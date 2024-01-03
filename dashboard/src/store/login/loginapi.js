import { apiCommon } from "../api"


const loginApi = apiCommon.injectEndpoints({
    endpoints(build) {
        return {
            signIn: build.mutation({
                query: (user) => {
                    return {
                        url: `/accounts:signInWithPassword?key=AIzaSyAwl0HfmoeAQzh9PewwFkvHwQOKIlJskv8`,
                        method: 'POST',
                        body: {
                            email: user.email,
                            password: user.password,
                            returnSecureToken: true
                        }
                    }
                }
            })
        }
    }
})


export const { useSignInMutation } = loginApi