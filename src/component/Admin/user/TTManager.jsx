import React, { useState, useEffect } from 'react';
import DiaChi from '../../Diachi';
import axios from 'axios';
import ApiConfig, { apiUrl } from '../../../ApiConfig';
import { Link } from 'react-router-dom';
export default function TTManager() {
  const [formData,setFormData]=useState([]
);


  useEffect(() => {
    fetchAllUser();
  }, []);

  const fetchAllUser = async () => {
    try {
      const response = await axios.get(apiUrl(ApiConfig.getAllUser));
     
      setFormData(response.data);
      console.log(formData)
    } catch (error) {
      console.error('Fetch products error:', error);
    }
  };
  
  return (
    <div className='container' style={{ display: "flex", justifyContent: "space-between", flexDirection: "row-reverse",color:"#000" }}>
    <div className='container' style={{ width: "100%", padding: "20px", borderRadius: "5px"}}>
    <Link to={`/createmanager`} className='button-xemvb'>Thêm mới</Link>
              <table style={{ width:"90%", margin: "0 auto", borderCollapse: "collapse" }}>
                
                <tr style={{ height: "50px" }}>
                  <th  style={{ margin:"5 px", padding: "5px 10px", border: "1px dashed #ddd" }}>Id manager</th>
                  <th  style={{ padding: "5px 10px",border: "1px dashed #ddd" }}>Họ tên manager</th>
                  <th  style={{ padding: "5px 10px", border: "1px dashed #ddd" }}>Chức vụ</th>
                  <th  style={{ padding: "5px 10px", border: "1px dashed #ddd" }}>Email</th>
                  <th  style={{ padding: "5px 10px", border: "1px dashed #ddd" }}>Số điện thoại</th>
                </tr>
      <tbody>
        
                  {formData.map((item, index) => (
                    item.role === "Manager" && (
      <tr key={index}>
          <td  style={{  padding: "5px 10px", border: "1px dashed #ddd" }}>{item.idUser}</td>
          <td  style={{  padding: "5px 10px", border: "1px dashed #ddd" }}>{item.hoTen}</td>
          <td  style={{  padding: "5px 10px", border: "1px dashed #ddd" }}>{item.role}</td>
          <td  style={{  padding: "5px 10px", border: "1px dashed #ddd" }}>{item.email}</td>
          <td  style={{  padding: "5px 10px", border: "1px dashed #ddd" }}>{item.sdt}</td>
          <td style={{ padding: "5px 10px", border: "1px dashed #ddd" }}>
                <Link to={`/xem-user/${item.idUser}`} className='button-xemvb'>Xem</Link>
                
              </td>
          
      </tr>
  )
  ))}
</tbody>

 {/* <tbody>
                  {user.map((item, index) => (
      <tr key={index}>
          <td  style={{  padding: "5px 10px", border: "1px dashed #ddd" }}>{item.idUser}</td>
          <td  style={{  padding: "5px 10px", border: "1px dashed #ddd" }}>{item.hoTen}</td>
          <td  style={{  padding: "5px 10px", border: "1px dashed #ddd" }}>{item.role}</td>
          <td  style={{  padding: "5px 10px", border: "1px dashed #ddd" }}>{item.email}</td>
          <td  style={{  padding: "5px 10px", border: "1px dashed #ddd" }}>{item.sdt}</td>
          <td style={{ padding: "5px 10px", border: "1px dashed #ddd" }}>
                <Link to={`/xem-user/${item.idUser}`} className='button-xemvb'>Xem</Link>
                
              </td>
          
      </tr>
  ))}
</tbody> */}
              </table>

          </div>
  
      </div>
  )
}
