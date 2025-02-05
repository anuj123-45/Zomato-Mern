import React, { useState } from 'react'
import { PiUserFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowDropdown } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";

// componenets;
import Signin from '../Auth/Signin';
import SignUp from '../Auth/SignUp';


const MobileNav = ({ SignIn,SignUp}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return <div className='flex items-center justify-between lg:hidden'>
        <div className='w-28 h-14'>
            <img src="https://cdn.freelogovectors.net/wp-content/uploads/2024/03/zomato-logo-freelogovectors.net_.png" alt="logo" className='w-full h-full' />
        </div>
        <div className='flex items-center gap-3 relative'>
            <button className='bg-zomato-400 text-white py-2 px-3 rounded-full'>Use app</button>
            <span onClick={()=>setIsDropdownOpen((prev)=>!prev)} className='border border-gray-500 rounded-full p-1 text-zomato-300'><PiUserFill /></span>
        </div>
       {
        isDropdownOpen && (
            <div className='absolute z-10 flex flex-col gap-2 right-5 top-12 bg-white p-2 rounded-lg shadow-md'>

            <button onClick={SignIn}>Signin</button>
            <button onClick={SignUp}>Signup</button>
        </div>
        )
       }
    </div>
}

const LargeNav = ({SignIn,SignUp}) => {
    return <div className='container mx-auto px-20'>
        <div className='hidden lg:flex items-center gap-5 w-full'>
            <div className='w-28'>
                <img src="https://cdn.freelogovectors.net/wp-content/uploads/2024/03/zomato-logo-freelogovectors.net_.png" alt="logo" className='w-full h-full' />
            </div>
            <div className='flex w-full  bg-white shadow-md p-2 border border-gray-200 rounded-md'>
                <div className='flex items-center gap-2  border-r-2 border-gray-300 pr-2'>
                    <span className='text-zomato-400'><FaLocationDot /></span>
                    <input type="text" placeholder='Bengaluru' className='w-full focus:outline-none' />
                    <IoMdArrowDropdown />
                </div>
                <div className='flex items-center gap-5 pl-2 w-3/4'>
                    <RiSearch2Line />
                    <input type="text" placeholder='Search for restaurant, cuisine or a dish' className='w-full focus:outline-none' />
                </div>

            </div>

            <div className='flex items-center gap-3 ml-20'>
                <button className='text-gray-400 hover:text-gray-800' onClick={SignIn}>Login</button>
                <button className='text-gray-400 hover:text-gray-800' onClick={SignUp}>Signup</button>
            </div>

        </div>
    </div>

}
const Navbar = () => {
    const [openSignin, setOpenSignin] = useState(false);
    const [openSignup, setOpenSignup] = useState(false);
    const openSiginModal=()=>setOpenSignin(true);
    const openSignUpModal=()=>setOpenSignup(true);
    return <>
        <nav className='py-2 px-10 bg-white shadow-md lg:shadow-none'>
            <Signin isOpen={openSignin} setIsOpen={setOpenSignin} />
            <SignUp isOpen={openSignup} setIsOpen={setOpenSignup}/>
            <MobileNav SignIn={openSiginModal} SignUp={openSignUpModal}/>
            <LargeNav SignIn={openSiginModal} SignUp={openSignUpModal}/>



        </nav>
    </>

}


export default Navbar;