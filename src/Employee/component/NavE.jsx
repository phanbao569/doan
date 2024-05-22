import React from 'react';
import { FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function NavE() {
    return (
        <div className="flex items-center justify-center h-10 bg-stone-200 text-xs sm:text-sm">
            <NavLink to={'/'} className="h-full py-2 px-5 text-lg font-fontgg hover:bg-zinc-700 hover:text-white    ">
                <FaHome className="h-full" />
            </NavLink>
            <div>
                <NavLink to={'/ThongBaoLuuTruM'} className="h-full py-2 px-5 text-lg font-fontgg hover:bg-zinc-700 hover:text-white    ">
                    Phê duyệt
                </NavLink>
            </div>
            <div>
                <NavLink to={'/VBPLM'} className="h-full py-2 px-5 text-lg font-fontgg hover:bg-zinc-700 hover:text-white    ">
                    Văn bản pháp luật
                </NavLink>
            </div>
            <div>
                <NavLink to={'/danhgiam'} className="h-full py-2 px-5 text-lg font-fontgg hover:bg-zinc-700 hover:text-white    ">
                    Đánh Giá
                </NavLink>
            </div>
            <div>
                <NavLink to={'/hoidapm'} className="h-full py-2 px-5 text-lg font-fontgg hover:bg-zinc-700 hover:text-white    ">
                    Hồi đáp
                </NavLink>
            </div>
          
            <div>
                <NavLink to={'/getallemploy'} className="h-full py-2 px-5 text-lg font-fontgg hover:bg-zinc-700 hover:text-white    ">
                    Quản lý hồ sơ
                </NavLink>
            </div>
        </div>
    );
}
