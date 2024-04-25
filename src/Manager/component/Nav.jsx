import React from 'react'
import { FaHome } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export default function Nav() {
    return (
        // {/* Nav */ }
        <div className='flex items-center justify-center h-10 bg-stone-200'>
            <NavLink to={'/'} className="h-full py-2 px-5 text-lg font-fontgg hover:bg-zinc-700 hover:text-white" >
                <FaHome className='size-6' />
            </NavLink>
            
            <NavLink to={'/HoSo'} className="h-full py-2 px-5 text-lg font-fontgg hover:bg-zinc-700 hover:text-white">
                Phê duyệt
            </NavLink>
            <NavLink to={'/VBPL'} className="h-full py-2 px-5 text-lg font-fontgg hover:bg-zinc-700 hover:text-white">
                Văn bản pháp luật
            </NavLink>
            <NavLink to={'/DanhGia'} className="h-full py-2 px-5  text-lg font-fontgg hover:bg-zinc-700 hover:text-white">
                Đánh Giá
            </NavLink>
            <NavLink to={'/HoiDap'} className="h-full py-2 px-5  text-lg font-fontgg hover:bg-zinc-700 hover:text-white">
                Hồi đáp
            </NavLink>
            <NavLink to={'/ThongKe'} className="h-full py-2 px-5  text-lg font-fontgg hover:bg-zinc-700 hover:text-white">
                Thống kê
            </NavLink>
        </div> 
  );
}
