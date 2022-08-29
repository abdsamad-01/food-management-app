import React, { useEffect, useState } from 'react'
import { fetchFromApi } from '../utils/fetchFromAPI'
import Image from 'next/dist/client/image';

const FoodLists = ({ selected }) => {
    const [food, setFood] = useState([]);

    useEffect(() => {
        fetchFromApi(`random?number=20&tag=hot-dishes`)
            .then(data => setFood(data?.recipes));

    }, [selected])

    return (
        <div className='mt-8'>
            <h3 className='text-lg mb-24 font-dmSans text-gray-100'> Choose Dishes </h3>
            <div className='mt-6 grid grid-cols-3 xx:grid-cols-2 sm:grid-cols-1 gap-x-4 gap-y-24'>
            {food.map(item => (
                <div key={item.id} className='bg-bg-dark-2 p-2 col-span-1 flex items-center flex-col justify-center w-full rounded-3xl'>
                    <div className='relative -mt-16'>
                        <Image 
                            src={item.image} 
                            alt={item.name} 
                            height={170}
                            width={170}
                            objectFit='cover'
                            className='rounded-full w-32 absolute -mt-16'
                        />
                    </div>
                    <h3 className='text-lg font-dmSans text-gray-100 my-2'> {item.title.slice(0, 25)} </h3>
                    <h3 className='text-base font-dmSans text-gray-100 my-2'> $4.45 </h3>
                    <h3 className='text-sm font-dmSans text-gray-100 my-2'> 12 plates available </h3>
                </div>        
            ))}
        </div>
        </div>
        
    )
}

export default FoodLists

