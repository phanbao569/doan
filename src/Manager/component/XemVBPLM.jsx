import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApiConfig, { apiUrl } from '../../ApiConfig';
import { useParams } from 'react-router-dom';

export default function XemVB() {
    let { id } = useParams();
    const [vb, setVb] = useState(null);
    const fetchVBInfo = async () => {
        try {
            const response = await axios.get(apiUrl(ApiConfig.getVBPL(id)));
            setVb(response.data);
        } catch (error) {
            console.error('Fetch VB info error:', error);
        }
    };

    useEffect(() => {

        if (id !== undefined && id !== null)
            fetchVBInfo();
    }, [id]);

    return (
        <div className='min-h-screen'>

            {vb ? (
                <div className='text-start m-8 font-fontgg pb-8'>

                    {/* <h2>{vb?.id}</h2> */}
                    <p className='my-2'>Tên Thủ Tục:</p>
                    <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
                        <div className="p-2 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <p className="mb-2 inline-block text-gray-500 dark:text-gray-400"> {vb?.tenThuTuc}</p>
                        </div>
                    </div>
                    <p className='my-2'>Cơ Quan Thực Hiện: </p>
                    <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
                        <div className="p-2 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <p className="mb-2 inline-block break-words text-gray-500 dark:text-gray-400"> {vb?.coQuanThucHien}</p>
                        </div>
                    </div>
                    <p className='my-2'>Cách Thức Thực Hiện: </p>
                    <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
                        <div className="p-2 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <p className="mb-2 inline-block text-gray-500 dark:text-gray-400"> {vb.cachThucThucHien.split(/\r?\n/).map((line, index) => (
                                <p key={index} style={{ marginLeft: line.includes("+") ? "30px" : "0" }}>{line}</p>
                            ))}</p>
                        </div>
                    </div>
                    <p className='my-2'>Trình Tự Thực Hiện: </p>
                    <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
                        <div className="p-2 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <p className="mb-2 inline-block text-gray-500 dark:text-gray-400"> <div>

                                {vb.trinhTuThucHien.split(/\r?\n/).map((line, index) => (
                                    <p key={index} style={{ marginLeft: line.includes("+") ? "30px" : "0" }}>
                                        {line}
                                    </p>
                                ))}
                            </div></p>
                        </div>
                    </div>
                    <p className='my-2'>Thời Hạn Giải Quyết: </p>
                    <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
                        <div className="p-2 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <p className="mb-2 text-gray-500 dark:text-gray-400"> {vb?.thoiHanGiaiQuyet}</p>
                        </div>
                    </div>
                    <p className='my-2'>Lệ Phí: </p>
                    <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
                        <div className="p-2 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <p className="mb-2 text-gray-500 dark:text-gray-400"> {vb?.lePhi}</p>
                        </div>
                    </div>
                    <p className='my-2'>Thành Phần Hồ Sơ: </p>
                    <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
                        <div className="p-2 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <p className="mb-2  text-gray-500 dark:text-gray-400">{vb.thanhPhanHoSo.split(/\r?\n/).map((line, index) => (
                                    <p key={index} style={{ marginLeft: line.includes("+") ? "30px" : "0" }}>
                                        {line}
                                    </p>
                                ))}</p>
                        </div>
                    </div>
                    <p className='my-2'>Yêu Cầu Điều Kiện: </p>
                    <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
                        <div className="p-2 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <p className="mb-2 text-gray-500 dark:text-gray-400"> {vb?.yeuCauDieuKien}</p>
                        </div>
                    </div>
                    <p className='my-2'>Căn Cứ Pháp Lý: </p>
                    <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
                        <div className="p-2 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <p className="mb-2 text-gray-500 dark:text-gray-400">{vb?.canCuPhapLy}</p>
                        </div>
                    </div>
                    <p className='my-2'>Kết Quả Thực Hiện: </p>
                    <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
                        <div className="p-2 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                            <p className="mb-2 text-gray-500 dark:text-gray-400"> {vb?.ketQuaThucHien}</p>
                        </div>
                    </div>
                </div>
                ): (
                    <p>Loading...</p>
                )}
        </div>
    );
}

