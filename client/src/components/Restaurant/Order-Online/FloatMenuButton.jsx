import React, { useState } from 'react'
import { HiMenu } from 'react-icons/hi'
import { MdClose } from 'react-icons/md'

// components
import MenuListContainer from './MenuListContainer'


const FloatMenuButton = () => {
    const [isClicked, setIsClicked] = useState(false)

    const toggleMenu = () => setIsClicked((prev) => !prev)
    return (
        <>
            <div className='fixed bottom-2 right-2 w-8/12 flex flex-col items-end  md:hidden'>
                {
                    isClicked && (<div className='w-8/12 h-48 bg-white p-3 overflow-y-scroll'>
                        <MenuListContainer />
                        <MenuListContainer />
                        <MenuListContainer />
                    </div>)
                }
                <button onClick={toggleMenu} className='flex items-center gap-2 fixed bottom-2 right-2 rounded-full text-white bg-yellow-900 px-3 py-2 md:hidden '>{
                    isClicked ? <MdClose /> : <HiMenu />
                } Menu</button>
            </div>
        </>
    )
}

export default FloatMenuButton