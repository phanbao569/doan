import React, { Component, useEffect, useState } from 'react'
import logodang from './img/logodang.png'
import logo from './img/footer.jpg'
import { Link,useNavigate } from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa";
import { getFullNameFromToken,isTokenExpired  } from '../../util/jwtUtils';

export default function Nav() {
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
        if (!tokenExpired) {
            const expirationTime = localStorage.getItem('exp');
            const timeLeft = expirationTime - Date.now()/1000;
                if (timeLeft){
                const timeout = setTimeout(() => {
                    handleLogout();
                }, timeLeft);
                return () => clearTimeout(timeout);
            }
        }
    }, [tokenExpired, handleLogout]);
// console.log(localStorage.getItem('exp')+": "+Date.now())
   


  return (
    <nav className=" py-4 bg-yellow-100">
      <div className="container mx-auto flex justify-center items-center gap-4 px-4">
        <div class="text-gray  w-1/4 flex justify-start text-XL">
          <img src={logodang} alt="Logo" />
          <div className='mt-2 ml-2'>
            <label > DỊCH VỤ CÔNG  </label>
            <label > QUẢN LÝ CƯ TRÚ  </label>
          </div>

        </div>
        <ul className="flex space-x-4   w-full  justify-center items-center ">
          <li>
            <a href="#" className="text-gray hover:text-gray-500">
              <Link to="/thuTucGiahantamtru" > Thủ tục hành chính</Link>
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
            <a href="#" className="text-gray hover:text-gray-500">
              Phản ánh - Kiến nghị
            </a>
          </li>
          <li>
            <a href="#" className="text-gray hover:text-gray-500">
              Hỗ trợ - hỏi đáp
            </a>
          </li>
          <li>
            <Link to={'https://docs.google.com/forms/d/e/1FAIpQLSes5un4jt6RyfYr3s8uk5yWyA9M2XmgPjufKOBt081ple8jEA/viewform'} href="#" className="text-gray hover:text-gray-500">
              Khảo sát
            </Link>
          </li>
        </ul>
        <div class="text-gray font-bold w-1/4 flex justify-end text-lg">


        {tokenExpired ? (
                        <>
                            <Link to="/login" className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded mr-4" style={{ textDecoration: 'none' }}>Đăng nhập</Link>
                            <Link to="/register" className="text-white bg-red-500 hover:bg-red-700 py-2 px-4 rounded" style={{ textDecoration: 'none' }}>Đăng ký</Link>
                        </>
                    ) : (
                      <div className="relative w-3/4 ">
            <div className="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="bg-gray-100 is-bordered  px-8 py-2 rounded-md cursor-pointer  flex ">
                    <FaUserAlt className='mr-2 mt-2' /> 
                    <label className='mt-1' > 
                      Tên User
                      </label>
                </div>

                {isOpen && (
                    <div className="absolute w-full bg-white border border-gray-300 rounded-md shadow-lg " onMouseLeave={handleMouseLeave}>
                        <div className="  py-1">
                            <Link to={'/thongtincanhan'} className="px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs ">Thông tin cá nhân</Link>
                            <div className="px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs ">Quản lý hồ sơ</div>
                            <div onClick={handleLogout} className="px-4 py-2 text-gray-800 hover:bg-red-200 text-xs ">Đăng xuất</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
                    )}

       

        </div>

      </div>
    </nav>
  )
}
