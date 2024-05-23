import React, { useState } from 'react';
import { FaHome } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

export default function NavM() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex items-center justify-center h-10 bg-stone-200 text-xs sm:text-sm">

            <div>
                <NavLink to={'/PheDuyetTaiKhoanM'} className="h-full py-2 px-5 text-lg font-fontgg hover:bg-zinc-700 hover:text-white    ">
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
                <NavLink to={'/HoiDapM'} className="h-full py-2 px-5 text-lg font-fontgg hover:bg-zinc-700 hover:text-white    ">
                    Hồi đáp
                </NavLink>
            </div>
            <div onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                    <NavLink to={'/thongkehosobaolamcholong'} className="h-full py-2 px-5 text-lg font-fontgg hover:bg-zinc-700 hover:text-white    ">
                        Thống kê
                    </NavLink>
                    {isOpen && (
                        <div className="absolute w-44 bg-zinc-700 mt-1">
                            <NavLink to={'/tkdtb'} className="block px-4 py-2 text-white  hover:bg-zinc-400 hover:text-black text-sm">Thống kê doanh thu</NavLink>
                            <NavLink to={'/thongkehosobaolamcholong'} className="block px-4 py-2  text-white hover:text-black hover:bg-zinc-400 text-sm">Thống kê hồ sơ</NavLink>
                        </div>  
                    )}
                </div>
            <div>
                <NavLink to={'/getallemploy'} className="h-full py-2 px-5 text-lg font-fontgg hover:bg-zinc-700 hover:text-white    ">
                    Quản lý nhân viên
                </NavLink>
            </div>
        </div>
    );
}
