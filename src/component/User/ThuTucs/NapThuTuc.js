import axios from 'axios';
import DiaChi from '../../Diachi.jsx';
import React, { useEffect, useState } from 'react'
import logo from '../img/footer.jpg'
import { Field, Form, Formik } from 'formik';
import { getIDNguoiThayDoi } from '../../../util/jwtUtils.js';
//mport  ApiCon,{baseUrl} from '../../../ApiConfig.js'
import ApiConfig, { apiUrl } from '../../../ApiConfig.js'
export default function NapThuTuc() {


    //   const idUser = getIDNguoiThayDoi();
    const [isLoaded, setIsLoaded] = useState(false);
    const idUser = getIDNguoiThayDoi();
    const [form, setForm] = useState({});
    const [user, setUser] = useState();
    const [TTuser, setTTUser] = useState();
    useEffect(() => {
        fetchdata();
        const currentUrl = window.location.href;
        const idFromUrl = currentUrl.split('/').pop();
       // console.log(idFromUrl);

        if (idFromUrl === "594ac7fe") {
            const newUrl = currentUrl.replace(idFromUrl, 'giahantamtru');
            window.history.pushState({}, '', newUrl);

        }
        if (idFromUrl === "21ab430d") {
            const newUrl = currentUrl.replace(idFromUrl, 'dangkytamtru');
            window.history.pushState({}, '', newUrl);

        }
        if (idFromUrl === "c3033865") {
            const newUrl = currentUrl.replace(idFromUrl, 'dangkytamvang');
            window.history.pushState({}, '', newUrl);

        }
        if (idFromUrl === "b0d416c7") {
            const newUrl = currentUrl.replace(idFromUrl, 'khaibaothuongtru');
            window.history.pushState({}, '', newUrl);

        }
        if (idFromUrl === "43424481") {
            const newUrl = currentUrl.replace(idFromUrl, 'xoadangkytamtru');
            window.history.pushState({}, '', newUrl);
        }
        if (idFromUrl === "5d49167e") {
            const newUrl = currentUrl.replace(idFromUrl, 'xoadangkythuongtru');
            window.history.pushState({}, '', newUrl);

        }
        if (idFromUrl === "8cbcd99d") {
            const newUrl = currentUrl.replace(idFromUrl, 'thongbaoluutru');
            window.history.pushState({}, '', newUrl);

        }
    }, []);

    const fetchdata = async () => {
        try {
            const response = await axios.get(apiUrl(ApiConfig.getUserById(idUser)));
            const responseTT = await axios.get(apiUrl(ApiConfig.getThongTinUser(idUser)));
            //    const responseTT = await axios.get('http://172.21.3.169:8888/TTUser/0c6b4326');
            setTTUser(responseTT.data)
            const responseData = response.data;
            setUser(responseData);
            setIsLoaded(true);
            //   console.log(user);
        } catch (error) {
            console.error('sai gi do :', error);
        }
    };

    const [selectedCity, setSelectedCity] = useState("");
    const [selectedDistrict, setSelectedDistrict] = useState("");
    const [selectedWard, setSelectedWard] = useState("");

    const handleSelectCity = (cityName) => {
        setSelectedCity(cityName);
    };

    const handleSelectDistrict = (districtName) => {
        setSelectedDistrict(districtName);
    };

    const handleSelectWard = (wardName) => {
        setSelectedWard(wardName);
    };

    const HandleSubmit = async (values) => {
        try {
            console.log(values);
            setForm(values); // Cập nhật state trước khi gửi yêu cầu axios
            //   await axios.post(apiUrl(ApiConfig.napthutucgiahantamtru),form);
            console.log("thanh cong");
        } catch (error) {
            console.error('Lỗi khi gửi dữ liệu:', error);
        }
    };

    return (
        <div>
       
        </div>

    )
}
