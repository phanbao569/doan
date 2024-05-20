import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import ApiConfig, { apiUrl } from '../../ApiConfig';
import moment from 'moment';

export default function VBPLM() {
    const [formData, setFormData] = useState([
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
    function formatDateTime(dateTimeStr) {
        // Tách chuỗi thành phần thời gian và ngày
        const [time, date] = dateTimeStr.split(' ');
        // Tách thời gian thành giờ, phút, giây
        const [seconds, minutes, hours] = time.split(':').map(Number);
        // Tách ngày thành ngày, tháng, năm
        const [day, month, year] = date.split('-').map(Number);
        // Tạo đối tượng Date
        const dateObj = new Date(year, month - 1, day, hours, minutes, seconds);

        // Lấy thành phần ngày, tháng, năm
        const formattedMonth = (dateObj.getMonth() + 1).toString().padStart(2, '0');
        const formattedDay = dateObj.getDate().toString().padStart(2, '0');
        const formattedYear = dateObj.getFullYear();

        // Lấy thành phần giờ, phút, giây
        const formattedHours = dateObj.getHours().toString().padStart(2, '0');
        const formattedMinutes = dateObj.getMinutes().toString().padStart(2, '0');
        const formattedSeconds = dateObj.getSeconds().toString().padStart(2, '0');

        // Trả về chuỗi định dạng "dd/mm/yyyy hh:mm:ss"
        return `${formattedDay}/${formattedMonth}/${formattedYear} ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }
    return (
        <div className='min-h-sceen'>
            <div className="mx-auto w-4/5 mt-4 mb-20">
                <table className="w-full pb-8 text-sm text-left  rtl:text-right text-gray-500 dark:text-gray-500">
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
                            <th scope="col" className="px-7 py-3">
                                <FaEye />
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
                                    {formatDateTime(item?.updated_at)}
                                </td>
                                <td className="px-6 py-4 ">
                                    <Link to={`/xemVBPL/${item.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )

}
