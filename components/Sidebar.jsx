import React from 'react'
import { BsCartFill } from 'react-icons/bs';
import { FaSignOutAlt } from 'react-icons/fa';
import { GoHome } from 'react-icons/go';
import { TbMail } from 'react-icons/tb';
import { RiNotification2Line } from 'react-icons/ri';
import { AiOutlineSetting } from 'react-icons/ai';
import { AiOutlinePieChart } from 'react-icons/ai';
import { VscPaintcan } from 'react-icons/vsc';


const Sidebar = () => {
    return (
        <div className='sticky l-0 top-0 max-h-screen flex flex-col justify-start sm:px-3 sm:justify-center items-center gap-10 bg-bg-dark-2 w-24 '>
            <div className='my-4'>
                <BsCartFill className='h-6 w-6 text-icon-bg cursor-pointer' />
            </div>
            <div className='my-4 bg-icon-bg p-2 sm:p-1 rounded'>
                <GoHome className='h-6 w-6 text-gray-50 cursor-pointer' />
            </div>
            <div className='my-4'>
                <VscPaintcan className='h-6 w-6 text-icon-bg cursor-pointer' />
            </div>
            <div className='my-4'>
                <AiOutlinePieChart className='h-6 w-6 text-icon-bg cursor-pointer' />
            </div>
            <div className='my-4'>
                <TbMail className='h-6 w-6 text-icon-bg cursor-pointer' />
            </div>
            <div className='my-4'>
                <RiNotification2Line className='h-6 w-6 text-icon-bg cursor-pointer' />
            </div>
            <div className='my-4'>
                <AiOutlineSetting className='h-6 w-6 text-icon-bg cursor-pointer' />
            </div>
            <div className='my-4'>
                <FaSignOutAlt className='h-6 w-6 text-icon-bg cursor-pointer' />
            </div>            
        </div>
    )
}

export default Sidebar

