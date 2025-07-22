import Link from "next/link";

export default function Custom404() {
    return (
        <div className='flex flex-col items-center justify-center h-screen gap-4'>
            <h1 className='text-4xl font-bold'>This page does not exist</h1>
            <p className='text-lg'>The page you are looking for does not exist please go back to the home page.</p>
            <div className='flex flex-row gap-4'>
                <Link href="/" className='text-blue-500'>Go to Home Page</Link>
                <Link href="/shop" className='text-blue-500'>Go to Shop Page</Link>
            </div>
        </div>
    );
}
