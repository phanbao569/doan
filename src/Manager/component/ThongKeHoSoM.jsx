import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell, LineChart, Line } from 'recharts'
import { getIDNguoiThayDoi } from '../../util/jwtUtils';
import ApiConfig, { apiUrl } from '../../ApiConfig';
import GetYears from './GetYears'
export default function ThongKeHoSo() {
  const id = getIDNguoiThayDoi();
  const [formData, setFormData] = useState({
    nam: 2024,

  })
  const [coQuanM, setCoQuanM] = useState({})
  const [tKM, setTKM] = useState({})

  const [show, setShow] = useState({})
  const fetchdata = async () => {
    try {
      const response = await axios.get(apiUrl(ApiConfig.getTTAdmin(id)));
      // setCoQuanM(response.data.coQuan)
      // console.log(response.data.coQuan);
      setFormData({ ...formData, coQuan: response.data.coQuan });
      console.log(tKM);

    } catch {

    }
  }
  const fetchdata2 = async () => {
    console.log(formData)
    if (formData !== null) {
      try {

        const response2 = await axios.post(apiUrl(ApiConfig.getThongKeHoSoCoQuan), formData);
        console.log(response2.data.body);

        setTKM(response2.data.body)
        console.log(tKM, " log sau get");

      } catch {
        console.log('sai gi do')
      }

    }
  }
  // Object.entries(tKM).map(([idUser,value],index) => (
  //     <div key={index}>
  //         <div>STT:{index+1}</div>
  //         {

  //         }
  //         <div>{idUser}</div>
  //     </div>
  // ))
  useEffect(() => {
    fetchdata();
  }, []);
  useEffect(() => {
    fetchdata2()
  }, [formData]);
  console.log(tKM, "log");
  const tinhDone = () => {
    let tong = 0;
    Object.entries(tKM).forEach(([key, value]) => {
      const done = parseInt(value.Done);

      if (!isNaN(done)) { // Kiểm tra nếu done và cancel là số hợp lệ
        tong = tong + done;
      }
    });
    return tong;
  };
  const tinhCancel = () => {
    let tong2 = 0;
    Object.entries(tKM).forEach(([key, value]) => {

      const cancel = parseInt(value.Cancelled);
      if (!isNaN(cancel)) { // Kiểm tra nếu done và cancel là số hợp lệ
        tong2 = tong2 + cancel;
      }
    });
    return tong2;
  };

  const tongC = tinhCancel();
  const tongD = tinhDone();
  const data01 = [
    { name: 'Đơn đã duyệt', value: tongD, color: '#34D399' },
    { name: 'Đơn đã hủy', value: tongC, color: '#EF4444' },
  ];
  const handleYearChange = (year) => {
    setFormData((prevFormSend) => ({
      ...prevFormSend,
      nam: year,
    }));
  };
  return (
    <div className='min-h-screen mt-10'>
      <div className='flex text-black absolute right-32 max-w-48 items-center'>
        <h2> Năm:</h2>
        <GetYears onChange={handleYearChange} />
      </div>
      <div className='flex ml-28 item-center justify-center'>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            data={data01}
            cx={200}
            cy={200}

            innerRadius={40}

            label
          >
            {
              data01.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))
            }
          </Pie>
          <Tooltip />
        </PieChart>
        <div className='w-300 pt-28 ml-8'>
          <div className='flex gap-3 items-center  mb-3'>
            <div className='w-12 mb-1 h-4 text-center bg-emerald-400'>
            </div>
            Tổng hồ sơ đã duyệt
          </div>
          <div className='flex gap-3 items-center mb-3'>
            <div className='w-12 mb-1 h-4 text-center bg-red-500'>
            </div>
            Tổng hồ sơ đã hủy
          </div>
        </div>
      </div>

      <div>
        <div className="m-2 relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-200 dark:bg-gray-700 dark:text-gray-600">
              <tr>
                <th scope="col" className="px-6 py-3 w-1/6">
                  STT
                </th>
                <th scope="col" className="px-6 py-3 w-1/6">
                  ID
                </th>
                <th scope="col" className="px-6 py-3 w-1/6">
                  Họ tên
                </th>
                <th scope="col" className="px-6 py-3 w-1/6">
                  CCCD
                </th>
                <th scope="col" className="px-6 py-3 w-1/6">
                  Email
                </th>
                <th scope="col" className="px-6 py-3 w-1/6">
                  Đơn duyệt
                </th>
                <th scope="col" className=" px-6 py-3 w-1/6 whitespace-nowrap">
                  Đơn hủy
                </th>
              </tr>
            </thead>
            <tbody>
              {tKM.length !== 0 ? (
                Object.entries(tKM).map(([key, value], index) => (
                  <tr key={index} className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                    <td className="px-6 py-4">
                      {index + 1}
                    </td>
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      {key}
                    </th>

                    <td className="px-6 py-4">
                      {value.hoTen}
                    </td>
                    <td className="px-6 py-4">
                      {value.cccd}
                    </td>
                    <td className="px-6 py-4">
                      {value.email}
                    </td>
                    <td className="px-12 py-4">
                      {value.Done}
                    </td>
                    <td className="px-12 py-4">
                      {value.Cancelled ? (value.Cancelled) : (0)}
                    </td>

                  </tr>
                ))
              ) : (
                <p>Không có dữ liệu hoặc dữ liệu không hợp lệ</p>
              )}
            </tbody>

          </table>

        </div>


      </div>
    </div>
  )
}
