import React, { Component } from 'react'
import logodang from './img/logodang.png'
export default class HomeUser extends Component {
  render() {
    return (
      <div>
        <div className="bg-gray-100">
  {/* NavBar */}
  <nav className=" py-4">
    <div className="container mx-auto flex justify-center items-center gap-4 px-4">
      <div class="text-gray font-bold flex justify-start text-lg">
      <img src={logodang} alt="Logo" />


      </div>
      <ul className="flex space-x-4  w-full  justify-center items-center ">
        <li>
          <a href="#" className="text-gray hover:text-gray-500">
            Thủ tục hành chính
          </a>
        </li>
        <li>
          <a href="#" className="text-gray hover:text-gray-200">
            Nộp hồ sơ trực tuyến
          </a>
        </li>
        <li>
          <a href="#" className="text-gray hover:text-gray-200">
            Tra cứ hồ sơ
          </a>
        </li>
        <li>
          <a href="#" className="text-gray hover:text-gray-200">
            Phản ánh - Kiến nghị
          </a>
        </li>
         <li>
          <a href="#" className="text-gray hover:text-gray-200">
            Hỗ trợ - hỏi đáp
          </a>
        </li>
      
      </ul>
      <div class="text-gray font-bold flex justify-end text-lg">Logo</div>

    </div>
  </nav>
  {/* div */}
  <div className="container mx-auto py-8 h-screen ">
    <h1 className="text-3xl font-bold text-gray-800 mb-4">
      Chào mừng đến với trang chủ!
    </h1>
    <p className="text-lg text-gray-700">
      Nội dung trang chủ của bạn có thể được đặt ở đây.
    </p>
  </div>
  {/* Footer */}
  <footer className="bg-blue-500 py-4 mt-8">
    <div className="container mx-auto text-center text-gray">
      © 2024 Trang Chủ. Tất cả quyền được bảo lưu.
    </div>
  </footer>
</div>


      </div>
    )
  }
}
