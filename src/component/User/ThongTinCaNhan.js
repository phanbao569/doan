import React, { useContext, useEffect, useState } from 'react'
import QR from './img/image.png'
import { getIDNguoiThayDoi } from '../../util/jwtUtils';
import axios from 'axios';
import ApiConfig, { apiUrl } from '../../ApiConfig';
import { GlobalContext } from '../../App';

export default function ThongTinCaNhan() {
  const { user, ttuser } = useContext(GlobalContext)
  const idUser = getIDNguoiThayDoi();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (ttuser !== undefined) setIsLoaded(true)
  }, []);
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
                    <img src={user?.anhCCCD?.anhMat} alt="Ảnh mặt" style={{ width: '100px', height: '100px' }} />
                    <img src={user?.anhCCCD?.anhMatSau} alt="Ảnh mặt" style={{ width: '100px', height: '100px' }} />
                    <img src={user?.anhCCCD?.anhMatTruoc} alt="Ảnh mặt" style={{ width: '100px', height: '100px' }} />

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
