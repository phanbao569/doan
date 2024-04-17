import React from 'react'
import Logo from '../img/logo.png'
import { NavLink } from 'react-router-dom'


export default function Header() {

    return (
        <div className='flex w-full h-28 content-center items-center bg-gradient-to-r from-white via-white to-zinc-700'  >
            <NavLink to={'/'}>
                <img src={Logo} className='w-16 h-16 ml-28' alt="logo" />
            </NavLink>
            <div>
                <p className='text-3xl  ml-4 text-red-700 font-fontgg '>Quản lý nhân khẩu quốc gia</p>
                <p className='ml-4 font-fontgg'>Hành chính phục vụ</p>
            </div>
            <button className='w-32  h-10 flex m-2 absolute right-60 p-1 border-solid border-2 rounded-md justify-center content-center hover:bg-zinc-700 hover:text-gray-100 hover:border-white'>
                Đăng nhập
            </button>
            <button className='w-32 h-10 flex m-2 absolute right-20 p-1 border-solid border-2 rounded-md justify-center content-center  hover:bg-zinc-700 hover:text-gray-100 hover:border-white'>
                Đăng ký
            </button>

        </div>
    )
}
