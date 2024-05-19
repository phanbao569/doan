import React, { useContext, useEffect, useState } from 'react'
import Logo from '../img/logo.png'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { getFullNameFromToken, isTokenExpired } from '../../util/jwtUtils';
import { FaUserAlt } from "react-icons/fa";
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
            <div className='ml-24'>
                <p className='text-3xl  text-red-700 font-fontgg '>Quản lý nhân khẩu quốc gia</p>
                <p className='font-fontgg'>Hành chính phục vụ</p>
            </div>
            </div>
            <ul className="flex space-x-4   w-full  justify-center items-center ">
          <li>
            <a href="#" className="text-gray hover:text-gray-500">
              <Link to="/ChonThuTuc" > Thủ tục hành chính</Link>
            </a>
          </li>
          <a href="#" className="text-gray h-42 hover:text-gray-500">
            <Link to="/ChonThuTuc" > Nộp hồ sơ trực tuyến</Link>
          </a>
          <li>
            <a href="#" className="text-gray hover:text-gray-500">
              <Link to="/quanlyhoso" > Tra cứu hồ sơ </Link>

            </a>
          </li>
          <li>
          <Link to="/hotrohoidao" > Hỗ trợ - hỏi đáp </Link>
            
              
          </li>
          {/* bao lam get goi dap va .... o day */}


          <li>
          <Link to="/hoidapm" > hoidapm</Link>
            
              
          </li>

          <li>
          <Link to="/danhgiam" > danhgiam</Link>
            
              
          </li>
          <li>
          <Link to="/getallemploy" > employ</Link>
            
              
          </li>
          <li>
          <Link to="/thongkehosobaolamcholong" > tkhs</Link>
            
              
          </li>
          <li>
          <Link to="/tkdtb" > tkdt</Link>
            
              
          </li>
  {/* bao lam get goi dap va .... o day */}



          
         
          <li>
            <Link to={'https://docs.google.com/forms/d/e/1FAIpQLSes5un4jt6RyfYr3s8uk5yWyA9M2XmgPjufKOBt081ple8jEA/viewform'} href="#" className="text-gray hover:text-gray-500">
              Khảo sát
            </Link>
          </li>
        </ul>


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
                                    <div className="py-1 w-96 h-28">
                                        <NavLink to='/thongtincanhan' className=" w-full px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs ">Thông tin cá nhân</NavLink>
                                        <p className="px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs ">Quản lý hồ sơ</p>
                                        <p onClick={() => { handleLogout() }} className="w-full px-4 py-2 text-gray-800 hover:bg-red-200 text-xs ">Đăng xuất</p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                )}
            </div>



        </div>

        </div>
        
    )
}
