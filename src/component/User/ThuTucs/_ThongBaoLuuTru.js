import axios from 'axios';
import DiaChi from '../../Diachi.jsx';
import React, { useContext, useEffect, useState } from 'react'
import logo from '../img/footer.jpg'
import { Field, Form, Formik } from 'formik';
import { getIDNguoiThayDoi } from '../../../util/jwtUtils.js';
//mport  ApiCon,{baseUrl} from '../../../ApiConfig.js'
import ApiConfig, { apiUrl } from '../../../ApiConfig.js'
import moment from 'moment';
import { GlobalContext } from '../../../App.js';
import ThongTinNguoiKhaiBao from '../ThongTinNguoiKhaiBao.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
export default function NapThuTuc() {

    const navigate = useNavigate(); // Sử dụng hook useNavigate để chuyển trang(có thể dùng routes,Link)
    const location = useLocation();
    const [VBPL, sethoso] = useState(location.state.VBPL);
    
    const handleInputChange = (event) => {
        const { name, value } = event.target
        setForm(prevState => ({ ...prevState, [name]: value }))
    }
    const { user, ttuser } = useContext(GlobalContext)

    const [isLoaded, setIsLoaded] = useState(true);
  
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
                        hs4: base64Image
                    }
                });
            };

            // Đọc dữ liệu ảnh dưới dạng base64
            reader.readAsDataURL(file);
        }
    };

    const [form, setForm] = useState({
        tenThuTuc: VBPL.tenThuTuc,
        coQuanThucHien: {
            tinh: "",
            huyen: "",
            xa: '',
        },
        loaiHinhCoSo: "",
        tenCoSo: "",
        diaChiLuuTru: {
            tinh: "",
            huyen: "",
            xa: '',
        },
        diaChiCuThe: "",
        idUser: getIDNguoiThayDoi(),
        lePhi: VBPL.lePhi,
        trangThai: "",
        idNguoiDuyet: "",
        note: "",
        fileHoSoLienQuan: {
            hs1: "",
            hs2: "",
            hs3: "",
            hs4: "",
            hoSo5: "",
            hoSo6: "",
        },
        created_at: moment().toDate(),
        created_end: '',
        hoTen : ttuser.hoTen,
        gioiTinh : ttuser.gioiTinh,
        email : user.email,
    });

    useEffect(() => {
        //   fetchdata();

    }, []);

    const HandleSubmit = async () => {
        console.log(form);
        try {
            if (
                form.coQuanThucHien.huyen === "" || form.coQuanThucHien.tinh === "" || form.coQuanThucHien.xa === "" ||
                form.diaChiLuuTru.huyen === "" || form.diaChiLuuTru.tinh === "" || form.diaChiLuuTru.xa === "" ||
                form.diaChiCuThe.trim() === "" || form.loaiHinhCoSo.trim() == "" || form.tenCoSo.trim() === ""
            ) {
                toast.error("Vui lòng nhập đầy đủ thông tin");
                //   alert("Vui lòng nhập đầy đủ thông tin");
                return;
            }
            else {
               const check = await axios.post(apiUrl(ApiConfig.thongbaoluutru), form);
               console.log(check);
                toast.success("Nộp hồ sơ thành công");
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
                            THÔNG BÁO LƯU TRÚ
                        </div>
                        <Formik

                            onSubmit={() => HandleSubmit()}
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
                                                    <label className='font-bold text-center  ' > Trụ sở thực hiện </label>
                                                </div>
                                                <input
                                                    className="text-center mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    value={` Công an ${form?.coQuanThucHien?.xa} `}
                                                />
                                            </div>
                                            <div class="w-1/3 flex flex-col ">
                                                <div>
                                                    <label className='font-bold text-center' > Số điện thoại </label>
                                                </div>
                                                <Field className="border w-2/3 border-gray-300 bg-white h-10 px-3 rounded-md mx-auto text-sm focus:outline-none focus:border-blue-500" placeholder='số điện thoại ' value={"0363361994"} />
                                            </div>
                                        </div>
                                    </div>
                                    {/* THÔNG TIN NHẬN THÔNG BÁO , TÌNH TRẠNG HỒ SƠ , KẾT QUẢ GIẢI QUYẾT HỒ SƠ */}
                                    <ThongTinNguoiKhaiBao user={user} ttuser={ttuser} />

                                    {/* Thong tin co so luu tru  */}
                                    <div className='' >
                                        <div class='bg-yellow-200 w-full d-flex rounded-3xl	'>

                                            <label className='text-xl font-family-sans mx-auto' >

                                                THÔNG TIN CƠ SỞ LƯU TRÚ
                                            </label>
                                        </div>
                                        <div className='flex  py-8  '>
                                            <div class="w-full flex flex-col ">
                                                <div>
                                                    <label className='font-bold text-center' > Loại hình cơ sở lưu trú </label>

                                                </div>
                                                <select onChange={handleInputChange} name="loaiHinhCoSo" class="block w-2/3 mx-auto bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500">
                                                <option value="">Chọn loại hình cơ sở</option>
                                                    <option value="Ký túc sinh viên">Ký túc sinh viên</option>
                                                    <option value="Nhà ngăn phòng cho thuê">Nhà ngăn phòng cho thuê </option>
                                                    <option value="Cơ sở du lịch<">Cơ sở du lịch</option>
                                                    <option value="Cơ sở khám bệnh">Cơ sở khám bệnh</option>
                                                    <option value="Cơ sở khác">Cơ sở khác</option>
                                                </select >


                                            </div>
                                            <div class="w-full flex flex-col ">
                                                <div className=''>
                                                    <label className='font-bold text-center' > Tên cơ sở lưu trú</label>

                                                </div>
                                                <Field onChange={handleInputChange} name="tenCoSo" class="border w-3/4 border-gray-300 bg-white h-10 px-3 rounded-md mx-auto text-sm focus:outline-none focus:border-blue-500" placeholder='Địa chỉ đăng ký tạm trú ' />


                                            </div>

                                        </div>
                                        <div class="flex flex-col py-8 ">
                                            <div className=''>
                                                <label className='font-bold text-center' > Địa chỉ cụ thể</label>

                                            </div>
                                            <Field onChange={handleInputChange} name="diaChiCuThe" class="border w-3/4 border-gray-300 bg-white h-10 px-3 rounded-md mx-auto text-sm focus:outline-none focus:border-blue-500" placeholder='Địa chỉ cụ thể ' />


                                        </div>
                                        <DiaChi
                                            onSelectCity={(cityId) => {
                                                setForm(prevState => ({
                                                    ...prevState,
                                                    diaChiLuuTru: {
                                                        ...prevState.diaChiLuuTru,
                                                        tinh: cityId
                                                    }
                                                }));

                                            }}
                                            onSelectDistrict={(districtId) => {
                                                setForm(prevState => ({
                                                    ...prevState,
                                                    diaChiLuuTru: {
                                                        ...prevState.diaChiLuuTru,
                                                        huyen: districtId


                                                    }
                                                }));


                                            }}
                                            onSelectWard={(wardId) => {
                                                setForm(prevState => ({
                                                    ...prevState,
                                                    diaChiLuuTru: {
                                                        ...prevState.diaChiLuuTru,
                                                        xa: wardId
                                                    }
                                                }));

                                            }}
                                        />



                                    </div>
                                    <div className='flex  py-8  '>
                                        <div class="w-full flex flex-col items-center  ">
                                            <div>
                                                <label className='font-bold text-center' > Nội dung đề nghị </label>

                                            </div>
                                            <Field class="border w-3/4 border-gray-300 bg-white h-10 px-3 rounded-md mx-auto text-sm focus:outline-none focus:border-blue-500" placeholder='Họ tên '
                                                name="noiDungDeNghi"
                                                onChange={handleInputChange}
                                            />
                                      <div class='bg-yellow-200 w-full d-flex rounded-3xl mt-3	'>
                                                    <label className='text-xl font-family-sans mx-auto' >

                                                        Hồ sơ liên quan ( Vui lòng gửi ảnh giấy tờ lên )
                                                    </label>
                                                </div>
                                                <div className='flex  items-center mt-2 ' >
                                                    <div className='flex flex-col' >
                                                        <input className='my-2' type="file" id="hs1" name="hs1" onChange={handleChonhs1} />
                                                        <input className='my-2' type="file" id="hs2" name="hs2" onChange={handleChonhs2} />
                                                    </div>
                                                    <div className='flex flex-col' >
                                                        <input className='my-2' type="file" id="hs3" name="hs3" onChange={handleChonhs3} />
                                                        <input className='my-2' type="file" id="hs4" name="hs4" onChange={handleChonhs4} />
                                                    </div>
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
                                                    <label className='font-bold text-center' > Hình thức nhận thông báo </label>

                                                </div>
                                                <select class="block w-2/3 mx-auto bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500">
                                                    <option value="1">Email</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </Form>
                        </Formik>
                        <div className='flex' >
                            <button type="submit"
                                onClick={HandleSubmit}
                                class="text-white  mx-auto  bg-red-500 hover:bg-red-800   focus:outline-none text-center focus:ring-4 focus:ring-red-300 font-medium rounded-full p-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                            >
                                Nộp hồ sơ
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
