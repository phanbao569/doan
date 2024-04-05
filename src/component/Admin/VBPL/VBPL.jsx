import React, { useState, useEffect } from 'react';
import { getIDNguoiThayDoi,isTokenExpired } from '../../../util/jwtUtils';
import axios from 'axios';
import ApiConfig, { apiUrl } from '../../../ApiConfig';
export default function VBPL() {
  const [formData, setFormData]= useState({
    tenThuTuc:'',
    coQuanThucHien:'',
    cachThucThucHien:'',
    trinhTuThucHien:'',
    thoiHanGiaiQuyet:'',
    lePhi:'',
    thanhPhanHoSo:'',
    yeuCauDieuKien:'',
    canCuPhapLy:'',
    ketQuaThucHien:'',
    idNguoiThayDoi:'0',
  })

  useEffect(() => {
    // Kiểm tra xem token có hợp lệ không khi component được render
    const isValidToken = !isTokenExpired();
    if (isValidToken) {
      const idNTD = getIDNguoiThayDoi();
      if (idNTD !== null) {
        setFormData(prevState => ({
          ...prevState,
          idNguoiThayDoi: idNTD
        }));
      }
      console.log(localStorage.getItem('token'))
      console.log(idNTD);
    }
  }, []);
  
  const handleSubmit = async (event) => {
   event.preventDefault();
  
    console.log('Dữ liệu được gửi đi:', formData);
    try {
       const response = await axios.post(apiUrl(ApiConfig.createVBPL), formData);
      console.log('Response from server:', response.data);
    } catch (error) {
      alert('đăng kí thất bại do ' + error.response.data);
      
    }
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
      {
      setFormData(prevState => ({
        ...prevState,[name]: value
}));
    }
  }
  
  return (
    <div className='grid-container' style={{ display: "flex", justifyContent: "center", alignItems: "center" ,marginTop:"20px"}}>
      <div className='' style={{ width: "60%", padding: "20px", border: "1px solid #ccc", borderRadius: "5px", backgroundColor: "#f9f9f9" }}>
      
      <div>
      <form style={{ maxWidth: "100%", margin: "0 auto" }}>
          <div style={{ display: "flex", marginBottom: "10px" }}>
            <label htmlFor="tenThuTuc" style={{ marginRight: "10px", minWidth: "200px", marginBottom: "5px",textAlign: "left" }}>Tên Thủ Tục:</label>
            <input onChange={handleInputChange} type="text" id="tenThuTuc" name="tenThuTuc" style={{ flex: "1", padding: "10px" }}/>
          </div>

          <div style={{ display: "flex", marginBottom: "10px" }}>
            <label htmlFor="coQuanThucHien" style={{ marginRight: "10px", minWidth: "200px", marginBottom: "5px" , textAlign: "left"}}>Cơ Quan Thực Hiện:</label>
            <input  onChange={handleInputChange} type="text" id="coQuanThucHien" name="coQuanThucHien" style={{ flex: "1", padding: "10px" }}/>
          </div>

         <div style={{ display: "flex", marginBottom: "10px" }}>
            <label htmlFor="cachThucThucHien" style={{ marginRight: "10px", minWidth: "200px", marginBottom: "5px",textAlign: "left" }}>Cách Thức Thực Hiện:</label>
            <input  onChange={handleInputChange} type="text" id="cachThucThucHien" name="cachThucThucHien" style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", boxSizing: "border-box" }}/>
          </div>

         <div style={{ display: "flex", marginBottom: "10px" }}>
            <label htmlFor="trinhTuThucHien" style={{ marginRight: "10px", minWidth: "200px", marginBottom: "5px",textAlign: "left" }}>Trình Tự Thực Hiện:</label>
            <textarea  onChange={handleInputChange} id="trinhTuThucHien" name="trinhTuThucHien" style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", boxSizing: "border-box" }}></textarea>
          </div>

         <div style={{ display: "flex", marginBottom: "10px" }}>
            <label htmlFor="thoiHanGiaiQuyet" style={{ marginRight: "10px", minWidth: "200px", marginBottom: "5px",textAlign: "left" }}>Thời Hạn Giải Quyết:</label>
            <input  onChange={handleInputChange} type="text" id="thoiHanGiaiQuyet" name="thoiHanGiaiQuyet" style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", boxSizing: "border-box" }}/>
          </div>

         <div style={{ display: "flex", marginBottom: "10px" }}>
            <label htmlFor="lePhi" style={{ marginRight: "10px", minWidth: "200px", marginBottom: "5px",textAlign: "left" }}>Lệ Phí:</label>
            <input  onChange={handleInputChange} type="text" id="lePhi" name="lePhi" style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", boxSizing: "border-box" }}/>
          </div>

         <div style={{ display: "flex", marginBottom: "10px" }}>
            <label htmlFor="thanhPhanHoSo" style={{ marginRight: "10px", minWidth: "200px", marginBottom: "5px",textAlign: "left" }}>Thành Phần Hồ Sơ:</label>
            <textarea  onChange={handleInputChange} id="thanhPhanHoSo" name="thanhPhanHoSo" style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", boxSizing: "border-box" }}></textarea>
          </div>

         <div style={{ display: "flex", marginBottom: "10px" }}>
            <label htmlFor="yeuCauDieuKien" style={{ marginRight: "10px", minWidth: "200px", marginBottom: "5px",textAlign: "left" }}>Yêu Cầu Điều Kiện:</label>
            <textarea  onChange={handleInputChange} id="yeuCauDieuKien" name="yeuCauDieuKien" style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", boxSizing: "border-box" }}></textarea>
          </div>

         <div style={{ display: "flex", marginBottom: "10px" }}>
            <label htmlFor="canCuPhapLy" style={{ marginRight: "10px", minWidth: "200px", marginBottom: "5px",textAlign: "left" }}>Căn Cứ Pháp Lý:</label>
            <textarea  onChange={handleInputChange} id="canCuPhapLy" name="canCuPhapLy" style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", boxSizing: "border-box" }}></textarea>
          </div>

         <div style={{ display: "flex", marginBottom: "10px" }}>
            <label htmlFor="ketQuaThucHien" style={{ marginRight: "10px", minWidth: "200px", marginBottom: "5px",textAlign: "left" }}>Kết Quả Thực Hiện:</label>
            <textarea  onChange={handleInputChange} id="ketQuaThucHien" name="ketQuaThucHien" style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", boxSizing: "border-box" }}></textarea>
          </div>
          <button onClick={handleSubmit} style={{ width: "100%", padding: "10px", marginTop: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>gửi</button>
        </form>
      </div>
    </div>
 
    </div>
  );
}
