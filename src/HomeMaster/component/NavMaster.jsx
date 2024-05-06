import React from 'react'
import { FaHome} from "react-icons/fa";
import { NavLink } from 'react-router-dom';
export default function NavMaster() {
    return (
        <div className='flex items-center justify-center h-10 bg-stone-200'>
            <NavLink to={'/'} className="h-full py-2 px-5 text-lg font-fontgg hover:bg-zinc-700 hover:text-white" >
                <FaHome className='size-6' />
            </NavLink>
            <NavLink to={'/GioiThieu'} className="h-full py-2 px-5  text-lg font-fontgg hover:bg-zinc-700 hover:text-white">
                Giới thiệu
            </NavLink>
            <NavLink to={'/DatLich'} className="h-full py-2 px-5 text-lg font-fontgg hover:bg-zinc-700 hover:text-white">
                Đặt lịch giao dịch
            </NavLink>
            <NavLink to={'/TraCuu'} className="h-full py-2 px-5  text-lg font-fontgg hover:bg-zinc-700 hover:text-white">
                Tra cứu
            </NavLink>
            <NavLink to={'/PhanAnh'} className="h-full py-2 px-5  text-lg font-fontgg hover:bg-zinc-700 hover:text-white">
                Phản ánh kiến nghị
            </NavLink>
        </div>
    )
}
