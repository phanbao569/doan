
import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import axios from 'axios';
import ApiConfig, { apiUrl } from '../../../ApiConfig';
import GetYears from './GetYears';
import ProvinceList from './ProvinceList ';
  import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
  import { FcMoneyTransfer } from "react-icons/fc";
  import ChartOne from '../Chart/ChartOne';
export default function ThongkeDT() {
  const[formData, setFormData]= useState('')
  const[formSend,setFormSend]= useState({
    tinh:'',
    nam:0,

  })
  const[tong,setTong]=useState('')
  const [chartData, setChartData] = useState([])
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
  useEffect(() => {
    console.log(formSend)
    const fetchData = async () => {
        try {
          const response = await axios.post(apiUrl(ApiConfig.ThongKeDoanhThu), formSend);
          setFormData(response.data);
          console.log(response.data)
          const chartDataArray = Object.entries(response.data).map(([Month, Monney]) => ({
            Month: parseInt(Month), // Chuyển đổi month thành kiểu số nguyên
           Monney,
        }));
        setChartData(chartDataArray);
        } catch (error) {
          console.error('Fetch VB info error:', error);
        }
      };
  
      fetchData();
    
}, [formSend]);
const caculateTotalMonney=(data)=>{
  const totalMonney= data.reduce((total,item)=>total+item.Monney,0)
  return totalMonney
}
const totalMonney=caculateTotalMonney(chartData)

// console.log(totalMonney+'đây là tổng doanh thu')
// console.log(chartData,'chartdata')
const formatCurrency = (value) => {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(value);
};
  return (
    // <main className='main-container'>
    //       <div className='main-title'>
    //           <h3></h3>
    //       </div>

    //       <div className='main-cards'>
    //           <div className='card'>
    //               {/* <div className='card-inner'> */}
    //                   {/* <h3>TỔNG DOANH THU</h3>
    //                   <FcMoneyTransfer className='card_icon'/> */}
    //               {/* </div> */}
    //               {/* <h1>{Intl.NumberFormat('vi-VN').format(totalMonney)} VNĐ</h1> */}
    //           </div>
    <main className='main-container'>
    <div className='main-title'>
      <h3></h3>
    </div>

    <div className='main-cards'>

      <div class="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg card">
        <div class="flex items-center mb-4 card-inner">
          <div class="bg-gray-100 rounded-full p-2 mr-2">
            <FcMoneyTransfer alt="Icon" class="w-6 h-6 filter-purple " />
          </div>
          <h2 class="text-lg font-semibold filter-purple">TỔNG HỒ SƠ</h2>
        </div>
        <div class="flex justify-between items-center mb-4">
          <div class="text-lg font-bold filter-purple ml-4">{Intl.NumberFormat('vi-VN').format(totalMonney)} VNĐ</div>
        </div>
      </div>
              
              <div className='text-black'>
            <GetYears onChange={handleYearChange} /></div>
          <div className='text-black'>
            <ProvinceList onChange={handleProvinceChange}/>
           
          </div>
          {/* <button  className="text-black" onClick={handleSummit}>gửi</button> */}
          </div>

          <div className='charts'>
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
                  <XAxis dataKey="Month" />
                  <YAxis />
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                  <Legend formatter={() => 'Doanh thu'}/>
                  <Bar dataKey="Monney" name="Doanh thu" fill="#8884d8" />
                 
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
                  <XAxis dataKey="Month" />
                  <YAxis />
                  <Tooltip formatter={(value) => formatCurrency(value)} />
                  <Legend formatter={() => 'Doanh thu'}/>
                  <Line type="monotone" dataKey="Monney" name="Doanh thu" stroke="#8884d8" activeDot={{ r: 8 }} />
                
                  </LineChart>
              </ResponsiveContainer>
              
          </div>
          <div className='mt-8'>

          {chartData?(<ChartOne  chartData={chartData} />):(<h1>loading</h1>)}
          </div>
          
          
      </main>
  )
}
