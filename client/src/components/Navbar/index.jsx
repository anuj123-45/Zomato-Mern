import React from 'react'
import { PiUserFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowDropdown ,IoMdArrowDropup} from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";



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
    return <div className='hidden md:flex items-center gap-5 w-full lg:w-3/4'>
        <div className='w-28'>
            <img src="https://cdn.freelogovectors.net/wp-content/uploads/2024/03/zomato-logo-freelogovectors.net_.png" alt="logo" className='w-full h-full' />
        </div>
      <div className='flex w-full  bg-white shadow-md p-2 border border-gray-200 rounded-md'>
        <div className='flex items-center gap-2  border-r-2 border-gray-300 pr-2'>
            <span className='text-zomato-400'><FaLocationDot/></span>
            <input type="text" placeholder='Bengaluru' className='w-full focus:outline-none'/>
            <IoMdArrowDropdown/>
        </div>
        <div className='flex items-center gap-2 pl-2 w-full'>
            <RiSearch2Line/>
        <input type="text" placeholder='Search for restaurant, cuisine or a dish' className='w-full focus:outline-none'/>
        </div>

      </div>

      <div className='flex items-center gap-2 '>
        <button className='text-gray-400 hover:text-gray-800'>Login</button>
        <button className='text-gray-400 hover:text-gray-800'>Signup</button>
      </div>

    </div>

}
const Navbar = () => {
    return <>
        <nav className='py-2 px-10 bg-white shadow-md'>
            <MobileNav />
            <MediumNav />



        </nav>
    </>

}


export default Navbar;