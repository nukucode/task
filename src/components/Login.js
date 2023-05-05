"use client"

import { auth, provider } from '@/firebase/config'
import { signInWithPopup } from 'firebase/auth'
import React from 'react'

function Login() {

    // => Sign In With Google
    const authHandler = async() =>  {
        const user = await signInWithPopup(auth, provider)
        localStorage.setItem('user', JSON.stringify(user.user))
    }
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div>
        <button
          onClick={authHandler}
          className="p-3 bg-blue-400 hover:bg-blue-500
               text-white rounded-md shadow-md "
        >
          Login With Google
        </button>
      </div>
    </div>
  );
}

export default Login