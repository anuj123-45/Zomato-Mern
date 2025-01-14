import React from 'react'
import RestaurantNavbar from '../components/Navbar/restaurantNavbar'
import { MdAddAPhoto } from "react-icons/md";

const RestaurantLayout = () => {
    return (
        <>
        <RestaurantNavbar />
            <div className="container mx-auto px-4 mt-10">                
                <div className='w-full h-60 md:hidden'>
                    <img src="https://b.zmtcdn.com/data/pictures/chains/4/50574/24697b617bb8aaf5b1c7df9a7074a662.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="" className='w-full h-full rounded-lg object-cover' />
                </div>

                <div className='hidden md:flex  w-full h-80 gap-1'>

                    <div className='w-7/12 h-full overflow-hidden'>
                        <img src="https://b.zmtcdn.com/data/pictures/chains/4/50574/24697b617bb8aaf5b1c7df9a7074a662.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="" className='w-full h-full rounded-lg object-cover transform transition duration-700 ease-in-out hover:scale-110' />
                    </div>

                    <div className='w-1/6 h-full flex flex-col gap-1  overflow-hidden'>
                        <img src="https://b.zmtcdn.com/data/pictures/chains/4/50574/24697b617bb8aaf5b1c7df9a7074a662.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="" className='w-full h-full rounded-lg object-cover transform transition duration-700 ease-in-out hover:scale-110' />
                        <img src="https://b.zmtcdn.com/data/pictures/chains/4/50574/24697b617bb8aaf5b1c7df9a7074a662.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="" className='w-full h-full rounded-lg object-cover transform transition duration-700 ease-in-out hover:scale-110' />
                    </div>

                    <div className='w-1/6 h-full flex flex-col gap-1'>

                       <div className='w-full h-full relative'>
                       <img src="https://b.zmtcdn.com/data/pictures/chains/4/50574/24697b617bb8aaf5b1c7df9a7074a662.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="" className='w-full h-full rounded-lg object-cover ' />
                      <div className='absolute inset-0 bg-black bg-opacity-40 rounded-lg'>
                      <h4 className='absolute inset-y-2/4 z-50 text-white w-full h-full text-center'>View Gallery</h4>
                      </div>
                       </div>

                       <div className='w-full h-full relative'>
                       <img src="https://b.zmtcdn.com/data/pictures/chains/4/50574/24697b617bb8aaf5b1c7df9a7074a662.jpg?fit=around|771.75:416.25&crop=771.75:416.25;*,*" alt="" className='w-full h-full rounded-lg object-cover ' />
                      <div className='absolute inset-0 bg-white bg-opacity-50 rounded-lg'>
                     <div className='flex flex-col'>
                        <MdAddAPhoto />
                     <h4 className='absolute inset-y-2/4 z-50 text-black w-full h-full text-center'>Add Photos</h4>
                     </div>
                      </div>
                   
                       </div>
                        
                     </div>


                </div>
            </div>
        </>
    )
}

export default RestaurantLayout