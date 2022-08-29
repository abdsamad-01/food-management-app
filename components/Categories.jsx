import React from 'react'

const Categories = () => {
    return (
        <ul className='w-full border-b flex flex-row gap-14 md:gap-9 sm:gap-4 flex-nowrap overflow-auto border-gray-600 py-4'>
            {['Hot Dishes', 'Cold Dishes', 'Soup', 'Grill', 'Appetizer', 'Desert'].map((item, idx) => (
                <li 
                    key={idx}
                    className='text-lg font-dmSans text-gray-100'
                > 
                    { item } 
                </li>
            ))
            }
        </ul>
    )
}

export default Categories

