import React from 'react'
import { Button } from './'

const Cart = () => {
  return (
    <div className='w-full p-4 sticky r-0 top-0'>
        <div>
            <p className='text-lg font-dmSans text-gray-100'> Orders #34562 </p>
            <div className='mt-6'>
                <Button name='Dine In' btnStyles='bg-icon-bg mr-4 text-white' />
                <Button name='To Go' btnStyles='bg-transparent border border-gray-400 mr-4 text-icon-bg' />
                <Button name='Delivery' btnStyles='bg-transparent border border-gray-400 mr-4 text-icon-bg' />
            </div>

            <p className='text-lg font-dmSans mt-12 text-gray-100'> Cart is Empty </p>
        </div>
    </div>
  )
}

export default Cart

