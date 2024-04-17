import React, { useEffect, useState } from 'react'
import DiaChi from '../../../Diachi';
import ApiConfig, { apiUrl } from '../../../../ApiConfig';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Pagination from '../../user/Pagination';
export default function ThongkeTKAll() {
  const [user,setUser]= useState('')
  const [formData, setFormData]= useState('')
  const [thongKe,setThongke]= useState({})
  const[oderby,setOderBy]=useState('')
  const [filter, setFilter] = useState('')
// const[formDiaChi,setFormDiaChi]= useState({
//   idTinh:'',
//   idHuyen:'',
//   idXa:''
// })
const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 7;
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = formData.slice(indexOfFirstUser, indexOfLastUser);
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
  const fetchThongke = async () => {
    try {
        
        const response = await axios.get(apiUrl(ApiConfig.thongkeUser));
        const data = response.data;
        setThongke(data);
        console.log(data)
    } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ API:', error);
    }
};
const fetchOderByHigh = async () => {
  try {
      
      const response = await axios.get(apiUrl(ApiConfig.thongkeUser));
      const data = response.data;
      setThongke(data);
      console.log(data)
  } catch (error) {
      console.error('Lỗi khi lấy dữ liệu từ API:', error);
  }
};
const handleOderByHigh = async () => {
  try {
      
      const response = await axios.get(apiUrl(ApiConfig.oderByHigh));
      const data = response.data;
      setThongke(data);
      console.log(data)
  } catch (error) {
      console.error('Lỗi khi lấy dữ liệu từ API:', error);
  }
};
const handleOderByLow = async () => {
  try {
      
      const response = await axios.get(apiUrl(ApiConfig.oderByLow));
      const data = response.data;
      setThongke(data);
      console.log(data)
  } catch (error) {
      console.error('Lỗi khi lấy dữ liệu từ API:', error);
  }
};
const handleFilterChange = (e) => {
  const value = e.target.value;
  setFilter(value);
};;
const handleFilterSubmit = async()=>{
  console.log(filter)
  try{
    const response = await axios.post(apiUrl(ApiConfig.ThongKeUserFilter(filter)))
    console.log("kết quả tìm kiếm"+response.data)
    setThongke(response.data)
  } catch(error){
    console.error('Fetch data error:', error);
  }
}
useEffect(() => {
  fetchThongke()
}, []);
  return (
    <div>
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
    <div className="m-2 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-600">
            <tr>
              <th scope="col" className="px-6 py-3">
                Tỉnh Thành Phố
              </th>
              <th scope="col" className="px-6 py-3">
                Tổng số lượng acc
              </th>
              <th scope="col" className="px-6 py-3">
                User
              </th>
              <th scope="col" className="px-6 py-3">
                manager
              </th>
              <th scope="col" className="px-6 py-3">
                Employee
              </th>
              <th scope="col" className="px-6 py-3">
                <button onClick={handleOderByHigh} >high</button>
                
              </th>
              <th scope="col" className="px-6 py-3">
              <button  onClick={handleOderByLow}>low</button>
              </th>
            </tr>
          </thead>
          <tbody>
          {Object.entries(thongKe).map(([tinhThanhPho, data], index) => (
    <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
      <Link to={`/xem-tinh/${tinhThanhPho}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {tinhThanhPho}
           
        </th>
        </Link>
        <td className="px-6 py-4">
            {data.Tổng}
        </td>
        <td className="px-6 py-4">
            {data.User}
        </td>
        <td className="px-6 py-4">
            {data.Manager}
        </td>
        <td className="px-6 py-4">
            {data.Employee}
        </td>
    </tr>
))}
          </tbody>

        </table>
        </div>
        </div>
  )
}