import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 
import { getFullNameFromToken, isTokenExpired } from '../util/jwtUtils';

export default function Nav() {
    const navigate = useNavigate();
    const fullName = getFullNameFromToken();
    
    const tokenExpired = isTokenExpired();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
        // window.location.reload();
    };

   
   
    // useEffect(() => {
    //     if (tokenExpired) {
    //         handleLogout();
    //     }
    // }, [tokenExpired, handleLogout]);
// console.log(localStorage.getItem('exp')+": "+Date.now())
   


return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-white font-bold" style={{ textDecoration: 'none' }}>
                    Trang chủ
                </Link>
                <div className="flex">
                    {tokenExpired ? (
                        <>
                            <Link to="/login" className="text-white bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded mr-4" style={{ textDecoration: 'none' }}>Đăng nhập</Link>
                            <Link to="/register" className="text-white bg-red-500 hover:bg-red-700 py-2 px-4 rounded" style={{ textDecoration: 'none' }}>Đăng ký</Link>
                        </>
                    ) : (
                        <>
                            <p className="text-white mr-4">Chào mừng, {fullName}</p>
                            <button onClick={()=>{handleLogout()}} className="text-white bg-gray-500 hover:bg-gray-700 py-2 px-4 rounded" style={{ textDecoration: 'none' }}>Đăng xuất</button>
                            
                        </>
                    )}

                </div>
            </div>
        </nav>
    );
}
