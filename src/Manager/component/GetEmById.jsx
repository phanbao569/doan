import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getIDNguoiThayDoi } from '../../util/jwtUtils';
import { IoIosSearch } from "react-icons/io";
import ApiConfig, { apiUrl } from '../../ApiConfig';

export default function GetEmById() {
  const { idUser } = useParams();
  const [formData, setFormData] = useState({});
 const [isEditable, setIsEditable] = useState(false);
 const [originalFormData, setOriginalFormData] = useState({ ...formData });
 
 
 useEffect(() => {
     console.log("id trước khi gửi yêu cầu get là: "+ idUser)
     const fetchUserData = async () => {
       try {
         const response = await axios.get(apiUrl(ApiConfig.getUserById(idUser)));
         setFormData(response.data);
         console(response.data)
       } catch (error) {
         console.error('Fetch VB info error:', error);
       }
     };
 
     fetchUserData();
   }, [idUser]);

     

 const handleSubmit = async (event) => {
     event.preventDefault(); 
     {
         const kiemtra = formData
         console.log("du lieu gui di" + JSON.stringify(kiemtra))
         try {

             // const response = await axios.post('http://172.16.0.147:8888/TTNV/create', formTTNV);
             const response = await axios.put(apiUrl(ApiConfig.updateUser), formData)
             const data = response.data;
             console.log(data)
             alert("thành công")
             
             //xử lí tạo post thông tin từ fromNV đưa đến backend
         } catch (error) {
             console.error('Lỗi khi lấy dữ liệu từ API:' + error);
         }
     }}
     const handleEditClick = () => {
         setIsEditable(!isEditable);
         if (!isEditable) {
             // Save original form data when entering edit mode
             setOriginalFormData({ ...formData });
         } else {
             // Reset form data to original values when exiting edit mode
             setFormData({ ...originalFormData });
     }};
 
     const handleChange = (e) => {
         const { id, value } = e.target;
         setFormData({
             ...formData,
             [id]: value
         });
     };
  return (
    <div className="flex justify-center items-center h-screen">
    <div className="w-full max-w-screen-md mx-auto">
        <div className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
            <div className="mb-4 grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                    <label htmlFor="idUser" className="font-bold mb-2">Id</label>
                    <input type="text" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="idUser" value={formData.idUser} onChange={(e) => { handleChange(e) }} readOnly={!isEditable} />
                </div>
                <div className="flex flex-col ">
                    <label htmlFor="hoTen" className="font-bold mb-2">Họ và tên</label>
                    <input type="text" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="hoTen" value={formData.hoTen} onChange={(e) => { handleChange(e) }} readOnly={!isEditable} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="cccd" className="font-bold mb-2">Số CCCD</label>
                    <input type="text" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cccd" value={formData.cccd} onChange={(e) => { handleChange(e) }} readOnly={!isEditable} />
                </div>
                {/* <div className="flex flex-col">
                    <label htmlFor="chucVu" className="font-bold mb-2">Chức vụ</label>
                    <input type="text" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="chucVu" value={formData.chucVu} onChange={(e) => { handleChange(e) }} readOnly={!isEditable} />
                </div> */}
                <div className="flex flex-col">
<label htmlFor="cccd" className="font-bold mb-2">Ảnh mặt</label>
<img src={formData?.anhCCCD?.anhMat} alt="Ảnh mặt" />
</div>

               {isEditable ? (
  <div className="flex flex-col">
      <label htmlFor="tinhTrangTK" className="font-bold mb-2">Tình Trạng TK</label>
      <select
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="tinhTrangTK"
          value={formData.tinhTrangTK}
          onChange={(e) => handleChange(e)}
      >
          <option value="Locked">Locked</option>
          <option value="Active">Active</option>
          <option value="Checking">Checking</option>
      </select>
      
  </div>
) : (
  <div className="flex flex-col">
      <label htmlFor="tinhTrangTK" className="font-bold mb-2">Tình Trạng TK
      </label>
      <input
          type="text"
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="tinhTrangTK"
          value={formData.tinhTrangTK}
          onChange={(e) => handleChange(e)}
          readOnly={!isEditable}
      />
     
         
    
  </div>
)}
                <div className="flex flex-col">
                    <label htmlFor="sdt" className="font-bold mb-2">Số điện thoại</label>
                    <input type="text" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="sdt" value={formData.sdt} onChange={(e) => { handleChange(e)}} readOnly={!isEditable} />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="email" className="font-bold mb-2">Email</label>
                    <input type="email" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" value={formData.email} onChange={(e) => { handleChange(e); }} readOnly={!isEditable} />
                </div>
            </div>
            {isEditable ? (
  <div className="flex flex-col">
      <label htmlFor="tinhTrangTK" className="font-bold mb-2">Chức vụ</label>
      <select
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="role"
          value={formData.role}
          onChange={(e) => handleChange(e)}
      >
          <option value="User">User</option>
          <option value="Employee">Employee</option>
          <option value="Mangager">Mangager</option>
          <option value="Admin">Admin</option>
      </select>
      
  </div>
) : (
  <div className="flex flex-col">
      <label htmlFor="tinhTrangTK" className="font-bold mb-2">Chức vụ
      </label>
      <input
          type="text"
          className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="tinhTrangTK"
          value={formData.role}
          onChange={(e) => handleChange(e)}
          readOnly={!isEditable}
      />
     
         
    
  </div>
)}
            <div className="flex justify-end mt-4">
                <button type="button" className={`btn ${isEditable ? "btn-secondary me-2" : "btn-primary"}`} onClick={handleEditClick}>
                    {isEditable ? "Hủy" : "Sửa"}
                </button>
                {isEditable && (
                    <button type="button" className="btn btn-primary" onClick={(event) => { handleEditClick(); handleSubmit(event); }}>
                        Lưu
                    </button>
                )}
            </div>
        </div>
    </div>
</div>
  )
}
