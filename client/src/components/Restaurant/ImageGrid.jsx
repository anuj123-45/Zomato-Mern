import React from 'react'
import { AiOutlineCamera } from "react-icons/ai";
const ImageGrid = (props) => {
    return (
        <>
            <div className='w-full h-60 md:hidden'>
                <img src={props.images.length && props.images[0].location} alt="" className='w-full h-full rounded-lg object-cover' />
            </div>

            <div className='hidden md:flex  w-full h-96 gap-1'>

                <div className='w-full h-full overflow-hidden'>
                    <img src={props.images.length && props.images[0].location} alt="" className='w-full h-full rounded-lg object-cover transform transition duration-700 ease-in-out hover:scale-110' />
                </div>

                <div className='w-1/4 h-full flex flex-col gap-1  overflow-hidden'>
                    <img src={props.images.length>=1 && props.images[1].location} alt="" className='w-full h-full rounded-lg object-cover transform transition duration-700 ease-in-out hover:scale-110' />
                    <img src={props.images.length>=2 && props.images[2].location} alt="" className='w-full h-full rounded-lg object-cover transform transition duration-700 ease-in-out hover:scale-110' />
                </div>

                <div className='w-1/4 h-full flex flex-col gap-1'>

                    <div className='w-full h-full relative'>
                        <img src={props.images.length>=3 && props.images[3].location} alt="" className='w-full h-full rounded-lg object-cover ' />
                        <div className='absolute inset-0 bg-black bg-opacity-40 rounded-lg'>
                            <h4 className='absolute inset-y-2/4 z-50 text-white w-full h-full text-center'>View Gallery</h4>
                        </div>
                    </div>

                    <div className='w-full h-full relative'>
                        <img src={props.images.length>=4 && props.images[4].location} alt="" className='w-full h-full rounded-lg object-cover ' />
                        <div className='absolute inset-0 bg-gray-400 bg-opacity-90 rounded-lg'>
                            <div className='absolute inset-y-1/4 z-20 text-white w-full h-full text-center flex flex-col items-center'>
                                <div className='bg-black p-3 rounded-full bg-opacity-50'>
                                    <AiOutlineCamera />
                                </div>
                                <h4 className=''>Add Photos</h4>
                            </div>
                        </div>

                    </div>

                </div>


            </div>

        </>
    )
}

export default ImageGrid