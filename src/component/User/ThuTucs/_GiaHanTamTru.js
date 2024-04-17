import axios from 'axios';
import React, { useEffect, useState } from 'react'
import logo from '../img/footer.jpg'


export default function GiaHanTamTru() {

    const [user, setUser] = useState();
    const [TTuser, setTTUser] = useState();
    useEffect(() => {
        fetchdata();

    }, []);

    const fetchdata = async () => {
        try {
          const response = await axios.get('http://172.21.3.222:8888/getUserById/0c6b4326');
          const responseTT = await axios.get('http://172.21.3.222:8888/TTUser/0c6b4326');
          setTTUser(responseTT.data)
          const responseData = response.data;
          setUser(responseData);
          console.log(responseTT.data)
          setTTUser(responseTT.data)
          console.log(responseData);
        //   console.log(user);
        } catch (error) {
          console.error('sai gi do :', error);
        }
      };


    return (
        <div class="grid grid-cols-5 gap-4 h-screen">
            <div class="bg-white p-4 col-span-1"></div>
            <div class=" p-4 col-span-3 bg-gray-200  "   >
                <div class='relative h-48  w-full flex  '>
                    <div class="ml-4 text-2xl font-bold is-justify-content-left m-14  ">
                        {/* {TTuser.hoTen} */}
                        {/* {user.diaChiCuThe} */}
                    </div>
                </div>
                <div class='relaive h-auto  w-full gap-4 mt-10 '>
                    {/* co quan thuc hien  */}
                    <div className='bg-gray-300' >
                        <div class='bg-yellow-400 w-full d-flex rouded-lg'>
                            <label className='text-xl font-family-sans' >
                                CƠ QUAN THỰC HIỆN
                            </label>
                        </div>

                        <div className='flex  p-16  '>
                            <div class="w-1/3 flex flex-col ">
                                <div>
                                    <label className='font-bold' > Tỉnh/Thành phố </label>
                                    <label className='text-red-500' > (*) </label>

                                </div>
                                <select class="block w-2/3 mx-auto bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500">
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>

                            </div>
                            <div class="w-1/3 flex flex-col ">
                                <div>
                                    <label className='font-bold' > Quận/Huyện </label>
                                    <label className='text-red-500' > (*) </label>

                                </div>
                                <select class="block w-2/3 mx-auto bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500">
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>

                            </div>
                            <div class="w-1/3 flex flex-col ">
                                <div>
                                    <label className='font-bold' > Phường/Xã </label>
                                    <label className='text-red-500' > (*) </label>

                                </div>
                                <select class="block w-2/3 mx-auto bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500">
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>

                            </div>

                        </div>
                        <div class=" flex p-16 ">

                            <div class="w-2/3 flex flex-col ">
                                <div>
                                    <label className='font-bold' > Cơ quan thực hiện </label>
                                    <label className='text-red-500' > (*) </label>
                                </div>
                                <select class="block w-2/3 mx-auto bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500">
                                    <option value="1">Option 1</option>
                                    <option value="2">Option 2</option>
                                    <option value="3">Option 3</option>
                                </select>

                            </div>
                            <div class="w-1/3 flex flex-col ">
                                <div>
                                    <label className='font-bold' > Số điện thoại </label>
                                    <label className='text-red-500' > (*) </label>

                                </div>
                                <input class="border w-2/3 border-gray-300 bg-white h-10 px-3 rounded-md mx-auto text-sm focus:outline-none focus:border-blue-500" placeholder='số điện thoại ' value={"0363361994"} />


                            </div>

                        </div>
                    </div>
                    {/* THÔNG TIN NHẬN THÔNG BÁO , TÌNH TRẠNG HỒ SƠ , KẾT QUẢ GIẢI QUYẾT HỒ SƠ */}
                    <div className='bg-gray-300' >
                        <div class='bg-yellow-400 w-full d-flex rouded-lg'>
                            <label className='text-xl font-family-sans' >
                                THÔNG TIN ĐỀ NGHỊ ĐĂNG KÝ TRẠM TRÚ
                            </label>
                        </div>
                        <div className='flex  p-16  '>
                            <div class="w-full flex flex-col ">
                                <div>
                                    <label className='font-bold' > Tỉnh/Thành phố </label>
                                    <label className='text-red-500' > (*) </label>

                                </div>
                                <input class="border w-3/4 border-gray-300 bg-white h-10 px-3 rounded-md mx-auto text-sm focus:outline-none focus:border-blue-500" placeholder='Địa chỉ đăng ký tạm trú ' />


                            </div>


                        </div>
                        <div className='flex  p-16  '>
                            <div class="w-full flex flex-col ">
                                <div>
                                    <label className='font-bold' > Họ tên </label>
                                    <label className='text-red-500' > (*) </label>

                                </div>
                                <input class="border w-3/4 border-gray-300 bg-white h-10 px-3 rounded-md mx-auto text-sm focus:outline-none focus:border-blue-500" placeholder='Địa chỉ đăng ký tạm trú ' />


                            </div>
                            <div class="w-full flex flex-col ">
                                <div>
                                    <label className='font-bold' > Ngày tháng năm sinh </label>
                                    <label className='text-red-500' > (*) </label>

                                </div>
                                <input class="border w-3/4 border-gray-300 bg-white h-10 px-3 rounded-md mx-auto text-sm focus:outline-none focus:border-blue-500" placeholder='Địa chỉ đăng ký tạm trú ' type='date' />
                            </div>
                            <div class="w-full flex flex-col ">
                                <div>
                                    <label className='font-bold' > giới tính </label>
                                    <label className='text-red-500' > (*) </label>

                                </div>
                                <select class="block w-2/3 mx-auto bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500">
                                    <option value="1">Nam</option>
                                    <option value="2">Nữ</option>
                                    <option value="3">Khác</option>
                                </select>


                            </div>
                        </div>
                        <div class=" flex p-8 ">
                            <div class="w-full flex flex-col ">
                                <div>
                                    <label className='font-bold' > số định danh cá nhân </label>
                                    <label className='text-red-500' > (*) </label>

                                </div>
                                <input class="border w-3/4 border-gray-300 bg-white h-10 px-3 rounded-md mx-auto text-sm focus:outline-none focus:border-blue-500" placeholder='Địa chỉ đăng ký tạm trú ' pattern='' />


                            </div>
                            <div class="w-full flex flex-col ">
                                <div>
                                    <label className='font-bold' > Số điện thoại liên hệ </label>
                                    <label className='text-red-500' > (*) </label>

                                </div>
                                <input class="border w-3/4 border-gray-300 bg-white h-10 px-3 rounded-md mx-auto text-sm focus:outline-none focus:border-blue-500" placeholder='Địa chỉ đăng ký tạm trú ' />


                            </div>
                            <div class="w-full flex flex-col ">
                                <div>
                                    <label className='font-bold' > Email </label>
                                    <label className='text-red-500' > (*) </label>

                                </div>
                                <input class="border w-3/4 border-gray-300 bg-white h-10 px-3 rounded-md mx-auto text-sm focus:outline-none focus:border-blue-500" placeholder='Nhập email ' type='email' />


                            </div>

                        </div>
                    </div>

                    <div className='bg-gray-300' >
                        <div class='bg-yellow-400 w-full d-flex rouded-lg'>
                            <label className='text-xl font-family-sans' >
                                THÔNG TIN NHẬN THÔNG BÁO , TÌNH TRẠNG HỒ SƠ , KẾT QUẢ GIẢI QUYẾT HỒ SƠ
                            </label>
                        </div>
                        <div className='flex  p-16  '>
                            <div class="w-full flex flex-col ">
                                <div>
                                    <label className='font-bold' > Hình thức nhận thông báo </label>
                                    <label className='text-red-500' > (*) </label>

                                </div>
                                <select class="block w-2/3 mx-auto bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500">
                                    <option value="1">Email</option>
                                </select>

                            </div>


                        </div>

                    </div>




                </div>
                <div class='relative h-48  w-full flex  '>

                    <button class="absolute bottom-0   right-0 m-4 bg-red-500 text-white px-8 py-4 rounded  "> Nộp hồ sơ </button>
                </div>
            </div>
            <div class="bg-white-300 p-4 col-span-1  ">
            </div>
            <div class="bg-white-300  p-4 col-span-5 ">
                    <img src={logo} alt="Logo" />
            </div>

        </div>


    )
}
