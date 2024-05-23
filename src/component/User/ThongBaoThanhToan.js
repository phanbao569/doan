import axios from 'axios';

import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ApiConfig, { apiUrl } from '../../ApiConfig';
import { GlobalContext } from '../../App';
import logo from '../User/img/thanhtoanthanhcong-removebg-preview.png'

function PaymentCallback() {
  const navigate = useNavigate(); // Sử dụng hook useNavigate để chuyển trang(có thể dùng routes,Link)

  const location = useLocation();
  const { user, ttuser } = useContext(GlobalContext)
  useEffect(() => {
    fetchdata();
    // In ra giá trị của contractId
  }, []);
  const fetchdata = async () => {
    try {
      const searchParams = new URLSearchParams(location.search);
      const contractId = searchParams.get('contractId');
      // console.log(apiUrl(ApiConfig.PayingSuccess(contractId, user.email)));
      const response = await axios.put(apiUrl(ApiConfig.PayingSuccess(contractId, user.email)));
      console.log("thanh thanh cong");
    } catch (error) {
      console.log("thanh toan k dc");
      console.log(error);
    }



  }
  const handleBack = () => {
    navigate('/');
    window.location.reload();
  }
  return (
    <div className='h-screen flex items-center justify-center'>
      <div className="bg-green-400 p-8 rounded-lg shadow-lg">
        <div className="flex items-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-white mr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <p className="text-white text-lg font-semibold">
            Cảm ơn bạn đã thanh toán thành công!
          </p>
        </div>
        <div className="flex justify-center">
          <img src={logo} alt="Logo" className="mt-4" />
        </div>
        <div className='flex mt-12 justify-center'> {/* Thêm justify-center vào đây */}
          <button onClick={handleBack} type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Trở về</button>
        </div>
      </div>
    </div>

  );
}

export default PaymentCallback;
