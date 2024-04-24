import React, { useState, useEffect } from 'react';
import { BsGrid1X2Fill, BsFillArchiveFill, BsPeopleFill, BsFillGearFill}from 'react-icons/bs'
import { MdAccountBox,MdMoney } from "react-icons/md";
import { RiAdminFill } from "react-icons/ri";
import { GoLaw } from "react-icons/go";
import './App.css';
import { Link, useNavigate } from 'react-router-dom'; 
export default function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
    const handleUserClick = () => {
        setIsOpen(!isOpen);
    };
  return (
    
<aside id="sidebar" className="">
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <Link to="/">
                <RiAdminFill  className='icon_header'/> MYADMIN
                </Link>
                
            </div>
            <span className='icon close_icon'>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/thongtinadmin">
                    <BsGrid1X2Fill className='icon'/> THÔNG TIN CỦA TÔI
                </Link> 
            </li>
                        <Link to ='/thongtinuser'>
                        <li className='sidebar-list-item'onClick={handleUserClick}>
                    <div >
                        <BsPeopleFill className='icon'/> THÔNG TIN TÀI KHOẢN
                    </div>
                </li>
                        </Link>
           
                {/* {isOpen && (
                        <ul className="">
                            <li className='sidebar-list-item'><Link to="/thongtinuser">USER</Link></li>
                            <li className=' sidebar-list-item'><Link to="/thongtinemploy">EMPLOYEE</Link></li>
                            <li className=' sidebar-list-item'><Link to="/thongtinmanager">MANAGER</Link></li>
                        </ul>
                    )} */}
            <li className='sidebar-list-item'>
                <Link to="thongketaikhoan">
                    <MdAccountBox className='icon'/> THỐNG KÊ TÀI KHOẢN
                </Link>
            </li>

            <li className='sidebar-list-item'>
                <Link to="thongkehoso">
                    <BsFillArchiveFill className='icon'/>THỐNG KÊ HỒ SƠ
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="thongkedoanhthu">
                    <MdMoney className='icon'/>THỐNG KÊ DOANH THU
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="TTVBPL">
                <GoLaw className='icon'/>VĂN BẢN PHÁP LUẬT
                </Link>
            </li>
        </ul>
    </aside>
  )
}
