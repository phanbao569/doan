import React, { useState, useEffect } from 'react';
import { BsGrid1X2Fill, BsFillArchiveFill, BsPeopleFill, BsFillGearFill } from 'react-icons/bs'
import { MdAccountBox, MdMoney } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { GoLaw } from "react-icons/go";
import './App.css';
import { Link, useLocation } from 'react-router-dom';
export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleUserClick = () => {
        setIsOpen(!isOpen);
    };
    const [currentPage, setCurrentPage] = useState('');
    const location = useLocation();

    useEffect(() => {
        setCurrentPage(location.pathname);
    }, [location]);
    return (

        <aside id="sidebar" className="">
            <div className='sidebar-title '>
                <div className='sidebar-brand'>
                    <div >
                        <RiAdminFill className='icon_header' /> MYADMIN
                    </div>

                </div>
                <span className='icon close_icon'>X</span>
            </div>

            <ul className='sidebar-list'>
                {/* <li className='sidebar-list-item'>
                <Link className=' flex flex-row items-center' to="/thongtinadmin">
                    <BsGrid1X2Fill className='icon'/>
                     <span class="ml-2">THÔNG TIN CỦA TÔI</span> 
                </Link> 
            </li> */}
                <Link to='/thongtinuser'>
                    <li className={`sidebar-list-item ${currentPage === '/thongtinuser' ? 'active' : ''}`}>
                        <div className=' flex flex-row items-center' >
                            <BsPeopleFill className='icon' />
                            <span class="ml-2">THÔNG TIN TÀI KHOẢN</span>
                        </div>
                    </li>
                </Link>

                <Link to="thongketaikhoan" className={`sidebar-list-item ${currentPage === '/thongketaikhoan' ? 'active' : ''}`}>
                    <div className=' flex flex-row items-center'  >
                        <MdAccountBox className='icon' />
                        <span class="ml-2">THỐNG KÊ TÀI KHOẢN</span>
                    </div>
                </Link>

                <Link to="thongkehoso" className={`sidebar-list-item ${currentPage === '/thongkehoso' ? 'active' : ''}`}>
                    <div className=' flex flex-row items-center' >
                        <BsFillArchiveFill className='icon' />
                        <span class="ml-2">THỐNG KÊ HỒ SƠ</span>
                    </div>
                </Link>

                <Link to="thongkedoanhthu" className={`sidebar-list-item ${currentPage === '/thongkedoanhthu' ? 'active' : ''}`}>
                    <div className=' flex flex-row items-center' >
                        <MdMoney className='icon' />
                        <span class="ml-2">THỐNG KÊ DOANH THU</span>
                    </div>
                </Link>

                <Link to="TTVBPL" className={`sidebar-list-item ${currentPage === '/TTVBPL' ? 'active' : ''}`}>
                    <div className=' flex flex-row items-center' >
                        <GoLaw className='icon' />
                        <span class="ml-2">VĂN BẢN PHÁP LUẬT</span>
                    </div>
                </Link>
            </ul>
        </aside>
    )
}
