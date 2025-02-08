import React from 'react'
import { PiUserFill } from "react-icons/pi";
import { FaArrowLeft } from "react-icons/fa";




const Navbar = () => {
    return <>
        <nav className='py-2 px-10 bg-white shadow-md lg:shadow-none'>
            <div className='container mx-auto px-4 lg:px-20'>
            <div className='flex items-center justify-between'>
                <FaArrowLeft />
                <div className='w-28 h-14'>
                    <img src="https://cdn.freelogovectors.net/wp-content/uploads/2024/03/zomato-logo-freelogovectors.net_.png" alt="logo" className='w-full h-full' />
                </div>
                <div className='flex items-center gap-3'>
                   
                    <span className='border border-gray-500 rounded-full p-1 text-zomato-300'><PiUserFill /> </span>
                    Anuj
                </div>
            </div>
            </div>



        </nav>
    </>

}


export default Navbar;