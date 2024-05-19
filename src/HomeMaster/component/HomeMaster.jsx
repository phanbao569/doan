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
