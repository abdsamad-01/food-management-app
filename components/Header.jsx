import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi';

const Header = ({ userInput, setUserInput }) => {
    const handleFormSubmit = (e) => {
        setUserInput('');

        e.preventDefault();
    }
        return (
            <div className='flex items-center justify-between mb-8  sticky top-0 z-10 bg-bg-dark-1'>
                <div className=''>
                    <p className='text-2xl font-semibold font-dmSans text-gray-100'> Jaegar Resto </p>
                    <span className='text-sm font-medium font-dmSans text-gray-300'>Friday, 13 April 2003 </span>
                </div>

                <div className='flex items-center bg-bg-dark-1 justify-start border border-gray-600 w-64 sm:w-fit sm:justify-center rounded-lg p-2'>
                    <BiSearch className='h-5 w-5 text-gray-100 mr-2' />
                    <form className='sm:hidden' onSubmit={(e) => handleFormSubmit(e)}>
                        <input 
                            type='text'
                            placeholder='Search for food, coffee, etc'
                            className='border-none bg-transparent w-full font-dmSans text-sm focus:outline-none text-gray-50'
                            value={ userInput }
                            onChange={(e) => setUserInput(e.target.value) }
                        />
                    </form>
                    
                </div>
            </div>
        )
    }

export default Header
