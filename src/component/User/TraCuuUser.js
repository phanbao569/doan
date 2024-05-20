import React, { useState } from 'react'
import axios from 'axios';
import { FaHome } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom';
import ApiConfig, { apiUrl } from '../../ApiConfig';
import bcrypt from 'bcryptjs'
import Loading from '../../Loading';
import { ToastContainer, toast } from 'react-toastify';
import PinInputForm from '../Auth/PinInputForm';
import moment from 'moment';



export default function TraCuuM() {
    const [showCccdForm, setShowCccdForm] = useState(true);
    const [showCodeForm, setShowCodeForm] = useState(false);
    const [showDanhSach, setShowDanhSach] = useState(false);
    const [cccd, setCccd] = useState('');
    const [code, setCode] = useState('');
    const [maXacNhan, setMaXacNhan] = useState('');
    const [danhSach, setDanhSach] = useState('');
    const handlePinInputChange = (pinValue) => {
        setCode(pinValue);
    };
    const handleCccdChange = (event) => {
        setCccd(event.target.value);
        console.log(cccd);
    };

    const handleCodeChange = (event) => {
        setCode(event.target.value);
        console.log(code);
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
            if (check === true) {
                setShowCodeForm(false);
                setShowCccdForm(true);
                setShowDanhSach(true);
                hienThiDanhSach();
            }
            else toast.error('Mã không đúng, vui lòng nhập lại');
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
        //toast.error("Vui lòng nhập CCCD");
        try {
            // Gửi yêu cầu kiểm tra CCCD tồn tại

            if (cccd.trim() == "") {
                toast.error("Vui lòng nhập CCCD");
                return; // Thoát khỏi hàm nếu CCCD không được nhập
            }
            const response = await axios.get(apiUrl(ApiConfig.getMaXacNhanByCCCD(cccd)));
            setMaXacNhan(response.data);
            if (response.data !== 'CCCD không tồn tại!') {
                // Nếu CCCD tồn tại, gửi mã xác nhận qua email đã đăng ký và ẩn form tìm kiếm
                setShowCccdForm(false);
                setShowCodeForm(true);
                toast.success("Mã xác nhận đã được gửi qua email!");
              //  handlSendCode();
            } else {
                // Nếu CCCD không tồn tại, hiển thị thông báo lỗi
                toast.error("CCCD không tồn tại!");
            }
        } catch (error) {
            console.error('Lỗi khi gửi mã xác nhận:', error);
            toast.error("Vui lòng nhập CCCD");

        }
    };


    return (
        <div className=''>
            {/* Nav */}
            <ToastContainer />

            <div className='w-full h-800 mt-6 mb-96'>


                {/* Tìm kiếm */}
                {showCccdForm && (<div className='flex justify-center mt-6'>

                    <input className='w-880 h-12 pl-2 ml-4 border ' type="number" min={0} maxLength={12} placeholder='Số CCCD *' onChange={handleCccdChange} />
                    <button className='flex text-white border h-12 items-center ml-4 bg-zinc-700 p-2 gap-2' onClick={handleSendVerificationCode} >
                        {/* <FaSistrix className='size-6 ml-2 ' /> */}
                        Tìm kiếm
                    </button>
                </div>)}

                {/* Mã xác nhận */}
                {showCodeForm && (
                    <div>
                        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
                            <div className="bg-white p-8 rounded-lg shadow-md">
                                <div>

                                    <div>

                                    </div>
                                    <h2 className="text-lg flex mx-auto  font-semibold mb-4">Nhập mã xác nhận từ Gmail</h2>

                                    <PinInputForm onChange={handlePinInputChange} />
                                    <div>

                                    </div>
                                    <div className='flex mt-2 mx-auto items-center'>
                                        <button
                                            onClick={checkCode}
                                            className={`bg-blue-400  text-white py-2 px-4 rounded mr-2 hover:bg-blue-600 hover:text-gray-800  `}
                                        >
                                            Xác nhận
                                        </button>
                                        <button
                                            onClick={() => setShowCodeForm(false)}
                                            className={`bg-blue-400  text-white py-2 px-4 rounded mr-2 hover:bg-blue-600 hover:text-gray-800  `}
                                        >
                                            Trở về
                                        </button>
                                    </div>


                                </div>


                            </div>

                        </div>

                    </div>

                    //   <div className='flex justify-center mt-6'>
                    //     <input className='w-880 h-12 pl-2 ml-4 border ' type="" placeholder='Mã xác nhận *' onChange={handleCodeChange} />
                    //     <button className='flex text-white border h-12 items-center ml-4 bg-zinc-700 p-2 gap-2' onClick={checkCode} >
                    //       Gửi
                    //     </button>
                    //   </div>
                )}

                {/* Hiển thị danh sách hồ sơ tìm kiếm */}
                <div className=' mt-10 flex justify-center'>
                    {showDanhSach && (
                        <div>
                            {danhSach ? (
                                <div className='mt-8 p-4'>
                                    <table className="w-full min-w-[800px] table-auto text-center border-collapse">
                                        <thead>
                                            <tr className="bg-red-500 text-white">
                                                <th className="py-4 px-6 font-medium">
                                                    Tên thủ tục
                                                </th>
                                                <th className="py-4 px-6 font-medium">
                                                    Ngày tạo
                                                </th>
                                                <th className="py-4 px-6 font-medium">
                                                    Trạng thái
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className='bg-gray-100'>
                                            {danhSach.map((item, index) => (
                                                <tr key={index} className="hover:bg-gray-200">
                                                    <td className="border-b border-gray-300 py-4 px-6">
                                                        <h5 className="font-medium text-gray-800">
                                                            {item.tenThuTuc}
                                                        </h5>
                                                    </td>
                                                    <td className="border-b border-gray-300 py-4 px-6">
                                                        <p className="text-gray-800">
                                                            {moment(item.ngayTao).format('DD/MM/YYYY')}
                                                        </p>
                                                    </td>
                                                    <td className="border-b border-gray-300 py-4 px-6">
                                                        <span
                                                            className={`inline-block rounded-full py-1 px-3 text-sm font-medium  
                                                            ${item.trangThai === 'Done' ? 'bg-green-200 text-green-800' :
                                                                    item.trangThai === 'Cancelled' ? 'bg-red-200 text-red-800' :
                                                                        item.trangThai === 'Paying' ? 'bg-blue-200 text-blue-800' :
                                                                            'bg-yellow-200 text-yellow-800'}`}
                                                        >
                                                            {item.trangThai}
                                                        </span>
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
