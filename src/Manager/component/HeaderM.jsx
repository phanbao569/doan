import React, { useContext, useEffect, useState } from 'react';
import Logo from '../img/logo.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { getFullNameFromToken, isTokenExpired } from '../../util/jwtUtils';
import { FaUserAlt } from 'react-icons/fa';
import { CiLogout } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdManageSearch } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { GlobalContext } from '../../App';
export default function HeaderM() {
    const [isOpen, setIsOpen] = useState(false);
    const { user, ttuser,setRole } = useContext(GlobalContext)

    const handleMouse = () => {
        setIsOpen(!isOpen);
    };
    const navigate = useNavigate();
    const fullName = getFullNameFromToken();
    const tokenExpired = isTokenExpired();
    const handleLogout = () => {
        localStorage.removeItem('token');
        setRole('')
       // window.location.reload();
        navigate('/login');
    };

    // useEffect(() => {
    //     if (tokenExpired) {
    //         handleLogout();
    //     }
    // }, [tokenExpired]);

    return (
        <div className="flex font-fontgg sm:flex-row w-full bg-gradient-to-r from-white via-white to-zinc-700">
            <div className="flex flex-1 ml-28 justify-center sm:justify-start items-center p-4">
                <NavLink to={'/'} >
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
                    <div className="flex-1">
                        <div className="flex items-center relative">
                            <div onClick={handleMouse} className=" absolute right-28 rounded-md cursor-pointer flex items-center gap-3 ">
                                <label className='hover:cursor-pointer hover:text-white'>{fullName}</label>
                            </div>
                            {isOpen && (
                                <div className=" absolute right-9    top-[2px] mt-3 w-48 bg-white border border-gray-300 rounded-md shadow-lg" >
                                    {/* <NavLink to="/thongtincanhan" className="block px-4 py-2 text-gray-800 hover:bg-gray-200 text-sm">
                                        Thông tin cá nhân
                                    </NavLink> */}
                                    <NavLink to='/thongtincanhan' className="w-full gap-2  flex px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs ">
                                        <FaRegUser />  Thông tin cá nhân
                                    </NavLink>
                                    <NavLink to='/changePass' className="px-4 py-2 gap-2 flex text-gray-800 w-full hover:bg-gray-200 text-xs ">
                                        <RiLockPasswordLine /> Đổi mật khẩu
                                    </NavLink>
                                    <NavLink onClick={handleLogout} className="px-4 py-2 gap-2 flex text-gray-800 w-full hover:bg-gray-200 text-xs ">
                                        <CiLogout />Đăng xuất
                                    </NavLink>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
