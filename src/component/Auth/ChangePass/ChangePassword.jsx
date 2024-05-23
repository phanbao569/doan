import React, { useState, useEffect, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ApiConfig, { apiUrl } from '../../../ApiConfig';
import { getIDNguoiThayDoi } from '../../../util/jwtUtils'
import { Label } from 'recharts';
import { ToastContainer, toast } from 'react-toastify';
export default function ChangePassword() {
    const [newPassAgain, setNewPassAgain] = useState('')
    const [error, setError] = useState('')
    const [formChange, setFormChange] = useState({
        idUser: null,
        newPass: '',
        oldPass: '',
    })

    useEffect(() => {
        window.scrollTo(0, 0);

        const id = getIDNguoiThayDoi();
        setFormChange(prevState => ({
            ...prevState,
            idUser: id,
        }));
    }, []);
    const handleChangeInput = (event) => {
        const { name, value } = event.target;

        setFormChange(prevState => ({
            ...prevState,
            [name]: value,
        }));


    };

    const handleChangeInputAg = (event) => {
        const { name, value } = event.target;
        if (value === formChange.newPass) {
            setNewPassAgain(prevState => ({
                ...prevState,
                [name]: value,
            }

            ))
            setError('The new password is correct')

        } else {
            setError('The new password is wrong')
        }
    };
    const handleSummit = async (event) => {
        event.preventDefault();
        if (error == 'The new password is correct') {
            try {
                const response = await axios.post(apiUrl(ApiConfig.changePass), formChange);
                console.log('Response from server:', response.data);
                if (response.data == 'Đổi mật khẩu thành công!')
                    toast.success(response.data);
                else toast.warning(response.data)
              
                // Hiển thị hộp thoại xác nhận thành công
            } catch (error) {
                console.error(error);
                // Hiển thị thông báo lỗi cho người dùng
                toast.error(error);
               
            }
        }
        else {
            toast.error('đã nói phải nhập lại mật khẩu mới cho đúng rồi mà -_-')
           
        }
    };
    return (

        <div className='min-h-screen font-fontgg'  >
            <ToastContainer />

            <div className="container mx-auto px-4 py-8 mt-10">
                <div className="flex flex-col justify-center items-center">
                    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                        <div className='text-2xl  bg-red-400 text-center rounded-md mx-auto p-2  '>ĐỔI MẬT KHẨU</div>
                        <hr/>
                        <div className="mb-6 mt-4">
                            <label htmlFor="oldPass" className="text-sm text-center block mb-2 font-medium text-gray-700">Nhập mật khẩu cũ</label>
                            <input type="password" id="oldPass" placeholder="Mật khẩu cũ" name="oldPass" onChange={handleChangeInput} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-blue-500 focus:ring-opacity-50" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="newPass" className="text-sm  text-center block mb-2 font-medium text-gray-700">Nhập mật khẩu mới</label>
                            <input type="password" id="newPass" placeholder="Mật khẩu mới" name="newPass" onChange={handleChangeInput} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-blue-500 focus:ring-opacity-50" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="newPassAgain" className="text-sm text-center block mb-2 font-medium text-gray-700">Nhập lại mật khẩu mới</label>
                            <input type="password" id="newPassAgain" placeholder="Nhập lại mật khẩu" name="newPassAgain" onChange={handleChangeInputAg} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-blue-500 focus:ring-opacity-50" />
                            {error === 'The new password is wrong' ? (<h1 className="text-xs block mb-2 font-medium text-red-700">{error}</h1>) : (<h1 className="text-xs block mb-2 font-medium text-green-700">{error}</h1>)}
                        </div>
                        <div className="mb-6 mx-auto flex ">
                            <button onClick={handleSummit} type="button" className="mx-auto bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700">Xác nhận</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
