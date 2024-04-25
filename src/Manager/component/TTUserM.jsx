import React, { useContext, useEffect, useState } from 'react'
import QR from '../img/image.png'
import { getIDNguoiThayDoi } from '../../util/jwtUtils';

import { GlobalContext } from '../../App';
import ApiConfig, { apiUrl } from '../../ApiConfig';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

export default function TTUserM() {
    const [user,setUser]  = useState()
    const [ttuser,setTTUser]  = useState()
    const location = useLocation();
    // Lấy props được truyền từ đối tượng location
    const [idUser, setidUser] = useState(location.state.value);
    //  const{user,ttuser,setttuser} = useState()
    const fetchdata = async () => {
        try {
          const response = await axios.get(apiUrl(ApiConfig.getUserById(idUser)));
          setUser(() => response.data);
          const responseTT = await axios.get(apiUrl(ApiConfig.getThongTinUser(idUser)));
          setTTUser(() => responseTT.data)
          setIsLoaded(true)
        } catch (error) {
          console.error('sai gi do :', error);
        }
      };
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        fetchdata()
        
    }, [isLoaded]);
    console.log(user);
    return (
        <div>
            {isLoaded ? (
                <div className="panel panel-info">
                    <div className="panel-heading h-12 ">
                        <label className="panel-title text-xl text-center mt-4">Thông tin cá nhân</label>
                    </div>
                    <div className="panel-body">
                        <table className="table table-bordered">
                            <colgroup>
                                <col width="38%" />
                            </colgroup>
                            <tbody>
                                <tr>
                                    <td colSpan={2} className='mx-auto' style={{ textAlign: 'center' }}>
                                        <img src={QR} className='mx-auto w-36 ' alt="QR" />
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Họ và tên</th>
                                    <td>{user?.hoTen}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Quê quán</th>
                                    <td>
                                        {`${ttuser.queQuan?.tinh}-${ttuser?.queQuan?.huyen}-${ttuser?.queQuan?.xa}`}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Ngày sinh</th>
                                    <td> {ttuser?.ngaySinh} </td>
                                </tr>
                                <tr>
                                    <th scope="row">Số CMND/CCCD</th>
                                    <td>{user?.cccd}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Ngày cấp CMND/CCCD</th>
                                    <td >
                                        {user?.created_at}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Nơi cấp CMND/CCCD</th>
                                    <td >
                                        {`${ttuser.queQuan?.tinh}-${ttuser?.queQuan?.huyen}-${ttuser?.queQuan?.xa}`}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Di động</th>
                                    <td >
                                        {user?.sdt}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Email</th>
                                    <td >{user?.email} </td>
                                </tr>

                                <tr>
                                    <th scope="row">Địa chỉ</th>
                                    <td>
                                        {ttuser.noiOHienTai}
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Loại tài khoản</th>
                                    <td>Tài khoản công dân</td>
                                </tr>
                                <tr>
                                    <th scope="row">Hình ảnh</th>
                                    <td className='flex gap-4' >
                                        <img src={user.anhCCCD.anhMat} alt="Ảnh mặt" style={{ width: '100px', height: '100px' }} />
                                        <img src={user.anhCCCD.anhMatSau} alt="Ảnh mặt" style={{ width: '100px', height: '100px' }} />
                                        <img src={user.anhCCCD.anhMatTruoc} alt="Ảnh mặt" style={{ width: '100px', height: '100px' }} />

                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        {/*                                    <a type="button" class="btn btn-default" href="*/}{/*">*/}{/*</a>*/}
                    </div>
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}
