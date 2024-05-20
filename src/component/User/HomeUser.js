import React from 'react'
import Slider from 'react-slick';
import { FaSistrix, FaChevronLeft, FaChevronRight, FaQuestion } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import file from '../User/img/files_569767.png'
import qlhs from '../User/img/quanlyhoso.png'
import thcn from '../User/img/thongtincanhan.png'
import search from '../User/img/search.png'
import ask from '../User/img/ask.svg'
import htrask from '../User/img/htrask.svg'
import detail from '../User/img/detail.svg'
import sev from '../User/img/sev.svg'
import dmk from '../User/img/dmk.svg'
import GioiThieu from './GioiThieu';
export default function HomeM() {
  const settings = {
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <FaChevronLeft type='button' className='slick-prev' />,
    nextArrow: <FaChevronRight type='button' className='slick-next' />
  };
  return (
    <div className=' z-10 w-full h-auto items-center justify-between mb-4'>


      <div className='flex w-full h-150 bg-my-image bg-cover justify-center content-center pt-12'>
        <input className='w-300 h-12 pl-2 border ' type="" placeholder='Nhập từ khóa tìm kiếm' />
        <button className='bg-white w-150 text-gray-500 h-12  border'>Tìm kiếm nâng cao</button>
        <button className='bg-white  h-12 '>
          <FaSistrix className='size-6 m-2' />
        </button>
      </div>
      <div></div>
      <Slider {...settings} className='mt-16'>
        <div className="image-item">
          <img src="https://th.bing.com/th/id/R.8e2cbe8fba458b0b00affc2604e89a36?rik=si%2faKUDCQVl3Cg&riu=http%3a%2f%2fhopdong.einvoice.com.vn%2fContent%2fimages%2fhopdong%2fVanBanLuat.jpg&ehk=S7%2buKh8d39hGCnaK1d6aZ3voezAYCqv7Zb0YvoISMrE%3d&risl=&pid=ImgRaw&r=0" alt="" />
        </div>
        <div className="image-item">
          <img src="https://images.unsplash.com/photo-1682695796795-cc287af78a2b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="image-item">
          <img src="https://giasudiem10.edu.vn/wp-content/uploads/2023/06/5-dieu-bac-ho-day.jpg" className='w-full h-full' alt="" />
        </div>
        <div className="image-item">
          <img src="https://sohanews.sohacdn.com/zoom/600_315/2013/daituog-97c3a.jpg" className='w-full h-full' alt="" />
        </div>
        <div className="image-item">
          <img src="https://giasudiem10.edu.vn/wp-content/uploads/2023/06/5-dieu-bac-ho-day.jpg" className='w-full h-full' alt="" />
        </div>
        
      </Slider>

      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl text-center font-bold mb-4">GIỚI THIỆU CHỨC NĂNG CỦA WEB QUẢN LÝ NHÂN KHẨU</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300">

            <tbody className="text-gray-600 text-sm font-light">
              <tr className="border-b border-gray-300 flex">
                <Link to = "/ChonThuTuc" className="py-3 px-6 text-center w-1/3 flex items-center hover:bg-red-300">
                  <img src={file} className='w-6 h-6 mr-2' alt="logo" />
                  <h1 className="ml-2">Tạo thủ tục</h1>
                </Link>
                <Link to="/quanlyhoso" className="py-3 px-6 text-center w-1/3 flex items-center hover:bg-red-300">
                  <img src={qlhs} className='w-6 h-6 mr-2' alt="logo" />
                  <h1 className="ml-2">Quản lý hồ sơ</h1>
                </Link>
                 <Link to='/thongtincanhan' className="py-3 px-6 text-center w-1/3 flex items-center hover:bg-red-300">
                  <img src={thcn} className='w-6 h-6 mr-2' alt="logo" />
                  <h1 className="ml-2">Xem thông tin cá nhân</h1>
                </Link>
              </tr>
              <tr className="border-b border-gray-300 flex">
                <Link to='/quanlyhoso' className="py-3 px-6 text-center w-1/3 flex items-center hover:bg-red-300">
                  <img src={search} className='w-6 h-6 mr-2' alt="logo" />
                  <h1 className="ml-2">Tra cứ hồ sơ</h1>
                </Link>
                <Link to="/hotrohoidap" className="py-3 px-6 text-center w-1/3 flex items-center hover:bg-red-300">
                  <img src={ask} className='w-6 h-6 mr-2' alt="logo" />
                  <h1 className="ml-2">Hỏi đáp</h1>
                </Link>
                <Link to="/hotrohoidap" className="py-3 px-6 text-center w-1/3 flex items-center hover:bg-red-300">
                  <img src={htrask} className='w-6 h-6 mr-2' alt="logo" />
                  <h1 className="ml-2">Lịch sử hỏi đáp</h1>
                </Link>
              </tr>
              <tr className="border-b border-gray-300 flex">
              <Link to="/quanlyhoso" className="py-3 px-6 text-center w-1/3 flex items-center hover:bg-red-300">
                  <img src={detail} className='w-6 h-6 mr-2' alt="logo" />
                  <h1 className="ml-2">Xem chi tiết hồ sơ</h1>
                </Link>
                <Link to="https://docs.google.com/forms/d/e/1FAIpQLSes5un4jt6RyfYr3s8uk5yWyA9M2XmgPjufKOBt081ple8jEA/viewform" className="py-3 px-6 text-center w-1/3 flex items-center hover:bg-red-300">
                  <img src={sev} className='w-6 h-6 mr-2' alt="logo" />
                  <h1 className="ml-2">Khảo sát người dùng</h1>
                </Link>
                 <Link to="/changePass" className="py-3 px-6 text-center w-1/3 flex items-center hover:bg-red-300">
                  <img src={dmk} className='w-6 h-6 mr-2' alt="logo" />
                  <h1 className="ml-2">Đổi mật khẩu tài khoản</h1>
                </Link>
              </tr>
         
              {/* Thêm nhiều hàng số thứ tự khác ở đây nếu cần */}
            </tbody>
          </table>


        </div>
      </div>
      <GioiThieu />

    


    </div>
  )
}
