import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {FaCaretDown } from "react-icons/ai";
import { AiFillCaretUp,AiFillCaretDown  } from "react-icons/ai";
function ThuTuc() {
    let { id } = useParams();
    const [VBPL, SetVBPL] = useState(null);
    const [listShow, SetlistShow] = useState([]);
    const handleClickVBPL = (data) => {
        SetlistShow((prevList) => prevList.includes(data) ? prevList.filter(item => item !== data) : [...prevList, data]);
    };
    // Sử dụng biến id ở đây để thực hiện công việc cần thiết

    return (
        <div className="grid grid-cols-5 gap-4 h-screen">
        {/* Left column */}
        <div className="bg-white p-4 col-span-1"></div>

        {/* Main content column */}
        <div className="p-4 col-span-3  ">
            {/* Header section */}
            <div className="relative h-48 w-full flex ">
                <div className="ml-4 text-2xl font-bold justify-content-left m-14">
                    {/* Replace placeholders with actual data */}
                    {/* {TTuser.hoTen} */}
                    {/* {user.diaChiCuThe} */}
                    {/* {VBPL.tenThuTuc} */}
                    Tên thủ tục
                </div>
                <button
                    className="absolute bottom-0 right-0 m-4  bg-red-500  text-white px-8 py-4 rounded"
                >
                    Nộp hồ sơ
                </button>
            </div>

            {/* Văn bản pháp luật */}

            {/* Cơ quan thực hiện  */}

            <div className=" w-full  mt-4 border border-red-400 rounded-md">
                <div className='bg-gray-200 flex ' >
                    <label className='w-5/6 flex'>
                        <strong className='item-start ml-24 ' >Cơ quan thực hiện</strong>
                        </label>
                    <button className='item-end' onClick={() => handleClickVBPL(1)}>
                        {(listShow.includes(1)) ? <AiFillCaretUp /> : <AiFillCaretDown />}
                    </button>
                </div>
                {(listShow.includes(1)) && (
                    <div className="dropdown-content">
                        {/* {VBPL.coQuanThucHien} */} 
                    </div>
                )}
            </div>

            {/* + cách thức thực hiện */}
            <div className=" w-full  mt-4 border border-red-400 rounded-md">

          

                <div className='bg-gray-200 flex' >
                <label className='w-5/6 flex'>
                        <strong className='item-start ml-24 ' >Cách thức thực hiện</strong>
                        </label>
                    <button className='item-end' onClick={() => handleClickVBPL(2)}>
                        {(listShow.includes(2)) ? <AiFillCaretUp /> : <AiFillCaretDown />}
                    </button>
                </div>
                {(listShow.includes(2)) && (
                    <div className="dropdown-content">
                        {/* {VBPL.cachThucThucHien} */}
                    </div>
                )}
            </div>

            {/* Trình tự thực hiện */}
            <div className="w-full mt-4 h border border-red-400 rounded-md">
                <div className='bg-gray-200 flex' >
                    <label className='w-5/6 flex'><strong className='item-start ml-24 ' >Trình tự thực hiện</strong></label>
                    <button className='item-end' onClick={() => handleClickVBPL(3)}>
                        {(listShow.includes(3)) ? <AiFillCaretUp /> : <AiFillCaretDown />}
                    </button>
                </div>
                {(listShow.includes(3)) && (
                    <div className="dropdown-content">
                        {/* {VBPL.cachThucThucHien} */}

                    </div>
                )}
            </div>


            {/* Thời gian giải quyết  */}
            <div className="w-full mt-4 border border-red-400 rounded-md">
                <div className='bg-gray-200 flex' >
                    <label className='w-5/6 flex'><strong className='item-start ml-24 ' >Thời gian giải quyếtt</strong></label>
                    <button className='item-end' onClick={() => handleClickVBPL(4)}>
                        {(listShow.includes(4)) ? <AiFillCaretUp /> : <AiFillCaretDown />}
                    </button>
                </div>
                {(listShow.includes(4)) && (
                    <div className="dropdown-content">
                        {/* {VBPL.thoiHanGiaiQuyet} */}
                    </div>
                )}
            </div>
            {/* Le Phi */}

            <div className="w-full mt-4 bg-gray-200 border border-red-400 rounded-md">
                <div className='flex ' >
                    <label className='w-5/6 flex'><strong className='item-start ml-24 '>Lệ phí</strong></label>
                    <button className='item-end' onClick={() => handleClickVBPL(5)}>
                        {(listShow.includes(5)) ? <AiFillCaretUp /> : <AiFillCaretDown />}
                    </button>
                </div>
                {(listShow.includes(5)) && (
                    <div className="dropdown-content">
                        {/* {VBPL.lePhi} VNĐ */}
                    </div>
                )}
            </div>
            {/* Thành phần hồ sơ*/}

            <div className="w-full mt-4 border border-red-400 rounded-md">
                <div className='bg-gray-200 flex' >
                    <label className='w-5/6 flex'><strong className='item-start ml-24 '>Thành phần hồ sơ</strong></label>
                    <button className='item-end' onClick={() => handleClickVBPL(6)}>
                        {(listShow.includes(6)) ? <AiFillCaretUp /> : <AiFillCaretDown />}
                    </button>
                </div>
                {(listShow.includes(6)) && (
                    <div className="dropdown-content">
                        {/* {VBPL.thanhPhanHoSo} VNĐ */} 
                    </div>
                )}
            </div>
            {/* Yêu cầu điều kiền*/}

            <div className="w-full mt-4  border border-red-400 rounded-md">
                <div className='bg-gray-200 flex' >
                    <label className='w-5/6 flex'><strong className='item-start ml-24 '>Yêu cầu điều kiện</strong></label>
                    <button className='item-end' onClick={() => handleClickVBPL(7)}>
                        {(listShow.includes(7)) ? <AiFillCaretUp /> : <AiFillCaretDown />}
                    </button>
                </div>
                {(listShow.includes(7)) && (
                    <div className="dropdown-content">
                        {/* {VBPL.yeuCauDieuKien} */}
                    </div>
                )}
            </div>
            {/* Cơ cứ pháp lý*/}

            <div className="w-full mt-4 border border-red-400 rounded-md">
                <div className='bg-gray-200 flex' >
                    <label className='w-5/6 flex'><strong className='item-start ml-24 '>Cơ cứ pháp lý </strong></label>
                    <button className='item-end' onClick={() => handleClickVBPL(8)}>
                        {(listShow.includes(8)) ? <AiFillCaretUp /> : <AiFillCaretDown />}
                    </button>
                </div>
                {(listShow.includes(8)) && (
                    <div className="dropdown-content">
                        {/* {VBPL.canCuPhapLy} */}
                    </div>
                )}
            </div>
              {/* Kết quả thực hiên */}

              <div className="w-full mt-4 border border-red-400 rounded-md">
                <div className='bg-gray-200 flex' >
                    <label className='w-5/6 flex'><strong className='item-start ml-24 '>Kết quả thực hiện  </strong></label>
                    <button className='item-end' onClick={() => handleClickVBPL(9)}>
                        {(listShow.includes(9)) ? <AiFillCaretUp /> : <AiFillCaretDown />}
                    </button>
                </div>
                {(listShow.includes(9)) && (
                    <div className="dropdown-content">
                        {/* {VBPL.canCuPhapLy} */}
                    </div>
                )}
            </div>




            {/* Footer section (duplicate removed) */}
           
        </div>

        {/* Right column */}
        <div className="bg-white-300 p-4 col-span-1"></div>

        {/* Footer with logo */}
        <div className="bg-white-300 p-4 col-span-5">
        </div>
    </div>
    );
}

export default ThuTuc;