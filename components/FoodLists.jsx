import React, { useEffect, useState } from 'react'
import { fetchFromApi } from '../utils/fetchFromAPI'
import Image from 'next/dist/client/image';
import Button from './Button';
import { BsCartFill } from 'react-icons/bs';


const FoodLists = ({ selected }) => {
    const [food, setFood] = useState([]);

    useEffect(() => {
        const check = localStorage.getItem('food');
        if (check) {
            setFood(JSON.parse(check));

        } else {
            fetchFromApi(`random?number=20&tag=hot-dishes`)
                .then(data => {
                    localStorage.setItem('food', JSON.stringify(data?.recipes));

                    setFood(data?.recipes)
                });
        }



    }, [selected])

    return (
        <div className='mt-8'>
            <h3 className='text-lg mb-24 font-dmSans font-medium text-gray-100'> Choose Dishes </h3>
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
                        <h3 className='text-lg font-dmSans text-gray-100 text-center my-2'> {item.title} </h3>
                        <p className='text-base font-dmSans text-gray-100 my-2'> $4.45 </p>
                        <span className='text-sm font-dmSans text-gray-300 my-3'> 12 plates available </span>
                        <div className='flex items-center justify-center cursor-pointer border rounded-lg border-gray-600 my-3'>
                            <Button name='Add to Cart'
                                btnStyles='text-gray-100'
                            />
                            <BsCartFill className='h-5 w-5 text-icon-bg mr-3' />
                        </div>

                    </div>
                ))}
            </div>
        </div>

    )
}

export default FoodLists

