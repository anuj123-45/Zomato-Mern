import React from 'react'
import FloatMenuButton from '../../components/Restaurant/Order-Online/FloatMenuButton'
import MenuListContainer from '../../components/Restaurant/Order-Online/MenuListContainer'

const OrderOnline = () => {
  return (
    <>
      <div className='w-full'>

        <aside className='hidden md:flex flex-col gap-3 border-r  border-gray-200 h-screen w-1/5 overflow-y-scroll'>
            <MenuListContainer />
            <MenuListContainer />
            <MenuListContainer />
            <MenuListContainer />
            <MenuListContainer />
            <MenuListContainer />
            <MenuListContainer />
    


      
        </aside>
        <div className='w-full md:w-4/5'></div>
      </div>
      <FloatMenuButton />
    </>
  )
}

export default OrderOnline