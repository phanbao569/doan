import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ApiConfig, { apiUrl } from '../../../ApiConfig';
import { getIDNguoiThayDoi } from '../../../util/jwtUtils';
import moment from 'moment';
import { FaEye } from "react-icons/fa";
import Loading from '../../../Loading';
import { FcManager } from "react-icons/fc";
import { CiChat1 } from "react-icons/ci";
import { SlCalender } from "react-icons/sl";
export default function _LichSuHoiDap() {
    const [isLoading, setisLoading] = useState(false);
    const [allPhanHoi, setallPhanHoi] = useState();
    useEffect(() => {
        fetchData()
        console.log(allPhanHoi);
    }, [isLoading]);

    const fetchData = async () => {
        try {
            const response = await axios.get(apiUrl(ApiConfig.lichsuhoidapbyId(getIDNguoiThayDoi())));
            setallPhanHoi(() => response.data);
            console.log(response.data);
            setisLoading(true);
        } catch (error) {
            console.error('sai gi do :', error);
        }

    }
    const [popupdetail, setpopupdetail] = useState(
        {
            id: '',
            noiDung: '',
            phanHoi: '',
            tenNguoiPhanHoi: '',
            created_at: '',
        }

    )
    const [showDetail, setshowDetail] = useState(false)

    const handleDetail = (index) => {
        const detail = allPhanHoi[index];
        setpopupdetail({
            id: detail.id,
            noiDung: detail.noiDung,
            phanHoi: detail.phanHoi,
            tenNguoiPhanHoi: detail.tenNguoiPhanHoi,
            created_at: detail.created_at,
        });
        setshowDetail(true)
    };



    return (
        <div className='h-screen'>

            {isLoading ? (
                <div className="flex gap-12 flex-col justify-center items-center ">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex"> <SlCalender className=' mr-2' /> Ngày hỏi đáp</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"> ✉ Nội nội dung hỏi đáp</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider flex"> <FaEye className='mr-2 ' /> Xem Chi Tiết</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {allPhanHoi.map((phanHoi, index) => (
                                <tr key={index}>
                                    <td className="px-6 py-4 whitespace-nowrap">{moment(phanHoi?.created_at).format('DD/MM/YYYY')}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">{phanHoi?.phanHoi === "" ? <span className="italic">Chưa có phản hồi</span> : phanHoi?.phanHoi}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" onClick={() => handleDetail(index)}>Xem</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {
                        <div>
                            {showDetail && (
                                <div className="fixed inset-0 rounded-lg flex justify-center items-center bg-black bg-opacity-50">
                                    <div className="bg-white rounded-lg p-8 max-w-md">
                                        <h2 className="font-bold mb-4">Nội dung Hỏi đáp - {moment(popupdetail?.created_at).format('DD/MM/YYYY')}</h2>
                                        <div className='bg-gray-100 p-4 rounded-lg'> 
                                        <p className="mb-4">{popupdetail?.noiDung}</p>
                                        </div>
                                        {popupdetail?.phanHoi === "" ? (
                                            <p className="italic mb-4">Chưa có phản hồi</p>
                                        ) : (

                                            <div>

                                                <p className="mb-4 flex gap-2 mt-2  "> <FcManager className='mt-1' /> Người hồi đáp: {popupdetail?.tenNguoiPhanHoi}</p>
                                                <h2 className="font-bold  mb-4">Nội dung phản hồi:</h2>
                                                <div className='bg-gray-100 p-4 rounded-lg'>
                                                    <p className="mb-4 flex gap-2 "> {popupdetail?.phanHoi}</p>
                                                </div>
                                            </div>
                                        )}
                                        <button className="bg-red-500 mt-2 flex mx-auto text-white px-4 py-2 rounded" onClick={() => setshowDetail(false)}>Đóng</button>
                                    </div>
                                </div>
                            )}
                        </div>

                    }
                </div>
            ) : (
                <div>
                    <Loading />
                </div>
            )}

        </div>

    )
}
