import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

const style = {
    box: {
        background: "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7)), url('https://cdn.shopify.com/s/files/1/0704/6378/2946/files/happiness-839037_1920.jpg?v=1706780877')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
}

const Login = () => {
    return (
        <div class="flex h-screen w-full items-center justify-center bg-gray-900 bg-cover bg-no-repeat" style={style.box}>
            <div class="formWidth rounded-xl bg-gray-900 bg-opacity-50 pt-7 pb-7 shadow-lg backdrop-blur-md max-sm:px-8">
                <div class="text-white">
                    <div class="mb-4 flex flex-col items-center">
                        <img src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Lucky_Logo_Casino.png?v=1706801454" width="150" alt="" srcset="" />
                        <h1 class="mb-2 mt-2 text-2xl">Admin Dashboard</h1>
                        <span class="text-gray-300">Enter Login Details</span>
                    </div>
                    <form action="#">
                        <div>
                            <label for="username" class="block text-sm text-gray-800 dark:text-gray-200">Username</label>
                            <input type="text" class="input_style block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div class="mt-4">
                            <div class="flex items-center justify-between">
                                <label for="password" class="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                            </div>

                            <input type="password" class="input_style block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                        <div class="mt-8 flex justify-center items-center text-lg text-black">
                            <Link to="/admin" type="submit" class="rounded-3xl bg-red-700 px-10 py-2 text-white shadow-xl backdrop-blur-md transition-colors duration-300 hover:bg-red-600">Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}


export default Login
