import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import ApiConfig, { apiUrl } from '../../ApiConfig';
import { GlobalContext } from '../../App';

function PaymentCallback() {
  const location = useLocation();
  const { user, ttuser } = useContext(GlobalContext)
const [isLoad,setisLoading] = useState(false);
  useEffect(() => {
    console.log(user)
      console.log("goi lan")
      fetchdata();
 // In ra giá trị của contractId
  }, [isLoad]);
  const fetchdata = async() => {
    try {
      const searchParams = new URLSearchParams(location.search);
      const contractId = searchParams.get('contractId');
      // console.log(apiUrl(ApiConfig.PayingSuccess(contractId, user.email)));
      // const response = await axios.put(apiUrl(ApiConfig.PayingSuccess(contractId, user.email)));
      console.log("thanh thanh cong");
      alert("thanh cong");
      setisLoading(true);
    } catch (error) {
      console.log("thanh toan k dc");
      console.log(error);
    }



  }
  return (
    <div>
      <div className="fixed bottom-0 left-0 right-0 bg-green-500 text-white p-4">
        Thanh toán thành công!
        <button className="ml-4">
          Đóng
        </button>
      </div>
    </div>
  );
}

export default PaymentCallback;
