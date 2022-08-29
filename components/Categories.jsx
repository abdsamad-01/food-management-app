import React from 'react';
import { categories } from '../utils/constants';


const Categories = () => {
    return (
        <ul className='w-fi border-b flex flex-row gap-14 flex-nowrap overflow-auto border-gray-600 py-4'>
            {categories.map(item => (
                <li 
                    key={item.id}
                    className='text-lg font-dmSans w-full flex flex-nowrap font-medium text-gray-100'
                > 
                    { item.name } 
                </li>
            ))
            }
        </ul>
    )
}

export default Categories

