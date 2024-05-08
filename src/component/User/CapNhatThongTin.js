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
        setttgiadinh(ttuser?.ttgiaDinh)
        console.log(ttgiadinh);
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
        ttgiaDinh: {
            tenChuHo: "",
            tv1: "",
            nsTV1: "",
            tv2: "",
            nsTV2: "",
            tv3: "",
            nsTV3: "",
        }
    });
    const [ttgiadinh, setttgiadinh] = useState({
        tenChuHo: "",
        tv1: "",
        nsTV1: "",
        tv2: "",
        nsTV2: "",
        tv3: "",
        nsTV3: "",
    })
    const [changleTT, setChangleTT] = useState(false);
    const [changleTT1, setChangleTT1] = useState(true);
    const [changleTT2, setChangleTT2] = useState(true);
    const [changleTT3, setChangleTT3] = useState(true);
    const handlesubmitttgiadinh = () => {
        console.log(ttgiadinh);
        formttuser.ttgiaDinh = ttgiadinh;
        setshowTTGiaDinh(!showTTGiaDinh); 

    }
    const handleInputChange = (event) => {
        const { name, value } = event.target
        console.log(name, value);
        setformttuer(prevState => ({ ...prevState, [name]: value }))
    }
    const handleInputChangettgiadinh = (event) => {
        const { name, value } = event.target
        console.log(name, value);
        setttgiadinh(prevState => ({ ...prevState, [name]: value }))
    }

    const handleSubmit = async () => {
        console.log(formttuser);
        try {
            setformttuer(prevState => ({
                ...prevState,
                idTTUser: ttuser?.idTTUser,
                hoTen: ttuser?.hoTen
            }));
            if (formttuser.queQuan.tinh == "" || formttuser.queQuan.huyen == "" || formttuser.queQuan.xa == "" || formttuser.noiDKKhaiSinh.tinh == "" || formttuser.noiDKKhaiSinh.huyen == "" || formttuser.noiDKKhaiSinh.xa == "" || formttuser.ngaySinh.trim() == "" || formttuser.noiOHienTai.trim() == "" || formttuser.ttgiaDinh.tenChuHo.trim() == "") {

                toast.error("Vui lòng nhập đủ thông tin");
                console.log(formttuser);
            }
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
    const [showTTGiaDinh, setshowTTGiaDinh] = useState(false);
    return (
        <div className='min-h-screen'>
            <ToastContainer />
            <div className='w-full px-12 py-12'>
                <div className='flex justify-center'>
                    <strong className='text-xl text-red-500'>
                        Vui lòng điền đầy đủ thông tin để tiếp tục sử dụng
                    </strong>
                </div>

                <form className=" w-3/4 mx-auto mt-8">
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
                        <label htmlFor="large-input" className=" block mb-2 font-medium  text-gray-900  text-center text-xl">Nơi khai sinh </label>
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
                    <div className="mb-5 flex">
                        <h1 className='w-4/5'>Thành viên gia đình - Chủ hộ :  {ttgiadinh?.tenChuHo}</h1>
                        <button onClick={() => { setshowTTGiaDinh(!showTTGiaDinh) }} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cập nhật</button>
                    </div>


                    <div className="mb-5">
                        <label htmlFor="diaChi" className="block mb-2 text-sm font-medium text-gray-900">Địa chỉ cụ thể</label>
                        <input type="text" id="diaChi" name="diaChiTTCuThe" onChange={handleInputChange} className="input-field" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="diaChi" className="block mb-2 text-sm font-medium text-gray-900">Nơi ở hiện tại</label>
                        <input type="text" id="diaChi" name="noiOHienTai" onChange={handleInputChange} className="input-field" />
                    </div>

                    <div className="flex justify-center">
                        <button onClick={handleSubmit} type="button" class="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                            Cập nhật
                        </button>
                    </div>
                </form>
            </div>

            {showTTGiaDinh && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-8 max-w-6xl min-w-4xl"> {/* Sử dụng max-w-4xl và min-w-4xl để xác định chiều rộng */}
                        <div className='py-10' >
                            <strong className='text-2xl flex text-center'> Thông tin thành viên trong gia đình </strong>

                            <div className="mb-4 flex mt-3">
                                <label  className="mb-2 w-1/3 text-center mt-4">Tên Chủ Hộ:</label>
                                {changleTT ? (
                                    <>
                                        <input onChange={handleInputChangettgiadinh} type="text" id="tenChuHo" name="tenChuHo" className="w-full px-3 py-2 border rounded-md" />
                                        <button onClick={() => { setChangleTT(!changleTT) }} className="px-6 py-4 whitespace-nowrap">Hoàn tất</button>

                                    </>
                                ) : (
                                    <>
                                        <input onChange={handleInputChangettgiadinh} type="text" id="tenChuHo" value={ttgiadinh.tenChuHo} name="tenChuHo" className="w-full px-3 py-2 border rounded-md" />
                                        <button onClick={() => { setChangleTT(!changleTT) }} className="px-6 py-4 whitespace-nowrap">Chỉnh sửa</button>

                                    </>

                                )}



                            </div>
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thành viên</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên thành viên</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày sinh</th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cập nhật</th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">1</td>
                                        {changleTT1 ? (
                                            <>
                                                <td className="px-6 py-4 whitespace-nowrap">{ttgiadinh.tv1}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{ttgiadinh?.nsTV1}</td>
                                                <td onClick={() => { setChangleTT1(!changleTT1) }} className="px-6 py-4 whitespace-nowrap">Chỉnh sửa</td>

                                            </>
                                        ) : (
                                            <>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <input onChange={handleInputChangettgiadinh} type="text" id="tv1" name="tv1" className="w-full px-3 py-2 border rounded-md" />
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <input onChange={handleInputChangettgiadinh} type="date" id="nsTV1" name="nsTV1" className="w-full px-3 py-2 border rounded-md" />
                                                </td>
                                                <td onClick={() => { setChangleTT1(!changleTT1) }} className="px-6 py-4 whitespace-nowrap">Hoàn tất</td>
                                            </>
                                        )}
                                    </tr>

                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">2</td>
                                        {changleTT2 ? (
                                            <>
                                                <td className="px-6 py-4 whitespace-nowrap">{ttgiadinh.tv2}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{ttgiadinh?.nsTV2}</td>
                                                <td onClick={() => { setChangleTT2(!changleTT2) }} className="px-6 py-4 whitespace-nowrap">Chỉnh sửa</td>

                                            </>
                                        ) : (
                                            <>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <input onChange={handleInputChangettgiadinh} type="text" id="tv1" name="tv2" className="w-full px-3 py-2 border rounded-md" />
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <input onChange={handleInputChangettgiadinh} type="date" id="nsTV1" name="nsTV2" className="w-full px-3 py-2 border rounded-md" />
                                                </td>
                                                <td onClick={() => { setChangleTT2(!changleTT2) }} className="px-6 py-4 whitespace-nowrap">Hoàn tất</td>
                                            </>
                                        )}
                                    </tr>

                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap">3</td>
                                        {changleTT3 ? (
                                            <>
                                                <td className="px-6 py-4 whitespace-nowrap">{ttgiadinh.tv3}</td>
                                                <td className="px-6 py-4 whitespace-nowrap">{ttgiadinh?.nsTV3}</td>
                                                <td onClick={() => { setChangleTT3(!changleTT3) }} className="px-6 py-4 whitespace-nowrap">Chỉnh sửa</td>

                                            </>
                                        ) : (
                                            <>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <input onChange={handleInputChangettgiadinh} type="text" id="tv1" name="tv3" className="w-full px-3 py-2 border rounded-md" />
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <input onChange={handleInputChangettgiadinh} type="date" id="nsTV1" name="nsTV3" className="w-full px-3 py-2 border rounded-md" />
                                                </td>
                                                <td onClick={() => { setChangleTT3(!changleTT3) }} className="px-6 py-4 whitespace-nowrap">Hoàn tất</td>
                                            </>
                                        )}
                                    </tr>
                                    {/* Add more rows for additional family members */}
                                </tbody>
                            </table>

                            <div className="flex justify-center">
                                <button onClick={() => { setshowTTGiaDinh(!showTTGiaDinh) }} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Đóng</button>
                                <button onClick={() => { handlesubmitttgiadinh() }} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cập nhật</button>
                            </div>
                        </div>

                    </div>
                </div>
            )}


        </div>
    )
}
