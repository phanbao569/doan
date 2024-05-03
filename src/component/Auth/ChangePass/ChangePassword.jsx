import React, { useState, useEffect, useContext } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import ApiConfig, { apiUrl } from '../../../ApiConfig';
import {getIDNguoiThayDoi} from '../../../util/jwtUtils'
export default function ChangePassword() {
    const [newPassAgain,setNewPassAgain]= useState('')
    const [error,setError]= useState('')
    const [formChange,setFormChange]=useState({
        idUser:null,
        newPass:'',
        oldPass:'',
    })

    useEffect(() => {
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
        if(value === formChange.newPass) {
            setNewPassAgain(prevState => ({
                ...prevState,
                [name]: value,
             }
           
        ))
        setError('The new password is correct')
           
        }else {
           setError('The new password is wrong')
        }
    };
    const handleSummit = async (event) => {
        event.preventDefault();
         if(error=='The new password is correct'){
        try {
            const response = await axios.post(apiUrl(ApiConfig.changePass), formChange);
            console.log('Response from server:', response.data);
            alert(response.data);
            // Hiển thị hộp thoại xác nhận thành công
        } catch (error) {
            console.error( error);
            // Hiển thị thông báo lỗi cho người dùng
            alert(error+' :(((');
        }}
        else {
            alert('đã nói phải nhập lại mật khẩu mới cho đúng rồi mà -_-')
        }
    };
  return (
   
         <div className='h-atuo'  >
            
            <div className="container mx-auto px-4 py-8 mt-32">
                <div className="flex justify-center items-center">

                    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                    <div className="mb-6">
                <label htmlFor="password" className="text-sm block mb-2 font-medium text-gray-700">Nhập mật khẩu cũ </label>
                <input type="password" id="oldPass" placeholder="Mật khẩu" name="oldPass" onChange={handleChangeInput} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-blue-500 focus:ring-opacity-50" />

                        </div>

                    <div className="mb-6">
                <label htmlFor="password" className="text-sm block mb-2 font-medium text-gray-700">Nhập mật khẩu mói </label>
                <input type="password" id="newPass" placeholder="Mật khẩu" name="newPass" onChange={handleChangeInput} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-blue-500 focus:ring-opacity-50" />

                        </div>
                        <div className="mb-6">
                <label htmlFor="password" className="text-sm block mb-2 font-medium text-gray-700">Nhập lại mật khẩu mói </label>
                <input type="password" id="newPassAgain" placeholder="Mật khẩu" name="newPassAgain" onChange={handleChangeInputAg} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-0 focus:ring-blue-500 focus:ring-opacity-50" />
                {error=='The new password is wrong' ? (<h1 className="text-xs block mb-2 font-medium text-red-700">{error}</h1>) : (<h1 className="text-xs block mb-2 font-medium text-green-700" >{error}</h1>)}
                        </div>
                        <div className="mb-6">
                          
                            <button  onClick={handleSummit}
                              
                            type="button" className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700">Gửi</button>
                        </div>

                    </div>

                </div>
                
            </div>
    </div>
  )
}
