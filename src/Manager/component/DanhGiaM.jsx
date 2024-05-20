import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getIDNguoiThayDoi } from '../../util/jwtUtils';
import ApiConfig, { apiUrl } from '../../ApiConfig';

export default function DanhGiaM() {
    const id = getIDNguoiThayDoi();
    const [formData, setFormData] = useState({});
    const [danhSach, setDanhSach] = useState([]);
    const [isload,setload] = useState(false)
    useEffect(() => {
        fetchdata();
    }, [isload]);
    const fetchdata = async () => {
        try {
            const response = await axios.get(apiUrl(ApiConfig.getTTAdmin(id)));
            setFormData(response.data.coQuan);
            setload(true)
            console.log(response.data.coQuan);
            if (formData.length !== null) {
                const response2 = await axios.post(apiUrl(ApiConfig.getAllDanhGiaHoSo), formData);
                console.log(response2.data);
                setDanhSach(response2.data);
            }
            else return;
        } catch (error) {
            console.error('Fetch data error:', error);
        };
    };
        const formatDate = (dateString) => {
            const date = new Date(dateString);
            const day = date.getDate().toString().padStart(2, '0');
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear();
            const hours = date.getHours().toString().padStart(2, '0');
            const minutes = date.getMinutes().toString().padStart(2, '0');
            const seconds = date.getSeconds().toString().padStart(2, '0');

            return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
        };
    return (
        <div className='min-h-screen text-center px-3'>
            <h1 className='m-auto font-bold text-2xl p-3 my-4'>Danh sách đánh giá</h1>
            {/* <div className="m-2 relative overflow-x-auto shadow-md sm:rounded-lg"> */}
            <table className="w-full  m-auto text-sm mb-10 text-center shadow-md sm:rounded-lg rtl:text-right text-gray-500 dark:text-gray-500">
                <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-600">
                    <tr>
                        <th scope="col" className="px-6 py-3 w-1/6">
                            ID Người hỏi
                        </th>
                        <th scope="col" className="px-6 py-3 w-1/6">
                            Nội dung đánh giá
                        </th>
                        <th scope="col" className="px-6 py-3 w-1/6">
                            Mức độ đánh giá
                        </th>
                        <th scope="col" className="px-6 py-3 w-1/6">
                            Ngày hỏi
                        </th>

                    </tr>
                </thead>
                <tbody>
                    {danhSach.map((item, index) => (
                        <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {item.idUser}
                            </th>
                            <td className="px-6 py-4">
                                {item.noiDung}
                            </td>
                            <td className="px-6 py-4">
                                {item.mucDoDanhGia}
                            </td>
                            <td className="pl-6 py-4">
                                {formatDate(item.created_at)}
                            </td>

                        </tr>
                    ))}
                </tbody>

            </table>

        </div>
        // </div>
    )
}
