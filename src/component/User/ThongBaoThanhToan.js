import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function PaymentCallback() {
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const contractId = searchParams.get('contractId');
    console.log(contractId); // In ra giá trị của contractId
  }, [location]);

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
