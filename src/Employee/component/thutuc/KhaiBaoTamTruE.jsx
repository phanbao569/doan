import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../../App.js';
import ApiConfig, { apiUrl } from '../../../ApiConfig.js';
import moment from 'moment';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { getIDNguoiThayDoi } from '../../../util/jwtUtils.js';

export default function KhaiBaoTamTruE() {
    const location = useLocation();
    const [id, setid] = useState(location.state.value);
    const idM=getIDNguoiThayDoi();
    console.log(id);
    const [isLoaded, setIsLoaded] = useState(true);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setForm(prevState => ({ ...prevState, [name]: value }));
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl(ApiConfig.getKhaiBaoTamTru(id)));
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
        diaChiTamTru: {
            tinh: "",
            huyen: "",
            xa: '',
        },
        diaChiCuThe: "",
        noiDungDeNghi: "",
        yKien: "",
        thoiHanTamTru: 0,
        fileHoSoLienQuan: {},
        quanHeChuHo:'',
        tenChuHo:'',
        lePhi: null,
        idUser: "",
        trangThai: "",
        idNguoiDuyet: "",
        note: "",
        created_at: null,    // Định dạng ngày tháng năm
        created_end: '',
        
    });
    const [TTUser,setTTUser]=useState({
        hoTen:"",
        ngaySinh:"",
        gioiTinh:"",
        cccd:"",
        sdt:''
    })

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        console.log(date.toISOString().split("T")[0]);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      };
    // console.log(TTUser.hoTen);
    return (
        <div className="min-h-screen font-fontgg pb-8">
            <div className='w-[1100px] relative flex gap-2 text-center mt-6 mb-3 m-auto p-4 items-center'>
                <h1 className='flex-1 text-3xl font-fontgg'>Khai báo tạm trú</h1>
                <div className='absolute right-0 text-center px-2 text-red-900 bg-white w-150 shadow-md rounded'>Lệ phí: {form.lePhi}</div>
            </div>
            <form className="w-[1100px] bg-white shadow-md rounded px-8 pt-6 pb-4 mb-8 m-auto">
                <div className=''>
                    <h1 className='font-bold text-center bg-orange-300 p-3 rounded mb-3'>Cơ quan thực hiện</h1>
                    <div className='flex gap-8 mt-2 justify-center '>
                        <div className="mb-6 flex-1">
                            <label htmlFor="idNguoiDuyet" className="block text-gray-700 text-sm font-bold mb-2">ID Người duyệt:</label>
                            <input type="text" id="huyen" name="huyen" value={idM} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                        <div className="mb-6 flex-1">
                            <label htmlFor="tinh" className="block text-gray-700 text-sm font-bold mb-2">Tỉnh:</label>
                            <input type="text" id="tinh" name="tinh" value={form.coQuanThucHien.tinh} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                        <div className="mb-6 flex-1">
                            <label htmlFor="huyen" className="block text-gray-700 text-sm font-bold mb-2">Huyện:</label>
                            <input type="text" id="huyen" name="huyen" value={form.coQuanThucHien.huyen} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                        <div className="mb-6 flex-1 ">
                            <label htmlFor="huyen" className="block text-gray-700 text-sm font-bold mb-2">Xã:</label>
                            <input type="text" id="huyen" name="huyen" value={form.coQuanThucHien.xa} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-center bg-orange-300 p-3 rounded mb-3'>Thông tin đề nghị đăng ký tạm trú</h1>
                    <div className='flex gap-8 mt-2 '>
                        <div className="mb-6 flex-1">
                            <label htmlFor="id" className="block text-gray-700 text-sm font-bold mb-2">ID:</label>
                            <input type="text" id="huyen" name="huyen" value={form.idUser} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                        <div className="mb-6 flex-1">
                            <label htmlFor="tinh" className="block text-gray-700 text-sm font-bold mb-2">Tỉnh:</label>
                            <input type="text" id="tinh" name="tinh" value={form.diaChiTamTru.tinh} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                        <div className="mb-6 flex-1">
                            <label htmlFor="huyen" className="block text-gray-700 text-sm font-bold mb-2">Huyện:</label>
                            <input type="text" id="huyen" name="huyen" value={form.diaChiTamTru.huyen} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                        <div className="mb-6 flex-1">
                            <label htmlFor="xa" className="block text-gray-700 text-sm font-bold mb-2">Xã:</label>
                            <input type="text" id="huyen" name="huyen" value={form.diaChiTamTru.xa}  className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                    </div>
                </div>
                <div className='flex gap-8'>
                    <div className="mb-6 flex-1">
                        <label htmlFor="diaChiCuThe" className="block text-gray-700 text-sm font-bold mb-2">Địa chỉ cụ thể:</label>
                        <input type="text" id="huyen" name="huyen" value={form.diaChiCuThe} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="thoiHanTamTru" className="block text-gray-700 text-sm font-bold mb-2">Thời hạn đăng ký:</label>
                        <input type="text" id="huyen" name="huyen" value={form.thoiHanTamTru} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="thoiHanTamTru" className="block text-gray-700 text-sm font-bold mb-2">Ngày tạo:</label>
                        <input type="text" id="huyen" name="huyen" value={formatDate(form.created_at)} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                </div>
                <div className='flex justify-between gap-3'>
                    <div className="mb-6 flex-1">
                        <label htmlFor="hoTen" className="block text-gray-700 text-sm font-bold mb-2">Họ tên:</label>
                        <input type="text" id="hoTen" name="huyen" value={TTUser.hoTen}  className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                    <div className="mb-6 flex-1">
                        <label htmlFor="thoiHanTamTru" className="block text-gray-700 text-sm font-bold mb-2">Ngày tháng năm sinh:</label>
                        <input type="text" id="huyen" name="huyen" value={TTUser.ngaySinh} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                    <div className="mb-6 flex-1">
                        <label htmlFor="gioiTinh" className="block text-gray-700 text-sm font-bold mb-2">Giới tính:</label>
                        <input type="text" id="huyen" name="huyen" value={TTUser.gioiTinh} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                </div>
                <div className='flex justify-between gap-3'>
                    <div className="mb-6 flex-1">
                        <label htmlFor="diaChiCuThe" className="block text-gray-700 text-sm font-bold mb-2">Số định danh cá nhân:</label>
                        <input type="text" id="huyen" name="huyen" value={TTUser.cccd} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                    <div className="mb-6 flex-1">
                        <label htmlFor="thoiHanTamTru" className="block text-gray-700 text-sm font-bold mb-2">SĐT:</label>
                        <input type="text" id="huyen" name="huyen" value={TTUser.sdt} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                    <div className="mb-6 flex-1">
                        <label htmlFor="gioiTinh" className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                        <input type="text" id="huyen" name="huyen" value={TTUser.gioiTinh} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                </div>
                <div className='flex justify-between gap-3'>
                    <div className="mb-6 flex-1">
                        <label htmlFor="diaChiCuThe" className="block text-gray-700 text-sm font-bold mb-2">Tên chủ hộ:</label>
                        <input type="text" id="huyen" name="huyen" value={form.tenChuHo} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                    <div className="mb-6 flex-1">
                        <label htmlFor="thoiHanTamTru" className="block text-gray-700 text-sm font-bold mb-2">Quan hệ với chủ hộ</label>
                        <input type="text" id="huyen" name="huyen" value={form.quanHeChuHo} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-center bg-orange-300 p-3 rounded mb-3' value={form.noiDungDeNghi} >Nội dung đề nghị</h1>
                    <div className='mt-2'>
                        
                        <div className="mb-6 flex flex-1 ">
                            <input type="text" id="huyen" name="huyen" className="w-full h-20 bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                    </div>
                </div>


                <div className="flex ">
                    <button type="submit" className="m-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Duyệt</button>
                </div>
            </form>
            
        </div>

    )
}
