import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import XemVB from './XemVB';
import ApiConfig, { apiUrl } from '../../../ApiConfig';
export default function TTVBPL() {
    const [formData,setFormData]=useState([
    ]
);

    useEffect(() => {
      fetchVBPL();
    }, []);
  
    const fetchVBPL = async () => {
      try {
        const response = await axios.get(apiUrl(ApiConfig.getAllVBPL));
        setFormData(response.data);
        
      } catch (error) {
        console.error('Fetch products error:', error);
      }
    };

    console.log(formData)
    const handleDelete = async (id) => {
      try {
        const response = await axios.delete(apiUrl(ApiConfig.deleteVBPL(id)));
          
          alert( response.data);
          window.location.reload();
      } catch (error) {

          console.error('Lỗi khi xóa mục:', error.data);
      }
  }; 

      
    return (
            
      
      <div className='' style={{ display: "flex", justifyContent: "space-between", flexDirection: "row-reverse",color:"#000" }}>
       
      {/* <div className='container' style={{ width: "100%", padding: "20px", borderRadius: "5px"}}>
      <Link to={`/VBPL`} className='button-xemvb'>Thêm mới</Link>
                <table style={{ width:"90%", margin: "0 auto", borderCollapse: "collapse" }}>
                  
                    <tr style={{ height: "50px" }}>
                    <th  style={{  padding: "5px 10px", border: "1px dashed #ddd" }}>Tên văn pháp luật</th>
                    <th  style={{ padding: "5px 10px",border: "1px dashed #ddd" }}>Tên người thay đổi</th>
                    <th  style={{ padding: "5px 10px", border: "1px dashed #ddd" }}>Ngày thay đổi</th>
                    
                    </tr>
                    
                  
                    <tbody>
                    {formData.map((item, index) => (
        <tr key={index}>
            <td  style={{  padding: "5px 10px", border: "1px dashed #ddd" }}>{item.tenThuTuc}</td>
            <td  style={{  padding: "5px 10px", border: "1px dashed #ddd" }}>{item.coQuanThucHien}</td>
            <td  style={{  padding: "5px 10px", border: "1px dashed #ddd" }}>{item.updated_at}</td>
            <td style={{ padding: "5px 10px", border: "1px dashed #ddd" }}>
                  <Link to={`/xem-vb/${item.id}`} className='button-xemvb'>Xem VB</Link>
                  
                </td>
            
        </tr>
    ))}
</tbody>
                </table>

            </div> */}
            <div className="mx-auto w-4/5 mt-4">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-600">
            <tr>
              <th scope="col" className="px-6 py-3">
              Tên văn pháp luật
              </th>
              <th scope="col" className="px-6 py-3">
              Cơ Quan Thực Hiện
              </th>
              <th scope="col" className="px-6 py-3">
              Ngày thay đổi
              </th>
              <th scope="col" className="px-6 py-3 text-center">
              <Link to={`/VBPL`} className='mt-10 '  >
      <button type="button"
       class="text-white bg-blue-700 hover:bg-blue-800 px-4 py-2 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg  px-12 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
       >Thêm mới</button>
        </Link>
              </th>

            </tr>
          </thead>
          <tbody>
            {formData.map((item, index) => (

              <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {item.tenThuTuc}
                </th>
                <td className="px-6 py-4">
                  {item.coQuanThucHien}
                </td>
                <td className="px-6 py-4">
                  {item.updated_at}
                </td>
                <td className="px-6 py-4 text-center">
                  <Link to={`/xem-vb/${item.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</Link>
                  <button onClick={() => handleDelete(item.id)}  className="ml-2 font-medium text-red-600 dark:text-red-500 hover:underline">Delete</button>
                </td>
               
              </tr>
            ))}
          </tbody>

        </table>
        {/* <Pagination className="font-medium text-gray-900 whitespace-nowrap dark:text-white relative overflow-x-auto shadow-md sm:rounded-lg "
          currentPage={currentPage}
          usersPerPage={usersPerPage}
          totalUsers={formData.length}
          nextPage={nextPage}
          prevPage={prevPage}
          goToPage={goToPage}
        /> */}
      </div>
    
        </div>
    )

}

