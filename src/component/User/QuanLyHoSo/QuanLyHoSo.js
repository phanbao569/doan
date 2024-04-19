import React, { useContext, useEffect, useState } from 'react'
import DiaChi from '../../Diachi'
import ApiConfig, { apiUrl } from '../../../ApiConfig';
import axios from 'axios';
import { getIDNguoiThayDoi } from '../../../util/jwtUtils';
import { GlobalContext } from '../../../App';
import moment from 'moment';
import { Link, useNavigate } from 'react-router-dom';

export default function QuanLyHoSo() {
 const navigate = useNavigate(); // Sử dụng hook useNavigate để chuyển trang(có thể dùng routes,Link)

  const [isLoaded, setIsLoaded] = useState(false);

  const [viewDSVB, setviewDSVL] = useState('');
  const [listDS, setlistDS] = useState(Object);
  const [listshow, setlistshow] = useState();
  const [detail,setdetail] = useState();
  const handleViewDetail = (value) => {
    setdetail(value);
    navigate("/xemchitiethoso", { state: { value } });
  }
  const handleClickPickViewVBPL = (e, value) => {
    setviewDSVL(value);
    console.log(value);
    if (value === undefined) setlistshow(listDS.giaHanTamTrus)
    if (value === "1") setlistshow(listDS.giaHanTamTrus)
    if (value === "2") setlistshow(listDS.thongBaoLuuTrus)
    if (value === "3") setlistshow(listDS.khaiBaoThuongTrus)
    if (value === "4") setlistshow(listDS.khaiBaoTamTrus)
    if (value === "5") setlistshow(listDS.khaiBaoTamVangs)
    if (value === "6") setlistshow(listDS.xoaDangKyThuongTrus)
    if (value === "7") setlistshow(listDS.xoaDangKyTamTrus)
    console.log(listshow);
  }
  const { user, ttuser } = useContext(GlobalContext)

  const fetchData = async () => {
    try {
      //console.log(form);
      const response = await axios.get(apiUrl(ApiConfig.getAllQuanLyHoSoUser(getIDNguoiThayDoi())));
      setlistDS(response.data);
      setlistshow(response.data.giaHanTamTrus)
      console.log(response.data);
      console.log("thanh cong");
      setIsLoaded(true);
    } catch (error) {
      console.error('Lỗi khi gửi dữ liệu:', error);
    }





  }
  useEffect(() => {
    fetchData();
  }, [ttuser]);


  return (
    <div>
      {isLoaded ? (
        <div className="flex h-screen">
          {/* Sidebar */}
          <div className="w-64 bg-white shadow-md">
            <div className="p-4">
              <h1 className="text-2xl font-bold mb-4">Danh sách hồ sơ</h1>
              <ul>
                <li onClick={(e) => { handleClickPickViewVBPL(e, "1") }} className="mb-4">
                  <a href="#" className="text-lg font-semibold text-gray-700 hover:text-blue-500">Gia hạn tạm trú</a>
                </li>
                <li onClick={(e) => { handleClickPickViewVBPL(e, "2") }} className="mb-4">
                  <a href="#" className="text-lg font-semibold text-gray-700 hover:text-blue-500">Thông baó lưu trú</a>
                </li>
                <li onClick={(e) => { handleClickPickViewVBPL(e, "3") }} className="mb-4">
                  <a href="#" className="text-lg font-semibold text-gray-700 hover:text-blue-500">Khai báo thường trú</a>
                </li>
                <li onClick={(e) => { handleClickPickViewVBPL(e, "4") }} className="mb-4">
                  <a href="#" className="text-lg font-semibold text-gray-700 hover:text-blue-500">Khai báo tạm trú</a>
                </li>
                <li onClick={(e) => { handleClickPickViewVBPL(e, "5") }} className="mb-4">
                  <a href="#" className="text-lg font-semibold text-gray-700 hover:text-blue-500">Khai báo tạm vắng</a>
                </li>
                <li onClick={(e) => { handleClickPickViewVBPL(e, "6") }} className="mb-4">
                  <a href="#" className="text-lg font-semibold text-gray-700 hover:text-blue-500">Xoá đăng ký thường trú </a>
                </li>
                <li onClick={(e) => { handleClickPickViewVBPL(e, "7") }} className="mb-4">
                  <a href="#" className="text-lg font-semibold text-gray-700 hover:text-blue-500">Xoá đăng ký tạm trú</a>
                </li>
              </ul>
            </div>
          </div>
          {/* Content */}
          <div className="flex-1   ">

            <div className="flex-1 ">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Số Thứ Tự</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Tên Mục</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày Tạo</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Nơi khai báo</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Trạng Thái</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {Object.entries(listshow).map(([id, item]) => (
                    <tr key={id}>
                      <td className="px-6 py-4 whitespace-nowrap">{parseInt(id) + 1}</td>
                      <td className="px-6  py-4 whitespace-nowrap">{item.tenThuTuc} </td>

                      <td className="px-6 py-4 whitespace-nowrap"> {moment(item.created_at).format('DD/MM/YYYY')}  </td>
                      <td className="px-6 py-4 whitespace-nowrap">{item.diaChiCuThe}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {(() => {
                        switch (item.trangThai) {
                          case "Checking":
                            return "Đang chờ xử lý";
                          case "Done":
                            return "Đã hoàn tất";
                          case "Cancelled":
                            return "Đã bị huỷ";
                          case "Paying":
                            return "Đã chờ thanh toán";
                          default:
                            return item.trangThai;
                        }
                      })()} 
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                      
                          <button onClick={() => {handleViewDetail(item)}} type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Xem chi tiết</button>
                      
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>




            </div>



          </div>
        </div>

      ) : (
        <div>Loading...</div>
      )}
    </div>

  )
}






