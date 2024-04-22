import moment from 'moment';
import React, { useState } from 'react'
import ApiConfig, { apiUrl } from '../../../ApiConfig';

import { getIDNguoiThayDoi } from '../../../util/jwtUtils';
import axios from 'axios';

export default function HoiDap(props) {

    const { user, ttuser } = props;
    //console.log(user);
    const [form, setform] = useState(
        {
            id: "",
            idUser: getIDNguoiThayDoi(),
            noiDung: "",
            phanHoi: "",
            tenUser: user.hoTen,
            idNguoiPhanHoi: "",
            tenNguoiPhanHoi: "",
            created_at: moment().toDate(),
        }
    );
    const handleInputChange = (event) => {
        const { name, value } = event.target

        setform(prevState => ({ ...prevState, [name]: value }))
    }
    const handleSubmit = async () => {
        console.table(form);
        console.log(form);
        console.log("click");
        try {
            const respont = await axios.post(apiUrl(ApiConfig.guiHoiDap), form);
            alert("thanh cong");
        }
        catch (error) {
            alert("an lz");
            console.log(error);
        }
    };
    return (
        <div>
            <div className=" mx-auto mt-5">
                <form className="space-y-4">
                    <div className='' >
                        <div class='bg-yellow-200 w-full d-flex rounded-3xl	'>
                            <label className='text-xl font-family-sans mx-auto' >
                                THÔNG TIN NGƯỜI THÔNG BÁO
                            </label>
                        </div>
                        <div class=" flex p-8 gap-24 ">
                            <div class="w-full flex flex-col ">
                                <div>
                                    <label className='font-bold' > Tỉnh/Thành phố </label>
                                </div>
                                <input className=" text-start mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={ttuser?.queQuan?.tinh}
                                />

                            </div>
                            <div class="w-full flex flex-col ">
                                <div>
                                    <label className='font-bold' > Quận/Huyện </label>

                                </div>
                                <input className=" text-start mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={ttuser?.queQuan?.huyen}
                                />


                            </div>
                            <div class="w-full flex flex-col ">
                                <div>
                                    <label className='font-bold' > Phường/Xã </label>

                                </div>
                                <input className=" text-start mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    value={ttuser?.queQuan?.xa}
                                />
                            </div>

                        </div>
                        <div className='flex   gap-24  '>
                            <div class="w-full flex flex-col ">
                                <div>
                                    <label className='font-bold' > Họ tên  </label>
                                    <label className='text-red-500' >  </label>

                                </div>
                                <input className=" text-start mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    disabled placeholder='Họ tên '
                                    value={user?.hoTen} />


                            </div>
                            <div class="w-full flex flex-col  ">
                                <div>
                                    <label className='font-bold' > Ngày tháng năm sinh </label>
                                    <label className='text-red-500' >  </label>

                                </div>
                                <input value={ttuser?.ngaySinh} type="date" className=" text-start mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    disabled />
                            </div>

                        </div>
                        <div class=" flex p-8 gap-24 ">
                            <div class="w-full flex flex-col ">
                                <div>
                                    <label className='font-bold' > số định danh cá nhân </label>


                                </div>
                                <input className=" text-start mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    disabled placeholder='Địa chỉ đăng ký tạm trú ' value={user.cccd} />


                            </div>
                            <div class="w-full flex flex-col ">
                                <div>
                                    <label className='font-bold' > Số điện thoại liên hệ </label>

                                </div>
                                <input className=" text-start mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    disabled placeholder='Địa chỉ đăng ký tạm trú ' value={user.sdt} />
                            </div>
                            <div class="w-full flex flex-col ">
                                <div>
                                    <label className='font-bold' > Email </label>
                                </div>
                                <input className=" text-start mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    disabled placeholder='Địa chỉ đăng ký tạm trú ' value={user.email} />
                            </div>

                        </div>
                    </div>
                    <div className='p-16' >
                        <label htmlFor="review" className="block">Nội dung hỏi đáp </label>
                        <textarea
                            onChange={handleInputChange} name="noiDung"
                            className="border border-gray-400 rounded-md p-2 w-full"></textarea>
                    </div>
                </form>
                <button onClick={handleSubmit} className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Gửi Hỏi Đáp</button>
            </div>
        </div>
    )
}
