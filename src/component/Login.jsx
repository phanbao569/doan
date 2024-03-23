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
        alert("đăng nhập thành công. chào mừng "+responseData.hoTen)
        // localStorage.setItem('loggedInUser', JSON.stringify(userData.username));
        localStorage.setItem('token', responseData.token)
        // console.log("token la :"+localStorage.getItem('token'))
        navigate("/test")
        console.log("thông tin token"+responseData.token)
        // Thực hiện chuyển hướng đến trang chủ
        window.location.reload();
        
      } else {
        // Xử lý khi đăng nhập không thành công
        console.error('Đăng nhập thất bại:'+ responseData.message);
        alert('Đăng nhập thất bại ở trong try:'+ responseData.message)
        // Hiển thị thông báo cho người dùng rằng đăng nhập không thành công
        
      }
    } catch (error) {
      console.error('Đăng nhập thất bại:', error);
      alert('Đăng nhập thất bại: lỗi catch ');
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
    <div>
      
      <form onSubmit={handleSubmit} className="">
    <div className="mb-4">
        <label htmlFor="username" className=" `">Tên đăng nhập:</label>
        
        <input type="text" id="cccd"placeholder="Tên đăng nhập" name="cccd"  onChange={handleInputChange} className="" />
    </div>
    <div className="mb-6">
        <label htmlFor="password" className="">Mật khẩu:</label>
        <input type="password" id="password"placeholder="Mật khẩu" name="matKhau"  onChange={handleInputChange} className="" />
    </div>
    <div className="">
        <button type="submit" className="">Đăng nhập</button>
    </div>
</form>

    </div>
  );
}

export default Login;
