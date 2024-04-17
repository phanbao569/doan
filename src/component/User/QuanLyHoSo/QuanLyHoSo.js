import React, { useContext, useEffect, useState } from 'react'
import DiaChi from '../../Diachi'
import ApiConfig, { apiUrl } from '../../../ApiConfig';
import axios from 'axios';
import { getIDNguoiThayDoi } from '../../../util/jwtUtils';
import { GlobalContext } from '../../../App';

export default function QuanLyHoSo() {

    const[viewDSVB,setviewDSVL]= useState('');
    const [listDS,setlistDS] = useState(Object);
  const[listshow,setlistshow] = useState();
   const handleClickPickViewVBPL = (e,value) => {
        setviewDSVL(value);
        console.log(value);
        if(value==="1") setlistshow(listDS.giaHanTamTrus)
        if(value==="2") setlistshow(listDS.thongBaoLuuTrus)
        if(value==="3") setlistshow(listDS.khaiBaoThuongTrus)
        if(value==="4") setlistshow(listDS.khaiBaoTamTrus)
        if(value==="5") setlistshow(listDS.khaiBaoTamVangs)
        if(value==="6") setlistshow(listDS.xoaDangKyThuongTrus)
        if(value==="7") setlistshow(listDS.xoaDangKyTamTrus)
        console.log(listshow);
    }
    const { user, ttuser } = useContext(GlobalContext)

    const fetchData = async () => {
      try {
        //console.log(form);
      const response = await axios.get(apiUrl(ApiConfig.quanlydanhsachchoxuly(getIDNguoiThayDoi())));
      setlistDS(response.data);
      console.log(response.data); 
      console.log("thanh cong");
   //   navigate('/');
    } catch (error) {
      console.error('Lỗi khi gửi dữ liệu:', error);
    }





    }
    useEffect(() => {
      fetchData();
    }, [ttuser]);
    return (


        <div className="flex h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-md">
          <div className="p-4">
            <h1 className="text-2xl font-bold mb-4">Danh sách hồ sơ</h1>
            <ul>
              <li onClick={(e) => {handleClickPickViewVBPL(e,"1")}}  className="mb-4">
                <a  href="#" className="text-lg font-semibold text-gray-700 hover:text-blue-500">Gia hạn tạm trú</a>
              </li>
              <li  onClick={(e) => {handleClickPickViewVBPL(e,"2")}}  className="mb-4">
                <a href="#" className="text-lg font-semibold text-gray-700 hover:text-blue-500">Thông baó lưu trú</a>
              </li>
              <li onClick={(e) => {handleClickPickViewVBPL(e,"3")}} className="mb-4">
                <a href="#" className="text-lg font-semibold text-gray-700 hover:text-blue-500">Khai báo thường trú</a>
              </li>
              <li onClick={(e) => {handleClickPickViewVBPL(e,"4")}} className="mb-4">
                <a href="#" className="text-lg font-semibold text-gray-700 hover:text-blue-500">Khai báo tạm trú</a>
              </li>
              <li onClick={(e) => {handleClickPickViewVBPL(e,"5")}} className="mb-4">
                <a href="#" className="text-lg font-semibold text-gray-700 hover:text-blue-500">Khai báo tạm vắng</a>
              </li>
              <li onClick={(e) => {handleClickPickViewVBPL(e,"6")}} className="mb-4">
                <a href="#" className="text-lg font-semibold text-gray-700 hover:text-blue-500">Xoá đăng ký thường trú </a>
              </li>
              <li onClick={(e) => {handleClickPickViewVBPL(e,"7")}} className="mb-4">
                <a href="#" className="text-lg font-semibold text-gray-700 hover:text-blue-500">Xoá đăng ký tạm trú</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Content */}
        <div className="flex-1 bg-gray-200 p-8">
          <div className="container mx-auto">

            <div className="flex-1 bg-gray-200 p-8">
                <div className="container mx-auto">
                {Object.entries(listshow).map(([id, item]) => (
            <li key={id} className="py-2">
              <div className="flex items-center">
                <div> 
                <span className="mr-2">{id}.</span>
                <span>{item.tenThuTuc}</span>
                <span>{item.trangThai}</span>
                  </div>
            
              </div>
            </li>
          ))}
                 
                </div>
            </div>
   

          </div>
        </div>
      </div>
      
      

    )
}
