import React, { useState,useEffect } from 'react';
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}from 'react-icons/bs'
import './App.css';
import { Link, useNavigate } from 'react-router-dom'; 
import { getFullNameFromToken, isTokenExpired,getRoleFromToken, timeToken } from '../../../util/jwtUtils';
import SideBar from './Sidebar';
function Header() {
  const navigate = useNavigate();
    const fullName = getFullNameFromToken();
    // const toggleSidebar = () => {
    //     const sidebar = document.getElementById('sidebar');
    //     if (sidebar.classList.contains('sidebar-responsive')) {
    //         sidebar.classList.remove('sidebar-responsive');
    //     } else {
    //         sidebar.classList.add('sidebar-responsive');
    //     }
    // };
    // const closeSidebar = () => {
    //     const sidebar = document.getElementById('sidebar');
    //     sidebar.classList.remove('sidebar-responsive');
    // };
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
        window.location.reload();
    };

    const tokenExpired = isTokenExpired();

   
    useEffect(() => {
        if (tokenExpired) {
            handleLogout();
        }
    }, [tokenExpired, handleLogout]);
    
//     const currentTime = new Date().getTime()/1000;
//     const thoigiantutoken= timeToken()
//     const thoigianloginhientai =  thoigiantutoken- currentTime
// console.log("thời gian từ hiện tại "+Date.now()/1000+ " giây");
// console.log("thời gian từ token "+timeToken()+ " giây");
// console.log("thời gian đăng nhập còn lại là "+thoigianloginhientai+ " giây");


  return (
    
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify  className='icon'/>
        </div>
        <div className='header-left'>
          
        </div>
        <div className='header-right'>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
            <button onClick={handleLogout}>logout</button>
        </div>
        
    </header>
  )
}

export default Header