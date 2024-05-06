import React, { useEffect, useState } from 'react'
// import { useLocation } from 'react-router-dom';
import DiaChi from '../../component/Diachi';
import ApiConfig, { apiUrl } from '../../ApiConfig';
import axios from 'axios';
import { useParams } from 'react-router-dom';
export default function CreateNV() {
    // const location = useLocation();
    // console.log(location);
    //   useEffect(() => {
        
    //     const formData2 = location.state?.formData || {};
    //     console.log(formData2,'xin chào hùng')
    //     console.log(location.state,'xin chào ngọc hùng');
    // }, [location.state?.formData]);
    const data=JSON.parse(useParams().formData);
    // console.log(useParams().formData);

    console.log(data);
    const [formData, setFormData] = useState({
        cccd: '',
        matKhau: '',
        hoTen: '',
        email: '',
        sdt: '',
        diaChiDKTK:data,
        anhCCCD: {
          anhMat: null,
          anhMatTruoc: null,
          anhMatSau: null,
        },
        tinhTrangTK:'Active',
      },
     );
        const handleInputChange = (event)=>{
            const {name,value} =event.target
            setFormData(prevState =>({...prevState,[name]:value}))}

            
         const  handleSubmit= async(event)=>{
        event.preventDefault();
        console.log("dữ liệu gửi đi:", JSON.stringify(formData))
        try {
            const response = await axios.post('http://192.168.10.233:8888/manager/createEmployee',formData)
            const respondata= response.data
            console.log("đăng kí thành công"+respondata)
        } catch (error) {
          if (error.response) {
            // Nếu có phản hồi từ server
            console.error("Đăng ký không thành công do lỗi phản hồi từ server: ", JSON.stringify(error.response.data));
            alert("Đăng ký không thành công do lỗi phản hồi từ server: " + error.response.data);
        } else {
            // Nếu không có phản hồi từ server (có thể là lỗi mạng hoặc lỗi khác)
            console.error("Đăng ký không thành công do lỗi không có phản hồi từ server: ", error);
            alert("Đăng ký không thành công do lỗi không có phản hồi từ server: " + error.message);
        }
        }
    }
  return (
    <div className='h-atuo'  >

    <div onSubmit={handleSubmit} className="container mx-auto px-4 py-8">
      <div className="flex justify-center items-center">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
          <h1 className="text-2xl font-bold text-center mb-4">Tạo tài khoản employee</h1>
          <form action="#">
            <div className="mb-6">
              <label htmlFor="username" className="text-sm block mb-2 font-medium text-gray-700">CCCD đăng kí</label>
              <input type="text" id="cccd" placeholder="CCCD đăng kí" name="cccd" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-blue-500 focus:ring-opacity-50" onChange={handleInputChange} />

            </div>
            <div className="mb-6">
              <label htmlFor="password" className="text-sm block mb-2 font-medium text-gray-700">Mật khẩu</label>
              <input type="password" id="password" placeholder="Mật khẩu" name="matKhau" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-blue-500 focus:ring-opacity-50" onChange={handleInputChange} />
            </div>
            
            <div className="mb-6">
              <label htmlFor="hoten" className="text-sm block mb-2 font-medium text-gray-700">Họ và tên</label>
              <input type="text" id="hoten" placeholder="Họ và tên" name="hoTen" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-blue-500 focus:ring-opacity-50" onChange={handleInputChange} />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="text-sm block mb-2 font-medium text-gray-700">Email</label>
              <input type="email" id="email" placeholder="Email" name="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-blue-500 focus:ring-opacity-50" onChange={handleInputChange} />
            </div>
            <div className="mb-6">
              <label htmlFor="sdt" className="text-sm block mb-2 font-medium text-gray-700">Số điện thoại</label>
              <input type="text" id="sdt" placeholder="Số điện thoại" name="sdt" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-blue-500 focus:ring-opacity-50" onChange={handleInputChange} />
            </div>
            
           <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700">Tạo tài khoản</button>

          </form>
        </div>
      </div>
    </div>
  </div>
  )
}
