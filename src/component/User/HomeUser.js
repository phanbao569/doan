import React from 'react'
import Slider from 'react-slick';
import { FaSistrix, FaChevronLeft, FaChevronRight, FaHome } from "react-icons/fa";
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
      <div className="muc-dvc">
        <div className="div-icon" style={{ overflow: 'hidden' }}>
          <i className="icon-chimhac" style={{ float: 'left', marginRight: '15px' }}></i>
          <h3 className="intro-home-title" style={{ float: 'left' }}><a href="/bocongan/bothutuc?muc_do=MUC_DO_3,MUC_DO_4"> Dịch vụ công trực tuyến</a></h3>
        </div>
        <div className="maxw991 muc-dvc-content">
          <div className="row" style={{ margin: 0 }}>
            <div className="slider-tthc slick-initialized slick-slider">
              <div aria-live="polite" className="slick-list draggable"><div className="slick-track" style={{ opacity: 1, width: '3944px', transform: 'translate3d(-986px, 0px, 0px)' }} role="listbox" aria-label="Activities"><div className="item tk-thang-item slick-slide slick-cloned" data-slick-index="-1" style={{ width: '986px' }} tabIndex="-1">
                <div className="col-md-6 col-sm-6 js_check_border" data-key="0">
                  <div className="list-dvc">
                    <a href="/bocongan/bothutuc/tthc?matt=26356" style={{ outline: 'none' }} className="list-dvc-link" tabIndex="-1">Đăng ký tạm trú</a>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 js_check_border" data-key="1">
                  <div className="list-dvc">
                    <a href="/bocongan/bothutuc/tthc?matt=26498" style={{ outline: 'none' }} className="list-dvc-link" tabIndex="-1">Điều chỉnh thông tin về cư trú trong Cơ sở dữ liệu về cư trú</a>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 js_check_border" data-key="2">
                  <div className="list-dvc">
                    <a href="/bocongan/bothutuc/tthc?matt=26348" style={{ outline: 'none' }} className="list-dvc-link" tabIndex="-1">Xóa đăng ký thường trú</a>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 js_check_border" data-key="3">
                  <div className="list-dvc">
                    <a href="/bocongan/bothutuc/tthc?matt=26098" style={{ outline: 'none' }} className="list-dvc-link" tabIndex="-1">Đổi thẻ Căn cước công dân (thực hiện tại cấp huyện)</a>
                  </div>
                </div>
                <div className="col-md-6 col-sm-6 js_check_border" data-key="4">
                  <div className="list-dvc" style={{ border: 'none' }}>
                    <a href="/bocongan/bothutuc/tthc?matt=26097" style={{ outline: 'none' }} className="list-dvc-link" tabIndex="-1">Cấp lại thẻ Căn cước công dân (thực hiện tại cấp huyện)</a>
                  </div>
                </div>
              </div><div className="item tk-thang-item slick-slide slick-current slick-active" data-slick-index="0" style={{ width: '986px' }} tabIndex="0" role="option">
                  <div className="col-md-6 col-sm-6 js_check_border" data-key="0">
                    <div className="list-dvc">
                      <a href="/bocongan/bothutuc/tthc?matt=26265" style={{ outline: 'none' }} className="list-dvc-link" tabIndex="0">Khai báo tạm trú cho người nước ngoài tại Việt Nam qua Trang thông tin điện tử</a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 js_check_border" data-key="1">
                    <div className="list-dvc">
                      <a href="/bocongan/bothutuc/tthc?matt=26103" style={{ outline: 'none' }} className="list-dvc-link" tabIndex="0">Cấp thẻ Căn cước công dân khi đã có thông tin trong Cơ sở dữ liệu quốc gia về dân cư (thực hiện tại cấp huyện)</a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 js_check_border" data-key="2">
                    <div className="list-dvc">
                      <a href="/bocongan/bothutuc/tthc?matt=26346" style={{ outline: 'none' }} className="list-dvc-link" tabIndex="0">Thông báo lưu trú</a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 js_check_border" data-key="3">
                    <div className="list-dvc">
                      <a href="/bocongan/bothutuc/tthc?matt=26360" style={{ outline: 'none' }} className="list-dvc-link" tabIndex="0">Đăng ký thường trú</a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 js_check_border" data-key="4">
                    <div className="list-dvc" style={{ border: 'none' }}>
                      <a href="/bocongan/bothutuc/tthc?matt=29497" style={{ outline: 'none' }} className="list-dvc-link" tabIndex="0">Cấp hộ chiếu phổ thông trong nước (thực hiện tại cấp tỉnh)</a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 js_check_border" data-key="5">
                    <div className="list-dvc" style={{ border: 'none' }}>
                      <a href="/bocongan/bothutuc/tthc?matt=26497" style={{ outline: 'none' }} className="list-dvc-link" tabIndex="0">Xác nhận thông tin về cư trú</a>
                    </div>
                  </div>
                </div><div className="item tk-thang-item slick-slide" data-slick-index="1" style={{ width: '986px' }} tabIndex="0" role="option">
                  <div className="col-md-6 col-sm-6 js_check_border" data-key="0">
                    <div className="list-dvc">
                      <a href="/bocongan/bothutuc/tthc?matt=26356" style={{ outline: 'none' }} className="list-dvc-link" tabIndex="-1">Đăng ký tạm trú</a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 js_check_border" data-key="1">
                    <div className="list-dvc">
                      <a href="/bocongan/bothutuc/tthc?matt=26498" style={{ outline: 'none' }} className="list-dvc-link" tabIndex="-1">Điều chỉnh thông tin về cư trú trong Cơ sở dữ liệu về cư trú</a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 js_check_border" data-key="2">
                    <div className="list-dvc">
                      <a href="/bocongan/bothutuc/tthc?matt=26348" style={{ outline: 'none' }} className="list-dvc-link" tabIndex="-1">Xóa đăng ký thường trú</a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 js_check_border" data-key="3">
                    <div className="list-dvc">
                      <a href="/bocongan/bothutuc/tthc?matt=26098" style={{ outline: 'none' }} className="list-dvc-link" tabIndex="-1">Đổi thẻ Căn cước công dân (thực hiện tại cấp huyện)</a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 js_check_border" data-key="4">
                    <div className="list-dvc" style={{ border: 'none' }}>
                      <a href="/bocongan/bothutuc/tthc?matt=26097" style={{ outline: 'none' }} className="list-dvc-link" tabIndex="-1">Cấp lại thẻ Căn cước công dân (thực hiện tại cấp huyện)</a>
                    </div>
                  </div>
                </div><div className="item tk-thang-item slick-slide slick-cloned" data-slick-index="2" style={{ width: '986px' }} tabIndex="-1">
                  <div className="col-md-6 col-sm-6 js_check_border" data-key="0">
                    <div className="list-dvc">
                      <a href="/bocongan/bothutuc/tthc?matt=26265" style={{ outline: 'none' }} className="list-dvc-link" tabIndex="-1">Khai báo tạm trú cho người nước ngoài tại Việt Nam qua Trang thông tin điện tử</a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 js_check_border" data-key="1">
                    <div className="list-dvc">
                      <a href="/bocongan/bothutuc/tthc?matt=26103" style={{ outline: 'none' }} className="list-dvc-link" tabIndex="-1">Cấp thẻ Căn cước công dân khi đã có thông tin trong Cơ sở dữ liệu quốc gia về dân cư (thực hiện tại cấp huyện)</a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 js_check_border" data-key="2">
                    <div className="list-dvc">
                      <a href="/bocongan/bothutuc/tthc?matt=26346" style={{ outline: 'none' }} className="list-dvc-link" tabIndex="-1">Thông báo lưu trú</a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 js_check_border" data-key="3">
                    <div className="list-dvc">
                      <a href="/bocongan/bothutuc/tthc?matt=26360" style={{ outline: 'none' }} className="list-dvc-link" tabIndex="-1">Đăng ký thường trú</a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 js_check_border" data-key="4">
                    <div className="list-dvc" style={{ border: 'none' }}>
                      <a href="/bocongan/bothutuc/tthc?matt=29497" style={{ outline: 'none' }} className="list-dvc-link" tabIndex="-1">Cấp hộ chiếu phổ thông trong nước (thực hiện tại cấp tỉnh)</a>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 js_check_border" data-key="5">
                    <div className="list-dvc" style={{ border: 'none' }}>
                      <a href="/bocongan/bothutuc/tthc?matt=26497" style={{ outline: 'none' }} className="list-dvc-link" tabIndex="-1">Xác nhận thông tin về cư trú</a>
                    </div>
                  </div>
                </div></div></div>

            </div>
            <a href="#" className="prev-tthc slick-arrow" title="prev-tthc" style={{ display: 'block' }}><i className="fa fa-angle-left"></i></a>
            <a href="#" className="next-tthc slick-arrow" title="next-tthc" style={{ display: 'block' }}><i className="fa fa-angle-right"></i></a>
          </div>
        </div>
      </div>

    </div>
  )
}
