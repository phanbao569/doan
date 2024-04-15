import React, { useEffect, useState } from 'react'
import DiaChi from '../../Diachi';
import ApiConfig, { apiUrl } from '../../../ApiConfig';
import axios from 'axios';
export default function ThongkeTK() {
  const [formData, setFormData]= useState({})
  const [thongKe,setThongke]= useState({})
  const[oderby,setOderBy]=useState('')
const[id,setId]= useState({
  idTinh:'',
  idHuyen:'',
  idXa:''
})
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
useEffect(() => {
  fetchThongke()
}, []);
  return (
    
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
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            {tinhThanhPho}
        </th>
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
    
  )
}
