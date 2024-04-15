import axios from 'axios';
import DiaChi from '../../Diachi.jsx';
import React, { useContext, useEffect, useState } from 'react'
import logo from '../img/footer.jpg'
import { Field, Form, Formik } from 'formik';
import { getIDNguoiThayDoi } from '../../../util/jwtUtils.js';
import { GlobalContext } from '../../../App.js';
import ApiConfig, { apiUrl } from '../../../ApiConfig.js';
import moment from 'moment';
import { Navigate, useNavigate } from 'react-router-dom';
export default function NapThuTuc() {


 //   const idUser = getIDNguoiThayDoi();
 const navigate = useNavigate(); // Sử dụng hook useNavigate để chuyển trang(có thể dùng routes,Link)

 const [isLoaded, setIsLoaded] = useState(false);
 const handleInputChange = (event)=>{
    const {name,value} =event.target
    console.log(name,value);
    setForm(prevState =>({...prevState,[name]:value}))}

     const idUser = getIDNguoiThayDoi();
     const [form,setForm] = useState({
        tenThuTuc: "Gia hạn tạm trú",
        coQuanThucHien: {
            tinh: "",
            huyen: "",
            xa: '',
        },
        diaChiTamTru: {
            tinh: "",
            huyen: "",
            xa: '' ,
        },
        diaChiCuThe: "",
        noiDungDeNghi: "",
        yKien: "",
        thoiHanTamTru: 0,
        fileHoSoLienQuan: {},
        lePhi: 10000,
        idUser: getIDNguoiThayDoi(),
        trangThai: "",
        idNguoiDuyet: "",
        note: "",
        created_at:  moment().toDate(),
        created_end: '',

     });
     const { user, ttuser } = useContext(GlobalContext)

    useEffect(() => {
     console.log(ttuser);
        if(ttuser !== undefined ) setIsLoaded(true);
    }, [ttuser]);



   

    const HandleSubmit = async () => {
        try {
            console.log(form);
      //    await axios.post(apiUrl(ApiConfig.createGiaHanTamTru),form);
          console.log("thanh cong");
          navigate('/test');
        } catch (error) {
          console.error('Lỗi khi gửi dữ liệu:', error);
        }
      };

    return (
        <div>
        {isLoaded ? (
            <div className=" p-4 col-span-5 bg-gray-100 rounded">
               <div class=" p-4 col-span-5 bg-gray-100 rounded   ">

<Formik
    initialValues={{
    }}
    onSubmit={()=>HandleSubmit()}
>
            <Form>
                <div class='  gap-4 mt-10 '>
                    <h1 className='text-xl' >
                    GIA HẠN TẠM TRÚ


                    </h1>
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
                                   onSelectCity={(cityId) => {
                                    setForm(prevState => ({
                                        ...prevState,
                                        coQuanThucHien: {
                                          ...prevState.coQuanThucHien,
                                          tinh: cityId
                                        }
                                      }));
                                      
                                  }}
                                  onSelectDistrict={(districtId) => {
                                    setForm(prevState => ({
                                        ...prevState,
                                        coQuanThucHien: {
                                          ...prevState.coQuanThucHien,
                                          huyen: districtId
                                        
                                       
                                        }
                                      }));
                                      
    
                                  }}
                                  onSelectWard={(wardId) => {
                                    setForm(prevState => ({
                                        ...prevState,
                                        coQuanThucHien: {
                                          ...prevState.coQuanThucHien,
                                          xa: wardId
                                        }
                                      }));
    
                                  }}
                                />
                            </div>

                        </div>
                        <div class=" flex py-8 ">

                            <div class="w-2/3 flex flex-col ">
                                <div className=''>
                                    <label className='font-bold' > Cơ quan thực hiện </label>
                                    <label className='text-red-500' >  </label>
                                </div>
                                <select class="block w-2/3 mx-auto bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500">
                                    <option value="1"> Công an </option>
                                    <option value="1"> Công an </option>
                                    <option value="1"> Công an </option>
                                </select>

                            </div>
                            <div class="w-1/3 flex flex-col ">
                                <div>
                                    <label className='font-bold' > Số điện thoại </label>
                                    <label className='text-red-500' >  </label>

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
                                <DiaChi 
                                 onSelectCity={(cityId) => {
                                    setForm(prevState => ({
                                        ...prevState,
                                        diaChiTamTru: {
                                          ...prevState.diaChiTamTru,
                                          tinh: cityId
                                        }
                                      }));
                                      
                                  }}
                                  onSelectDistrict={(districtId) => {
                                    setForm(prevState => ({
                                        ...prevState,
                                        diaChiTamTru: {
                                          ...prevState.diaChiTamTru,
                                          huyen: districtId
                                        
                                       
                                        }
                                      }));
                                      
    
                                  }}
                                  onSelectWard={(wardId) => {
                                    setForm(prevState => ({
                                        ...prevState,
                                        diaChiTamTru: {
                                          ...prevState.diaChiTamTru,
                                          xa: wardId
                                        }
                                      }));
    
                                  }}
                                />
                                <div>
                                    <label className='font-bold' > Địa chỉ cụ thể  </label>
                                    <label className='text-red-500' >  </label>

                                </div>
                                <div className='flex' >

                                <Field  onChange={handleInputChange} name="diaChiCuThe" class="border w-3/4 border-gray-300 bg-white h-10 px-3 rounded-md mx-auto text-sm focus:outline-none focus:border-blue-500" placeholder='Địa chỉ đăng ký tạm trú ' />
                                <Field type="number" min="0" name="diaChiCuThe" class=" border-gray-300 bg-white h-10 px-3 rounded-md mx-auto text-sm focus:outline-none focus:border-blue-500" placeholder='Thời hạn tạm trú' />

                                </div>

                            </div>


                        </div>
                        <div className='flex  py-8  '>
                            <div class="w-full flex flex-col ">
                                <div>
                                    <label  className='font-bold' > Họ tên </label>
                                    <label className='text-red-500' >  </label>

                                </div>
                                <Field      className=" text-start mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                             disabled placeholder='Họ tên ' 
                                value={user.hoTen} />


                            </div>
                            <div class="w-full flex flex-col ">
                                <div>
                                    <label className='font-bold' > Ngày tháng năm sinh </label>
                                    <label className='text-red-500' >  </label>

                                </div>
                                <Field value={ttuser.ngaySinh} type="date"       className=" text-start mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                             disabled  />
                            </div>
                            <div class="w-full flex flex-col ">
                                <div>
                                    <label className='font-bold' > giới tính </label>
                                    <label className='text-red-500' >  </label>

                                </div>
                                <Field as="select" name="" class="block w-2/3 mx-auto bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500">
                                    <option value="1">Nam</option>
                                    <option value="2">Nữ</option>
                                    <option value="3">Khác</option>
                                </Field >


                            </div>
                        </div>
                        <div class=" flex p-8 ">
                            <div class="w-full flex flex-col ">
                                <div>
                                    <label className='font-bold' > số định danh cá nhân </label>
                                    <label className='text-red-500' >  </label>

                                </div>
                                <input value={ttuser.cccd}      className=" text-start mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                             disabled placeholder='Địa chỉ đăng ký tạm trú ' pattern='' />


                            </div>
                            <div class="w-full flex flex-col ">
                                <div>
                                    <label className='font-bold' > Số điện thoại liên hệ </label>
                                    <label className='text-red-500' >  </label>

                                </div>
                                <input  value={user.sdt }   className=" text-start mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                             disabled placeholder='Địa chỉ đăng ký tạm trú ' />


                            </div>
                            <div class="w-full flex flex-col ">
                                <div>
                                    <label className='font-bold' > Email </label>
                                    <label className='text-red-500' >  </label>

                                </div>
                                <input  value={user.email }      className=" text-start mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                             disabled placeholder='Nhập email ' type='email' />


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
                                    <label className='text-red-500' >  </label>
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
        ) : (
            <div>Loading...</div>
        )}
    </div>

    )
}
