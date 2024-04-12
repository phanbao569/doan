import axios from 'axios';
import DiaChi from '../../Diachi.jsx';
import React, { useEffect, useState } from 'react'
import logo from '../img/footer.jpg'
import { Field, Form, Formik } from 'formik';
import { getIDNguoiThayDoi } from '../../../util/jwtUtils.js';
//mport  ApiCon,{baseUrl} from '../../../ApiConfig.js'
import ApiConfig,{apiUrl}  from '../../../ApiConfig.js'
export default function NapThuTuc() {

    const submitHandler = async (e) => {
        e.preventDefault();
           await axios.post(apiUrl(ApiConfig.napthutucgiahantamtru))
        console.log(e.responseText);
        console.log("teasd");
        console.log(form + "ádasd") ;
    }
 //   const idUser = getIDNguoiThayDoi();
     const idUser = getIDNguoiThayDoi();
     const [form,setForm] = useState({});
    const [user, setUser] = useState();
    const [TTuser, setTTUser] = useState();
    useEffect(() => {
        fetchdata();

    }, []);

    const fetchdata = async () => {
        try {

  
            const response = await axios.get( apiUrl(ApiConfig.getUserById(idUser)));
            const responseTT = await axios.get('http://172.21.3.169:8888/TTUser/0c6b4326');
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

    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedWard, setSelectedWard] = useState('');

    const handleSelectCity = (cityName) => {
        setSelectedCity(cityName);
    };

    const handleSelectDistrict = (districtName) => {
        setSelectedDistrict(districtName);
    };

    const handleSelectWard = (wardName) => {
        setSelectedWard(wardName);
    };

const HandleSubmit=((values)=>{
  console.log(values);
  setForm(values);

});

    return (
        <div >
            <div class="bg-white p-4 col-span-1"></div>
            <div class=" p-4 col-span-5 bg-gray-100 rounded   ">

                <Formik
                    initialValues={{
                        tenThuTuc: "",
                        coQuanThucHien: {
                            tinh: { handleSelectCity },
                            huyen: { handleSelectDistrict },
                            xa: { handleSelectWard },
                        },
                        diaChiTamTru: {
                            tinh: String,
                            huyen: String,
                            xa: String,
                        },
                        diaChiCuThe: "",
                        noiDungDeNghi: String,
                        yKien: String,
                        thoiHanTamTru: 0,
                        fileHoSoLienQuan: {},
                        lePhi: 0,
                        idUser: getIDNguoiThayDoi(),
                        trangThai: String,
                        idNguoiDuyet: String,
                        note: String,
                        created_at: new Date(),
                        created_end: new Date(),

                    }}
                    onSubmit={(values)=>HandleSubmit(values)}
                        
                        
                >
                   
                            <Form>
                                <div class='  gap-4 mt-10 '>
                                    {/* co quan thuc hien  */}
                                    <div className='' >
                                        <div class='bg-yellow-200 w-full d-flex rounded-3xl	'>

                                            <label className='text-xl font-family-sans mx-auto' >
                                                CƠ QUAN THỰC HIỆN
                                            </label>
                                        </div>

                                        <div className='flex  py-8 mx-auto  '>
                                            <div className='mx-auto w-full px-8 ' >

                                                <DiaChi
                                                    onSelectCity={handleSelectCity}
                                                    onSelectDistrict={handleSelectDistrict}
                                                    onSelectWard={handleSelectWard}
                                                />
                                            </div>

                                        </div>
                                        <div class=" flex py-8 ">

                                            <div class="w-2/3 flex flex-col ">
                                                <div className=''>
                                                    <label className='font-bold' > Cơ quan thực hiện </label>
                                                    <label className='text-red-500' > (*) </label>
                                                </div>
                                                <select class="block w-2/3 mx-auto bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500">
                                                    <option value="1"> Công an {selectedCity}</option>
                                                    <option value="1"> Công an {selectedDistrict}</option>
                                                    <option value="1"> Công an {selectedWard}</option>
                                                </select>

                                            </div>
                                            <div class="w-1/3 flex flex-col ">
                                                <div>
                                                    <label className='font-bold' > Số điện thoại </label>
                                                    <label className='text-red-500' > (*) </label>

                                                </div>
                                                <Field className="border w-2/3 border-gray-300 bg-white h-10 px-3 rounded-md mx-auto text-sm focus:outline-none focus:border-blue-500" placeholder='số điện thoại ' value={"0363361994"} />


                                            </div>

                                        </div>
                                    </div>
                                    {/* THÔNG TIN NHẬN THÔNG BÁO , TÌNH TRẠNG HỒ SƠ , KẾT QUẢ GIẢI QUYẾT HỒ SƠ */}
                                    <div className='' >
                                        <div class='bg-yellow-200 w-full d-flex rounded-3xl	'>

                                            <label className='text-xl font-family-sans mx-auto' >

                                                THÔNG TIN ĐỀ NGHỊ ĐĂNG KÝ TRẠM TRÚ
                                            </label>
                                        </div>
                                        <div className='flex  py-8  '>
                                            <div class="w-full flex flex-col ">
                                                <div>
                                                    <label className='font-bold' > Tỉnh/Thành phố </label>
                                                    <label className='text-red-500' > (*) </label>

                                                </div>
                                                <Field name="diaChiCuThe" class="border w-3/4 border-gray-300 bg-white h-10 px-3 rounded-md mx-auto text-sm focus:outline-none focus:border-blue-500" placeholder='Địa chỉ đăng ký tạm trú ' />


                                            </div>


                                        </div>
                                        <div className='flex  py-8  '>
                                            <div class="w-full flex flex-col ">
                                                <div>
                                                    <label className='font-bold' > Họ tên </label>
                                                    <label className='text-red-500' > (*) </label>

                                                </div>
                                                <Field class="border w-3/4 border-gray-300 bg-white h-10 px-3 rounded-md mx-auto text-sm focus:outline-none focus:border-blue-500" placeholder='Địa chỉ đăng ký tạm trú ' 
                                                name=""/>


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

                                    <div className='' >
                                        <div class='bg-yellow-200 w-full d-flex rounded-3xl	'>
                                            <label className='text-xl font-family-sans mx-auto' >

                                                THÔNG TIN NHẬN THÔNG BÁO , TÌNH TRẠNG HỒ SƠ , KẾT QUẢ GIẢI QUYẾT HỒ SƠ
                                            </label>
                                        </div>
                                        <div className='flex  py-8  '>
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


                                    <button type="submit"  class="text-white bg-red-500 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                                        Nạp hồ sơ


                                    </button>

                                </div>
                            </Form>
                        
                
                </Formik>


            </div>
            <div type="submit" class="bg-white-300 p-4 col-span-1  ">
            </div>
        </div>

    )
}
