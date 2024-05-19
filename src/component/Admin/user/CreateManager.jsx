import axios from 'axios';
import React from 'react'
import ApiConfig, { apiUrl } from '../../../ApiConfig';
import DiaChi from '../../Diachi';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
export default function CreateManager() {
    const [formData, setFormData] = useState({
        cccd: '',
        matKhau: '',
        hoTen: '',
        email: '',
        sdt: '',
        diaChiDKTK:{
          tinh:'',
          huyen:'',
          xa:''
        },
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
            const response = await axios.post(apiUrl(ApiConfig.createManager),formData)
            const respondata= response.data
            console.log("đăng kí thành công"+respondata)
            toast.success('Đăng kí tài khoản '+ formData.cccd+ ' thành công!')
        } catch (error) {
          if (error.response) {
            // Nếu có phản hồi từ server
            console.error("Đăng ký không thành công do lỗi phản hồi từ server: ", JSON.stringify(error.response.data));
            toast.error("Đăng ký không thành công do lỗi phản hồi từ server: " + error.response.data);
        } else {
            // Nếu không có phản hồi từ server (có thể là lỗi mạng hoặc lỗi khác)
            console.error("Đăng ký không thành công do lỗi không có phản hồi từ server: ", error);
            toast.error("Đăng ký không thành công do lỗi không có phản hồi từ server: " + error.message);
        }
        }
    }
  return (
    <div className='h-atuo'  >
<ToastContainer/>
      <div onSubmit={handleSubmit} className="container mx-auto px-4 py-8">
        <div className="flex justify-center items-center">
          <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
            <h1 className="text-2xl font-bold text-center mb-4">Tạo tài khoản manager</h1>
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
              <DiaChi
                onSelectCity={(cityId) => {
                  setFormData({ ...formData, diaChiDKTK: { ...formData.diaChiDKTK, tinh: cityId } });
                }}
                onSelectDistrict={(districtId) => {
                  setFormData({ ...formData, diaChiDKTK: { ...formData.diaChiDKTK, huyen: districtId } });
                }}
                onSelectWard={(wardId) => {
                  setFormData({ ...formData, diaChiDKTK: { ...formData.diaChiDKTK, xa: wardId } });
                }}
              />
             <button type="submit" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700">Tạo tài khoản</button>

            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
