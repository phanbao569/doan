import React, { useState, useEffect } from 'react';
import DiaChi from '../../Diachi';
import axios from 'axios';
import ApiConfig, { apiUrl } from '../../../ApiConfig';
import { Link } from 'react-router-dom';
import users from '../../../testdulieu/trangTinh';
import Pagination from './Pagination';
export default function TTUser() {

  const [formData,setFormData]=useState([]
);
// test
const [user,setUser]=useState([]
  );
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Hàm để chuyển đến trang tiếp theo
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  // Hàm để chuyển đến trang trước đó
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };



  //test
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
              <table style={{ width:"90%", margin: "0 auto", borderCollapse: "collapse" }}>
                
                <tr style={{ height: "50px" }}>
                  <th  style={{ margin:"5 px", padding: "5px 10px", border: "1px dashed #ddd" }}>Id user</th>
                  <th  style={{ padding: "5px 10px",border: "1px dashed #ddd" }}>Họ tên user</th>
                  <th  style={{ padding: "5px 10px", border: "1px dashed #ddd" }}>Chức vụ</th>
                  <th  style={{ padding: "5px 10px", border: "1px dashed #ddd" }}>Ảnh</th>
                  <th  style={{ padding: "5px 10px", border: "1px dashed #ddd" }}>Email</th>
                  <th  style={{ padding: "5px 10px", border: "1px dashed #ddd" }}>Số điện thoại</th>
                </tr>
      {/* <tbody>
                  {formData.map((item, index) => (
      <tr key={index}>
          <td  style={{  padding: "5px 10px", border: "1px dashed #ddd" }}>{item.idUser}</td>
          <td  style={{  padding: "5px 10px", border: "1px dashed #ddd" }}>{item.hoTen}</td>
          <td  style={{  padding: "5px 10px", border: "1px dashed #ddd" }}>{item.role}</td>
          <img src="" alt="Ảnh minh họa" />
          <td  style={{  padding: "5px 10px", border: "1px dashed #ddd" }}>{item.email}</td>
          <td  style={{  padding: "5px 10px", border: "1px dashed #ddd" }}>{item.sdt}</td>
          <td style={{ padding: "5px 10px", border: "1px dashed #ddd" }}>
                <Link to={`/xem-user/${item.idUser}`} className='button-xemvb'>Xem</Link>
                
              </td>
          
      </tr>
  ))}
</tbody> */}
 <tbody>
            {currentUsers.map((item, index) => (
              <tr key={index}>
                <td style={{ padding: "5px 10px", border: "1px dashed #ddd" }}>{item.idUser}</td>
                <td style={{ padding: "5px 10px", border: "1px dashed #ddd" }}>{item.hoTen}</td>
                <td style={{ padding: "5px 10px", border: "1px dashed #ddd" }}>{item.role}</td>
                <img src="https://thietkevungtau.com/wp-content/uploads/2021/09/the-nhan-vien-chat-lieu-giay-vung-tau.jpg.webp" alt="Ảnh minh họa"  style={{width: "auto", height: "70px"}}/>
                <td style={{ padding: "5px 10px", border: "1px dashed #ddd" }}>{item.email}</td>
                <td style={{ padding: "5px 10px", border: "1px dashed #ddd" }}>{item.sdt}</td>
                <td style={{ padding: "5px 10px", border: "1px dashed #ddd" }}>
                  <Link to={`/xem-user/${item.idUser}`} className='button-xemvb'>Xem</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
          currentPage={currentPage}
          usersPerPage={usersPerPage}
          totalUsers={users.length}
          nextPage={nextPage}
          prevPage={prevPage}
          goToPage={goToPage}
        />
            {/* </table> */}

          </div>
  
      </div>
  )
}
