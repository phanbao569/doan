import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {
  const navigate = useNavigate(); // Sử dụng hook useNavigate để chuyển trang(có thể dùng routes,Link)
  const [userData, setUserData] = useState({
    cccd: "",
    matKhau: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(userData)

      const response = await axios.post('http://192.168.1.198:8888/login', userData);
      const responseData = response.data;
      console.log(responseData)

      // Kiểm tra nếu đăng nhập thành công trên phía máy chủ
      if (response.data) {
        alert("đăng nhập thành công. chào mừng " + responseData.hoTen)
        // localStorage.setItem('loggedInUser', JSON.stringify(userData.username));
        localStorage.setItem('token', responseData.token)
        // console.log("token la :"+localStorage.getItem('token'))
        navigate("/test")
        console.log("thông tin token" + responseData.token)
        // Thực hiện chuyển hướng đến trang chủ
        window.location.reload();

      } else {
        // Xử lý khi đăng nhập không thành công
        console.error('Đăng nhập thất bại:' + responseData.message);
        alert('Đăng nhập thất bại ở trong try:' + responseData.message)
        // Hiển thị thông báo cho người dùng rằng đăng nhập không thành công

      }
    } catch (error) {
      console.error('Đăng nhập thất bại:', error.response.data);
      alert('Đăng nhập thất bại:' + error.response.data);
      // Xử lý lỗi đăng nhập
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setUserData({ ...userData, [name]: value });
    console.log(value)
    console.log(name);



  };


  return (
    <div className='h-atuo'  >
      
      <div onSubmit={handleSubmit} className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
            <h1 className="text-2xl font-bold text-center mb-4">Đăng nhập</h1>
            <form action="#">
              <div className="mb-6">
                <label htmlFor="username" className="text-sm block mb-2 font-medium text-gray-700">Tên đăng nhập</label>
                <input type="text" id="cccd" placeholder="Tên đăng nhập" name="cccd" onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-blue-500 focus:ring-opacity-50" />
                
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="text-sm block mb-2 font-medium text-gray-700">Mật khẩu</label>
                <input type="password" id="password" placeholder="Mật khẩu" name="matKhau" onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-blue-500 focus:ring-opacity-50" />
              </div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input type="checkbox" id="remember" name="remember" className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-0 focus:ring-blue-500 focus:ring-opacity-50" />
                  <label htmlFor="remember" className="text-sm ml-2 text-gray-700">Nhớ mật khẩu</label>
                </div>
                <a href="#" className="text-xs text-blue-500 hover:text-blue-700">Quên mật khẩu?</a>
              </div>
              <button type="submit" className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700">Đăng nhập</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
