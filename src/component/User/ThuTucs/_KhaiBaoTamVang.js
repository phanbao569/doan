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
import ThongTinNguoiKhaiBao from '../ThongTinNguoiKhaiBao.js';
import { ToastContainer, toast } from 'react-toastify';
export default function _KhaiBaoTamVang() {

    const navigate = useNavigate(); // Sử dụng hook useNavigate để chuyển trang(có thể dùng routes,Link)

    const [isLoaded, setIsLoaded] = useState(true);
    const handleInputChange = (event) => {
        const { name, value } = event.target
        console.log(name, value);
        setForm(prevState => ({ ...prevState, [name]: value }))
    }

    const [form, setForm] = useState({
        tenThuTuc: "Khai báo tạm vắng",
        coQuanThucHien: {
            tinh: "",
            huyen: "",
            xa: '',
        },
        diaChi: {
            tinh: "",
            huyen: "",
            xa: '',
        },
        diaChiCuThe: "",
        ngayVang: '',
        ngayVe: '',
        lyDoTamVang: "",
        fileHoSoLienQuan: {},
        lePhi: 10000,
        idUser: getIDNguoiThayDoi(),
        trangThai: "",
        idNguoiDuyet: "",
        note: "",
        created_at: moment().toDate(),
        created_end: '',

    });
    const { user, ttuser } = useContext(GlobalContext)

    useEffect(() => {
        // window.location.reload();
        console.log(ttuser);
        if (ttuser !== undefined) setIsLoaded(true);
    }, [ttuser]);

    const HandleSubmit = async () => {

        try {
            if (
                form.coQuanThucHien.huyen === "" || form.coQuanThucHien.tinh === "" || form.coQuanThucHien.xa === "" ||
                form.diaChi.huyen === "" || form.diaChi.tinh === "" || form.diaChi.xa === "" || form.thoiHanTamTru === "" || form.thoiHanTamTru === 0 ||
                form.diaChiCuThe === "" || form.lyDoTamVang == "" || form.ngayVang === "" || form.ngayVe == ""
            ) {
                toast.error("Vui lòng nhập đầy đủ thông tin");
                //   alert("Vui lòng nhập đầy đủ thông tin");
                return;
            }
            else {
                await axios.post(apiUrl(ApiConfig.khaibaotamvang), form);

                toast.success("Nạp hồ sơ thành công");
                setTimeout(() => {
                    navigate('/');
                }, 1000);
            }

        } catch (error) {
            console.error('Lỗi khi gửi dữ liệu:', error);
        }
    };
    return (
        <div>
            <ToastContainer />

            {isLoaded ? (
                <div className=" p-4 col-span-5 bg-gray-100 rounded">
                    <div class=" p-4 col-span-5 bg-gray-100 rounded   ">
                        <div className='text-3xl text-center bg-red-400 rounded-lg  ' >
                            KHAI BÁO TẠM VẮNG
                        </div>
                        <Formik

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
                                                    <label className='font-bold text-center' > Cơ quan thực hiện </label>
                                                    <label className='text-red-500' >  </label>
                                                </div>
                                                <select class="block w-2/3 mx-auto bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500">
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

                                                THÔNG TIN NƠI Ở  TẠM VẮNG
                                            </label>
                                        </div>
                                        <div className='flex  py-8  '>
                                            <div class="w-full flex flex-col ">
                                                <DiaChi
                                                    onSelectCity={(cityId) => {
                                                        setForm(prevState => ({
                                                            ...prevState,
                                                            diaChi: {
                                                                ...prevState.diaChi,
                                                                tinh: cityId
                                                            }
                                                        }));

                                                    }}
                                                    onSelectDistrict={(districtId) => {
                                                        setForm(prevState => ({
                                                            ...prevState,
                                                            diaChi: {
                                                                ...prevState.diaChi,
                                                                huyen: districtId


                                                            }
                                                        }));


                                                    }}
                                                    onSelectWard={(wardId) => {
                                                        setForm(prevState => ({
                                                            ...prevState,
                                                            diaChi: {
                                                                ...prevState.diaChi,
                                                                xa: wardId
                                                            }
                                                        }));

                                                    }}
                                                />
                                                <div>
                                                    <label className='font-bold text-center' > Địa chỉ cụ thể  </label>
                                                    <label className='text-red-500' >  </label>

                                                </div>
                                                <Field onChange={handleInputChange} name="diaChiCuThe" class="border w-3/4 border-gray-300 bg-white h-10 px-3 rounded-md mx-auto text-sm focus:outline-none focus:border-blue-500" placeholder='Địa chỉ đăng ký tạm trú ' />
                                                <div className='flex gap-10 py-8 mx-auto ' >
                                                    <div>
                                                        <label className='font-bold text-center' > Ngày đi vắng   </label>

                                                        <Field onChange={handleInputChange} type="date" min="0" name="ngayVang" class=" border-gray-300 bg-white h-10 px-3 rounded-md mx-auto text-sm focus:outline-none focus:border-blue-500" placeholder='Thời hạn tạm trú' />
                                                    </div>
                                                    <div>
                                                        <label className='font-bold text-center' > Ngày trở về    </label>

                                                        <Field onChange={handleInputChange} type="date" min="0" name="ngayVe" class=" border-gray-300 bg-white h-10 px-3 rounded-md mx-auto text-sm focus:outline-none focus:border-blue-500" placeholder='Thời hạn tạm trú' />
                                                    </div>
                                                </div>
                                                <div className='mx-auto flex flex-col w-3/4 ' >
                                                    <label className='font-bold text-center' > Lý do tạm vắng  </label>
                                                    <Field onChange={handleInputChange} name="lyDoTamVang" class="border w-2/3 mx-auto w-full border-gray-300 bg-white h-10 px-3 rounded-md text-sm focus:outline-none focus:border-blue-500" placeholder='Lý do tạm vắng' />

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
                                            <div class="w-full flex flex-col ">
                                                <div>
                                                    <label className='font-bold text-center' > Nội dung đề nghị </label>

                                                </div>
                                                <Field class="border w-3/4 border-gray-300 bg-white h-10 px-3 rounded-md mx-auto text-sm focus:outline-none focus:border-blue-500"
                                                    name="noiDungDeNghi"
                                                    onChange={handleInputChange}
                                                />
                                            </div>
                                        </div>
                                    </div>





                                </div>
                            </Form>
                        </Formik>
                        <div className='flex' >
                            <button
                                onClick={HandleSubmit}
                                class="text-white  mx-auto  bg-red-500 hover:bg-red-800   focus:outline-none text-center focus:ring-4 focus:ring-red-300 font-medium rounded-full p-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                            >
                                Nạp hồ sơ
                            </button>
                        </div>

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
