import { useFormik } from 'formik'
import loginSchema from '../../validation/login'
import { useDispatch } from 'react-redux';
import { useSignInMutation } from '../../store/login/loginapi';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import { ErrorMessage } from "../ErrorMessage"
import { setUser, setToken } from "../../store/login/loginSlice"
import {Loading} from "../Loading"



export function Login() {

    const dispatch = useDispatch()
    const [signIn, { isLoading }] = useSignInMutation()
    const navigate = useNavigate()
    const [errorMessage, setErrorMessage] = useState('')
    const [error, setError] = useState(false)
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: async values => {
            const res = await signIn(values);
            if (res.data) {
                dispatch(setUser(values));
                dispatch(setToken(res.data.idToken))
                navigate('/dashboard');
            } else {
                setError(true)
                setErrorMessage(res.error.data.error.message)
            }
            formik.resetForm();
        },
    });







    return (



        <div className="bg-blue-400 h-screen " onSubmit={formik.handleSubmit}>
            <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
                <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0" style={{ height: "500px" }}>
                    <div className="flex flex-col w-full md:w-1/2 p-4">
                        <div className="flex flex-col flex-1 justify-center mb-8">
                            {error && <ErrorMessage errorMessage={errorMessage} />}
                            <h1 className="text-4xl text-center font-thin">Welcome Back</h1>
                            <div className="w-full mt-4">
                                <form className="form-horizontal w-3/4 mx-auto">


                                    <div className="flex flex-col mt-4">
                                        <input
                                            onChange={formik.handleChange}
                                            value={formik.values.email}
                                            id="email"
                                            type="email"
                                            className="flex-grow h-8 px-2 border rounded border-grey-400"
                                            name="email"
                                            placeholder="Email" />
                                        <div className="text-[red] text-sm">{formik.errors.email}</div>

                                    </div>



                                    <div className="flex flex-col mt-4">
                                        <input
                                            onChange={formik.handleChange}
                                            value={formik.values.password}
                                            id="password"
                                            type="password"
                                            className="flex-grow h-8 px-2 rounded border border-grey-400"
                                            name="password"
                                            placeholder="Password" />
                                        <div className="text-[red] text-sm">
                                            {formik.errors.password}
                                        </div>
                                    </div>




                                    <div className="flex items-center mt-4">
                                        <input type="checkbox" name="remember" id="remember" className="mr-2" /> <label htmlFor="remember" className="text-sm text-grey-dark">Remember Me</label>
                                    </div>
                                    <div className="flex flex-col mt-8">
                                        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded">
                                            {isLoading ? <Loading/> : "Login"}
                                        </button>
                                    </div>
                                </form>
                                <div className="text-center mt-4">
                                    <a className="no-underline hover:underline text-blue-dark text-xs" href="#">
                                        Forgot Your Password?
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block md:w-1/2 rounded-r-lg" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80")`, backgroundSize: "cover", backgroundPosition: "center center" }}    ></div>
                </div>
            </div>
        </div>





    )
}
