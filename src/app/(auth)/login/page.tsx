import React from 'react'
import Link from 'next/link'

function Login() {
    return (
        <div className='flex flex-col items-center justify-center h-screen gap-4'>
            <h1 className='text-4xl font-bold'>Login</h1>
            <p className='text-lg'>Please enter your email and password to login.</p>
            <input type="email" placeholder='Email' className='focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 rounded-md p-2 border-none' />
            <input type="password" placeholder='Password' className='focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 rounded-md p-2 border-none' />
            <button className='bg-blue-500 text-white p-2 rounded-md'>Login</button>
            <p className='text-lg'>Don't have an account? <Link href="/signin" className='text-blue-500'>Sign In</Link></p>
            <p className='text-lg'>Forgot your password? <Link href="/forgotpassword" className='text-blue-500' >Forgot Password</Link></p>
        </div>
    )
}

export default Login    