import React, { useContext, useEffect, useState } from 'react'
import Logo from '../../Manager/img/logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { getFullNameFromToken, isTokenExpired } from '../../util/jwtUtils';
import { FaUserAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdManageSearch } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";


export default function HeaderM() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  }

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const navigate = useNavigate();
  const fullName = getFullNameFromToken();

  const tokenExpired = isTokenExpired();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
    // window.location.reload();
  };
  useEffect(() => {
    if (tokenExpired) {
      handleLogout();
    }

  }, [tokenExpired]);

  return (
    <div>
      <div className='flex w-full h-28 content-center items-center bg-gradient-to-r from-white via-white to-zinc-700'  >
        <div className='flex'>
        <NavLink to={'/'}>
                <img src={Logo} className='w-16 h-16 ml-28' alt="logo" />
            </NavLink>
            <div className='ml-4'>
                <p className='text-3xl  text-red-700 font-fontgg '>Quản lý nhân khẩu quốc gia</p>
                <p className='font-fontgg'>Hành chính phục vụ</p>
            </div>
        </div>
      


        <div className='w-375 h-14'>
          {tokenExpired ? (
            <div>
              <NavLink to='/Login' className='w-32  h-10 flex absolute right-60 p-1 border-solid border-2 rounded-md justify-center content-center hover:bg-zinc-700 hover:text-gray-100 hover:border-white'>
                Đăng nhập
              </NavLink>
              <NavLink to='/register' className='w-32 h-10 flex absolute right-20 p-1 border-solid border-2 rounded-md justify-center content-center  hover:bg-zinc-700 hover:text-gray-100 hover:border-white'>
                Đăng ký
              </NavLink>
            </div>
          ) : (
            <div className="absolute flex right-4 text-lg ">
              <div className="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className=" is-bordered  px-8 py-2 rounded-md cursor-pointer  flex gap-3 ">
                  <FaUserAlt className=' mt-2' />
                  <label className='mt-1' >
                    {fullName}
                  </label>
                </div>

                {isOpen && (
                  <div className="absolute w-225 bg-white border border-gray-300 rounded-md shadow-lg " onMouseLeave={handleMouseLeave}>
                    <div className="py-1 w-96 h-36 flex flex-col">
                      <NavLink to='/thongtincanhan' className="w-1/2 gap-2  flex px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs "><FaRegUser/>  Thông tin cá nhân</NavLink>
                      <NavLink to='/quanlyhoso' className="px-4 py-2 gap-2 flex text-gray-800 w-1/2 hover:bg-gray-200 text-xs "><MdManageSearch /> Quản lý hồ sơ</NavLink>
                      <NavLink to='/changePass' className="px-4 py-2 gap-2 flex text-gray-800 w-1/2 hover:bg-gray-200 text-xs "><RiLockPasswordLine /> Đổi mật khẩu</NavLink>
                      <div onClick={() => { handleLogout() }} className="gap-2 w-1/2 flex px-4 py-2 text-gray-800 hover:bg-red-200 text-xs "><CiLogout />  Đăng xuất</div>
                    </div>
                  </div>
                )}
              </div>
            </div>

          )}
        </div>



      </div>
      <div className='flex items-center justify-center h-10 bg-stone-200'>
        <NavLink to={'/'} className="h-full py-2 px-5 text-lg font-fontgg hover:bg-zinc-700 hover:text-white" >
        <Link to="/" > <FaHome className='size-6' /></Link>
          
        </NavLink>

        <NavLink to={'/ChonThuTuc'} className="h-full py-2 px-5 text-lg font-fontgg hover:bg-zinc-700 hover:text-white">
        <Link to="/ChonThuTuc" > Thủ tục hành chính</Link>
        </NavLink>
        <NavLink to={'/ChonThuTuc'} className="h-full py-2 px-5 text-lg font-fontgg hover:bg-zinc-700 hover:text-white">
        <Link to="/ChonThuTuc" > Nộp hồ sơ trực tuyến</Link>
        </NavLink>
        <NavLink to={'/quanlyhoso'} className="h-full py-2 px-5  text-lg font-fontgg hover:bg-zinc-700 hover:text-white">
        <Link to="/quanlyhoso" > Tra cứu hồ sơ </Link>
        </NavLink>
        <NavLink to={'/hotrohoidap'} className="h-full py-2 px-5  text-lg font-fontgg hover:bg-zinc-700 hover:text-white">
        <Link to="/hotrohoidap" > Hỗ trợ - hỏi đáp </Link>
        </NavLink>
        <div className="h-full py-2 px-5  text-lg font-fontgg hover:bg-zinc-700 hover:text-white">
        <Link to={'https://docs.google.com/forms/d/e/1FAIpQLSes5un4jt6RyfYr3s8uk5yWyA9M2XmgPjufKOBt081ple8jEA/viewform'} href="#" className="text-gray hover:text-gray-500">
              Khảo sát
            </Link>
        </div>
      </div>
    </div>

  )
}
