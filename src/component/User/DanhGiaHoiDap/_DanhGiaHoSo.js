import axios from 'axios';
import React, { useState } from 'react';
import ApiConfig, { apiUrl } from '../../../ApiConfig';
import { getIDNguoiThayDoi } from '../../../util/jwtUtils';
import moment from 'moment';

function Form(props) {
    const { user, ttuser, hoSo } = props;
    console.log(hoSo);

    const [form, setform] = useState(
        {
            id: "",
            idHoSo: hoSo?.id,
            tenThuTuc: hoSo.tenThuTuc,
            coQuanThucHien: hoSo?.coQuanThucHien,

            idUser: getIDNguoiThayDoi(),
            noiDung: "",
            mucDoDanhGia: "",
            // created_at: moment().toDate(),
        }
    );
    const handleInputChange = (event) => {
        const { name, value } = event.target

        setform(prevState => ({ ...prevState, [name]: value }))
    }

    console.log(user);
    const handleSubmit = async () => {
         console.table(form);

         try {
        const respont = await axios.post(apiUrl(ApiConfig.taoDanhGiaHoSo),form);
        alert("thanh cong");
           
          } catch (error) {
            console.log("an lz ");
          }
    };

    return (
        <div className=" mx-auto mt-5">
            <form >
                <div className='' >
                    <div class='bg-yellow-200 w-full d-flex rounded-3xl	'>
                        <label className='text-xl font-family-sans mx-auto' >
                            THÔNG TIN NGƯỜI THÔNG BÁO
                        </label>
                    </div>
                    <div class=" flex px-8 gap-24 ">
                        <div class="w-full flex flex-col ">
                            <div>
                                <label className='font-bold' > Tỉnh/Thành phố </label>

                            </div>
                            <input className=" text-start  bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={ttuser?.queQuan?.tinh}
                            />

                        </div>
                        <div class="w-full flex flex-col ">
                            <div>
                                <label className='font-bold' > Quận/Huyện </label>

                            </div>
                            <input
                             className=" text-start  bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={ttuser?.queQuan?.huyen}
                            />


                        </div>
                        <div class="w-full flex flex-col ">
                            <div>
                                <label className='font-bold' > Phường/Xã </label>

                            </div>
                            <input className=" text-start  bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                value={ttuser?.queQuan?.xa}
                            />
                        </div>

                    </div>
                    <div className='flex  py-8 gap-24 '>
                        <div class="w-full flex flex-col ">
                            <div>
                                <label className='font-bold' > Họ tên  </label>
                                <label className='text-red-500' >  </label>

                            </div>
                            <input className=" text-start  bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                disabled placeholder='Họ tên '
                                value={user?.hoTen} />


                        </div>
                        <div class="w-full flex flex-col ">
                            <div>
                                <label className='font-bold' > Ngày tháng năm sinh </label>
                                <label className='text-red-500' >  </label>

                            </div>
                            <input value={ttuser?.ngaySinh} type="date" className=" text-start  bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                disabled />
                        </div>

                    </div>
                    <div class=" flex px-8 gap-24    ">
                        <div class="w-full flex flex-col ">
                            <div>
                                <label className='font-bold' > số định danh cá nhân </label>


                            </div>
                            <input className=" text-start  bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                disabled placeholder='Địa chỉ đăng ký tạm trú ' value={user?.cccd} />


                        </div>
                        <div class="w-full flex flex-col ">
                            <div>
                                <label className='font-bold' > Số điện thoại liên hệ </label>

                            </div>
                            <input className=" text-start  bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                disabled placeholder='Địa chỉ đăng ký tạm trú ' value={user.sdt} />



                        </div>
                        <div class="w-full flex flex-col ">
                            <div>
                                <label className='font-bold' > Email </label>


                            </div>
                            <input className=" text-start  bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                disabled placeholder='Địa chỉ đăng ký tạm trú ' value={user.email} />
                        </div>

                    </div>
                </div>
                <div>
                    <label htmlFor="review" className="block">Nội dung đánh giá</label>
                    <textarea id="review"
                        onChange={handleInputChange} name="noiDung"
                        className="border border-gray-400 rounded-md p-2 w-full"></textarea>
                </div>
                <div>
                    <label htmlFor="rating" className="block">Mức độ đánh giá</label>
                    <select
                        id="rating"
                        onChange={handleInputChange} name="mucDoDanhGia"

                        className="border border-gray-400 rounded-md p-2 w-full">
                        <option value="">Chọn mức độ đánh giá</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                    </select>
                </div>
            </form>
                <button 
                onClick={handleSubmit}
                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">Gửi</button>
        </div>
    );
}

export default Form;