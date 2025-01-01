import React from 'react'
import { PiUserFill } from "react-icons/pi";

const MobileNav = () => {
    return <div className='flex items-center justify-between md:hidden'>
        <div className='w-28 h-14'>
            <img src="https://cdn.freelogovectors.net/wp-content/uploads/2024/03/zomato-logo-freelogovectors.net_.png" alt="logo" className='w-full h-full' />
        </div>
        <div className='flex items-center gap-3'>
            <button className='bg-zomato-400 text-white py-2 px-3 rounded-full'>Use app</button>
            <span className='border border-gray-500 rounded-full p-1 text-zomato-300'><PiUserFill /></span>
        </div>
    </div>
}

const MediumNav = () => {
    return <div className='hidden md:block '>
        <div className='w-32 h-20-'>
            <img src="https://cdn.freelogovectors.net/wp-content/uploads/2024/03/zomato-logo-freelogovectors.net_.png" alt="logo" className='w-full h-full' />
        </div>
      <div className='w-full bg-white shadow'>
        <div></div>
        <div></div>
      </div>
    </div>

}
const Navbar = () => {
    return <>
        <nav className='p-3  bg-white shadow-md'>
            <MobileNav />
            <MediumNav />



        </nav>
    </>

}


export default Navbar;