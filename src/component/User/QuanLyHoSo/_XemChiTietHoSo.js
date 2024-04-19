import React, { useContext, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../../../App';
import { label, Form, Formik,getlabelProps  } from 'formik';
import axios from 'axios';
import ApiConfig, { apiUrl } from '../../../ApiConfig';


export default function _XemChiTietHoSo() {
  const params = useParams();
  const location = useLocation();
  const { user, ttuser } = useContext(GlobalContext)
 const navigate = useNavigate(); // Sử dụng hook useNavigate để chuyển trang(có thể dùng routes,Link)

  const handlePay = async() => {
    try
    {
      console.log(hoso.id);
      console.log(hoso.lePhi);

   //  const response =   await axios.get(apiUrl(ApiConfig.thanhtoan(hoso.id,hoso.lePhi)));
     const response = await axios.get(`http://172.21.1.175:8888/pay/${hoso.lePhi}/${hoso.id}`);

     console.log(response.data);
    // navigate(response.data);
     window.location.href = response.data;

       console.log("thanh cong");
    } catch (error) {
        console.log("an lz ");
    }

  }
  console.log(ttuser)
  const [hoso, sethoso] = useState(location.state.value);
  console.log(hoso)
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-8 text-center">{hoso.tenThuTuc} </h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">

        <div  >

                <label className='text-xl font-family-sans mx-auto' >

                  THÔNG TIN NGƯỜI THÔNG BÁO
                  <div className="col-span-2">
              <label className="block text-sm font-semibold text-gray-600 mb-1">Trạng thái:</label>
              <p className="text-sm font-semibold">
                <span className={`inline-block px-2 py-1 rounded-full ${hoso.trangThai === "Checking" ? "bg-green-500 text-white" :
                    hoso.trangThai === "Done" ? "bg-green-500 text-white" :
                      hoso.trangThai === "Cancelled" ? "bg-red-500 text-white" :
                        hoso.trangThai === "Paying" ? "bg-yellow-500 text-black" : ""
                  }`}>
                  {(() => {
                    switch (hoso.trangThai) {
                      case "Checking":
                        return "Đang chờ xử lý";
                      case "Done":
                        return "Đã hoàn tất";
                      case "Cancelled":
                        return "Đã bị huỷ";
                      case "Paying":
                        return "Đã chờ thanh toán";
                      default:
                        return hoso.trangThai;
                    }
                  })()}
                </span>
              </p>

            </div>
                </label>



              <div class=" flex gap-12 p-8 ">
                <div class="w-full flex flex-col ">
                  <div>
                    <label className='font-bold' > Tỉnh/Thành phố </label>

                  </div>
                  <label className=" text-start mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    {ttuser?.queQuan?.tinh}

                  </label>

                </div>
                <div class="w-full flex flex-col ">
                  <div>
                    <label className='font-bold' > Quận/Huyện </label>

                  </div>
                  <label className=" text-start mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    {ttuser?.queQuan?.huyen}
                  </label>


                </div>
                <div class="w-full flex flex-col ">
                  <div>
                    <label className='font-bold' > Phường/Xã </label>

                  </div>
                  <label className=" text-start mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={ttuser?.queQuan?.xa}
                  >
                  {ttuser?.queQuan?.xa}

                  </label>
                </div>

              </div>
              <div className='flex gap-12 py-8  '>
                <div class="w-full flex flex-col ">
                  <div>
                    <label className='font-bold' > Họ tên  </label>
                    <label className='text-red-500' >  </label>

                  </div>
                  <label className=" text-start mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    disabled placeholder='Họ tên '
                     >
                    {ttuser?.hoTen}

                    </label>


                </div>
                <div class="w-full flex flex-col ">
                  <div>
                    <label className='font-bold' > Ngày tháng năm sinh </label>
                    <label className='text-red-500' >  </label>

                  </div>
                  <label value={ttuser?.ngaySinh} type="date" className=" text-start mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    disabled >
                   {ttuser?.ngaySinh}

                    </label>
                </div>
              </div>
              <div class=" flex p-8 gap-12  ">

                <div class="w-full flex flex-col ">
                  <div>
                    <label className='font-bold' > số định danh cá nhân </label>
                    <label className='text-red-500' >  </label>

                  </div>
                  <label className=" text-start mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    disabled placeholder='CCCD ' pattern='' >
                   {ttuser?.cccd}

                    </label>


                </div>
                <div class="w-full flex flex-col ">
                  <div>
                    <label className='font-bold' > Số điện thoại liên hệ </label>
                    <label className='text-red-500' >  </label>

                  </div>
                  <label className=" text-start mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    disabled  >
                   {user?.sdt}

                    </label>


                </div>
                <div class="w-full flex flex-col ">
                  <div>
                    <label className='font-bold' > Email </label>
                    <label className='text-red-500' >  </label>

                  </div>
                  <label className=" text-start mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    disabled placeholder='Nhập email ' type='email' >
                   {user?.email}

                    </label>


                </div>

              </div>
            </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">



            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Cơ quan thực hiện:</label>
              <p className="text-sm text-gray-900">{`${hoso.coQuanThucHien.tinh}, ${hoso.coQuanThucHien.huyen}, ${hoso.coQuanThucHien.xa}`}</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Địa chỉ khai báo:</label>
              <p className="text-sm text-gray-900">{hoso.diaChiKhaiBao}</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Địa chỉ cụ thể:</label>
              <p className="text-sm text-gray-900">{hoso.diaChiCuThe}</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Nội dung đề nghị:</label>
              <p className="text-sm text-gray-900">{hoso.noiDungDeNghi}</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Thời hạn:</label>
              <p className="text-sm text-gray-900">{hoso.thoiHan}</p>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-600 mb-1">Lệ phí:</label>
              <p className="text-sm text-gray-900">{hoso.lePhi} VND</p>
            </div>


          </div>

        </div>
      </div>
      <div className="col-span-2 mt-10">
      {hoso.trangThai === "Paying" && (
  <button onClick={handlePay} className="text-white bg-blue-500 px-4 py-2 rounded-md">
    Thanh toán
  </button>
)}

      </div>
    </div>




  );
}
