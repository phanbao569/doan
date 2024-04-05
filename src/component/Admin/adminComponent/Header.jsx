import React, { useState,useEffect } from 'react';
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}from 'react-icons/bs'
import './App.css';
import { Link, useNavigate } from 'react-router-dom'; 
import { getFullNameFromToken, isTokenExpired,getRoleFromToken } from '../../../util/jwtUtils';
function Header() {
  const navigate = useNavigate();
    const fullName = getFullNameFromToken();
    

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
        window.location.reload();
    };

    const tokenExpired = isTokenExpired();

    useEffect(() => {
        if (!tokenExpired) {
            const expirationTime = localStorage.getItem('exp');
            const timeLeft = expirationTime - Date.now();
            if (timeLeft) {
                const timeout = setTimeout(() => {
                    handleLogout();
                }, timeLeft);
                return () => clearTimeout(timeout);
            }
        }
    }, [tokenExpired, handleLogout]);
//     const currentTime = new Date().getTime()/60000;
//     const thoigiantutoken= (1712085440/60+60)
//     const thoigianloginhientai =  thoigiantutoken- currentTime
// console.log(currentTime);
// console.log("thời gian đăng nhập hiện tại là "+thoigianloginhientai+ " phút");

  return (
    
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon'/>
        </div>
        <div className='header-left'>
            <BsSearch  className='icon'/>
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