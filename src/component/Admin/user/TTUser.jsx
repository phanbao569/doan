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
  const usersPerPage = 8;
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

    <div className="m-2 relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-500">
    <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-600">
        <tr>
          <th scope="col" className="px-6 py-3">
            Họ tên
          </th>
          <th scope="col" className="px-6 py-3">
            iduser
          </th>
          <th scope="col" className="px-6 py-3">
            chức vụ
          </th>
          <th scope="col" className="px-6 py-3">
           Email
          </th>
          <th scope="col" className="px-6 py-3">
            sdt
          </th>
          <th scope="col" className="px-6 py-3">
            
          </th>
          
        </tr>
      </thead>
      <tbody>
      {currentUsers.map((item, index) => (
        <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
          <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          {item.hoTen}
          </th>
          <td className="px-6 py-4">
          {item.idUser}
          </td>
          <td className="px-6 py-4">
          {item.role}
          </td>
          <td className="px-6 py-4">
          {item.email}
          </td>
          <td className="px-6 py-4">
          {item.sdt}
          </td>
          <td className="px-6 py-4">
          <Link to={`/xem-user/${item.idUser}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
          </td>
        </tr>
           ))}
       </tbody>
       
    </table>
    <Pagination className=" relative overflow-x-auto shadow-md sm:rounded-lg"
          currentPage={currentPage}
          usersPerPage={usersPerPage}
          totalUsers={users.length}
          nextPage={nextPage}
          prevPage={prevPage}
          goToPage={goToPage}
        />
  </div>
 
  )
}
