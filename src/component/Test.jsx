import React, { useEffect, useState } from 'react'; // Use useState hook for state management
import axios from 'axios';


const ThuTucGiaHanTamTru = () => { // Functional component
  const [isOpen, setIsOpen] = useState(false); // State for dropdown visibility
  const [VBPL, SetVBPL] = useState();

  useEffect(() => {
    fetchData();
  }, );
  const fetchData = async () => {
    try {
      const response = await axios.get('http://172.21.2.68:8888/getVBPL/594ac7fe');
      console.log(response);
    } catch (error) {
      console.error('???:', error);
    }
  }

  const handleClickOpen = () => {
    setIsOpen(!isOpen); // Toggle dropdown state
  };
  const [listShow, SetlistShow] = useState([]);
  const handleClickVBPL = (data) => {
    SetlistShow((prevList) => prevList.includes(data) ? prevList.filter(item => item !== data) : [...prevList, data]);
  };

  return (
    <div className="grid grid-cols-5 gap-4 h-screen">
      {/* Left column */}
      <div className="bg-white p-4 col-span-1"></div>

      {/* Main content column */}
      <div className="p-4 col-span-3 bg-gray-200">
        {/* Header section */}
        <div className="relative h-48 w-full flex ">
          <div className="ml-4 text-2xl font-bold justify-content-left m-14">
            {/* Replace placeholders with actual data */}
            {/* {TTuser.hoTen} */}
            {/* {user.diaChiCuThe} */}
            Gia hạn tạm trú
          </div>
          <button
            className="absolute bottom-0 right-0 m-4  text-white px-8 py-4 rounded"
          >
            Nộp hồ sơ
          </button>
        </div>

        {/* Văn bản pháp luật */}

        {/* Lnh vuc + trinh tu thuc hien */}

        <div className=" w-full  border border-red-400 rounded-md">
          <div className='bg-red-500' >
            <label className='w-2/3'><strong>Văn bản pháp luật</strong></label>
            <button className='w-1/3' onClick={() => handleClickVBPL(1)}>
              {(listShow.includes(1)) ? 'Đóng' : 'Mở'}
            </button>
          </div>
          {(listShow.includes(1)) && (
            <div className="dropdown-content">
              dữ liệu văn bản phát luật
            </div>
          )}
        </div>
        <div className="w-full  border border-red-400 rounded-md">
          <div className='bg-red-500' >
            <label className='w-2/3'><strong>Văn bản pháp luật</strong></label>
            <div className='is-justify-content-end' >
              <button className='w-1/3' onClick={() => handleClickVBPL(3)}>
                {(listShow.includes(3)) ? 'Đóng' : 'Mở'}
              </button>
            </div>

          </div>
          {(listShow.includes(3)) && (
            <div className="dropdown-content">
              dữ liệu văn bản phát luật
            </div>
          )}
        </div>
        {/* Cơ quan thực hiện + thời gian giải quyết */}
        <div className="w-full  border border-red-400 rounded-md">
          <div className='bg-red-500' >
            <label className='w-2/3'><strong>Văn bản pháp luật</strong></label>
            <button className='w-1/3' onClick={() => handleClickVBPL(4)}>
              {(listShow.includes(4)) ? 'Đóng' : 'Mở'}
            </button>
          </div>
          {(listShow.includes(4)) && (
            <div className="dropdown-content">
              dữ liệu văn bản phát luật
            </div>
          )}
        </div>
        {/* Mức độ cung cấp dịch vụ công trực tuyến + Phí */}
        <div className="w-full  border border-red-400 rounded-md">
          <div className='bg-red-500' >
            <label className='w-2/3'><strong>Văn bản pháp luật</strong></label>
            <button className='w-1/3' onClick={() => handleClickVBPL(2)}>
              {(listShow.includes(2)) ? 'Đóng' : 'Mở'}
            </button>
          </div>
          {(listShow.includes(2)) && (
            <div className="dropdown-content">
              dữ liệu văn bản phát luật
            </div>
          )}
        </div>





        {/* Footer section (duplicate removed) */}
        <div className="relative h-48 w-full flex">
          <div className="ml-4 text-2xl font-bold justify-content-left m-14">
            {/* Replace placeholders with actual data */}
            {/* {TTuser.hoTen} */}
            {/* {user.diaChiCuThe} */}
            Gia hạn tạm trú
          </div>
          <button
            className="absolute bottom-0 right-0 m-4  text-white px-8 py-4 rounded"
          >
            Nộp hồ sơ
          </button>
        </div>
      </div>

      {/* Right column */}
      <div className="bg-white-300 p-4 col-span-1"></div>

      {/* Footer with logo */}
      <div className="bg-white-300 p-4 col-span-5">
      </div>
    </div>
  );
};

export default ThuTucGiaHanTamTru;
