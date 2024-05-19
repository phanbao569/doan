import React, { useContext, useEffect, useState } from 'react';
import Logo from '../img/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { getFullNameFromToken, isTokenExpired } from '../../util/jwtUtils';
import { FaUserAlt } from 'react-icons/fa';

export default function HeaderE() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    const navigate = useNavigate();
    const fullName = getFullNameFromToken();

    const tokenExpired = isTokenExpired();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    useEffect(() => {
        if (tokenExpired) {
            handleLogout();
        }
    }, [tokenExpired]);

    return (
        <div className="flex flex-col sm:flex-row w-full bg-gradient-to-r from-white via-white to-zinc-700">
            <div className="flex justify-center sm:justify-start items-center p-4">
                <NavLink to={'/'}>
                    <img src={Logo} className="w-16 h-16" alt="logo" />
                </NavLink>
                <div className="ml-4">
                    <p className="text-3xl text-red-700 font-fontgg ">Quản lý nhân khẩu quốc gia</p>
                    <p className="font-fontgg">Hành chính phục vụ</p>
                </div>
            </div>

            <div className="ml-auto mr-4 mt-4 sm:mt-0">
                {tokenExpired ? (
                    <div className="flex">
                        <NavLink
                            to="/login"
                            className="w-32 h-10 flex p-1 border-2 border-solid rounded-md justify-center items-center mr-2 hover:bg-zinc-700 hover:text-gray-100 hover:border-white"
                        >
                            Đăng nhập
                        </NavLink>
                        <NavLink
                            to="/register"
                            className="w-32 h-10 flex p-1 border-2 border-solid rounded-md justify-center items-center hover:bg-zinc-700 hover:text-gray-100 hover:border-white"
                        >
                            Đăng ký
                        </NavLink>
                    </div>
                ) : (
                    <div className="relative">
                        <div className="flex items-center">
                            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="px-8 py-2 rounded-md cursor-pointer flex items-center gap-3">
                                <FaUserAlt />
                                <label>{fullName}</label>
                            </div>
                            {isOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg" onMouseLeave={handleMouseLeave}>
                                    <NavLink to="/thongtincanhan" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-sm">
                                        Thông tin cá nhân
                                    </NavLink>
                                    <p onClick={handleLogout} className="block px-4 py-2 text-gray-800 hover:bg-red-200 text-sm cursor-pointer">
                                        Đăng xuất
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
