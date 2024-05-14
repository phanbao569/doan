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
import ThongTinNguoiKhaiBao from "../ThongTinNguoiKhaiBao.js"
import { ToastContainer, toast } from 'react-toastify';
import { MdDriveFolderUpload } from "react-icons/md";


import 'react-toastify/dist/ReactToastify.css';
import Loading from '../../../Loading.jsx';
export default function NapThuTuc() {


    //   const iduser? = getIDNguoiThayDoi();
    const navigate = useNavigate(); // Sử dụng hook useNavigate để chuyển trang(có thể dùng routes,Link)

    const [isLoaded, setIsLoaded] = useState(true);
    const handleInputChange = (event) => {
        const { name, value } = event.target

        setForm(prevState => ({ ...prevState, [name]: value }))
    }
    const handleChonhs1 = (event) => {
        const file = event.target.files[0];
        if (file) {

            const reader = new FileReader();

            reader.onload = (event) => {
                // Chuyển đổi dữ liệu ảnh thành chuỗi base64
                const base64Image = event.target.result;

                // Cập nhật state hoặc thực hiện bất kỳ thao tác nào bạn muốn với chuỗi base64 này
                // Ví dụ: cập nhật state formData
                setForm({
                    ...form,
                    fileHoSoLienQuan: {
                        ...form.fileHoSoLienQuan,
                        hs1: base64Image
                    }
                });
            };

            // Đọc dữ liệu ảnh dưới dạng base64
            reader.readAsDataURL(file);
        }
    };




    const handleChonhs2 = (event) => {
        const file = event.target.files[0];
        if(file){

            const reader = new FileReader();
    
            reader.onload = (event) => {
                // Chuyển đổi dữ liệu ảnh thành chuỗi base64
                const base64Image = event.target.result;
    
                // Cập nhật state hoặc thực hiện bất kỳ thao tác nào bạn muốn với chuỗi base64 này
                // Ví dụ: cập nhật state formData
                setForm({
                    ...form,
                    fileHoSoLienQuan: {
                        ...form.fileHoSoLienQuan,
                        hs2: base64Image
                    }
                });
            };
    
            // Đọc dữ liệu ảnh dưới dạng base64
            reader.readAsDataURL(file);
        }
    };
    const handleChonhs3 = (event) => {
        const file = event.target.files[0];
        if(file){


            const reader = new FileReader();
    
            reader.onload = (event) => {
                // Chuyển đổi dữ liệu ảnh thành chuỗi base64
                const base64Image = event.target.result;
                // Cập nhật state hoặc thực hiện bất kỳ thao tác nào bạn muốn với chuỗi base64 này
                // Ví dụ: cập nhật state formData
                setForm({
                    ...form,
                    fileHoSoLienQuan: {
                        ...form.fileHoSoLienQuan,
                        hs3: base64Image
                    }
                });
            };
    
            // Đọc dữ liệu ảnh dưới dạng base64
            reader.readAsDataURL(file);
        }
    };
    const handleChonhs4 = (event) => {
        const file = event.target.files[0];
        if(file){
            const reader = new FileReader();
    
            reader.onload = (event) => {
                // Chuyển đổi dữ liệu ảnh thành chuỗi base64
                const base64Image = event.target.result;
    
                // Cập nhật state hoặc thực hiện bất kỳ thao tác nào bạn muốn với chuỗi base64 này
                // Ví dụ: cập nhật state formData
                setForm({
                    ...form,
                    fileHoSoLienQuan: {
                        ...form.fileHoSoLienQuan,
                        hs4: base64Image
                    }
                });
            };
    
            // Đọc dữ liệu ảnh dưới dạng base64
            reader.readAsDataURL(file);
        }
    };

    const [form, setForm] = useState({
        tenThuTuc: "Gia hạn tạm trú",
        coQuanThucHien: {
            tinh: "",
            huyen: "",
            xa: '',
        },
        diaChiTamTru: {
            tinh: "",
            huyen: "",
            xa: '',
        },
        diaChiCuThe: "",
        noiDungDeNghi: "",
        yKien: "",
        thoiHanTamTru: 0,

        lePhi: 10000,
        idUser: getIDNguoiThayDoi(),
        trangThai: "",
        idNguoiDuyet: "",
        note: "",
        fileHoSoLienQuan: {
            hs1: null,
            hs2: null,
            hs3: null,
            hs4: null,
            hoSo5: null,
            hoSo6: null,
        },
        created_at: moment().toDate(),
        created_end: '',

    });
    const { user, ttuser } = useContext(GlobalContext)
    const [listDS, setlistDS] = useState(Object);
    useEffect(() => {
        // window.location.reload();
        if (ttuser !== undefined) setIsLoaded(true);
    }, [ttuser]);

    const HandleSubmit = async () => {
        
        try {
            if (
                form.coQuanThucHien.huyen === "" || form.coQuanThucHien.tinh === "" || form.coQuanThucHien.xa === "" ||
                form.diaChiTamTru.huyen === "" || form.diaChiTamTru.tinh === "" || form.diaChiTamTru.xa === "" || form.thoiHanTamTru.huyen === "" || form.thoiHanTamTru === 0 ||
                form.diaChiCuThe.trim() === ""
            ) {
                toast.error("Vui lòng nhập đầy đủ thông tin");
                //   alert("Vui lòng nhập đầy đủ thông tin");
                return;
            }
            else {
                await axios.post(apiUrl(ApiConfig.createGiaHanTamTru), form);
                toast.success("Nạp hồ sơ thành công");
                //  navigate('/');
                setTimeout(() => {
                    navigate('/');
                }, 1000);
            }

            // navigate('/');
        } catch (error) {
            console.error('Lỗi khi gửi dữ liệu:', error);
        }
    };

    return (
        <div className='min-h-screen' >

            <ToastContainer />
            {isLoaded ? (
                <div className=" p-4 col-span-5 bg-gray-100 rounded">
                    <div class=" p-4 col-span-5 bg-gray-100 rounded   ">

                        <Formik
                            initialValues={{
                            }}
                            onSubmit={() => HandleSubmit()}
                        >
                            <Form>
                                <div class=' flex mx-auto text-center flex-col  gap-4 mt-10 '>
                                    <div className='text-3xl bg-red-400 rounded-lg  ' >
                                        GIA HẠN TẠM TRÚ


                                    </div>
                                    {/* co quan thuc hien  */}
                                    <div className='' >
                                        <div class='bg-yellow-200 w-full d-flex rounded-3xl	'>

                                            <label className='text-xl textcenter font-family-sans mx-auto' >
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
                                                    <label className='font-bold text-center  ' > Cơ quan thực hiện </label>
                                                </div>
                                                <select class="block w-2/3 mx-auto bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500">
                                                    <option value="1"> Công an </option>
                                                    <option value="1"> Công an </option>
                                                    <option value="1"> Công an </option>
                                                </select>

                                            </div>
                                            <div class="w-1/3 flex flex-col ">
                                                <div>
                                                    <label className='font-bold text-center' > Số điện thoại </label>
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
                                                    <label className='font-bold text-center ' > Địa chỉ cụ thể  </label>
                                                    <label className='text-red-500' >  </label>

                                                </div>
                                                <div className='flex' >
                                                    <Field onChange={handleInputChange} name="diaChiCuThe" class="border w-3/4 border-gray-300 bg-white h-10 px-3 rounded-md mx-auto text-sm focus:outline-none focus:border-blue-500" placeholder='Địa chỉ đăng ký tạm trú ' />
                                                    <Field onChange={handleInputChange} type="number" min="0" name="thoiHanTamTru" class=" border-gray-300 bg-white h-10 px-3 rounded-md mx-auto text-sm focus:outline-none focus:border-blue-500" placeholder='Thời hạn tạm trú' />
                                                </div>

                                            </div>


                                        </div>
                                        <ThongTinNguoiKhaiBao user={user} ttuser={ttuser} />

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
                                                    <label className='font-bold text-center' > Hình thức nhận thông báo </label>
                                                    <label className='text-red-500' >  </label>
                                                </div>
                                                <select class="block w-2/3 mx-auto bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500">
                                                    <option value="1">Email</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='flex  py-8  '>
                                            <div class="w-full flex flex-col items-center ">
                                                <div>
                                                    <label className='font-bold text-center' > Nội dung đề nghị </label>

                                                </div>
                                                <div className='flex w-2/3'>
                                                    <Field class="flex-grow border border-gray-300 bg-white h-10 px-3 rounded-md mx-auto text-sm focus:outline-none focus:border-blue-500"
                                                        name="noiDungDeNghi"
                                                        onChange={handleInputChange}
                                                    />

                                                    {/* <span id="selectedFileName">{form.}</span> */}

                                                </div>
                                                <label className='mt-2' >Chọn file hồ sơ</label>
                                                <div className='flex items-center mt-2 ' >
                                                    <input type="file" id="hs1" name="hs1" onChange={handleChonhs1} />
                                                    <input type="file" id="hs2" name="hs2" onChange={handleChonhs2} />
                                                    <input type="file" id="hs3" name="hs3" onChange={handleChonhs3} />
                                                    <input type="file" id="hs4" name="hs4" onChange={handleChonhs4} />
                                                </div>
                                            </div>

                                        </div>
                                        <div className='flex w-full'>
                                            <button type="submit "
                                                class="text-white  mx-auto  bg-red-500 hover:bg-red-800   focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full p-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                            >
                                                Nôp hồ sơ
                                            </button>
                                        </div>


                                    </div>
                                </div>
                            </Form>
                        </Formik>


                    </div>
                    <div type="submit" class="bg-white-300 p-4 col-span-1  ">

                    </div>
                </div>
            ) : (
                <div>

                    <Loading/>
                </div>
            )}
        </div>

    )
}
