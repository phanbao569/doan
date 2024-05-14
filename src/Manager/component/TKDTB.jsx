import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';
import { getIDNguoiThayDoi } from '../../util/jwtUtils';
import { IoIosSearch } from "react-icons/io";
import ApiConfig, { apiUrl } from '../../ApiConfig';
import GetYears from '../component/GetYears'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { FcMoneyTransfer } from "react-icons/fc";


export default function TKDTB() {
    const id = getIDNguoiThayDoi();
    const [formData, setFormData] = useState({
        nam: new Date().getFullYear(),

    })
    const [chartData, setChartData] = useState([])
    const [money, setMoney] = useState({
        // thang1: 0,
        // thang2: 0,
        // thang3: 0,
        // thang4: 0,
        // thang5: 0,
        // thang6: 0,
        // thang7: 0,
        // thang8: 0,
        // thang9: 0,
        // thang10: 0,
        // thang11: 0,
        // thang12: 0,

    })
    const [coQuanM, setCoQuanM] = useState({})
    const [total, setTotal] = useState({})
    const [show, setShow] = useState({})
    const fetchdata = async () => {
        try {

            const response = await axios.get(`http://192.168.10.72:8888/TTNV/get/${id}`)
            // setCoQuanM(response.data.coQuan)
            // console.log(response.data.coQuan);
            setFormData({ ...formData, coQuan: response.data.coQuan })

        } catch {

        }

    }
    const fetchdata2 = async () => {
        console.log(formData)
        if (formData !== null) {
            try {


                const response2 = await axios.post(`http://192.168.10.72:8888/getThongKeDoanhThuByCoQuan`, formData)
                console.log(response2.data);

                setMoney(response2.data)
                const chartDataArray = Object.entries(response2.data).map(([Month, Monney]) => ({
                    Month: parseInt(Month), // Chuyển đổi month thành kiểu số nguyên
                   Monney,
                }));
                setChartData(chartDataArray);

            } catch {
                console.log('sai gi do')
            }

        }
    }

    useEffect(() => {
        fetchdata();
    }, []);
    useEffect(() => {
        fetchdata2()
    }, [formData]);

    const tinhTong = () => {
        let tong = 0;
        Object.entries(total).forEach(([key, value]) => {
            const tien = parseInt(value.tien);
            if (!isNaN(tien)) { // Kiểm tra nếu tien là số hợp lệ
                tong = tong + tien;
            }
        });
        return tong;
    };



    const tongD = tinhTong();
    const data01 = [
        { name: 'Đơn đã duyệt', value: tongD, color: '#72ca9d' },

    ];
    const handleYearChange = (year) => {
        setFormData((prevFormSend) => ({
            ...prevFormSend,
            nam: year,
        }));
    };

    // const currentYear = new Date().getFullYear();
    // setFormData(currentYear)
    return (
        <main className='main-container'>
          <div className='main-title'>
              <h3></h3>
          </div>

          <div className='main-cards'>
              <div className='card'>
                  <div className='card-inner'>
                      <h3>TỔNG DOANH THU</h3>
                      <FcMoneyTransfer className='card_icon'/>
                  </div>
                  <h1>đoán xem</h1>
              </div>
             
              <div className='text-black'>
            <GetYears onChange={handleYearChange} /></div>
         
          {/* <button  className="text-black" onClick={handleSummit}>gửi</button> */}
          </div>

          <div className='charts'>
          <ResponsiveContainer width="100%" height="100%">
              <BarChart
              width={500}
              height={300}
              data={chartData}
              margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
              }}
              >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="Month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="Monney" fill="#8884d8" />
                 
                  </BarChart>
              </ResponsiveContainer>

              <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                  width={500}
                  height={300}
                  data={chartData}
                  margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                  }}
                  >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="Month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="Monney" stroke="#8884d8" activeDot={{ r: 8 }} />
                
                  </LineChart>
              </ResponsiveContainer>
              
          </div>
       
          
          
      </main>
    )
}
