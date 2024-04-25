import axios from 'axios';
import DiaChi from '../../Diachi.jsx';
import React, { useEffect, useState } from 'react'
import logo from '../img/footer.jpg'
import { Field, Form, Formik } from 'formik';
import { getIDNguoiThayDoi } from '../../../util/jwtUtils.js';
//mport  ApiCon,{baseUrl} from '../../../ApiConfig.js'
import ApiConfig, { apiUrl } from '../../../ApiConfig.js'
import { useNavigate } from 'react-router-dom';
export default function NapThuTuc() {


    //   const idUser = getIDNguoiThayDoi();
    const [isLoaded, setIsLoaded] = useState(false);
    const idUser = getIDNguoiThayDoi();
    const [form, setForm] = useState({});
    const [user, setUser] = useState();
    const [TTuser, setTTUser] = useState();
    const currentUrl = window.location.href;
    const idFromUrl = currentUrl.split('/').pop();
    const navigate = useNavigate(); // Sử dụng hook useNavigate để chuyển trang(có thể dùng routes,Link)

    useEffect(() => {

        const currentUrl = window.location.href;
        const idFromUrl = currentUrl.split('/').pop();
        // console.log(idFromUrl);

        if (idFromUrl === "594ac7fe") {
            navigate('/napthutuc/giahantamtru')



        }
        if (idFromUrl === "21ab430d") {

            navigate('/napthutuc/dangkytamtru')



        }
        if (idFromUrl === "c3033865") {
            navigate('/napthutuc/dangkytamvang')
        }
        if (idFromUrl === "b0d416c7") {
            navigate('/napthutuc/khaibaothuongtru')
        }
        if (idFromUrl === "43424481") {
            navigate('/napthutuc/xoadangkytamtru')
        }
        if (idFromUrl === "5d49167e") {
            navigate('/napthutuc/xoadangkythuongtru')
        }
        if (idFromUrl === "8cbcd99d") {
            navigate('/napthutuc/thongbaoluutru')
        }
    }, [idFromUrl]);
    return (
        <div>

        </div>

    )
}
