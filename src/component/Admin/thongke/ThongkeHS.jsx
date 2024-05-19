import React, { useEffect, useState } from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { BiWindowClose } from "react-icons/bi";
import { SlRefresh } from "react-icons/sl";
import { FaCheck } from "react-icons/fa";
import '../adminComponent/App.css';
import axios from 'axios';
import ApiConfig, { apiUrl } from '../../../ApiConfig';
import GetYears from './GetYears';
import ProvinceList from './ProvinceList ';
import { GrMoney } from "react-icons/gr";
import CardDataStats from '../Chart/ChartCard';
import { MdFilter } from "react-icons/md";
import './tkhs.css'
export default function ThongkeHS() {

  const [chartData, setChartData] = useState([
    { month: 1, Done: 0, Paying: 0, Cancelled: 0, Checking: 0, Tong: 0, Handlled: 0 },
    { month: 2, Done: 0, Paying: 0, Cancelled: 0, Checking: 0, Tong: 0, Handlled: 0 },
    { month: 3, Done: 0, Paying: 0, Cancelled: 0, Checking: 0, Tong: 0, Handlled: 0 },
    { month: 4, Done: 0, Paying: 0, Cancelled: 0, Checking: 0, Tong: 0, Handlled: 0 },
    { month: 5, Done: 0, Paying: 0, Cancelled: 0, Checking: 0, Tong: 0, Handlled: 0 },
    { month: 6, Done: 0, Paying: 0, Cancelled: 0, Checking: 0, Tong: 0, Handlled: 0 },
    { month: 7, Done: 0, Paying: 0, Cancelled: 0, Checking: 0, Tong: 0, Handlled: 0 },
    { month: 8, Done: 0, Paying: 0, Cancelled: 0, Checking: 0, Tong: 0, Handlled: 0 },
    { month: 9, Done: 0, Paying: 0, Cancelled: 0, Checking: 0, Tong: 0, Handlled: 0 },
    { month: 10, Done: 0, Paying: 0, Cancelled: 0, Checking: 0, Tong: 0, Handlled: 0 },
    { month: 11, Done: 0, Paying: 0, Cancelled: 0, Checking: 0, Tong: 0, Handlled: 0 },
    { month: 12, Done: 0, Paying: 0, Cancelled: 0, Checking: 0, Tong: 0, Handlled: 0 },
  ]);
  const [formData, setFormData] = useState('')

  const [formSend, setFormSend] = useState({
    tinh: '',
    nam: 0,

  })
  const [formTotal, setFormTotal] = useState({
    Tong: 0,
    Cancelled: 0,
    Checking: 0,
    Done: 0,
    Paying: 0,
  })
  const generateChartData = (formData) => {
    let chartDataArray = [];
    for (let month = 1; month <= 12; month++) {
      const monthData = formData[month.toString()] || { Done: 0, Paying: 0, Cancelled: 0, Checking: 0 };
      const Tong = (monthData.Done || 0) + (monthData.Paying || 0) + (monthData.Cancelled || 0) + (monthData.Checking || 0);
      const Handlled = (monthData.Done || 0) + (monthData.Cancelled || 0);
      chartDataArray.push({
        month: month,
        Done: monthData.Done || 0,
        Paying: monthData.Paying || 0,
        Cancelled: monthData.Cancelled || 0,
        Checking: monthData.Checking || 0,
        Tong: Tong,
        Handlled: Handlled
      });
    }
    return chartDataArray;
  };
  useEffect(() => {
    console.log(formSend)
    const fetchData = async () => {
      try {
        const response = await axios.post(apiUrl(ApiConfig.ThongKeHoSo), formSend);
        setFormData(response.data);
        const chartDataArray = generateChartData(response.data);
        setChartData(chartDataArray);

        console.log(response.data)
      } catch (error) {
        console.error('Fetch VB info error:', error);
      }
    };

    fetchData();
    calculateInfo()
  }, [formSend]);
  const calculateInfo = (formData) => {
    // Khởi tạo các biến để lưu thông tin tính toán
    let totalDone = 0;
    let totalCancelled = 0;
    let totalChecking = 0;
    let totalPaying = 0;

    // Lặp qua các phần tử của đối tượng formData
    for (const key in formData) {
      if (formData.hasOwnProperty(key)) {
        const month = parseInt(key);
        if (!isNaN(month)) {
          const monthData = formData[key];
          totalDone += monthData.Done || 0;
          totalCancelled += monthData.Cancelled || 0;
          totalChecking += monthData.Checking || 0;
          totalPaying += monthData.Paying || 0;
        }
      }
    }
    let total = totalDone + totalCancelled + totalChecking + totalPaying;
    // Trả về các thông tin tính toán

    formTotal.Tong = total;
    formTotal.Cancelled = totalCancelled;
    formTotal.Checking = totalChecking;
    formTotal.Done = totalDone;
    formTotal.Paying = totalPaying
    return {
      totalDone,
      totalCancelled,
      totalChecking,
      total
    };
  };
  const calculatedInfo = calculateInfo(formData);

  // Hiển thị thông tin tính toán

  console.log(formTotal)
  const handleYearChange = (year) => {
    setFormSend((prevFormSend) => ({
      ...prevFormSend,
      nam: year,
    }));
  };

  // Xử lý sự kiện thay đổi tỉnh thành
  const handleProvinceChange = (province) => {
    setFormSend((prevFormSend) => ({
      ...prevFormSend,
      tinh: province,
    }));
  };

  const handleSummit = () => {
    alert(formSend.nam + ' nam' + 'tinh' + formSend.tinh)

  }
  const handledValue = "Handlled";
  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3></h3>
      </div>

      <div className='main-cards'>

        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card">
          <div class="flex items-center mb-4 card-inner">
            <div class="bg-gray-100 rounded-full p-2 mr-2">
              <BsFillArchiveFill alt="Icon" class="w-6 h-6 filter-purple " />
            </div>
            <h2 class="text-lg font-semibold filter-purple">TỔNG HỒ SƠ</h2>
          </div>
          <div class="flex justify-between items-center mb-4">
            <div class="text-lg font-bold filter-purple ml-4">{formTotal.Tong}</div>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card">
          <div class="flex items-center mb-4 card-inner">
            <div class="bg-gray-100 rounded-full p-2 mr-2">
              <SlRefresh alt="Icon" class="w-6 h-6 filter-purple " />
            </div>
            <h2 class="text-lg font-semibold filter-purple">CHỜ DUYỆT</h2>
          </div>
          <div class="flex justify-between items-center mb-4">
            <div class="text-lg font-bold filter-purple ml-4">{formTotal.Checking}</div>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card">
          <div class="flex items-center mb-4 card-inner">
            <div class="bg-gray-100 rounded-full p-2 mr-2">
              <FaCheck alt="Icon" class="w-6 h-6 filter-purple " />
            </div>
            <h2 class="text-lg font-semibold filter-purple">ĐÃ DUYỆT</h2>
          </div>
          <div class="flex justify-between items-center mb-4">
            <div class="text-lg font-bold filter-purple ml-4">{formTotal.Done}</div>
          </div>
        </div>
        
        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card">
          <div class="flex items-center mb-4 card-inner">
            <div class="bg-gray-100 rounded-full p-2 mr-2">
              <BiWindowClose  alt="Icon" class="w-6 h-6 filter-purple " />
            </div>
            <h2 class="text-lg font-semibold filter-purple">ĐÃ HỦY</h2>
          </div>
          <div class="flex justify-between items-center mb-4">
            <div class="text-lg font-bold filter-purple ml-4">{formTotal.Cancelled}</div>
          </div>
        </div>

        <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card">
          <div class="flex items-center mb-4 card-inner">
            <div class="bg-gray-100 rounded-full p-2 mr-2">
              <GrMoney alt="Icon" class="w-6 h-6 filter-purple " />
            </div>
            <h2 class="text-lg font-semibold filter-purple">CHỜ TT</h2>
          </div>
          <div class="flex justify-between items-center mb-4">
            <div class="text-lg font-bold filter-purple ml-4">{formTotal.Paying}</div>
          </div>
        </div>
        
      </div>
      <div className="flex">
    <div className=' text-black max-w-24'>
        <GetYears onChange={handleYearChange} />
    </div>

    <div className=' text-black max-w-48 ml-2'>
        <ProvinceList onChange={handleProvinceChange}/>
    </div>
</div>
     
      <div className='charts '>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart className='bg-white pt-4'
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
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Tong" fill="#8884d8" />
            <Bar dataKey="Handlled" fill="#82ca9d" />
          </BarChart>
        </ResponsiveContainer>

        <ResponsiveContainer width="100%" height="100%">
          <LineChart className='bg-white pt-4'
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
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Done" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Checking" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>

      </div>
      <div className='charts'>

      </div>

    </main>
  )
}
