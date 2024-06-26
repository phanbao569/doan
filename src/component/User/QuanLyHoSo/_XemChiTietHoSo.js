import React, { useContext, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { GlobalContext } from '../../../App';
import { label, Form, Formik, getlabelProps } from 'formik';
import _DanhGiaHoSo from '../DanhGiaHoiDap/_DanhGiaHoSo';
import _XemDanhGiaHoSo from '.././DanhGiaHoiDap/_XemDanhGia';
import axios from 'axios';
import ApiConfig, { apiUrl } from '../../../ApiConfig';
import ThongTinNguoiKhaiBao from '../ThongTinNguoiKhaiBao';


export default function _XemChiTietHoSo() {
  const params = useParams();
  const location = useLocation();
  const { user, ttuser } = useContext(GlobalContext)
  const navigate = useNavigate(); // Sử dụng hook useNavigate để chuyển trang(có thể dùng routes,Link)
  const [isOpen, setIsOpen] = useState(false);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handlePay = async () => {
    try {
      console.log(hoso.id);
      console.log(hoso.lePhi);
      const response = await axios.get(apiUrl(ApiConfig.thanhtoan(hoso.lePhi, hoso.id)));
      // const response = await axios.get(`http://172.21.2.68:8888/pay/${hoso.lePhi}/${hoso.id}`);
      console.log(response.data);
      // navigate(response.data);
      window.location.href = response.data;
      console.log("thanh cong");
    } catch (error) {
      console.log("an lz ");
    }

  }

  const [hoso, sethoso] = useState(location.state.value);
  const [check, setCheck] = useState(location.state.value2);
  const handleclick = () => {
    console.log(hoso);
  }
  console.log(check);
  return (
    <div className="max-w-4xl min-h-screen mx-auto bg-white px-4 ">
      <div className="p-6">
        <h1 className="text-3xl mx-auto font-semibold mb-4 text-center">{hoso.tenThuTuc} </h1>
        <div  >
          <div className=' font-family-sans mx-auto' >
            <div className="mx-auto">
              <label className="block text-center text-sm font-semibold text-gray-600 mb-1">Trạng thái:</label>
              <p className="text-sm text-center mt-2 font-semibold">
                <span className={`inline-block mb-2 px-2 py-1 rounded-full ${hoso.trangThai === "Checking" ? "bg-green-500 text-white" :
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
          </div>
          <ThongTinNguoiKhaiBao ttuser={ttuser} user={user} />
          <div class="w-full flex flex-col ">
                <div>
                    <label className='font-bold text-center' > Phản hồi từ hệ thống </label>
                </div>
                <input className=" text-center mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                     value={hoso?.note} />
            </div>

        </div>



        <div className="grid grid-cols-1 mt-12 md:grid-cols-2 gap-6">



          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Cơ quan thực hiện:</label>
            <p className="text-sm text-gray-900">{`${hoso.coQuanThucHien.tinh}, ${hoso.coQuanThucHien.huyen}, ${hoso.coQuanThucHien.xa}`}</p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Địa chỉ khai báo,cơ sở (nếu có) :</label>
            <p className="text-sm text-gray-900">{hoso.tenCoSo}  </p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Địa chỉ cụ thể:</label>
            <p className="text-sm text-gray-900">{hoso.diaChiCuThe} - 
            {hoso?.diaChi?.tinh ? `${hoso?.diaChi?.tinh} ${hoso?.diaChi?.huyen} ${hoso?.diaChi?.xa}` : ""}
            {hoso?.diaChiLuuTru?.tinh ? `${hoso?.diaChiLuuTru?.tinh} ${hoso?.diaChiLuuTru?.huyen} ${hoso?.diaChiLuuTru?.xa}` : ""}
            {hoso?.diaChiTamTru?.tinh ? `${hoso?.diaChiTamTru?.tinh} ${hoso?.diaChiTamTru?.huyen} ${hoso?.diaChiTamTru?.xa}` : ""}

              </p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Nội dung đề nghị:</label>
            <p className="text-sm text-gray-900">{hoso.noiDungDeNghi}</p>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Thời hạn (nếu có):</label>
            <p className="text-sm text-gray-900">{hoso.thoiHan}</p>
          </div>
          <div onClick={handleclick} >
            <label className="block text-sm font-semibold text-gray-600 mb-1">Lệ phí:</label>
            <p className="text-sm text-gray-900">{hoso.lePhi} VND</p>
          </div>
       
          <div>
            <label className="block text-sm font-semibold  text-gray-600 mb-1">Hồ sơ liên quan</label>
            <div>
              <div className='flex' >
                {hoso && hoso.fileHoSoLienQuan && (
                  <>
                    {hoso.fileHoSoLienQuan.hs1 && (
                      <img className='mr-2'  src={hoso.fileHoSoLienQuan.hs1} style={{ width: '100px', height: '100px' }} />
                    )}
                    {hoso.fileHoSoLienQuan.hs2 && (
                      <img className='mr-2'  src={hoso.fileHoSoLienQuan.hs2} style={{ width: '100px', height: '100px' }} />
                    )}
                    {hoso.fileHoSoLienQuan.hs3 && (
                      <img className='mr-2'  src={hoso.fileHoSoLienQuan.hs3} style={{ width: '100px', height: '100px' }} />
                    )}
                    {hoso.fileHoSoLienQuan.hs4 && (
                      <img className='mr-2'  src={hoso.fileHoSoLienQuan.hs4} style={{ width: '100px', height: '100px' }} />
                    )}
                  </>
                )}
              </div>

            </div>

          </div>

        </div>

      </div>

      <div className="col-span-2  mt-10">
        <div className='mx-auto text-center '>
          {hoso.trangThai === "Paying" && (
            <button onClick={handlePay} className="text-white bg-blue-500 px-4 py-2 rounded-md">
              Thanh toán
            </button>
          )}
          {hoso.trangThai === "Done" && check.id == undefined && (
            <button onClick={togglePopup} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Đánh giá
            </button>
          )}
          {hoso.trangThai === "Done" && check.id !== undefined && (
            <button onClick={togglePopup} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
              Xem đánh giá
            </button>
          )}


        </div>


        {isOpen && (
          <div className="fixed mt-10 top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 items-center text-center rounded-lg shadow-lg">

              {hoso.trangThai === "Done" && check.id == undefined && (
                <div>
                  <h1 className='text-xl text-center ' >

                    ĐÁNH GIÁ HỒ SƠ
                  </h1>
                  <_DanhGiaHoSo user={user} hoSo={hoso} ttuser={ttuser} />

                </div>
              )}
              {hoso.trangThai === "Done" && check.id !== undefined && (
                <div>
                  <h1 className='text-xl text-center  ' >
                    XEM ĐÁNH GIÁ HỒ SƠ
                  </h1>
                  <_XemDanhGiaHoSo user={user} hoSo={hoso} ttuser={ttuser} check={check} />

                </div>

              )}
              <button onClick={togglePopup} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Đóng</button>
            </div>
          </div>
        )}
      </div>
    </div>




  );
}
