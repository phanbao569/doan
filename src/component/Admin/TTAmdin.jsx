import React, { useState, useEffect } from 'react';
import DiaChi from '../Diachi';
import axios from 'axios';
import ApiConfig, { apiUrl } from '../../ApiConfig';
import { getIDNguoiThayDoi } from '../../util/jwtUtils';
export default function TTAmdin() {
    const [isLoading,setIsLoading] = useState(false);
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
            xa: '',
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
        setIsLoading(true)
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get(apiUrl(ApiConfig.getAdmin(id)));
            const data = response.data;
            setFormData(data);
            setIsLoading(true)
        } catch (error) {
            console.error('Lỗi khi lấy dữ liệu từ API:', error);
        }
    };
    const fetchTTNV = async () => {
        setIsLoading(false)
        try {
            const response = await axios.get(apiUrl(ApiConfig.getTTAdmin(id)));
            const data = response.data;

            setFormTTNV(data)
            console.log("thông tin: " + data)
            setIsLoading(true)
            if (data === null) {
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
       
            try {

                const response = await axios.put(apiUrl(ApiConfig.updateTTAdmin), formTTNV);
                const data = response.data;
                console.log(data)
                window.location.reload()
                //xử lí sửa put thông tin từ fromNV đưa đến backend
            } catch (error) {
                console.error('Lỗi khi lấy dữ liệu từ API:', error);
            }
        }
    


    return (
       
        // <div className="flex justify-center items-center h-screen">
        //     <div className="w-full max-w-screen-md mx-auto">
        //         <div className="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
        //             <div className="mb-4 grid grid-cols-2 gap-4">
        //                 <div className="flex flex-col ">
        //                     <label htmlFor="hoTen" className="font-bold mb-2">Họ và tên</label>
        //                     <input type="text" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="hoTen" value={formData.hoTen} onChange={(e) => { handleChange(e); handleChange2(e) }} readOnly={!isEditable} />
        //                 </div>
        //                 <div className="flex flex-col">
        //                     <label htmlFor="gioiTinh" className="font-bold mb-2">Giới tính</label>
        //                     <input type="text" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="gioiTinh" value={formTTNV.gioiTinh} onChange={(e) => { handleChange(e); handleChange2(e) }} readOnly={!isEditable} />
        //                 </div>
        //                 <div className="flex flex-col">
        //                     <label htmlFor="cccd" className="font-bold mb-2">Số CCCD</label>
        //                     <input type="text" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="cccd" value={formData.cccd} onChange={(e) => { handleChange(e); handleChange2(e) }} readOnly={!isEditable} />
        //                 </div>
        //                 <div className="flex flex-col">
        //                     <label htmlFor="chucVu" className="font-bold mb-2">Chức vụ</label>
        //                     <input type="text" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="chucVu" value={formTTNV.chucVu} onChange={handleChange2} readOnly={!isEditable} />
        //                 </div>
        //                 <div className="flex flex-col">
        //                     <label htmlFor="diaChi" className="font-bold mb-2">Địa chỉ</label>
        //                     <input type="text" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="diaChi" value={formTTNV.diaChi} onChange={handleChange2} readOnly={!isEditable} />
        //                 </div>
        //                 <div className="flex flex-col">
        //                     <label htmlFor="ngaySinh" className="font-bold mb-2">Ngày sinh</label>
        //                     <input type="text" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ngaySinh" value={formTTNV.ngaySinh} onChange={handleChange2} readOnly={!isEditable} />
        //                 </div>
        //                 <div className="flex flex-col col-span-2">

        //                     <label htmlFor="ngaySinh" className="font-bold mb-2">Cơ quan</label>
        //                     {!isEditable ? (
        //                         <input
        //                             type="text"
        //                             className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        //                             id="ngaySinh"
        //                             value={`${formTTNV.coQuan.tinh}-${formTTNV.coQuan.huyen}-${formTTNV.coQuan.xa}`}
        //                             readOnly
        //                         />

        //                     ) : (
        //                         <DiaChi
        //                             className="block w-full bg-white border border-gray-300 rounded-md shadow-sm py-1 px-2 focus:outline-none focus:border-blue-500 focus:ring-blue-500"
        //                             onSelectCity={(cityId) => {
        //                                 setFormTTNV({ ...formTTNV, coQuan: { ...formTTNV.coQuan, tinh: cityId } });
        //                             }}
        //                             onSelectDistrict={(districtId) => {
        //                                 setFormTTNV({ ...formTTNV, coQuan: { ...formTTNV.coQuan, huyen: districtId } });
        //                             }}
        //                             onSelectWard={(wardId) => {
        //                                 setFormTTNV({ ...formTTNV, coQuan: { ...formTTNV.coQuan, xa: wardId } });
        //                             }}
        //                         />
        //                     )}
        //                 </div>
        //                 <div className="flex flex-col">
        //                     <label htmlFor="sdt" className="font-bold mb-2">Số điện thoại</label>
        //                     <input type="text" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="sdt" value={formData.sdt} onChange={(e) => { handleChange(e); handleChange2(e) }} readOnly={!isEditable} />
        //                 </div>
        //                 <div className="flex flex-col">
        //                     <label htmlFor="email" className="font-bold mb-2">Email</label>
        //                     <input type="email" className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" value={formData.email} onChange={(e) => { handleChange(e); handleChange2(e) }} readOnly={!isEditable} />
        //                 </div>
        //             </div>

        //             <div className="flex justify-end mt-4">
        //                 <button type="button" className={`btn ${isEditable ? "btn-secondary me-2" : "btn-primary"}`} onClick={handleEditClick}>
        //                     {isEditable ? "Hủy" : "Sửa"}
        //                 </button>
        //                 {isEditable && (
        //                     <button type="button" className="btn btn-primary" onClick={(event) => { handleEditClick(); handleSubmit(event); }}>
        //                         Lưu
        //                     </button>
        //                 )}
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div> { isLoading ? (
<div className=" py-1 bg-blueGray-50">
            <div className="w-full lg:w-8/12 px-4 mx-auto mt-6">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
                    <div className="rounded-t bg-white mb-0 px-6 py-6">
                        <div className="text-center flex justify-between">
                            <h6 className="text-blueGray-700 text-xl font-bold">
                                My account
                            </h6>
                            <div className="flex justify-end mt-2">
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
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                        <form>
                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Admin Information
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                            Họ Tên
                                        </label>
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" id="hoTen" value={formData.hoTen} onChange={(e) => { handleChange(e); handleChange2(e) }} readOnly={!isEditable} />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                            ngày sinh
                                        </label>
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" id="ngaySinh" value={formTTNV.ngaySinh} onChange={handleChange2} readOnly={!isEditable} />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                            CCCD
                                        </label>
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" id="cccd" value={formData.cccd} onChange={(e) => { handleChange(e); handleChange2(e) }} readOnly={!isEditable} />
                                    </div>
                                </div>
                                <div className="w-full lg:w-6/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                            Giới tính
                                        </label>
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" id="gioiTinh" value={formTTNV.gioiTinh} onChange={(e) => { handleChange(e); handleChange2(e) }} readOnly={!isEditable} />
                                    </div>
                                </div>
                            </div>
                            <hr className="mt-6 border-b-1 border-blueGray-300" />
                            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                                Contact Information
                            </h6>
                            <div className="flex flex-wrap">
                                <div className="w-full lg:w-12/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                            Cơ quan
                                        </label>
                                        {!isEditable ? (
                                            <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" id="coQuan"
                                            value={`${formTTNV.coQuan?.tinh ?? ""}-${formTTNV.coQuan?.huyen ?? ""}-${formTTNV.coQuan?.xa ?? ""}`}
                                                readOnly />
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
                                        )
                                        }
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                            Email
                                        </label>
                                        <input type="email" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" id="email" value={formData.email} onChange={(e) => { handleChange(e); handleChange2(e) }} readOnly={!isEditable} />
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                            Địa chỉ
                                        </label>
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" id="diaChi" value={formTTNV.diaChi} onChange={handleChange2} readOnly={!isEditable} />
                                    </div>
                                </div>
                                <div className="w-full lg:w-4/12 px-4">
                                    <div className="relative w-full mb-3">
                                        <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2" htmlfor="grid-password">
                                            SDT
                                        </label>
                                        <input type="text" className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" id="sdt" value={formTTNV.sdt} onChange={(e) => { handleChange(e); handleChange2(e) }} readOnly={!isEditable} />
                                    </div>
                                </div>
                              
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>
        ):(     <div> <h1>loading</h1></div>
           

        ) 
        }
        
        </div>
    );
}