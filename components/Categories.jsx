import React from 'react'

const Categories = () => {
    return (
        <ul className='w-fi border-b flex flex-row gap-14 flex-nowrap overflow-auto border-gray-600 py-4'>
            {['HotDishes', 'ColdDishes', 'Soup', 'Grill', 'Appetizer', 'Desert'].map((item, idx) => (
                <li 
                    key={idx}
                    className='text-lg font-dmSans w-full flex flex-nowrap font-medium text-gray-100'
                > 
                    { item } 
                </li>
            ))
            }
        </ul>
    )
}

export default Categories

