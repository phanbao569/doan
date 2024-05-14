import axios from 'axios';
import DiaChi from '../../Diachi.jsx';
import React, { useEffect, useState } from 'react'
import logo from '../img/footer.jpg'
import { Field, Form, Formik } from 'formik';
import { getIDNguoiThayDoi } from '../../../util/jwtUtils.js';
//mport  ApiCon,{baseUrl} from '../../../ApiConfig.js'
import ApiConfig, { apiUrl } from '../../../ApiConfig.js'
import { useLocation, useNavigate } from 'react-router-dom';
export default function NapThuTuc() {


    //   const idUser = getIDNguoiThayDoi();
    const location = useLocation();
  
    const currentUrl = window.location.href;
    const idFromUrl = currentUrl.split('/').pop();
    const navigate = useNavigate(); // Sử dụng hook useNavigate để chuyển trang(có thể dùng routes,Link)
    const [VBPL, sethoso] = useState(location.state.VBPL);
    console.log(VBPL);
    useEffect(() => {

        const currentUrl = window.location.href;
        const idFromUrl = currentUrl.split('/').pop();
        // console.log(idFromUrl);

        if (idFromUrl === "594ac7fe") {
            navigate('/napthutuc/giahantamtru',{ state: { VBPL } })



        }
        if (idFromUrl === "21ab430d") {

            navigate('/napthutuc/dangkytamtru',{ state: { VBPL } })



        }
        if (idFromUrl === "c3033865") {
            navigate('/napthutuc/dangkytamvang',{ state: { VBPL } })
        }
        if (idFromUrl === "b0d416c7") {
            navigate('/napthutuc/khaibaothuongtru',{ state: { VBPL } })
        }
        if (idFromUrl === "43424481") {
            navigate('/napthutuc/xoadangkytamtru',{ state: { VBPL } })
        }
        if (idFromUrl === "5d49167e") {
            navigate('/napthutuc/xoadangkythuongtru',{ state: { VBPL } })
        }
        if (idFromUrl === "8cbcd99d") {
            navigate('/napthutuc/thongbaoluutru',{ state: { VBPL } })
        }
    }, [idFromUrl]);
    return (
        <div>

        </div>

    )
}
