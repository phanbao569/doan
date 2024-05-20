import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getFullNameFromToken, getIDNguoiThayDoi } from '../../util/jwtUtils';
import ApiConfig, { apiUrl } from '../../ApiConfig';
import { ToastContainer, toast } from 'react-toastify';

export default function HoiDapM() {
    const [formGet, setFormGet] = useState([])
    const [formPut, setFormPut] = useState({
        id: '',
        idUser: '',
        tenUser: '',
        noiDung: '',
        idNguoiPhanHoi: '',
        tenNguoiPhanHoi: '',
        phanHoi: '',
        created_at: '',
        updated_at: '',
    })
    useEffect(() => {
        fetchAllUser();
    }, []);
    const idtoken = getIDNguoiThayDoi();
    const tentoken = getFullNameFromToken();
    const fetchAllUser = async () => {
        try {
            const response = await axios.get(apiUrl(ApiConfig.getAllHoiDap));
            setFormGet(response.data);

            console.log(formGet)
        } catch (error) {
            console.error('Fetch data error:', error);
        }
    };
    const handleFilterChange = (e) => {
        const { value } = e.target;
        if (value === "") {
            fetchAllUser(); // Gọi lại hàm để hiển thị danh sách ban đầu
        }
    };
    const handleSearch = async () => {
        try {
            // Lấy giá trị từ input
            const filterText = document.getElementById('filterText').value;
            // Gửi request để lấy dữ liệu đã lọc
            if (filterText !== "") {
                const response = await axios.get(apiUrl(ApiConfig.getHoiDapFilter(filterText)));
                setFormGet(response.data);

            }
            else toast.error("Vui lòng điền thông tin cần tìm kiếm!");;

        } catch (error) {
            console.error('Fetch data error:', error);
        }

    }
    const handleSubmit = async (item) => {

        const updatedFormPut = {
            id: item.id,
            idUser: item.idUser,
            tenUser: item.tenUser,
            noiDung: item.noiDung,
            created_at: item.created_at,
            idNguoiPhanHoi: idtoken,
            tenNguoiPhanHoi: tentoken,
            phanHoi: item.phanHoi,
        };
        try {
            if (item.phanHoi.trim() === "") {
                toast.error("Vui lòng nhập nội dung đầy đủ trước khi gửi");
                return;
            }
            else {
                const response = await axios.put(apiUrl(ApiConfig.updateHoiDap), updatedFormPut);
                console.log(response.data);
                setFormPut(response.data);
                toast.success("Done!");
                setTimeout(() => {
                }, 1000);
            }

        } catch (error) {
            console.error('Fetch data error:', error);
        }
    };
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');

        return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
    };
    return (
        <div className='mt-4 min-h-screen font-fontgg text-center'>
            <ToastContainer />
            <div className="flex  flex-row justify-around">
                <div className="flex w-2/3  py-10">
                    <input type="search" id="filterText"
                        className=" w-full p-2 text-sm text-gray-900 bg-gray-100  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Search NAME..." onChange={handleFilterChange} onKeyPress={(e) => {
                            if (e.key === 'Enter') {
                                //    handleFilterSubmit();
                            }
                        }} />
                    <button className='w-28 bg-slate-300'
                        type="button" onClick={handleSearch} >Tìm kiếm
                    </button>
                </div>
            </div>
            <h1 className='m-auto font-bold text-2xl p-3'>Danh sách hồi đáp</h1>
            <div className="m-2 p-2 relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm mb-10 text-center rtl:text-right text-gray-500 dark:text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-600">
                        <tr>
                            <th scope="col" className="px-6 py-3 w-1/6">
                                id Nguoi hoi
                            </th>
                            <th scope="col" className="px-6 py-3 w-1/6">ten nguoi hoi</th>

                            <th scope="col" className="px-6 py-3 w-1/6">
                                noi dung hoi
                            </th>
                            <th scope="col" className="px-6 py-3 w-1/6">
                                ngay hoi
                            </th>
                            <th scope="col" className="px-6 py-3 w-1/6">
                                noi dung tra loi
                            </th>
                            <th scope="col" className="pl-6 py-3 w-1/6">
                                hanh dong
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {formGet.map((item, index) => (

                            <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {item.idUser}
                                </th>
                                <td className="px-6 py-4">
                                    {item.tenUser}
                                </td>
                                <td className="px-6 py-4">
                                    {item.noiDung}
                                </td>
                                <td className="pl-6 py-4">
                                    {formatDate(item.created_at)}
                                </td>

                                {/* <td className="px-6 py-4">
                 <Link to={`/xem-user/${item.idUser}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</Link>
               </td> */}
                                <th scope="col" className="px-6 py-3 w-1/6">
                                    <input
                                        type="text"
                                        className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="phanHoi" value={item.phanHoi == null ? "" : item.phanHoi}
                                        onChange={(e) => {
                                            const updatedFormGet = [...formGet]; // Tạo một bản sao của mảng formGet
                                            updatedFormGet[index].phanHoi = e.target.value; // Cập nhật giá trị phản hồi cho item tại chỉ số index
                                            setFormGet(updatedFormGet); // Cập nhật mảng formGet mới
                                        }}
                                    />

                                </th>
                                <td className="pl-6 py-4">
                                    <button onClick={() => handleSubmit(item)} className='w-10 h-8 rounded text-center bg-red-700 text-white'>Gửi</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>

        </div>





    )
}
