import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../../App'
import DiaChi from '../Diachi'
import ApiConfig, { apiUrl } from '../../ApiConfig';
import axios from 'axios';


export default function CapNhatThongTin() {
    useEffect(() => {
        setformttuer(prevState => ({
            ...prevState,
            idTTUser: ttuser?.idTTUser
        }));
        console.log(ttuser);
    }, []);

    const { user, ttuser, setttuser } = useContext(GlobalContext)
    const [formttuser, setformttuer] = useState({

        idTTUser : "",
        hoTen:"Nguyễn Thế Kiên",
        queQuan : {
            tinh : "",
            huyen : "",
            xa : ""
        },
        noiDKKhaiSinh : {
            tinh : '',
            huyen : '',
            xa : '',
          } ,
        diaChiTTCuThe : "",
        ngaySinh : "",
        noiOHienTai : "" ,
      });
      const handleInputChange = (event)=>{
        const {name,value} =event.target
        console.log(name,value);
        setformttuer(prevState =>({...prevState,[name]:value}))}


    const handleSubmit = async ()=>{
        try{
            setformttuer(prevState => ({
                ...prevState,
                idTTUser: ttuser?.idTTUser,
                hoTen: ttuser?.hoTen
              }));

         const respont = await axios.put(apiUrl(ApiConfig.updatethongtinuser),formttuser);
             console.log(respont);
           console.log(formttuser);
           alert("thanh cong");
           
             }
        catch(error){
            alert("an lz");
            console.log(error);
           console.log(formttuser);

        }
    }

    return (
        <div>
            <div className='w-full px-12 py-12'>
                <div>
                    <strong className='text-xl p-12 text-center text-red-500 ' >
                        Vui lòng điền đầy đủ thông tin để tiếp tục sử dụng  
                    </strong>
                </div>

                <form className="w-1/2 mx-auto">
                    <div>
                        {/* Họ Tên */}
                        <label htmlFor="large-input" className=" text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Họ Tên</label>

                        <input type="text" aria-label="disabled input" value={ttuser?.hoTen} className=" text-start mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                             disabled />

                    </div>
                    <div>
                        {/* CCCD */}
                        <label htmlFor="large-input" className=" text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">CCCD</label>

                        <input type="text" aria-label="disabled input" value={ttuser?.cccd} className=" text-start mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            defaultValue="Disabled input" disabled />

                    </div>
                    <div>
                        {/* email*/}
                        <label htmlFor="large-input" className=" text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">email</label>

                        <input type="text" aria-label="disabled input" value={user?.email} className=" text-start mb-5 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            defaultValue="Disabled input" disabled />

                    </div>
                    {/* Nơi khai sinh  */}
                    <div className="mb-5">
                        <label htmlFor="large-input" className=" text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nơi khai sinh </label>
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

                  
                    <div className="mb-5">
                        <label htmlFor="large-input" className=" text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ngày sinh </label>
                        <input name="ngaySinh" type="date" onChange={handleInputChange} id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="large-input" className=" text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Large input</label>
                        <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="large-input" className=" text-start block mb-2 text-sm font-medium text-gray-900 dark:text-white">Địa chỉ cụ thể</label>
                        <input name="noiOHienTai" type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={handleInputChange} />
                    </div>
                </form>
                <button onClick={() => {handleSubmit()}} type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    Cập nhật
                </button>
            </div>

        </div>
    )
}
