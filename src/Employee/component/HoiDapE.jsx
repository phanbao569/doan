import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getFullNameFromToken, getIDNguoiThayDoi } from '../../util/jwtUtils';

export default function HoiDapE() {
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
            const response = await axios.get('http://192.168.10.233:8888/getAllHoiDap');
            setFormGet(response.data);

            console.log(formGet)
        } catch (error) {
            console.error('Fetch data error:', error);
        }
    };
    const handleFilterChange = (e) => {


    };
    const handleFilterSubmit = async (item) => {

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
            console.log(updatedFormPut);

            const response = await axios.put('http://192.168.10.233:8888/updateHoiDap', updatedFormPut);
            console.log(response.data);
            setFormPut(response.data);
        } catch (error) {
            console.error('Fetch data error:', error);
        }
    };

    return (
        <div className='mt-4'>
            <div className="m-2 relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-500">
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

                            <th scope="col" className="px-6 py-3 w-1/6">
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
                                <td className="px-6 py-4">
                                    {item.created_at}
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
                                <td className="px-6 py-4">
                                    <button onClick={() => handleFilterSubmit(item)}>gui</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>

            </div>

        </div>





    )
}
