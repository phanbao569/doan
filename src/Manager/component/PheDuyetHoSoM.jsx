import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ApiConfig, { apiUrl } from '../../ApiConfig';
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import { MdManageAccounts } from "react-icons/md";
import { FaCaretRight, FaEye } from "react-icons/fa";
import { getIDNguoiThayDoi } from '../../util/jwtUtils';
import { ToastContainer } from 'react-toastify';

export default function PheDuyetHoSoM() {

  const [giaHanTamTrus, setGiaHanTamTrus] = useState([]);
  const [thongBaoLuuTrus, setThongBaoLuuTrus] = useState([]);
  const [xoaDangKyTamTrus, setXoaDangKyTamTrus] = useState([]);
  const [xoaDangKyThuongTrus, setXoaDangKyThuongTrus] = useState([]);
  const [khaiBaoTamVangs, setKhaiBaoTamVangs] = useState([]);
  const [khaiBaoThuongTrus, setKhaiBaoThuongTrus] = useState([]);
  const [khaiBaoTamTrus, setKhaiBaoTamTrus] = useState([]);
  const [showDanhSach, setShowDanhSach] = useState(false);
  const [showThongTin, setShowThongTin] = useState(false);
  const id = getIDNguoiThayDoi();
  const [danhSach, setDanhSach] = useState([]);
  const navigate = useNavigate();
  const [type, setType] = useState('');
  const handleViewDetail = (value) => {
    switch (type) {
      // Xử lý hiển thị dữ liệu tương ứng với giaHanTamTrus
      case 'giaHanTamTrus':
        navigate("/GiaHanTamTruM", { state: { value } });
        break;
      // Xử lý hiển thị dữ liệu tương ứng với khaiBaoTamTrus
      case 'khaiBaoTamTrus':
        navigate("/KhaiBaoTamTruM", { state: { value } });
        break;
      // Xử lý hiển thị dữ liệu tương ứng với khaiBaoTamVangs
      case 'khaiBaoTamVangs':
        navigate("/KhaiBaoTamVangM", { state: { value } });
        break;
      // Xử lý hiển thị dữ liệu tương ứng với khaiBaoThuongTrus
      case 'khaiBaoThuongTrus':
        navigate("/KhaiBaoThuongTruM", { state: { value } });
        break;
      // Xử lý hiển thị dữ liệu tương ứng với thongBaoLuuTrus
      case 'thongBaoLuuTrus':
        navigate("/ThongBaoLuuTruM", { state: { value } });
        break;
      // Xử lý hiển thị dữ liệu tương ứng với xoaDangKyTamTrus
      case 'xoaDangKyTamTrus':
        navigate("/XoaDangKyTamTruM", { state: { value } });
        break;
      // Xử lý hiển thị dữ liệu tương ứng với xoaDangKyThuongTrus
      case 'xoaDangKyThuongTrus':
        navigate("/XoaDangKyThuongTruM", { state: { value } });
        break;
      default:
        break;
    }
  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl(ApiConfig.getTTAdmin(id)));
        let data = response.data.coQuan;
        console.log(data);
        const response2 = await axios.post(apiUrl(ApiConfig.getAllHoSoCheckingByCoQuan), data);
        setGiaHanTamTrus(response2.data.giaHanTamTrus);
        setThongBaoLuuTrus(response2.data.thongBaoLuuTrus);
        setKhaiBaoTamVangs(response2.data.khaiBaoTamVangs);
        setKhaiBaoThuongTrus(response2.data.khaiBaoThuongTrus);
        setKhaiBaoTamTrus(response2.data.khaiBaoTamTrus);
        setXoaDangKyTamTrus(response2.data.xoaDangKyTamTrus);
        setXoaDangKyThuongTrus(response2.data.xoaDangKyThuongTrus);

        // setCities(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  const toggleForm = () => {
    // Cập nhật trạng thái của form
    setShowDanhSach(!showDanhSach);
  };
  const handleClick = (type) => {
    switch (type) {
      // Xử lý hiển thị dữ liệu tương ứng với giaHanTamTrus
      case 'giaHanTamTrus':
        console.log('Gia hạn tạm trú');
        setType(type);
        if (giaHanTamTrus && giaHanTamTrus.length > 0) {
          const ds = giaHanTamTrus.map(item => ({
            id: item.id,
            ngayTao: formatDate(item.created_at),
            diaChi: item.diaChiTamTru.xa + ' - ' + item.diaChiTamTru.tinh + ' - ' + item.diaChiTamTru.huyen
            // Thêm các trường khác bạn quan tâm từ item
          }))
          setDanhSach(ds);
        }
        else setDanhSach([{ id: '-', ngayTao: '-', diaChi: '-' }]);
        setShowThongTin(true);
        break;
      // Xử lý hiển thị dữ liệu tương ứng với khaiBaoTamTrus
      case 'khaiBaoTamTrus':
        console.log('Khai báo tạm trú');
        setType(type);
        if (khaiBaoTamTrus && khaiBaoTamTrus.length > 0) {
          const ds = khaiBaoTamTrus.map(item => ({
            id: item.id,
            ngayTao: formatDate(item.created_at),
            diaChi: item.diaChiTamTru.xa + ' - ' + item.diaChiTamTru.tinh + ' - ' + item.diaChiTamTru.huyen
            // Thêm các trường khác bạn quan tâm từ item
          }))
          setDanhSach(ds);

        }
        else setDanhSach([{ id: '-', ngayTao: '-', diaChi: '-' }]);
        setShowThongTin(true);
        break;
      // Xử lý hiển thị dữ liệu tương ứng với khaiBaoTamVangs
      case 'khaiBaoTamVangs':
        console.log('Khai báo tạm vắng');
        setType(type);
        if (khaiBaoTamVangs && khaiBaoTamVangs.length > 0) {
          const ds = khaiBaoTamVangs.map(item => ({
            id: item.id,
            ngayTao: formatDate(item.created_at),
            diaChi: item.diaChi.xa + ' - ' + item.diaChi.tinh + ' - ' + item.diaChi.huyen
          }))
          setDanhSach(ds);

        }
        else setDanhSach([{ id: '-', ngayTao: '-', diaChi: '-' }]);
        setShowThongTin(true);
        break;
      // Xử lý hiển thị dữ liệu tương ứng với khaiBaoThuongTrus
      case 'khaiBaoThuongTrus':
        setType(type);
        if (khaiBaoThuongTrus && khaiBaoThuongTrus.length > 0) {
          const ds = khaiBaoThuongTrus.map(item => ({
            id: item.id,
            ngayTao: formatDate(item.created_at),
            diaChi: item?.diaChiThuongTru?.xa + ' - ' + item?.diaChiThuongTru?.tinh + ' - ' + item?.diaChiThuongTru?.huyen
            // Thêm các trường khác bạn quan tâm từ item
          }))
          setDanhSach(ds);
        }
        else setDanhSach([{ id: '-', ngayTao: '-', diaChi: '-' }]);
        setShowThongTin(true);

        break;
      // Xử lý hiển thị dữ liệu tương ứng với thongBaoLuuTrus
      case 'thongBaoLuuTrus':
        console.log('Thông báo lưu trú');
        setType(type);
        if (thongBaoLuuTrus && thongBaoLuuTrus.length > 0) {
          const ds = thongBaoLuuTrus.map(item => ({
            id: item.id,
            ngayTao: formatDate(item.created_at),
            diaChi: item.diaChiLuuTru.xa + ' - ' + item.diaChiLuuTru.tinh + ' - ' + item.diaChiLuuTru.huyen
            // Thêm các trường khác bạn quan tâm từ item
          }))
          setDanhSach(ds);
        }
        else setDanhSach([{ id: '-', ngayTao: '-', diaChi: '-' }]);
        setShowThongTin(true);
        break;
      // Xử lý hiển thị dữ liệu tương ứng với xoaDangKyTamTrus
      case 'xoaDangKyTamTrus':
        console.log('Xóa đăng ký tạm trú');
        setType(type);
        if (xoaDangKyTamTrus && xoaDangKyTamTrus.length > 0) {
          const ds = xoaDangKyTamTrus.map(item => ({
            id: item.id,
            ngayTao: formatDate(item.created_at),
            diaChi: item.coQuanThucHien.xa + ' - ' + item.coQuanThucHien.tinh + ' - ' + item.coQuanThucHien.huyen
            // Thêm các trường khác bạn quan tâm từ item
          }))
          setDanhSach(ds);
        }
        else setDanhSach([{ id: '-', ngayTao: '-', diaChi: '-' }]);
        setShowThongTin(true);

        break;
      // Xử lý hiển thị dữ liệu tương ứng với xoaDangKyThuongTrus
      case 'xoaDangKyThuongTrus':
        console.log('Xóa đăng ký thường trú');
        setType(type);
        if (xoaDangKyThuongTrus && xoaDangKyThuongTrus.length > 0) {
          const ds = xoaDangKyThuongTrus.map(item => ({
            id: item.id,
            ngayTao: formatDate(item.created_at),
            diaChi: item.coQuanThucHien.xa + ' - ' + item.coQuanThucHien.tinh + ' - ' + item.coQuanThucHien.huyen
            // Thêm các trường khác bạn quan tâm từ item
          }))
          setDanhSach(ds);

        }
        else setDanhSach([{ id: '-', ngayTao: '-', diaChi: '-' }]);
        setShowThongTin(true);
        break;
      default:
        setType(type);
        break;
    }
  };


  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div className='w-full min-h-screen mt-4 text-center' >
      <ToastContainer />
      <div className='flex '>
        <div className='h-screen -mt-6 bg-gray-800'>
          <NavLink to='/PheDuyetTaiKhoanM' className='flex w-225 h-10 text-white bg-gray-800  items-center gap-2 p-2 my-2'>
            <MdManageAccounts className='' />
            Phê duyệt tài khoản
          </NavLink>
          <NavLink to='/PheDuyetHoSoM' onClick={toggleForm} className='flex w-225 h-10 text-white bg-gray-800  items-center gap-2 p-2'>
            <MdManageAccounts className='' />
            Phê duyệt hồ sơ
          </NavLink>

          {/* Form show danh sách các thủ tục*/}
          {showDanhSach && (
            <div className='w-225 h-auto flex flex-col text-start gap-1 p-1 text-white'
              style={{
                maxHeight: showDanhSach ? '500px' : '0',
                overflow: 'hidden',
                transition: 'max-height 0.5s ease-out',
                transform: showDanhSach ? 'translateY(0)' : 'translateY(-100%)',
              }}
            >
              <Link className='flex items-center gap-1 hover:text-black' onClick={() => handleClick('giaHanTamTrus')}>
                <FaCaretRight />
                Gia hạn tạm trú ({giaHanTamTrus == null ? 0 : giaHanTamTrus.length})
              </Link>
              <Link className='flex items-center gap-1 hover:text-black' onClick={() => handleClick('khaiBaoTamTrus')}>
                <FaCaretRight />
                Khai báo tạm trú ({khaiBaoTamTrus == null ? 0 : khaiBaoTamTrus.length})
              </Link>
              <Link className='flex items-center gap-1 hover:text-black' onClick={() => handleClick('khaiBaoTamVangs')}>
                <FaCaretRight />
                Khai báo tạm vắng ({khaiBaoTamVangs == null ? 0 : khaiBaoTamVangs.length})
              </Link>
              <Link className='flex items-center gap-1 hover:text-black' onClick={() => handleClick('khaiBaoThuongTrus')}>
                <FaCaretRight />
                Khai báo thường trú ({khaiBaoThuongTrus == null ? 0 : khaiBaoThuongTrus.length})
              </Link>
              <Link className='flex items-center gap-1 hover:text-black' onClick={() => handleClick('thongBaoLuuTrus')}>
                <FaCaretRight />
                Thông báo lưu trú ({thongBaoLuuTrus == null ? 0 : thongBaoLuuTrus.length})
              </Link>
              <Link className='flex items-center gap-1 hover:text-black' onClick={() => handleClick('xoaDangKyTamTrus')}>
                <FaCaretRight />
                Xóa đăng ký tạm trú ({xoaDangKyTamTrus == null ? 0 : xoaDangKyTamTrus.length})
              </Link>
              <Link className='flex items-center gap-1 hover:text-black' onClick={() => handleClick('xoaDangKyThuongTrus')}>
                <FaCaretRight />
                Xóa đăng ký thường trú ({xoaDangKyThuongTrus == null ? 0 : xoaDangKyThuongTrus.length})
              </Link>
            </div>
          )}
        </div>
        {/* Form thông tin  */}
        {showThongTin && (
          <div className='w-full'>
            {/* <div className='p-2'> */}
            <h1 className='block text-2xl font-fontgg font-bold mb-4'>Danh sách thủ tục</h1>
            <table className="w-full pb-8 text-sm text-center  rtl:text-right text-gray-500 dark:text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-600">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    STT
                  </th>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Địa chỉ
                  </th>
                  <th scope="col" className="px-7 py-3">
                    Ngày tạo
                  </th>
                  <th scope="col" className="px-7 py-3">
                    <FaEye className='m-auto' />
                  </th>
                </tr>
              </thead>
              <tbody>
                {danhSach.map((item, index) => (
                  <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {item.id == '-' ? '-' : index + 1}
                    </th>
                    <td className="px-6 py-4">
                      {item.id}
                    </td>
                    <td className="px-6 py-4">
                      {item.diaChi}
                    </td>
                    <td className="px-6 py-4">
                      {item.ngayTao}
                    </td>

                    <td className="px-6 py-4 ">
                      <div onClick={() => handleViewDetail(item.id)} className="text-black   dark:text-black cursor-pointer">
                        {item.id == '-' ? '-' : 'Xem hồ sơ'}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div >

  )
}
