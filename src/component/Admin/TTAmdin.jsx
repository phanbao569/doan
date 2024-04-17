import React, { useState, useEffect } from 'react';
import DiaChi from '../Diachi';
import axios from 'axios';
import ApiConfig, { apiUrl } from '../../ApiConfig';
import { getIDNguoiThayDoi } from '../../util/jwtUtils';
export default function TTAmdin() {
    const [isEditable, setIsEditable] = useState(false);
    const [check, setCheck] = useState(false)
    const [formTTNV, setFormTTNV] = useState({
        id: '',
        chucVu: '',
        hoTen: '',
        cccd: '',
        gioiTinh: '',
        ngaySinh: '',
        sdt: '',
        email: '',
        coQuan: {
            tinh: '',
            huyen: '',
            xa: ''
        },
        diaChi: '',
        idUser: ''

    });
    const [formData, setFormData] = useState({});
    const id = getIDNguoiThayDoi();

    const [originalFormData, setOriginalFormData] = useState({ ...formData });
    const [originalFormNV, setOriginalFormNV] = useState({ ...formTTNV });
    useEffect(() => {
        fetchData();
        fetchTTNV();
    }, []);

    const fetchData = async () => {
        try {
            // const response = await axios.get(`http://172.16.0.147:8888/getUserById/${id}`);
            const response = await axios.get(apiUrl(ApiConfig.getAdmin(id)));
            const data = response.data;
            setFormData(data);
            setFormTTNV({
                ...formTTNV,
                hoTen: data.hoTen,
                cccd: data.cccd,
                sdt: data.sdt,
                email: data.email,
                idUser: id
            });
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu từ API:', error);
        }
    };
    const fetchTTNV = async () => {
        try {
            // const response = await axios.get(`http://172.16.0.147:8888/TTNV/get/${id}`);
            const response = await axios.get(apiUrl(ApiConfig.getTTAdmin(id)));
            const data = response.data;
            setFormTTNV(data)
            console.log("thông tin: " + data)
            if (data == null) {
                // Nếu dữ liệu không tồn tại hoặc là một mảng rỗng, setCheck(true)
                setCheck(true);
            }
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu từ API:', error);
        }
    };

    const handleEditClick = () => {
        setIsEditable(!isEditable);
        if (!isEditable) {
            // Save original form data when entering edit mode
            setOriginalFormData({ ...formData });
            setOriginalFormNV({ ...formTTNV })

        } else {
            // Reset form data to original values when exiting edit mode
            setFormData({ ...originalFormData });
            setFormTTNV({ ...originalFormNV })
        }
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    };
    const handleChange2 = (e) => {
        const { id, value } = e.target;
        setFormTTNV({
            ...formTTNV,
            [id]: value
        });
    };
    const handleSubmit = async (event) => {
        event.preventDefault();
        if (check) {
            const kiemtra = formTTNV
            console.log("du lieu gui di" + JSON.stringify(kiemtra))
            try {

                // const response = await axios.post('http://172.16.0.147:8888/TTNV/create', formTTNV);
                const response = await axios.post(apiUrl(ApiConfig.createTTAdmin), formTTNV)
                const data = response.data;
                console.log(data)
                alert("thành cônn")
                
                //xử lí tạo post thông tin từ fromNV đưa đến backend
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu từ API:' + error);
            }
        }
        else {
            try {

                const response = await axios.put(apiUrl(ApiConfig.updateTTAdmin), formTTNV);
                const data = response.data;
                console.log(data)
                //xử lí sửa put thông tin từ fromNV đưa đến backend
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu từ API:', error);
            }
        }
    }


    return (
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-screen-md mx-auto">
                <div className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <div className="flex flex-col ">
                            <label htmlFor="hoTen" className="font-bold mb-2">Họ và tên</label>
                            <input type="text" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="hoTen" value={formData.hoTen} onChange={(e) => { handleChange(e); handleChange2(e) }} readOnly={!isEditable} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="gioiTinh" className="font-bold mb-2">Giới tính</label>
                            <input type="text" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gioiTinh" value={formTTNV.gioiTinh} onChange={(e) => { handleChange(e); handleChange2(e) }} readOnly={!isEditable} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="cccd" className="font-bold mb-2">Số CCCD</label>
                            <input type="text" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cccd" value={formData.cccd} onChange={(e) => { handleChange(e); handleChange2(e) }} readOnly={!isEditable} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="chucVu" className="font-bold mb-2">Chức vụ</label>
                            <input type="text" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="chucVu" value={formTTNV.chucVu} onChange={handleChange2} readOnly={!isEditable} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="diaChi" className="font-bold mb-2">Địa chỉ</label>
                            <input type="text" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="diaChi" value={formTTNV.diaChi} onChange={handleChange2} readOnly={!isEditable} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="ngaySinh" className="font-bold mb-2">Ngày sinh</label>
                            <input type="text" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ngaySinh" value={formTTNV.ngaySinh} onChange={handleChange2} readOnly={!isEditable} />
                        </div>
                        <div className="flex flex-col col-span-2">

                            <label htmlFor="ngaySinh" className="font-bold mb-2">Cơ quan</label>
                            {!isEditable ? (
                                <input
                                    type="text"
                                    className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="ngaySinh"
                                    value={`${formTTNV.coQuan.tinh}-${formTTNV.coQuan.huyen}-${formTTNV.coQuan.xa}`}
                                    readOnly
                                />

                            ) : (
                                <DiaChi
                                    className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-1 px-2 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
                                    onSelectCity={(cityId) => {
                                        setFormTTNV({ ...formTTNV, coQuan: { ...formTTNV.coQuan, tinh: cityId } });
                                    }}
                                    onSelectDistrict={(districtId) => {
                                        setFormTTNV({ ...formTTNV, coQuan: { ...formTTNV.coQuan, huyen: districtId } });
                                    }}
                                    onSelectWard={(wardId) => {
                                        setFormTTNV({ ...formTTNV, coQuan: { ...formTTNV.coQuan, xa: wardId } });
                                    }}
                                />
                            )}
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="sdt" className="font-bold mb-2">Số điện thoại</label>
                            <input type="text" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="sdt" value={formData.sdt} onChange={(e) => { handleChange(e); handleChange2(e) }} readOnly={!isEditable} />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="font-bold mb-2">Email</label>
                            <input type="email" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" value={formData.email} onChange={(e) => { handleChange(e); handleChange2(e) }} readOnly={!isEditable} />
                        </div>
                    </div>

                    <div className="flex justify-end mt-4">
                        <button type="button" className={`btn ${isEditable ? "btn-secondary me-2" : "btn-primary"}`} onClick={handleEditClick}>
                            {isEditable ? "Hủy" : "Sửa"}
                        </button>
                        {isEditable && (
                            <button type="button" className="btn btn-primary" onClick={(event) => { handleEditClick(); handleSubmit(event); }}>
                                Lưu
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}