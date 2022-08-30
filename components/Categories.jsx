import React from 'react';
import { categories } from '../utils/constants';


const Categories = ({ selectedCategory, setSelectedCategory }) => {
    
    return (
        <ul className='w-fi border-b flex flex-row flex-nowrap overflow-auto border-gray-600 pt-3'>
            {categories.map(item => (
                <li 
                    key={item.id}
                    style={{ color: selectedCategory === item.name ? 'text-icon-bg' : 'text-gray-100' }}
                    className={`text-lg ${selectedCategory === item.name && 'border-icon-bg border-b-4 rounded-sm ease-in-out'} pb-2 mr-12 font-dmSans cursor-pointer font-medium ${selectedCategory === item.name ? 'text-icon-bg' : 'text-gray-100 opacity-90'}`}
                    onClick={() => setSelectedCategory(item.name)}
                > 
                    { item.name } 
                </li>
            ))
            }
        </ul>
    )
}

export default Categories

