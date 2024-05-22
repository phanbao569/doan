import React, { useContext, useEffect, useState } from 'react'
import QR from '../img/image.png'
import ApiConfig, { apiUrl } from '../../ApiConfig';
import axios from 'axios';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getIDNguoiThayDoi } from '../../util/jwtUtils';
import { ToastContainer, toast } from 'react-toastify';

export default function TTUserM() {
    const [ttuser, setTTUser] = useState()
    const location = useLocation();
    const idM = getIDNguoiThayDoi();
    const Navigate = useNavigate();
    // Lấy props được truyền từ đối tượng location
    const [idUser, setidUser] = useState(location.state.value);
    const [form, setForm] = useState({
        anhCCCD: {
            anhMat: "",
            anhMatSau: "",
            anhMatTruoc: ""
        },
        cccd: "",
        code: "",
        codeHashed: "",
        created_at: "",
        diaChiDKTK: {
            huyen: "",
            tinh: "",
            xa: ""
        },
        email: "",
        hoTen: "",
        idNguoiDuyet: "",
        idUser: "",
        matKhau: "",
        role: "",
        sdt: "",
        tinhTrangTK: "",
    });
    // const { user, ttuser, setttuser } = useState()
    const fetchdata = async () => {
        try {
            const response = await axios.get(apiUrl(ApiConfig.getUserById(idUser)));
            setForm(() => response.data);
            const responseTT = await axios.get(apiUrl(ApiConfig.getThongTinUser(idUser)));
            setTTUser(() => responseTT.data)
            setIsLoaded(true)
        } catch (error) {
            console.error('sai gi do :', error);
        }
    };

    const handClickConfirm = async () => {
        form.idNguoiDuyet = idM;
        try {
            toast.success("Done!");
            console.log(form.data);
            await axios.post(apiUrl(ApiConfig.pheDuyetTaiKhoanOK), form);
            setTimeout(() => {
                Navigate('/PheDuyetHoSoM');
            }, 1000);
        }
        catch (error) {
            console.error('Lỗi khi gửi dữ liệu:', error);
        }
    }
    const handClickNotConfirm = async () => {
        form.idNguoiDuyet = idM;
        try {
            toast.success("Done!");
            await axios.post(apiUrl(ApiConfig.pheDuyetTaiKhoanKOOK), form);
            console.log(form.data);
            setTimeout(() => {
                Navigate('/PheDuyetHoSoM');
            }, 1000);
        }
        catch (error) {
            console.error('Lỗi khi gửi dữ liệu:', error);
        }

    }
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetchdata()
    }, [isLoaded]);
    console.log(ttuser);
    return (
        <div className='min-h-screen font-fontgg font-light'>
            <ToastContainer />
            <div className=" panel panel-info ">
                <div className="panel-heading h-12 ">
                    <label className=" font-fontgg font-bold panel-title text-xl text-center mt-4">Thông tin cá nhân</label>
                </div>
                <div className="h-full  flex justify-center panel-body">
                    <table className="w-880 mb-32 table table-bordered shadow-md ">
                        <colgroup>
                            <col width="38%" />
                        </colgroup>
                        <tbody className='font-normal'>
                            <tr>
                                <td colSpan={2} className='mx-auto' style={{ textAlign: 'center' }}>
                                    <img src={QR} className='mx-auto w-36 ' alt="QR" />
                                </td>
                            </tr>
                            <tr>
                                <th >Họ và tên</th>
                                <td>{form?.hoTen}</td>
                            </tr>
                         
                            {/* <tr>
                                <th>Ngày sinh</th>
                                <td> {ttuser?.ngaySinh} </td>
                            </tr> */}
                            <tr>
                                <th >Số CMND/CCCD</th>
                                <td>{form?.cccd}</td>
                            </tr>
                           
                         
                            <tr>
                                <th >Di động</th>
                                <td >
                                    {form?.sdt}
                                </td>
                            </tr>
                            <tr>
                                <th >Email</th>
                                <td >{form?.email} </td>
                            </tr>

                            {/* <tr>
                                <th >Địa chỉ</th>
                                <td>
                                    {ttuser?.noiOHienTai}
                                </td>
                            </tr> */}
                            <tr>
                                <th >Loại tài khoản</th>
                                <td>Tài khoản công dân</td>
                            </tr>
                            <tr>
                                <th >Hình ảnh</th>
                                <td className='flex gap-4' >
                                    <img src={form?.anhCCCD?.anhMat} alt="Ảnh mặt" style={{ width: '100px', height: '100px' }} />
                                    <img src={form?.anhCCCD?.anhMatSau} alt="Ảnh mặt" style={{ width: '100px', height: '100px' }} />
                                    <img src={form?.anhCCCD?.anhMatTruoc} alt="Ảnh mặt" style={{ width: '100px', height: '100px' }} />

                                </td>
                            </tr>
                        </tbody>
                    </table>
                    {/*                                    <a type="button" class="btn btn-default" href="{/*">*/}{/*</a>*/}
                </div>
                <div className="flex justify-center gap-2 mt-3 pb-5">
                    <button onClick={handClickConfirm} className="w-52 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Duyệt</button>
                    <button onClick={handClickNotConfirm} className="w-52 text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Không duyệt</button>
                </div>
                <Link to='/PheDuyetHoSoM' className='ml-52 text-sm underline decoration-1 hover:text-red-600 '>Back</Link>
            </div>

            {/* {isLoaded ? (
            ) : (
                <div role="status">
                    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span class="sr-only">Loading...</span>
                </div>
            )} */}
        </div>
    )
}
