import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import ApiConfig, { apiUrl } from '../../../ApiConfig.js';
import { Link, useLocation } from 'react-router-dom';
import { getIDNguoiThayDoi } from '../../../util/jwtUtils.js';
export default function XoaDangKyThuongTru() {
    const location = useLocation();
    const [id, setid] = useState(location.state.value);
    const idM=getIDNguoiThayDoi();
    console.log(id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl(ApiConfig.getXoaDangKyThuongTru(id)));
                console.log(response.data , 'nè ');
                setForm(response.data);
                if (response.data.idUser) {
                    const response2 = await axios.get(apiUrl(ApiConfig.getTTUser(response.data.idUser)));
                    console.log(response2.data, 'lon');
                    setTTUser(response2.data);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    const [form, setForm] = useState({
        id: "",
        tenThuTuc: "",
        coQuanThucHien: {
            tinh: '',
            huyen: '',
            xa: '',
        },
        noiDungDeNghi: "",
        fileHoSoLienQuan: {},
        lePhi: '',
        idUser: "",
        trangThai: "",
        idNguoiDuyet: "",
        note: "",
        created_at: null, // Định dạng ngày tháng năm
    });
    const { TTUser, setTTUser } = useState({
        hoTen: "",
        ngaySinh: "",
        gioiTinh: "''",
        cccd: "",
        sdt: "",
        email: ""
    })
    const handClickConfirm = async () => {  
        form.idNguoiDuyet =idM;
        const res = await axios.put(apiUrl(ApiConfig.putXoaDangKyThuongTru),form);
        console.log(res.data);
    }
    const handClickNotConfirm=async () => {  
        form.idNguoiDuyet =idM;
        const res = await axios.delete(apiUrl(ApiConfig.deleteXoaDangKyThuongTru(id)));
        console.log(res.data);
    }
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        console.log(date.toISOString().split("T")[0]);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };
    return (
        <div className="min-h-screen font-fontgg ">
            <h1 className='m-auto py-6 font-fontgg text-center  text-3xl'>Xóa đăng ký thường trú</h1>
            <form className="w-[1100px] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 m-auto">
                <div className=''>
                    <h1 className='font-bold text-center bg-orange-300 p-3 rounded mb-3'>Cơ quan thực hiện</h1>
                    <div className='flex gap-8 mt-2 justify-center '>
                        <div className="mb-6 flex-1">
                            <label htmlFor="idNguoiDuyet" className="block text-gray-700 text-sm font-bold mb-2">ID Người duyệt:</label>
                            <input type="text" id="huyen" name="huyen" value={idM} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
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
                    <h1 className='font-bold text-center bg-orange-300 p-3 rounded mb-3'>Thông tin đề nghị đăng ký thường trú</h1>
                    <div className='flex gap-8 mt-2 '>
                        <div className="mb-6 flex-1">
                            <label htmlFor="id" className="block text-gray-700 text-sm font-bold mb-2">ID:</label>
                            <input type="text" id="huyen" name="huyen" value={form?.idUser} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                        <div className="mb-6 flex-1">
                            <label htmlFor="tinh" className="block text-gray-700 text-sm font-bold mb-2">File hồ sơ liên quan:</label>
                            <input type="text" id="tinh" name="tinh" value={form?.fileHoSoLienQuan} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>

                    </div>
                </div>
                <div className='flex justify-between gap-3'>
                    <div className="mb-6 flex-1">
                        <label htmlFor="diaChiCuThe" className="block text-gray-700 text-sm font-bold mb-2">Họ tên:</label>
                        <input type="text" id="huyen" name="huyen" value={TTUser?.hoTen} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                    <div className="mb-6 flex-1">
                        <label htmlFor="thoiHanTamTru" className="block text-gray-700 text-sm font-bold mb-2">Ngày tháng năm sinh:</label>
                        <input type="text" id="huyen" name="huyen" value={formatDate(TTUser.ngaySinh)} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                    <div className="mb-6 flex-1">
                        <label htmlFor="gioiTinh" className="block text-gray-700 text-sm font-bold mb-2">Giới tính:</label>
                        <input type="text" id="huyen" name="huyen" value={TTUser?.gioiTinh} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                </div>
                <div className='flex justify-between gap-3'>
                    <div className="mb-6 flex-1">
                        <label htmlFor="diaChiCuThe" className="block text-gray-700 text-sm font-bold mb-2">Số định danh cá nhân:</label>
                        <input type="text" id="huyen" name="huyen" value={TTUser?.cccd} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                    <div className="mb-6 flex-1">
                        <label htmlFor="thoiHanTamTru" className="block text-gray-700 text-sm font-bold mb-2">SĐT:</label>
                        <input type="text" id="huyen" name="huyen" value={TTUser?.sdt} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                    <div className="mb-6 flex-1">
                        <label htmlFor="gioiTinh" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input type="text" id="huyen" name="huyen" value={TTUser?.email} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-center bg-orange-300 p-3 rounded mb-3' value={form.noiDungDeNghi}>Nội dung đề nghị</h1>
                    <div className='mt-2 mb-4'>
                        <input type="text" id="huyen" name="huyen" className="w-full h-16 bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                </div>
                <div className="flex justify-center gap-6">
                    <button onClick={handClickConfirm} type="submit" className="w-52 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Duyệt</button>
                    <button onClick={handClickNotConfirm} type="submit" className="w-52 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Không duyệt</button>
                </div>
            </form>
            <Link to='/PheDuyetHoSoM' className='ml-52 text-sm underline decoration-1 hover:text-red-600 '>Back</Link>
        </div>
    )
}
