import React, { useContext, useEffect, useState } from 'react'
import DiaChi from '../../Diachi'
import ApiConfig, { apiUrl } from '../../../ApiConfig';
import axios from 'axios';
import { getIDNguoiThayDoi } from '../../../util/jwtUtils';
import { GlobalContext } from '../../../App';
import moment from 'moment';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../../Loading';
import { FaSearch } from "react-icons/fa";

export default function QuanLyHoSo() {
  const navigate = useNavigate(); // Sử dụng hook useNavigate để chuyển trang(có thể dùng routes,Link)

  const [isLoaded, setIsLoaded] = useState(false); //

  const [viewDSVB, setviewDSVL] = useState('');
  const [listDS, setlistDS] = useState(Object);
  const [listshow, setlistshow] = useState();
  const [detail, setdetail] = useState();
  const handleViewDetail = async (value) => {

    setdetail(value);
    const response = await axios.get(apiUrl(ApiConfig.getDanhGiaHoSo(value.id)));
    console.log(response.data);
    // console.log();
    navigate("/xemchitiethoso", { state: { value, value2: response.data } });
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

      setIsLoaded(true);
    } catch (error) {
      console.error('Lỗi khi gửi dữ liệu:', error);
    }
  }
  useEffect(() => {
    window.scrollTo(0, 0);

    fetchData();
  }, [ttuser]);


  return (
    <div className='w-full mt-4' >
      {isLoaded ? (
        <div className='flex flex-col'>
          <div className=' ' >
            <Link to={'/TraCuu'} >
              <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 flex gap-2"> <FaSearch className='mt-1' /> Tra cứu hồ sơ theo CCCD </button>
            </Link>
          </div>
          <div className="flex mt-4 min-h-screen w-full">
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
                      <th className="px-6 py-3 font-bold text-center text-xs  text-gray-500 uppercase tracking-wider">STT</th>
                      <th className="px-6 py-3 font-bold text-center text-xs  text-gray-500 uppercase tracking-wider">Tên Mục</th>
                      <th className="px-6 py-3 font-bold text-center text-xs  text-gray-500 uppercase tracking-wider">Ngày Tạo</th>
                      <th className="px-6 py-3 font-bold text-center text-xs  text-gray-500 uppercase tracking-wider">Nơi khai báo</th>
                      <th className="px-6 py-3 font-bold text-center text-xs  text-gray-500 uppercase tracking-wider">Trạng Thái</th>
                      <th className="px-6 py-3 font-bold text-center text-xs  text-gray-500 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {Object.entries(listshow).map(([id, item]) => (
                      <tr key={id}>
                        <td className="px-6 text-center mx-auto py-4 whitespace-nowrap">{parseInt(id) + 1}</td>
                        <td className="px-6  py-4 whitespace-nowrap">

                          {
                            item?.tenThuTuc?.length > 20 ? item?.tenThuTuc.slice(0, 20) + '...' : item?.tenThuTuc

                          }                         </td>

                        <td className="px-6 py-4 whitespace-nowrap"> {moment(item?.created_at).format('DD/MM/YYYY')}  </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {
                            item?.diaChiCuThe?.length > 20 ? item?.diaChiCuThe.slice(0, 20) + '...' : item?.diaChiCuThe

                          }

                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {(() => {
                            switch (item?.trangThai) {
                              case "Checking":
                                return <span className="text-gray-500">Đang chờ xử lý</span>;
                              case "Done":
                                return <span className="text-green-500">Đã hoàn tất</span>;
                              case "Cancelled":
                                return <span className="text-red-500">Đã bị huỷ</span>;
                              case "Paying":
                                return <span className="text-yellow-500">Đang chờ thanh toán</span>;
                              default:
                                return <span>{item?.trangThai}</span>;
                            }
                          })()}
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap">

                          <button onClick={() => { handleViewDetail(item) }} type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800  rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Xem chi tiết</button>

                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>




              </div>



            </div>
          </div>
        </div>


      ) : (
        <div><Loading /></div>
      )}
    </div>

  )
}






