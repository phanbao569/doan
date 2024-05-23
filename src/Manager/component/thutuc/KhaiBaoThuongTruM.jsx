import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ApiConfig, { apiUrl } from '../../../ApiConfig.js';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getIDNguoiThayDoi } from '../../../util/jwtUtils.js';
import { toast } from 'react-toastify';

export default function KhaiBaoThuongTruM() {
    const location = useLocation();
    const Navigate = useNavigate();
    const [id, setid] = useState(location.state.value);
    const idM = getIDNguoiThayDoi();
    console.log(id);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(apiUrl(ApiConfig.getKhaiBaoThuongTru(id)));
                console.log(response.data, 'nè ');
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
        diaChiThuongTru: {
            tinh: "",
            huyen: "",
            xa: '',
        },
        diaChiCuThe: "",
        tenChuHo: "",
        quanHeChuHo: "",
        cccdChuHo: '',
        fileHoSoLienQuan: {},
        noiDungDeNghi: '',
        lephi: '',
        idUser: "",
        trangThai: "",
        idNguoiDuyet: "",
        note: "",
        sdt: "",
        email: "",
        created_at: null, // Định dạng ngày tháng năm
        created_end: '',
    });
    const [TTUser, setTTUser] = useState({
        hoTen: "",
        cccd: "",
        ngaySinh: "",
        gioiTinh: "''",
        cccd: "",
        sdt: "",
        email: ""
    })
    const handClickConfirm = async () => {
        form.idNguoiDuyet = idM;
        form.trangThai = "Paying";
        HandleSubmit();
    }
    const handClickNotConfirm = async () => {
        form.idNguoiDuyet = idM;
        form.trangThai = "Cancelled"
        HandleSubmit();
    }
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    const HandleSubmit = async () => {
        try {
            if (form.note.trim() == "") {
                toast.error("Vui lòng nhập đầy đủ thông tin");
                return;
            }
            else {
                toast.success("Done!");
                await axios.put(apiUrl(ApiConfig.putKhaiBaoThuongTru), form);
                setTimeout(() => {
                    Navigate('/PheDuyetHoSoM');
                }, 1000);
            }
        }
        catch (error) {
            console.error('Lỗi khi gửi dữ liệu:', error);
        }
    };
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    return (
        <div className="min-h-screen font-fontgg ">
            <div className='w-[1100px] relative flex gap-2 text-center mt-6 mb-3 m-auto p-4 items-center'>
                <h1 className='flex-1 text-3xl font-fontgg'>Khai báo thường trú</h1>
                <div className='absolute right-0 text-start px-2 text-red-900 bg-white w-150 shadow-md rounded'>Lệ phí: {form?.lePhi}</div>
            </div>
            <form className="w-[1100px] bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 m-auto">
                <div className=''>
                    <h1 className='font-bold text-center bg-orange-300 p-3 rounded mb-3'>Cơ quan thực hiện</h1>
                    <div className='flex gap-8 mt-2 justify-center '>
                        <div className="mb-6 flex-1">
                            <label className="block text-gray-700 text-sm font-bold mb-2">ID Người duyệt:</label>
                            <input value={idM} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                        <div className="mb-6 flex-1">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Tỉnh:</label>
                            <input value={form?.coQuanThucHien?.tinh} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                        <div className="mb-6 flex-1">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Huyện:</label>
                            <input value={form?.coQuanThucHien?.huyen} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                        <div className="mb-6 flex-1 ">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Xã:</label>
                            <input value={form?.coQuanThucHien?.xa} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
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
                            <label htmlFor="diaChiCuThe" className="block text-gray-700 text-sm font-bold mb-2">Họ tên:</label>
                            <input type="text" id="huyen" name="huyen" value={TTUser?.hoTen} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                        <div className="mb-6 flex-1">
                            <label htmlFor="thoiHanTamTru" className="block text-gray-700 text-sm font-bold mb-2">Ngày tháng năm sinh:</label>
                            <input type="text" id="huyen" name="huyen" value={formatDate(TTUser?.ngaySinh)} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                        <div className="mb-6 flex-1">
                            <label htmlFor="gioiTinh" className="block text-gray-700 text-sm font-bold mb-2">Giới tính:</label>
                            <input type="text" id="huyen" name="huyen" value={TTUser?.gioiTinh} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                        <div className="mb-6 flex-1">
                            <label htmlFor="diaChiCuThe" className="block text-gray-700 text-sm font-bold mb-2">Số định danh cá nhân:</label>
                            <input type="text" id="huyen" name="huyen" value={TTUser?.cccd} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>

                    </div>
                </div>



                <h1 className='font-bold text-center bg-orange-300 p-3 rounded mb-3'>Địa chỉ đề nghị đăng ký thường trú</h1>
                <div className='flex justify-between gap-3'>
                    <div className='flex gap-8'>
                        <div className="mb-6 flex-1">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Tỉnh:</label>
                            <input value={form.diaChiThuongTru.tinh} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                        <div className="mb-6 flex-1">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Huyện:</label>
                            <input value={form.diaChiThuongTru.huyen} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                        <div className="mb-6 flex-1">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Xã:</label>
                            <input value={form.diaChiThuongTru.xa} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                        <div className="mb-6 flex-1">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Địa chỉ cụ thể:</label>
                            <input value={form.diaChiCuThe} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>

                    </div>
                </div>
                <div className='flex justify-between gap-3'>
                    <div className="mb-6 flex-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Họ và tên chủ hộ:</label>
                        <input value={form?.tenChuHo} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                    <div className="mb-6 flex-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2">CCCD chủ hộ:</label>
                        <input value={form.cccdChuHo} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                    <div className="mb-6 flex-1">
                        <label className="block text-gray-700 text-sm font-bold mb-2">Quan hệ chủ hộ:</label>
                        <input value={form.quanHeChuHo} className="w-full bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                    </div>
                </div>
                <div className='flex justify-between gap-3'>
                    <div className="mb-6 flex-1">
                        <label htmlFor="tinh" className="block text-gray-700 text-sm font-bold mb-2">File hồ sơ liên quan:</label>
                        <div className='flex' >
                            {form && form.fileHoSoLienQuan && (
                                <>
                                    {form.fileHoSoLienQuan.hs1 && (
                                        <img className='mr-2' src={form.fileHoSoLienQuan.hs1} style={{ width: '100px', height: '100px' }} />
                                    )}
                                    {form.fileHoSoLienQuan.hs2 && (
                                        <img className='mr-2' src={form.fileHoSoLienQuan.hs2} style={{ width: '100px', height: '100px' }} />
                                    )}
                                    {form.fileHoSoLienQuan.hs3 && (
                                        <img className='mr-2' src={form.fileHoSoLienQuan.hs3} style={{ width: '100px', height: '100px' }} />
                                    )}
                                    {form.fileHoSoLienQuan.hs4 && (
                                        <img className='mr-2' src={form.fileHoSoLienQuan.hs4} style={{ width: '100px', height: '100px' }} />
                                    )}
                                </>
                            )}
                        </div>

                    </div>

                </div>
                <div>
                    <h1 className='font-bold text-center bg-orange-300 p-3 rounded mb-3' value={form.noiDungDeNghi}>Nội dung đề nghị</h1>
                    <div className='mt-2'>
                        <div className="mb-6 flex flex-1 ">
                            <input value={form?.noiDungDeNghi} className="w-full h-20 bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" readOnly />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='font-bold text-center bg-orange-300 p-3 rounded mb-3'>Note</h1>
                    <div className='mt-2'>
                        <div className="mb-2 flex flex-1 ">
                            <input name='note' onChange={handleInputChange} className="w-full h-20 bg-white text-gray-700 border rounded py-2 px-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" />
                        </div>
                    </div>
                </div>
            </form>
            <div className="flex justify-center gap-2 mt-3">
                <button onClick={handClickConfirm} className="w-52 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Duyệt</button>
                <button onClick={handClickNotConfirm} className="w-52 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Không duyệt</button>
            </div>
            <Link to='/PheDuyetHoSoM' className='ml-52 text-sm underline decoration-1 hover:text-red-600 '>Back</Link>
        </div>

    )
}
