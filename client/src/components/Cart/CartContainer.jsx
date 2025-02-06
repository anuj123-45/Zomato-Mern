import React, { useState } from 'react'
import {  IoMdArrowDropright, IoMdArrowDropup } from 'react-icons/io'
import { IoCloseSharp } from "react-icons/io5";
import FoodItem from './FoodItem';


const CartSm = ({ toggle }) => {
    return (
        <>
            <div className='md:hidden flex items-center justify-between'>
                <div className='flex flex-col  gap-1 items-center'>
                    <small className='flex items-center gap-2'>1 Item <IoMdArrowDropup onClick={toggle} /></small>
                    <span>₹ 300 <sup>(plus tax)</sup></span>

                </div>
                <button className='text-white bg-zomato-400 px-3 py-1 flex gap-2 items-center rounded-md'>Continue <IoMdArrowDropright /></button>
            </div>
        </>
    )
}

const CartLg = ({ toggle }) => {
    return (
        <>
            <div className='container px-20 mx-auto hidden md:flex items-center justify-between'>
                <div className='flex   gap-1 items-center text-xl'>
                    <small className='flex items-center gap-2'> <IoMdArrowDropup onClick={toggle} /></small>
                    <h4>Your Orders (1) </h4>

                </div>
                <div className='flex gap-2 items-center'>
                    <h3>Subtotal: ₹ 300</h3>
                    <button className='text-white bg-zomato-400 px-3 py-1 flex gap-2 items-center rounded-md'>Continue <IoMdArrowDropright /></button>
                </div>
            </div>
        </>
    )
}


const CartContainer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleCart = () => setIsOpen((prev) => !prev);
    const closeCart = () => setIsOpen(false);
    return (
        <>
            {
                isOpen && (
                    <>
                        <div className="fixed w-full bottom-16 bg-white z-10 p-3 sm:p-4 md:p-6">
                            <div className="container mx-auto px-4 sm:px-10 md:px-20">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-lg sm:text-xl font-semibold">Your Orders</h3>
                                    <IoCloseSharp className="cursor-pointer text-lg sm:text-xl" onClick={closeCart} />
                                </div>
                        <div className='h-48 overflow-y-scroll'>
                        <FoodItem name='Chineese n Tomato' price='300' quantity='2'/>
                         <FoodItem name='Chineese n Tomato' price='300' quantity='2'/>
                         <FoodItem name='Chineese n Tomato' price='300' quantity='2'/>
                         <FoodItem name='Chineese n Tomato' price='300' quantity='2'/>
                         <FoodItem name='Chineese n Tomato' price='300' quantity='2'/>
                         <FoodItem name='Chineese n Tomato' price='300' quantity='2'/>
                         
                        </div>

                            </div>
                        </div>


                    </>

                )
            }
            <div className="flex flex-col gap-2 md:px-20">

            </div>
            <div className='fixed w-full bg-white z-10 p-2 bottom-0'>

                <CartSm toggle={toggleCart} />
                <CartLg toggle={toggleCart} />
            </div>

        </>
    )
}

export default CartContainer
