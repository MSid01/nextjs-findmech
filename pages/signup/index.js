import { useMutation } from '@apollo/client';
import React, { useState, useEffect } from 'react';
import { SIGN_UP } from '../../apollo-client/graphqlFunctions';


const SignUp = () => {
  const username_already_taken='An error occurred during account creation';
    const [formData, setFormData] = useState({});
    const [register, {data, error, loading}] = useMutation(SIGN_UP);
    const handleSubmit = (e)=>{
        e.preventDefault();
        register({
          variables:{
            input:formData
          }
        })
    }

    const handleChange = (e)=>{
        setFormData(
            {
                ...formData,
                [e.target.name]: e.target.value
            }
        )
    }

    

  return (
<div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8">
  {
      error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
  <span className="block sm:inline">{(error.message===username_already_taken)?"Username has already taken":error.message}</span>
</div>
    }
    <div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign Up</h2>
    </div>

    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <input type="hidden" name="remember" value="true"/>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label forname="user-name" className="sr-only">Username</label>
          <input id="user-name" name="username" type="text" autoComplete="user-name" required onChange={handleChange} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm" placeholder="Username"/>
        </div>
        <div>
          <label forname="email-address" className="sr-only"> Email</label>
          <input id="email-address" name="email" type="email" autoComplete="email" required onChange={handleChange} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm" placeholder="Email"/>
        </div>
        <div>
          <label forname="password" className="sr-only">Password</label>
          <input id="password" name="password" type="password" autoComplete="current-password" required onChange={handleChange} className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm" placeholder="Password"/>
        </div>
      </div>

      {/* <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded"/>
          <label forname="remember-me" className="ml-2 block text-sm text-gray-900"> Remember me </label>
        </div>

        <div className="text-sm">
          <a href="#" className="font-medium text-red-500 hover:text-red-500"> Forgot your password? </a>
        </div>
      </div> */}

      <div>
        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-500 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg className="h-5 w-5 text-red-200 group-hover:text-red-300" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
            </svg>
          </span>
          Sign Up
        </button>
      </div>
    </form>
  </div>
</div>
  )
}

export default SignUp