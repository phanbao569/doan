import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../App'
import DiaChi from '../Diachi'
import ApiConfig, { apiUrl } from '../../ApiConfig';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export default function CapNhatThongTin() {
    const navigate = useNavigate(); // Sử dụng hook useNavigate để chuyển trang(có thể dùng routes,Link)

    useEffect(() => {
        setformttuer(prevState => ({
            ...prevState,
            idTTUser: ttuser?.idTTUser
        }));
        console.log(ttuser);
    }, []);

    const { user, ttuser, setttuser } = useContext(GlobalContext)
    const [formttuser, setformttuer] = useState({

        idTTUser: "",
        queQuan: {
            tinh: "",
            huyen: "",
            xa: ""
        },
        noiDKKhaiSinh: {
            tinh: '',
            huyen: '',
            xa: '',
        },
        diaChiTTCuThe: "",
        ngaySinh: "",
        noiOHienTai: "",
    });
    const handleInputChange = (event) => {
        const { name, value } = event.target
        console.log(name, value);
        setformttuer(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = async () => {
        try {

            setformttuer(prevState => ({
                ...prevState,
                idTTUser: ttuser?.idTTUser,
                hoTen: ttuser?.hoTen
            }));
            if (formttuser.queQuan.tinh == "" || formttuser.queQuan.huyen == "" || formttuser.queQuan.xa == "" || formttuser.noiDKKhaiSinh.tinh == "" || formttuser.noiDKKhaiSinh.huyen == "" || formttuser.noiDKKhaiSinh.xa == "" || formttuser.ngaySinh == "" || formttuser.noiOHienTai == "")
                 toast.error("Vui lòng nhập đủ thông tin");

            else {
                const respont = await axios.put(apiUrl(ApiConfig.updatethongtinuser), formttuser);
                toast.success("Cập nhật thành công");
                navigate("/ChonThuTuc")
            }
        }
        catch (error) {
            alert("an lz");
            console.log(error);
            console.log(formttuser);

        }
    }

    return (
        <div className='h-screen'> 
        <ToastContainer />


            <div className='w-full px-12 py-12'>
                <div className='flex justify-center'>
                    <strong className='text-xl text-red-500'>
                        Vui lòng điền đầy đủ thông tin để tiếp tục sử dụng
                    </strong>
                </div>

                <form className="w-full max-w-lg mx-auto mt-8">
                    <div className="mb-5">
                        <label htmlFor="hoTen" className="block mb-2 text-sm font-medium text-gray-900">Họ Tên</label>
                        <input type="text" id="hoTen" value={ttuser?.hoTen} className="input-field" disabled />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="cccd" className="block mb-2 text-sm font-medium text-gray-900">CCCD</label>
                        <input type="text" id="cccd" value={ttuser?.cccd} className="input-field" disabled />
                    </div>
                   
                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email</label>
                        <input type="text" id="email" value={user?.email} className="input-field" disabled />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="ngaySinh" className="block mb-2 text-sm font-medium text-gray-900">Ngày sinh</label>
                        <input type="date" id="ngaySinh" name="ngaySinh" onChange={handleInputChange} className="input-field" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="large-input" className=" text-start block mb-2 text-sm font-medium  text-gray-900  text-center text-xl">Nơi khai sinh </label>
                        <DiaChi
                            onSelectCity={(cityId) => {
                                setformttuer(prevState => ({
                                    ...prevState,
                                    queQuan: {
                                        ...prevState.queQuan,
                                        tinh: cityId
                                    },
                                    noiDKKhaiSinh: {
                                        ...prevState.noiDKKhaiSinh,
                                        tinh: cityId
                                    }
                                }));

                            }}
                            onSelectDistrict={(districtId) => {
                                setformttuer(prevState => ({
                                    ...prevState,
                                    queQuan: {
                                        ...prevState.queQuan,
                                        huyen: districtId
                                    },
                                    noiDKKhaiSinh: {
                                        ...prevState.noiDKKhaiSinh,
                                        huyen: districtId
                                    }
                                }));


                            }}
                            onSelectWard={(wardId) => {
                                setformttuer(prevState => ({
                                    ...prevState,
                                    queQuan: {
                                        ...prevState.queQuan,
                                        xa: wardId
                                    },
                                    noiDKKhaiSinh: {
                                        ...prevState.noiDKKhaiSinh,
                                        xa: wardId
                                    }
                                }));

                            }}
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="diaChi" className="block mb-2 text-sm font-medium text-gray-900">Địa chỉ cụ thể</label>
                        <input type="text" id="diaChi" name="noiOHienTai" onChange={handleInputChange} className="input-field" />
                    </div>

                    <div className="flex justify-center">
                        <button onClick={handleSubmit} type="button"  class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                            Cập nhật
                        </button>
                    </div>
                </form>
            </div>


        </div>
    )
}
