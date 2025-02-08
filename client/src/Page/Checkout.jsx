import React from 'react'
import FoodItem from '../components/Cart/FoodItem'
import AddressList from '../components/Checkout/AddressList'
import { IoMdLock } from "react-icons/io";



const Checkout = () => {

  const addresses = [
    {
      name: 'Home',
      address: 'GT Wall Road, Bengaluru',
    },

    {
      name: 'Gym',
      address: 'GT Wall Road, Bengaluru',
    },
    {
      name: 'Office',
      address: 'GT Wall Road, Bengaluru',
    },

  ]
  return (
    <>
      <div>
        <h1 className='font-bold text-xl md:text-2xl'>Checkout</h1>
        <div className='flex flex-col justify-center items-center gap-3 md:gap-5 '>
          <div className='flex flex-col items-center w-full md:w-3/5 bg-gray-100 rounded-lg py-5 shadow-2xl'>
            <h3 className='text-lg font-semibold'>Summary</h3>
            <div className='flex flex-col items-center  gap-3 '>
              <h5 className='text-base tracking-wider'>ORDER FROM</h5>
              <div className='flex flex-col items-center  gap-1 font-semibold text-gray-700'>
                <h4>Dominos Pizza</h4>
                <h3>GT Wall Road, Bengaluru</h3>
              </div>

              <div className='flex flex-col gap-2 w-full mt-3'>
                <FoodItem name="Pizza" price="300" quantity={3} />
                <FoodItem name="Pizza" price="300" quantity={3} />
                <FoodItem name="Pizza" price="300" quantity={3} />
              </div>
            </div>

            <div>
              <h4 className='text-xl font-semibold text-center mt-6 mb-2'>Choose Address</h4>
              <AddressList address={addresses} />
            </div>
         
          <button className='bg-zomato-400 flex items-center justify-center gap-3 text-white rounded-lg p-3 mt-2 w-full md:w-3/5'> Pay Securely <IoMdLock/></button>
     
          </div>
       

        </div>
        
      </div>
    </>
  )
}

export default Checkout
