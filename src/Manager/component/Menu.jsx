import React from 'react'
import { NavLink } from 'react-router-dom'
import {FaHome} from "react-icons/fa";

const backGround={
    backgroundColor:'red'
}

export default function Menu() {
    return (
        <div>
            {/* Nav */}
            <div className='flex items-center justify-center h-10 bg-stone-200'>
                <NavLink to={'/'} className="h-full py-2 px-5 text-lg font-fontgg bg-zinc-700 text-white" >
                    <FaHome  className='size-6' />
                </NavLink>
                
                <NavLink to={'/AboutUs'} className="h-full py-2 px-5 text-lg font-fontgg hover:bg-zinc-700 hover:text-white">
                    Đặt lịch giao dịch
                </NavLink>
                <NavLink to={'/TraCuu'} className="h-full py-2 px-5  text-lg font-fontgg hover:bg-zinc-700 hover:text-white">
                    Tra cứu
                </NavLink>
                <NavLink to={'/user'} className="h-full py-2 px-5  text-lg font-fontgg hover:bg-zinc-700 hover:text-white">
                    Hỗ trợ
                </NavLink>
                <NavLink to={'/'} className="h-full py-2 px-5  text-lg font-fontgg hover:bg-zinc-700 hover:text-white">
                    Phản ánh kiến nghị
                </NavLink>

            </div>
        </div>
    )
}
