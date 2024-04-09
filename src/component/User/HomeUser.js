import React, { Component } from 'react'
import logodang from './img/logodang.png'
import logo from './img/footer.jpg'
import { Link } from 'react-router-dom'
import NavUser from './Nav'
export default class HomeUser extends Component {
  render() {
    return (
      <div>
        <div className="bg-gray-100">
          {/* NavBar */}


          <NavUser />
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



          <footer className=" py-4 ">
            <img src={logo} alt="Logo" />

          </footer>
        </div>


      </div>
    )
  }
}
