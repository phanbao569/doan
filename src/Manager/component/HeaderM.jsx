import React, { useContext, useEffect, useState } from 'react';
import Logo from '../img/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { getFullNameFromToken, isTokenExpired } from '../../util/jwtUtils';
import { FaUserAlt } from 'react-icons/fa';

export default function HeaderM() {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouse = () => {
        setIsOpen(!isOpen);
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
        <div className="flex font-fontgg sm:flex-row w-full bg-gradient-to-r from-white via-white to-zinc-700">
            <div className="flex flex-1 ml-28 justify-center sm:justify-start items-center p-4">
                <NavLink to={'/'} onClick={handleLogout}>
                    <img src={Logo} className="w-16 h-16" alt="logo" />
                </NavLink>
                <div className="flex-1 ml-4">
                    <p className="text-3xl text-red-700  ">Quản lý nhân khẩu quốc gia</p>
                    <p >Hành chính phục vụ</p>
                </div>
            </div>

            <div className="flex flex-1 justify-center items-center sm:mt-0">
                {tokenExpired ? (
                    <div className="flex ml-16 justify-center gap-4 ">
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
                    <div className="">
                        <div className="flex items-center relative">
                            <div onClick={handleMouse} className=" px-8 py-2 rounded-md cursor-pointer flex items-center gap-3 ">
                                <FaUserAlt />
                                <label className='hover:cursor-pointer'>{fullName}</label>
                            </div>
                            {isOpen && (
                                <div className=" absolute right-0 top-[2px] mt-10 w-48 bg-white border border-gray-300 rounded-md shadow-lg" >
                                    {/* <NavLink to="/thongtincanhan" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-sm">
                                        Thông tin cá nhân
                                    </NavLink> */}
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
