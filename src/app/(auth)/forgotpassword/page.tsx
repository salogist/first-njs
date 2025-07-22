import React from 'react'

function ForgotPassword() {
    return (
        <div className='flex flex-col items-center justify-center h-screen gap-4'>
            <h1 className='text-4xl font-bold'>Forgot Password</h1>
            <p className='text-lg'>Please enter your email to reset your password.</p>
            <input type="email" placeholder='Email' className='focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 rounded-md p-2' />
            <button className='bg-blue-500 text-white p-2 rounded-md'>Reset Password</button>
        </div>
    )
}

export default ForgotPassword  