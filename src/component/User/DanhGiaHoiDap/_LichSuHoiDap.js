import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ApiConfig, { apiUrl } from '../../../ApiConfig';
import { getIDNguoiThayDoi } from '../../../util/jwtUtils';
import moment from 'moment';
import Loading from '../../../Loading';

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




    return (
        <div className='h-screen'>

            {isLoading ? (
                <div className="flex gap-12 flex-col justify-center items-center ">
                    {
                        allPhanHoi.map((phanHoi, index) => (
                            <div key={index} className="max-w-md w-full bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <h2 className="text-start font-bold mb-4">Nội dung Hỏi đáp - {moment(phanHoi?.created_at).format('DD/MM/YYYY')}</h2>
                                <p className="text-start mb-4">{phanHoi?.noiDung} </p>
                                <h2 className="text-start font-bold mb-4">Nội dung phản hồi:</h2>
                                {phanHoi?.phanHoi === "" ? (

                                    <p className="text-start italic mb-4">Chưa có phản hồi</p>
                                ) : (
                                    <p className="text-start mb-4">Người hồi đáp: {phanHoi?.phanHoi}</p>

                                )

                                }

                            </div>
                        ))
                    }

                </div>
            ) : (
                <div>
                    <Loading/>
                </div>
            )}

        </div>

    )
}
