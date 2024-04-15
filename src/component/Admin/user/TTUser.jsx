import React, { useState, useEffect } from 'react';
import DiaChi from '../../Diachi';
import axios from 'axios';
import ApiConfig, { apiUrl } from '../../../ApiConfig';
import { Link } from 'react-router-dom';
import users from '../../../testdulieu/trangTinh';
import Pagination from './Pagination';

import { RiFilterLine } from "react-icons/ri";
export default function TTUser() {
  
  const [formData, setFormData] = useState([]
  );
  
  // test
  const [user,setUser]=useState([]);
  const [filter, setFilter] = useState({
    filterText:'',
    filterRole:'',
    filterTinhTrangTK:'',
  })

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 7;
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = formData.slice(indexOfFirstUser, indexOfLastUser);
  const [inputValue, setInputValue] = useState('');

  // Trạng thái để lưu timeout ID
  const [searchTimeout, setSearchTimeout] = useState(null);
  // Hàm để chuyển đến trang tiếp theo
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    setUser(currentUsers);
  };

  // Hàm để chuyển đến trang trước đó
  const prevPage = () => {
    setCurrentPage(currentPage - 1);
    setUser(currentUsers);
  };
  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
    const indexOfLastUser = pageNumber * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = formData.slice(indexOfFirstUser, indexOfLastUser);
    setUser(currentUsers); // Cập nhật danh sách người dùng trong state 'user'
  };



  //test
  useEffect(() => {
    fetchAllUser();
  }, []);

  const fetchAllUser = async () => {
    try {
      const response = await axios.get(apiUrl(ApiConfig.getAllUser));
      setFormData(response.data);
      setUser(response.data.slice(0, usersPerPage));
      console.log(formData)
    } catch (error) {
      console.error('Fetch data error:', error);
    }
  };
  const handleFilterChange = (e) => {
    const { id, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [id]: value,
    }));
    // handleFilterSubmit();

  };
  const handleFilterSubmit = async()=>{
    console.log(filter)
    try{
      const response = await axios.post(apiUrl(ApiConfig.filter),filter)
      console.log(response.data)
      setFormData(response.data)
      setCurrentPage(1); // Reset currentPage when filtering
      setUser(response.data.slice(0, usersPerPage));
    } catch(error){
      console.error('Fetch data error:', error);
    }
  }
  return (
    <div>
      <div className="flex flex-row justify-around">
      <div className="">
    <div className=" mt-2 ml-2 ">
      <form className=" relative ">
        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
        <div className="relative ">
          <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none "></div>
          <input type="search" id="filterText" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-100 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search CCCD, NAME..."   onChange={handleFilterChange}/>
          <button onClick={handleFilterSubmit} type="button" className="text-white absolute right-2.5 bottom-3.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
        </div>
      </form>
    </div>
   
  </div>
  <div className="flex flex-row justify-between mt-8 mr-2">
  <div className="select-container">
  
  <select
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="filterTinhTrangTK"
            onChange={handleFilterChange}
            >
          <option  value=""> Tình Trạng </option>
            <option value="Locked">Locked</option>
            <option value="Active">Active</option>
            <option value="Checking">Checking</option>
        </select>
       
  </div>

  <div className="select-container">
  <select
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            
            id="filterRole"
            onChange={handleFilterChange}
          
        >   <option value="">Phân quyền</option>
            <option value="User">User</option>
            <option value="Employee">Employee</option>
            <option value="Manager">Manager</option>
            <option value="Admin">Admin</option>
        </select>
  </div>
  <div className="select-container">
    <button >lọc <RiFilterLine /></button>
  </div>
</div>
</div>

      <div className="m-2 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-600">
            <tr>
              <th scope="col" className="px-6 py-3">
                Họ tên
              </th>
              <th scope="col" className="px-6 py-3">
                Tình trạng
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
                  {item.tinhTrangTK}
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
        <Pagination className="font-medium text-gray-900 whitespace-nowrap dark:text-white relative overflow-x-auto shadow-md sm:rounded-lg "
          currentPage={currentPage}
          usersPerPage={usersPerPage}
          totalUsers={formData.length}
          nextPage={nextPage}
          prevPage={prevPage}
          goToPage={goToPage}
        />
      </div>
    </div>
  )
}
