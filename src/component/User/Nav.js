import React, { Component, useContext, useEffect, useState } from 'react'
import logodang from './img/logodang.png'
import logo from './img/footer.jpg'
import { Link, useNavigate } from 'react-router-dom'
import { FaUserAlt } from "react-icons/fa";
import NapThuTuc from './ThuTucs/NapThuTuc';
import { getFullNameFromToken, getIDNguoiThayDoi, isTokenExpired } from '../../util/jwtUtils';
import axios from 'axios';
import ApiConfig, { apiUrl } from '../../ApiConfig';
import { GlobalContext } from '../../App';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const idUser = getIDNguoiThayDoi();
  const { setUser, setTTUser,setqueQuan,setcheckthongtin ,ttuser } = useContext(GlobalContext)

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
// console.log(localStorage.getItem('exp')+": "+Date.now())
// useEffect(() => {
//   fetchdata()
// })

 
  // console.log(localStorage.getItem('exp') + ": " + Date.now())



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
            < div className=' flex ' >
              <Link to="/login" style={{ textDecoration: 'none' }}>
                <button class=" mr-4 text-xs bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                  Đăng nhập
                </button>



              </Link>
              <Link to="/register" >
                <button class=" text-xs bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">
                  Đăng ký
                </button>

              </Link>
            </div  >
          ) : (
            <div className="relative w-3/4 ">
              <div className="" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="bg-gray-100 is-bordered  px-8 py-2 rounded-md cursor-pointer  flex ">
                  <FaUserAlt className=' mt-2' />
                  <label className='mt-1' >
                    {fullName}
                  </label>
                </div>

                {isOpen && (
                  <div className="absolute w-full bg-white border border-gray-300 rounded-md shadow-lg " onMouseLeave={handleMouseLeave}>
                    <div className="  py-1">
                      <Link to={'/thongtincanhan'} className="px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs ">Thông tin cá nhân</Link>
                      <div className="px-4 py-2 text-gray-800 hover:bg-gray-200 text-xs ">Quản lý hồ sơ</div>
                      <div onClick={() => { handleLogout() }} className="px-4 py-2 text-gray-800 hover:bg-red-200 text-xs ">Đăng xuất</div>
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