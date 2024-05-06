import axios from 'axios';
import DiaChi from '../Diachi.jsx';
import React, { useContext, useEffect, useState } from 'react'
import { Field, Form, Formik } from 'formik';
import { getIDNguoiThayDoi } from '../../../util/jwtUtils.js';
import { GlobalContext } from '../../../App.js';
import ApiConfig, { apiUrl } from '../../../ApiConfig.js';
import moment from 'moment';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

export default function ThongBaoLuuTruE() {
    // const location = useLocation();
    // const [id, setid] = useState(location.state.value);
    // console.log(id);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await axios.get(apiUrl(ApiConfig.getGiaHanTamTru(id)));
    //             console.log(response.data , 'nè ');
    //             setForm(response.data);
    //             if (response.data.idUser) {
    //                 const response2 = await axios.get(apiUrl(ApiConfig.getTTUser(response.data.idUser)));
    //                 console.log(response2.data, 'lon');
    //                 setTTUser(response2.data);
    //             }
    //         } catch (error) {
    //             console.error('Error fetching data:', error);
    //         }
    //     };
    //     fetchData();
    // }, []);
    const [form, setForm] = useState({
        id: "",
        tenThuTuc: "",
        coQuanThucHien: {
            tinh: '',
            huyen: '',
            xa: '',
        },
        diaChiLuuTru: {
            tinh: "",
            huyen: "",
            xa: '',
        },
        diaChiCuThe: "",
        loaiHinhCoSo: "",
        tenCoSo: "",
        fileHoSoLienQuan: {},
        lePhi: '',
        idUser: "",
        trangThai: "",
        idNguoiDuyet: "",
        note: "",
        created_at: '', // Định dạng ngày tháng năm
        created_end: '',
    });
    const { TTUser, setTTUser } = useState({
        hoTen: "",
        ngaySinh: "",
        gioiTinh: "''",
        cccd: "",
        sdt: "",
        email: ""
    })

    const handleSubmit = async () => {
        try {
            console.log(form);
            await axios.post(apiUrl(ApiConfig.createGiaHanTamTru), form);
            console.log("thanh cong");
            Navigate('/');
        } catch (error) {
            console.error('Lỗi khi gửi dữ liệu:', error);
        }
    };
    return (
        <div className="min-h-screen font-fontgg ">
            <div className='w-[1100px] relative flex gap-2 text-center mt-6 mb-3 m-auto p-4 items-center'>
                <h1 className='flex-1 text-3xl font-fontgg'>Thông báo lưu trú</h1>
                <div className='absolute right-0 text-start px-2 text-red-900 bg-white w-150 shadow-md rounded'>Lệ phí: {form.lePhi}</div>
            </div>
            <form className="w-[1100px] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 m-auto">
                <div className=''>
                    <h1 className='font-bold text-center bg-orange-300 p-3 rounded mb-3'>Cơ quan thực hiện</h1>
                    <div className='flex gap-8 mt-2 justify-center '>
                        <div className="mb-6 flex-1">
                            <label htmlFor="idNguoiDuyet" className="block text-gray-700 text-sm font-bold mb-2">ID Người duyệt:</label>
                            <input type="text" id="huyen" name="huyen" value={form?.idNguoiDuyet} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                        <div className="mb-6 flex-1">
                            <label htmlFor="tinh" className="block text-gray-700 text-sm font-bold mb-2">Tỉnh:</label>
                            <input type="text" id="tinh" name="tinh" value={form?.coQuanThucHien?.tinh} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                        <div className="mb-6 flex-1">
                            <label htmlFor="huyen" className="block text-gray-700 text-sm font-bold mb-2">Huyện:</label>
                            <input type="text" id="huyen" name="huyen" value={form?.coQuanThucHien?.huyen} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                        <div className="mb-6 flex-1 ">
                            <label htmlFor="huyen" className="block text-gray-700 text-sm font-bold mb-2">Xã:</label>
                            <input type="text" id="huyen" name="huyen" value={form?.coQuanThucHien?.xa} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-center bg-orange-300 p-3 rounded mb-3'>Thông tin đề nghị lưu trú</h1>
                    <div className='flex gap-8 mt-2 '>
                        <div className="mb-6 flex-1">
                            <label htmlFor="id" className="block text-gray-700 text-sm font-bold mb-2">ID:</label>
                            <input type="text" id="huyen" name="huyen" value={form?.id} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                        <div className="mb-6 flex-1">
                            <label htmlFor="tinh" className="block text-gray-700 text-sm font-bold mb-2">Tỉnh:</label>
                            <input type="text" id="tinh" name="tinh" value={form?.diaChiLuuTru?.tinh} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                        <div className="mb-6 flex-1">
                            <label htmlFor="huyen" className="block text-gray-700 text-sm font-bold mb-2">Huyện:</label>
                            <input type="text" id="huyen" name="huyen" value={form?.diaChiLuuTru?.huyen} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                        <div className="mb-6 flex-1">
                            <label htmlFor="xa" className="block text-gray-700 text-sm font-bold mb-2">Xã:</label>
                            <input type="text" id="huyen" name="huyen" value={form?.diaChiLuuTru?.xa} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                        <div className="mb-6 flex-1">
                            <label htmlFor="diaChiCuThe" className="block text-gray-700 text-sm font-bold mb-2">Địa chỉ cụ thể:</label>
                            <input type="text" id="huyen" name="huyen" className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                    </div>
                </div>
                <div className='flex gap-8'>
                    <div className="flex-1 mb-6">
                        <label htmlFor="thoiHanTamTru" className="block text-gray-700 text-sm font-bold mb-2">Tên cơ sở lưu trú:</label>
                        <input type="text" id="huyen" name="huyen" value={form.thoiHanTamTru} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                    <div className="flex-1 mb-6">
                        <label htmlFor="thoiHanTamTru" className="block text-gray-700 text-sm font-bold mb-2">Loại hình cơ sở:</label>
                        <input type="text" id="huyen" name="huyen" value={form.created_at} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                    <div className="flex-1 mb-6">
                        <label htmlFor="thoiHanTamTru" className="block text-gray-700 text-sm font-bold mb-2">File hồ sơ liên quan:</label>
                        <input type="text" id="huyen" name="huyen" className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                </div>
                <div className='flex justify-between gap-3'>
                    <div className="mb-6 flex-1">
                        <label htmlFor="diaChiCuThe" className="block text-gray-700 text-sm font-bold mb-2">Họ tên:</label>
                        <input type="text" id="huyen" name="huyen" value={TTUser?.hoTen} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                    <div className="mb-6 flex-1">
                        <label htmlFor="thoiHanTamTru" className="block text-gray-700 text-sm font-bold mb-2">Ngày tháng năm sinh:</label>
                        <input type="text" id="huyen" name="huyen" className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                    <div className="mb-6 flex-1">
                        <label htmlFor="gioiTinh" className="block text-gray-700 text-sm font-bold mb-2">Giới tính:</label>
                        <input type="text" id="huyen" name="huyen" className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                </div>
                <div className='flex justify-between gap-3'>
                    <div className="mb-6 flex-1">
                        <label htmlFor="diaChiCuThe" className="block text-gray-700 text-sm font-bold mb-2">Số định danh cá nhân:</label>
                        <input type="text" id="huyen" name="huyen" className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                    <div className="mb-6 flex-1">
                        <label htmlFor="thoiHanTamTru" className="block text-gray-700 text-sm font-bold mb-2">SĐT:</label>
                        <input type="text" id="huyen" name="huyen" className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                    <div className="mb-6 flex-1">
                        <label htmlFor="gioiTinh" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input type="text" id="huyen" name="huyen" className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-center bg-orange-300 p-3 rounded mb-3'>Thông tin nhận thông báo, nội dung đề nghị</h1>
                    <div className="mb-6 flex flex-1 ">
                        <input type="text" id="huyen" name="huyen" className="w-full h-16 bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                </div>


                <div className="flex ">
                    <button type="submit" className="m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Duyệt</button>
                </div>
            </form>

        </div>

    )
}
