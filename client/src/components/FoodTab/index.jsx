import React, { useState, useEffect } from 'react'
import { IoFastFoodOutline, IoNutritionOutline } from "react-icons/io5";
import { MdDeliveryDining } from "react-icons/md";
import { BiDrink } from "react-icons/bi";
import { useParams,Link} from 'react-router-dom';


const MobileTabs = () => {
    const [alltypes, setAlltypes] = useState([{

        id: "delivery",
        icon: < MdDeliveryDining />,
        name: "Delivery",
        isActive: false,
    },

    {

        id: "dinningout",
        icon: < IoFastFoodOutline />,
        name: "DinningOut",
        isActive: false,
    },


    {

        id: "nightlife",
        icon: < BiDrink />,
        name: "Nightlife",
        isActive: false,
    },


    {

        id: "nutrition",
        icon: <IoNutritionOutline />,
        name: "Nutrition",
        isActive: false,
    },
    ])

    const { type } = useParams();
    

    return (<>
        <div className='lg:hidden bg-white shadow-lg p-3 fixed bottom-0 z-10 w-full flex items-center justify-between md:justify-evenly'>
            {
                alltypes.map((item) => (
                    <Link to={`/${item.id}`}>
                    <div key={item.id} className={item.id===type ? ' relative flex flex-col items-center text-xl text-zomato-400 ' : 'flex flex-col items-center text-xl'}>
                        <div className={item.id===type  && "absolute -top-3 w-full h-2 border-t-2 border-zomato-400"}/>
                        {item.icon}
                        <h5 className='text-sm'>{item.name}</h5>
                    </div>
                    </Link>
                ))
            }
        </div>
    </>
    )
}

const LargeTabs = () => {
    return <>
        <div className='hidden lg:flex container px-20 mx-auto gap-14'>
            <div className='flex items-center gap-3'>
                <div className='w-16 h-16 relative bg-gray-100 p-2 rounded-full'>
                    <img src="https://b.zmtcdn.com/data/o2_assets/246bbd71fbba420d5996452be3024d351616150055.png" alt="delivery" className='w-full h-full' />
                </div>
                <h3 className='text-xl text-gray-700 font-semibold'>Delivery</h3>
            </div>
            <div className='flex items-center gap-3'>
                <div className='w-16 h-16 relative bg-gray-100 p-2 rounded-full'>
                    <img src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png" alt="delivery" className='w-full h-full' />
                </div>
                <h3 className='text-xl text-gray-700 font-semibold'>Dinning Out</h3>
            </div>
            <div className='flex items-center gap-3'>
                <div className='w-16 h-16 relative bg-gray-100 p-2 rounded-full'>
                    <img src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png" alt="delivery" className='w-full h-full' />
                </div>
                <h3 className='text-xl text-gray-700 font-semibold'>Nightlife</h3>
            </div>
            <div className='flex items-center gap-3'>
                <div className='w-16 h-16 relative bg-gray-100 p-2 rounded-full'>
                    <img src="https://b.zmtcdn.com/data/o2_assets/54cad8274d3c3ec7129e0808a13b27c31616582882.png" alt="delivery" className='w-full h-full' />
                </div>
                <h3 className='text-xl text-gray-700 font-semibold'>Delivery</h3>
            </div>


        </div>
    </>
}

const FoodTabs = () => {
    return (
        <>
            <div>
                <MobileTabs />
                <LargeTabs />
            </div>

        </>
    )

}

export default FoodTabs