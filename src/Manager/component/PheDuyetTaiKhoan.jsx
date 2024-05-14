import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ApiConfig, { apiUrl } from '../../ApiConfig';
import { getIDNguoiThayDoi } from '../../util/jwtUtils';
import { Link, useNavigate } from 'react-router-dom';
export default function QLTKM() {
    const navigate = useNavigate(); // Sử dụng hook useNavigate để chuyển trang(có thể dùng routes,Link)
    const [danhSach, setDanhSach] = useState('');
    const [idUser,setidUser] = useState()
    const id = getIDNguoiThayDoi();

    const handleViewDetail =(value) => {
        setidUser(value);
        console.log(value);
        // console.log();
        navigate("/TTUserM", { state: { value } });
        
      }
    

    console.log(id);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl(ApiConfig.getTTAdmin(id)));
                // console.log(response.data);
                let data = response.data.coQuan;
                const response2 = await axios.post(apiUrl(ApiConfig.getDonPheDuyet), data);
                console.log(response2.data);
                setDanhSach(response2.data);
                // setCities(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    
   


    return (
        <div className='w-full h-full text-center'>
            <h1 className='text-lg font-fontgg mt-4 '>Danh sách tài khoản</h1>
            <div className='flex gap-8 justify-center'>
                {danhSach ? (
                    <div className='mt-8 p-2'>
                        <table className="w-880 min-w-[800px] table-auto text-center">
                            <thead>
                                <tr className="w-460 dark:bg-meta-4 text-center bg-slate-400">
                                    <th className="min-w-[150px] py-4 font-medium text-black dark:text-white xl:pl-11">
                                        Họ và Tên
                                    </th>
                                    <th className="min-w-[150px] py-4 font-medium text-black dark:text-white">
                                        Email
                                    </th>
                                    <th className="min-w-[120px] py-4 font-medium text-black dark:text-white">
                                        Địa chỉ
                                    </th>
                                </tr>
                            </thead>
                            <tbody className='bg-slate-200'>

                                {danhSach.map((item, index) => (
                                    <tr key={index}>
                                        <td className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                            <div onClick={()=>handleViewDetail(item.idUser)} className="font-medium text-black dark:text-white">
                                                {item.hoTen}
                                            </div>
                                        </td>
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                            <p className="text-black dark:text-white">
                                                {item.email}
                                            </p>
                                        </td>
                                        <td className="border-b border-[#eee] py-5 px-4 dark:border-strokedark">
                                            <p className={`inline-flex rounded-full bg-opacity-10 py-1 px-3 text-sm font-medium `}>
                                                {item.diaChiDKTK.tinh}
                                            </p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    )
}
