import moment from 'moment';
import React, { useState } from 'react'
import ApiConfig, { apiUrl } from '../../../ApiConfig';

import { getIDNguoiThayDoi } from '../../../util/jwtUtils';
import axios from 'axios';
import ThongTinNguoiKhaiBao from '../ThongTinNguoiKhaiBao';
import { ToastContainer, toast } from 'react-toastify';

export default function HoiDap(props) {

    const { user, ttuser } = props;
    //console.log(user);
    const [form, setform] = useState(
        {
            id: "",
            idUser: getIDNguoiThayDoi(),
            noiDung: "",
            phanHoi: "",
            tenUser: user?.hoTen,
            idNguoiPhanHoi: "",
            tenNguoiPhanHoi: "",
            created_at: moment().toDate(),
        }
    );
    const handleInputChange = (event) => {
        const { name, value } = event.target

        setform(prevState => ({ ...prevState, [name]: value }))
    }
    const handleSubmit = async () => {
        try {
            if(form.noiDung.trim() === "" || form.noiDung.trim() === undefined) {
                toast.error("Vui lòng nhập nội dung");
            } else{
                const respont = await axios.post(apiUrl(ApiConfig.guiHoiDap), form);
                toast.success("Gửi hỏi đáp thành công");
                setform(prevForm => ({
                    ...prevForm,
                    noiDung: ""
                  }));
            }
         
              
        }
        catch (error) {
            alert("an lz");
            console.log(error);
        }
    };
    return (
        <div>
        <ToastContainer />

            <div className=" mx-auto mt-5">
                <form className="space-y-4">
                    <ThongTinNguoiKhaiBao user = {user} ttuser={ttuser} /> 
                    <div className='p-16' >
                        <label htmlFor="review" className="block">Nội dung hỏi đáp </label>
                        <textarea
                            onChange={handleInputChange} name="noiDung"
                            className="border border-gray-400 rounded-md p-2 w-full"></textarea>
                    </div>
                </form>
                <div className='flex justify-items-center' >

                <button onClick={handleSubmit} className=" mx-auto bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Gửi Hỏi Đáp</button>
                </div>
            </div>
        </div>
    )
}
