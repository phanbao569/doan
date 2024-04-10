import React from 'react'
import QR from './img/image.png'

export default function ThongTinCaNhan() {
  return (
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
          <td colSpan={2} className='mx-auto' style={{textAlign: 'center'}}>
            <img src={QR} className='mx-auto w-36 '  alt="QR" />
          </td>
        </tr>
        <tr>
          <th scope="row">Họ và tên</th>
          <td>Nguyễn Thế Kiên</td>
        </tr>
        <tr>
          <th scope="row">Cơ quan tổ chức</th>
          <td />
        </tr>
        <tr>
          <th scope="row">Ngày sinh</th>
          <td>23/09/2002</td>
        </tr>
        <tr>
          <th scope="row">Số CMND/CCCD</th>
          <td>042202007566</td>
        </tr>
        <tr>
          <th scope="row">Ngày cấp CMND/CCCD</th>
          <td />
        </tr>
        <tr>
          <th scope="row">Nơi cấp CMND/CCCD</th>
          <td />
        </tr>
        <tr>
          <th scope="row">Di động</th>
          <td />
        </tr>
        <tr>
          <th scope="row">Fax</th>
          <td />
        </tr>
        <tr>
          <th scope="row">Email</th>
          <td />
        </tr>
        <tr>
          <th scope="row">Website</th>
          <td />
        </tr>
        <tr>
          <th scope="row">Địa chỉ</th>
          <td>
          </td>
        </tr>
        <tr>
          <th scope="row">Loại tài khoản</th>
          <td>Tài khoản công dân</td>
        </tr>
        <tr>
          <th scope="row">Hình ảnh</th>
          <td>                                              </td>
        </tr>
      </tbody>
    </table>
    {/*                                    <a type="button" class="btn btn-default" href="*/}{/*">*/}{/*</a>*/}
  </div>
</div>

  )
}
