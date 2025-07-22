import React from 'react'
import Link from 'next/link'

function SignIn() {
    return (
        <div className='flex flex-col items-center justify-center h-screen gap-4'>
            <h1 className='text-4xl font-bold'>Sign In</h1>
            <p className='text-lg'>Please enter your email and password to sign in.</p>
            <input type="email" placeholder='Email' className='focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 rounded-md p-2' />
            <input type="password" placeholder='Password' className='focus:out line-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 rounded-md p-2' />
            <button className='bg-blue-500 text-white p-2 rounded-md'>Sign In</button>
            <p className='text-lg'>Already have an account? <Link href="/login" className='text-blue-500'>Login</Link></p>
            <p className='text-lg'>Forgot your password? <Link href="/forgotpassword" className='text-blue-500' >Forgot Password</Link></p>
        </div>
    )
}

export default SignIn   