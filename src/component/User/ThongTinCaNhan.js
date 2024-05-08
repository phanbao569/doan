import React, { useContext, useEffect, useState } from 'react'
import QR from './img/image.png'
import { getIDNguoiThayDoi } from '../../util/jwtUtils';
import axios from 'axios';
import ApiConfig, { apiUrl } from '../../ApiConfig';
import { GlobalContext } from '../../App';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function ThongTinCaNhan() {
  const [showTTGiaDinh, setshowTTGiaDinh] = useState(false);
  const [ttgiadinh, setttgiadinh] = useState({
    tenChuHo: "",
    tv1: "",
    nsTV1: "",
    tv2: "",
    nsTV2: "",
    tv3: "",
    nsTV3: "",
  })
  const { user, ttuser } = useContext(GlobalContext)
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setttgiadinh(ttuser.ttgiaDinh)
    if (ttuser !== undefined) setIsLoaded(true)
  }, []);
  console.log(user);
  return (
    <div>
      {isLoaded ? (
        <div className="panel panel-info">
          <div className="panel-heading h-12 ">
            <label className="panel-title text-2xl font-bold text-center mt-4">Thông tin cá nhân</label>
          </div>
          <div className="panel-body">
            <table className="table table-bordered">
              <colgroup>
                <col width="38%" />
              </colgroup>
              <tbody>
                <tr>

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
                    {ttuser?.noiOHienTai}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Địa chỉ Tạm trú </th>
                  <td>
                    {ttuser?.tamTru?.tinh } - {ttuser?.tamTru?.huyen } - {ttuser?.tamTru?.xa }
                    {/* {ttuser?.thuongTru?.tinh } - {ttuser?.thuongTru?.huyen } - {ttuser?.thuongTru?.xa } */}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Địa chỉ Tạm trú cụ thể</th>
                  <td>
                    {ttuser?.diaChiTTCuThe} - Thời hạn đến : {moment(ttuser.thoiHanTamTru).format('DD-MM-YYYY')}
                  </td>
                </tr>
                <tr>
                  <th scope="row">Thông tin gia đình</th>
                  <td>
                    <button type="button" onClick={() => { setshowTTGiaDinh(!showTTGiaDinh) }} class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Xem chi tiết</button>
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
            <Link to='/capnhatthongtin' className='flex justify-center'>


              <button type="button" class=" text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Cập nhật thông tin</button>
            </Link>
            {/*                                    <a type="button" class="btn btn-default" href="*/}{/*">*/}{/*</a>*/}
          </div>


          {showTTGiaDinh && (
            <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
              <div className="bg-white rounded-lg p-8 max-w-6xl min-w-4xl"> {/* Sử dụng max-w-4xl và min-w-4xl để xác định chiều rộng */}
                <div className='py-10' >
                  <strong className='text-2xl flex text-center'> Thông tin thành viên trong gia đình </strong>

                  <div className="mb-4 flex mt-3">
                    <label className="mb-2 w-1/3 text-center mt-4">Tên Chủ Hộ:</label>
                    <input type="text" id="tenChuHo" value={ttgiadinh.tenChuHo} name="tenChuHo" className="w-full px-3 py-2 border rounded-md" />
                  </div>
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Thành viên</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên thành viên</th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ngày sinh</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">1</td>
                        <td className="px-6 py-4 whitespace-nowrap">{ttgiadinh?.tv1}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{ttgiadinh?.nsTV1}</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">2</td>

                        <td className="px-6 py-4 whitespace-nowrap">{ttgiadinh?.tv2}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{ttgiadinh?.nsTV2}</td>



                      </tr>

                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap">3</td>

                        <td className="px-6 py-4 whitespace-nowrap">{ttgiadinh?.tv3}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{ttgiadinh?.nsTV3}</td>



                      </tr>
                      {/* Add more rows for additional family members */}
                    </tbody>
                  </table>

                  <div className="flex justify-center">
                    <button onClick={() => { setshowTTGiaDinh(!showTTGiaDinh) }} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Đóng</button>
                  </div>
                </div>

              </div>
            </div>
          )}
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  )
}
