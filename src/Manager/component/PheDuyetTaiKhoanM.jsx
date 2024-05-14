import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ApiConfig, { apiUrl } from '../../ApiConfig';
import { getIDNguoiThayDoi } from '../../util/jwtUtils';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { MdManageAccounts } from "react-icons/md";

export default function PheDuyetTaiKhoanM() {
    const navigate = useNavigate(); // Sử dụng hook useNavigate để chuyển trang(có thể dùng routes,Link)
    const [danhSach, setDanhSach] = useState('');
    const id = getIDNguoiThayDoi();

    const handleViewDetail = (value) => {
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
        <div className='w-full min-h-screen text-center mt-4'>
            <div className='flex h-full '>
                <div className='h-screen -mt-6 bg-gray-800'>
                    <NavLink to='/PheDuyetTaiKhoanM' className='flex w-225 h-10 text-white bg-gray-800  items-center gap-2 p-2 my-2'>
                        <MdManageAccounts className='' />
                        Phê duyệt tài khoản
                    </NavLink>
                    <NavLink to='/PheDuyetHoSoM' className='flex w-225 h-10 text-white bg-gray-800  items-center gap-2 p-2'>
                        <MdManageAccounts className='' />
                        Phê duyệt hồ sơ
                    </NavLink>
                </div>
                <div className='flex gap-8 justify-center ml-32'>
                    {danhSach ? (
                        <div className='p-2'>
                            <h1 className='text-2xl font-fontgg font-bold pb-5'>Danh sách tài khoản</h1>
                            <table className="w-880 min-w-[800px] table-auto text-center">
                                <thead>
                                    <tr className="font-bold w-460 dark:bg-meta-4 text-center bg-slate-400">
                                        <th className=" min-w-[150px] py-4 text-black dark:text-white xl:pl-11">
                                            STT
                                        </th>
                                        <th className=" min-w-[150px] py-4 text-black dark:text-white xl:pl-11">
                                            Họ và Tên
                                        </th>
                                        <th className="min-w-[150px] py-4 text-black dark:text-white">
                                            Email
                                        </th>
                                        <th className="min-w-[120px] py-4 text-black dark:text-white">
                                            Địa chỉ
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className='bg-slate-200'>
                                    {danhSach.map((item, index) => (
                                        <tr key={index} >
                                            <td className="border-b border-[#eee] py-3 px-4  dark:border-strokedark">
                                                <p className="text-black dark:text-white">
                                                    {index+1}
                                                </p>
                                            </td>
                                            <td className="border-b border-[#eee] py-3 px-4 pl-9 dark:border-strokedark xl:pl-11">
                                                <div onClick={() => handleViewDetail(item.idUser)} className="font-medium text-black dark:text-white cursor-pointer">
                                                    {item.hoTen}
                                                </div>
                                            </td>
                                            <td className="border-b border-[#eee] py-3 px-4 dark:border-strokedark">
                                                <p className="text-black dark:text-white">
                                                    {item.email}
                                                </p>
                                            </td>
                                            <td className="border-b border-[#eee] py-3 px-4 dark:border-strokedark ">
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
                        <div class=" text-center ml-56">
                            <div role="status">
                                <svg aria-hidden="true" class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                </svg>
                                <span class="sr-only">Loading...</span>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    )
}
