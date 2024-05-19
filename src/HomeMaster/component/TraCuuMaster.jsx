import React, { useState } from 'react'
import axios from 'axios';
import { FaHome } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import ApiConfig, { apiUrl } from '../../ApiConfig';
import bcrypt from 'bcryptjs'


export default function TraCuuM() {
  const [showCccdForm, setShowCccdForm] = useState(true);
  const [showCodeForm, setShowCodeForm] = useState(false);
  const [showDanhSach, setShowDanhSach] = useState(false);
  const [cccd, setCccd] = useState('');
  const [code, setCode] = useState('');
  const [maXacNhan, setMaXacNhan] = useState('');
  const [danhSach, setDanhSach] = useState('');

  const handleCccdChange = (event) => {
    setCccd(event.target.value);
    console.log(cccd);
  };

  const handleCodeChange = (event) => {
    setCode(event.target.value);
    console.log(code);
  }
  const handlSendCode = async () => {
    const response = await axios.get(apiUrl(ApiConfig.getMaXacNhanByCCCD(cccd)));
    setMaXacNhan(response.data);
  }
  const checkCode = async (event) => {
    event.preventDefault();
    if (!code) {
      // Nếu không có mã xác nhận, không thực hiện so sánh
      return;
    }
    try {
      const check = await bcrypt.compare(code, maXacNhan);
      console.log(check);
      if (check === true) 
      {
        setShowCodeForm(false);
        setShowCccdForm(true);
        setShowDanhSach(true);
        hienThiDanhSach();
      }
      else alert('Mã không đúng, vui lòng nhập lại');
    } catch (error) {
      console.error('Lỗi khi so sánh mã xác nhận:', error);
    }
  }
  const hienThiDanhSach = async () => {
    console.log(cccd + 'đây nè');
    const response = await axios.get(apiUrl(ApiConfig.getAllHoSoByCCCD(cccd)));
    console.log(response.data);
    setDanhSach(response.data);

  }

  const handleSendVerificationCode = async () => {
    try {
      // Gửi yêu cầu kiểm tra CCCD tồn tại
      const response = await axios.get(apiUrl(ApiConfig.getMaXacNhanByCCCD(cccd)));
      if (!cccd) {
        alert('Vui lòng nhập CCCD');
        return; // Thoát khỏi hàm nếu CCCD không được nhập
      }

      if (response.data !== 'CCCD không tồn tại!') {
        // Nếu CCCD tồn tại, gửi mã xác nhận qua email đã đăng ký và ẩn form tìm kiếm
        setShowCccdForm(false);
        setShowCodeForm(true);
        alert("Mã xác nhận đã được gửi qua email!");
        handlSendCode();
      } else {
        // Nếu CCCD không tồn tại, hiển thị thông báo lỗi
        alert('CCCD không tồn tại, vui lòng nhập lại');
      }
    } catch (error) {
      console.error('Lỗi khi gửi mã xác nhận:', error);
    }
  };


  return (
    <div className=''>
      
      <div className='w-full h-800 mt-6 mb-96'>
        <div>
          <Link to='/' className='ml-28 mr-2 hover:text-red-700 b'>Trang chủ</Link>
          {'>'}
          <Link to='/TraCuu' className='ml-2 hover:text-red-700'>Tra Cứu</Link>
        </div>

        {/* Tìm kiếm */}
        {showCccdForm && (<div className='flex justify-center mt-6'>
          <input className='w-880 h-12 pl-2 ml-4 border ' type="number" maxLength={12} placeholder='Số CCCD *' onChange={handleCccdChange} />
          <button className='flex text-white border h-12 items-center ml-4 bg-zinc-700 p-2 gap-2' onClick={handleSendVerificationCode} >
            {/* <FaSistrix className='size-6 ml-2 ' /> */}
            Gửi mã xác nhận
          </button>
        </div>)}

        {/* Mã xác nhận */}
        {showCodeForm && (
          <div className='flex justify-center mt-6'>
            <input className='w-880 h-12 pl-2 ml-4 border ' type="" placeholder='Mã xác nhận *' onChange={handleCodeChange} />
            <button className='flex text-white border h-12 items-center ml-4 bg-zinc-700 p-2 gap-2' onClick={checkCode} >
              Gửi
            </button>
          </div>
        )}

        {/* Hiển thị danh sách hồ sơ tìm kiếm */}
        <div className=' mt-10 flex justify-center'>
          {showDanhSach && (
            <div>
              {danhSach ? (
                <div className='mt-8 p-2'>
                  <table className="w-880 min-w-[800px] table-auto text-center">
                    <thead>
                      <tr className="w-460 dark:bg-meta-4 text-center bg-slate-400">
                        <th className="min-w-[150px] py-4 font-medium text-black dark:text-white xl:pl-11">
                          Tên thủ tục
                        </th>
                        <th className="min-w-[150px] py-4 font-medium text-black dark:text-white">
                          Ngày tạo
                        </th>
                        <th className="min-w-[120px] py-4 font-medium text-black dark:text-white">
                          Trạng thái
                        </th>
                      </tr>
                    </thead>
                    <tbody className='bg-slate-200'>

                      {danhSach.map((item, index) => (
                        <tr key={index}>
                          <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                            <h5 className="font-medium text-black dark:text-white">
                              {item.tenThuTuc}
                            </h5>
                          </td>
                          <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                            <p className="text-black dark:text-white">
                              {item.ngayTao}
                            </p>
                          </td>
                          <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                            <p
                              className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium 
                              ${item.trangThai === 'Done'? 'bg-success text-success': item.trangThai === 'Cancelled'
                                  ? 'bg-danger text-danger' : item.trangThai === 'Paying' ? 'bg-primary text-primary'
                                  : 'bg-warning text-warning'
                                }`}
                            >
                              {item.trangThai}
                            </p>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </div>

          )}

        </div>

      </div>
    </div>
  )
}
