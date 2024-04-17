import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import ApiConfig, { apiUrl } from '../../../../ApiConfig';

export default function ThongKeTKTinh() {
   const { tinhThanhPho } = useParams();
    const [formData, setFormData] = useState('');
    useEffect(() => {
        console.log("Tỉnh/Thành phố:", tinhThanhPho);
        const fetchUserData = async () => {
            try {
              const response = await axios.get(apiUrl(ApiConfig.getTinhThanhPho(tinhThanhPho)));
              setFormData(response.data);
              console.log(response.data)
            } catch (error) {
              console.error('Fetch VB info error:', error);
            }
          };
      
          fetchUserData();
    }, [tinhThanhPho]);
  

    return (
        <div>
            <h1>ThongKeTKTinh</h1>
            <h1>{tinhThanhPho}</h1>
            
            <div>
              
              <div className="m-2 relative overflow-x-auto shadow-md sm:rounded-lg">
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-600">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Quận Huyện
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
                       
                      </tr>
                    </thead>
                    <tbody>
                    {Object.entries(formData).map(([huyen, data], index) => (
                    
              <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">

                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {huyen}
                      <Link to={`/xem-tinh/${tinhThanhPho}/${huyen}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
                  </th>
                  <td className="px-6 py-4">
                      {data.Tổng}
                  </td>
                  <td className="px-6 py-4">
                      {data.User==null?0:data.User}
                  </td>
                  <td className="px-6 py-4">
                      {data.Manager==null?0:data.Manager}
                  </td>
                  <td className="px-6 py-4">
                      {data.Employee==null?0:data.Employee}
                  </td>
                  
              </tr>
          ))}
                    </tbody>
          
                  </table>
                  </div>
                  </div>
        </div>
    );
}
