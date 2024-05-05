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
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
export default function _XoaDangKyThuongTru() {
    const navigate = useNavigate(); // Sử dụng hook useNavigate để chuyển trang(có thể dùng routes,Link)

    const handleInputChange = (event) => {
        const { name, value } = event.target
        console.log(name, value);
        setForm(prevState => ({ ...prevState, [name]: value }))
    }
    const { user, ttuser } = useContext(GlobalContext)
    const [checktt, , setchecktt] = useState(false)
    const [isLoaded, setIsLoaded] = useState(true);
    const idUser = getIDNguoiThayDoi();
    const [form, setForm] = useState({
        tenThuTuc: "Xoá đăng ký thường trú",
        coQuanThucHien: {
            tinh: "",
            huyen: "",
            xa: '',
        },
        noiDungDeNghi: "",
        idUser: getIDNguoiThayDoi(),
        lePhi: "",
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
    });
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
    useEffect(() => {
        if (ttuser?.thuongTru?.tinh !== undefined) setchecktt(true)

        //   fetchdata();

    }, []);
    const handleBack = () => {
        navigate('/thutuc/5d49167e');
    }
    const HandleSubmit = async () => {
        console.log(form);

        try {
            if (
                form.coQuanThucHien.huyen === "" || form.coQuanThucHien.tinh === "" || form.coQuanThucHien.xa === "" ||
                form.noiDungDeNghi.trim() === ""
            ) {
                toast.error("Vui lòng nhập đầy đủ thông tin");
                return;
            }
            else {
                await axios.post(apiUrl(ApiConfig.xoadangkythuongtru), form);

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
            {
                !checktt ? (
                    <div className='h-screen flex items-center justify-center'>
                        <div className="bg-red-100 rounded-lg p-8 w-full max-w-md">
                            <h2 className="text-lg font-semibold mb-4 text-center">Thông báo</h2>
                            <p className="text-gray-800 mb-4 text-center">Bạn chưa có đăng ký thường trú.</p>
                            <div className="flex justify-center"> {/* Thêm div này để căn giữa button */}
                                <button onClick={handleBack} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Trở về</button>
                            </div>
                        </div>
                    </div>




                ) : (
                    <div>
                        <ToastContainer />

                        {isLoaded ? (
                            <div className=" p-4 col-span-5 bg-gray-100 rounded">
                                <div class=" p-4 col-span-5 bg-gray-100 rounded   ">
                                    <div className='text-3xl text-center bg-red-400 rounded-lg  ' >
                                        XOÁ ĐĂNG KÝ THƯỜNG TRÚ
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

                                                            </div>
                                                            <select class="block w-2/3 mx-auto bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500">

                                                            </select>

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
                                                            NỘI DUNG ĐỀ NGHỊ XOÁ ĐĂNG KÝ thường trú
                                                        </label>
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
                                                            <label className='mt-2' >Chọn file hồ sơ</label>
                                                            <div className='flex items-center mt-2 ' >
                                                                <input type="file" id="hs1" name="hs1" onChange={handleChonhs1} />
                                                                <input type="file" id="hs2" name="hs2" onChange={handleChonhs2} />
                                                                <input type="file" id="hs3" name="hs3" onChange={handleChonhs3} />
                                                                <input type="file" id="hs4" name="hs4" onChange={handleChonhs4} />
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
                                    <div className='flex w-full'>
                                        <button type="submit "
                                            onClick={HandleSubmit}
                                            class="text-white  mx-auto  bg-red-500 hover:bg-red-800   focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full p-4 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
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

        </div>






    )
}
