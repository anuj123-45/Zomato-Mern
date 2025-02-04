import React from 'react'
// components
import FloatMenuButton from '../../components/Restaurant/Order-Online/FloatMenuButton'
import MenuListContainer from '../../components/Restaurant/Order-Online/MenuListContainer'

import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import Foodlist from '../../components/Restaurant/Order-Online/Foodlist';


const OrderOnline = () => {
  return (
    <>
      <div className='w-full flex'>

        <aside className='hidden md:flex flex-col gap-3 border-r  border-gray-200 h-screen w-1/4 overflow-y-scroll'>
          <MenuListContainer />
          <MenuListContainer />
          <MenuListContainer />
          <MenuListContainer />
          <MenuListContainer />
          <MenuListContainer />
          <MenuListContainer />




        </aside>
        <div className="w-full  px-3 md:w-3/4">
          <div className="pl-3 mb-4">
            <h2 className="text-xl font-semibold">Order Online</h2>
            <h4 className="flex items-center gap-2 font-light text-gray-500">
              <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
            </h4>
          </div>
          <section className='flex flex-col gap-3 md:gap-5 h-screen overflow-y-scroll'>

            <Foodlist title="Recommneded" items={[
              { image: "https://b.zmtcdn.com/data/dish_photos/a8d/981aa0fae185c75cdd0abad05e8a5a8d.jpeg?fit=around|130:130&crop=130:130;*,*", title: "Andhra Mutton", price: "1000", rating: 3 },
              { image: "https://b.zmtcdn.com/data/dish_photos/a8d/981aa0fae185c75cdd0abad05e8a5a8d.jpeg?fit=around|130:130&crop=130:130;*,*", title: "Andhra Mutton", price: "1000", rating: 3 }

            ]} />


            <Foodlist title="Pizza" items={[
              { image: "https://b.zmtcdn.com/data/dish_photos/a8d/981aa0fae185c75cdd0abad05e8a5a8d.jpeg?fit=around|130:130&crop=130:130;*,*", title: "Andhra Mutton", price: "1000", rating: 3 },
              { image: "https://b.zmtcdn.com/data/dish_photos/a8d/981aa0fae185c75cdd0abad05e8a5a8d.jpeg?fit=around|130:130&crop=130:130;*,*", title: "Andhra Mutton", price: "1000", rating: 3 }

            ]} />

            <Foodlist title="Choco" items={[
              { image: "https://b.zmtcdn.com/data/dish_photos/a8d/981aa0fae185c75cdd0abad05e8a5a8d.jpeg?fit=around|130:130&crop=130:130;*,*", title: "Andhra Mutton", price: "1000", rating: 3 },
              { image: "https://b.zmtcdn.com/data/dish_photos/a8d/981aa0fae185c75cdd0abad05e8a5a8d.jpeg?fit=around|130:130&crop=130:130;*,*", title: "Andhra Mutton", price: "1000", rating: 3 }

            ]} />


          </section>
        </div>

      </div>
      <FloatMenuButton />
    </>
  )
}

export default OrderOnline