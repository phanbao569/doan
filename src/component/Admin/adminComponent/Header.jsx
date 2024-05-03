import React, { useState, useEffect } from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs'
import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import { getFullNameFromToken, isTokenExpired, getRoleFromToken, timeToken } from '../../../util/jwtUtils';
import SideBar from './Sidebar';
import { MdLogout } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
function Header() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
    // window.location.reload()
  };

  const tokenExpired = isTokenExpired();


  useEffect(() => {
    if (tokenExpired) {
      handleLogout();
    }

  }, [tokenExpired]);

  //     const currentTime = new Date().getTime()/1000;
  //     const thoigiantutoken= timeToken()
  //     const thoigianloginhientai =  thoigiantutoken- currentTime
  // console.log("thời gian từ hiện tại "+Date.now()/1000+ " giây");
  // console.log("thời gian từ token "+timeToken()+ " giây");
  // console.log("thời gian đăng nhập còn lại là "+thoigianloginhientai+ " giây");

  const [isOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  return (

    <header className='header filter-purple'>

      <div className='menu-icon '>
        <BsJustify className='icon ' />
      </div>
      <div className='header-left'></div>
      <div className='header-right'>
        <BsFillBellFill className='icon' />
        <BsFillEnvelopeFill className='icon' />
        <BsPersonCircle className='icon' onClick={toggleSidebar} />
        {isOpen && (
          <div className='form-container absolute top-0 right-0 z-10 mt-14 mr-2 max-w-lg rounded-lg bg-white w-56'>
            <ul className="flex flex-col gap-3 border-b border-stroke px-6 py-7.5 dark:border-strokedark text-gray-500 p-4">
              <Link to='/thongtinadmin' className="flex flex-row items-center text-blue-400 hover:text-blue-600 cursor-pointer">
                <BsPersonCircle />
                <span class="ml-2">My Profile</span>
              </Link>
              
                <Link className="flex flex-row items-center hover:text-black cursor-pointer" to='/changePass'>
                   <RiLockPasswordFill />
                   <span class="ml-2">ChangePassword</span>
                   </Link>
              
             
              <li className="flex flex-row items-center text-red-400 hover:text-red-600 cursor-pointer" onClick={handleLogout}>
                <MdLogout/>
                <span class="ml-2">Logout</span>
              </li>
            </ul>

          </div>
        )}


      </div>
    </header>
  )
}

export default Header