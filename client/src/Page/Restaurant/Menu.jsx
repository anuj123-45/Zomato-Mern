import React, { useState } from 'react'
// components
import MenuCollection from '../../components/Restaurant/MenuCollection'

const Menu = () => {
    const [menus, setmenus] = useState([]);
    return (
        <>
            <div className='flex flex-wrap gap-3'>
                {
                    menus.map((menu) => (
                        <MenuCollection {...menu} />
                    ))
                }
            </div>

        </>
    )
}

export default Menu
