import React from 'react'
import Slider from 'react-slick';
import { FaSistrix,FaHome,FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


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

      {/* Nav */}
      <div className='flex items-center justify-center h-10 bg-stone-200'>
        <NavLink to={'/'} className="h-full py-2 px-5 text-lg font-fontgg hover:bg-zinc-700 hover:text-white" >
          <FaHome className='size-6' />
        </NavLink>
        <NavLink to={'/GioiThieu'} className="h-full py-2 px-5  text-lg font-fontgg hover:bg-zinc-700 hover:text-white">
          Giới thiệu
        </NavLink>
        <NavLink to={'/DatLich'} className="h-full py-2 px-5 text-lg font-fontgg hover:bg-zinc-700 hover:text-white">
          Đặt lịch giao dịch
        </NavLink>
        <NavLink to={'/TraCuu'} className="h-full py-2 px-5  text-lg font-fontgg hover:bg-zinc-700 hover:text-white">
          Tra cứu
        </NavLink>
        
        <NavLink to={'/PhanAnh'} className="h-full py-2 px-5  text-lg font-fontgg hover:bg-zinc-700 hover:text-white">
          Phản ánh kiến nghị
        </NavLink>
      </div>

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
          <img src="https://images.unsplash.com/photo-1699461840896-de3ae8c46de8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="image-item">
          <img src="https://images.unsplash.com/photo-1700842240282-8db1cb01dbf4?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="image-item">
          <img src="https://images.unsplash.com/photo-1701221366380-e97f961f0bbc?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="image-item">
          <img src="https://images.unsplash.com/photo-1682695796795-cc287af78a2b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div className="image-item">
          <img src="https://images.unsplash.com/photo-1701221366380-e97f961f0bbc?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
      </Slider>
      <div className='flex w-800 h-40 gap-12 justify-center mt-14'>
        <button className='w-375 h-24 bg-stone-200 text-black'>
          Khai báo giấy khai sinh
        </button>
        <button className='w-375 h-24 bg-stone-200 text-black'>
          Những câu hỏi thường gặp
        </button>
      </div>
      <div className='flex w-800 h-40 gap-12 justify-center'>
        <button className='w-375 h-24 bg-stone-200 text-black'>
          Hướng dẫn sử dụng
        </button>
        <button className='w-375 h-24 bg-stone-200 text-black'>
          Thống kê
        </button>
      </div>


    </div>
  )
}
