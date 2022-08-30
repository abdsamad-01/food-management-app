import React from 'react';
import { categories } from '../utils/constants';


const Categories = () => {
    return (
        <ul className='w-fi border-b flex flex-row flex-nowrap overflow-auto border-gray-600 py-3'>
            {categories.map(item => (
                <li 
                    key={item.id}
                    className='text-lg mr-10 font-dmSans cursor-pointer font-medium text-gray-100'
                > 
                    { item.name } 
                </li>
            ))
            }
        </ul>
    )
}

export default Categories

