import React from 'react'
import {Link,useParams} from 'react-router-dom'
import { FaCircleChevronRight } from "react-icons/fa6";


const Overview = () => {
    const {id}=useParams()
    return (
        <>
            <div className='flex flex-col md:flex-row relative'>
              <div className='w-full shadow-xl'>
              <h2 className='font-semibold text-lg md:text-xl my-4'>About this Place</h2>
              <div className='flex items-center justify-between'>
                <h4 className='text-lg font-medium'>Menu</h4>
                <Link to={`/restaurant/${id}/menu`}>
                <span className='flex items-center gap-2 text-zomato-400'>See all Menus <FaCircleChevronRight /></span>
                </Link>
              </div>
              </div>
            
                <aside style={{height:"fit-content"}} className='hidden md:block md:w-2/5  top-2 bg-white  shadow-xl sticky'> </aside>
        
             </div>

        </>
    )
}

export default Overview