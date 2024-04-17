import React from 'react'
import { FaSistrix } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdOutlineDateRange } from "react-icons/md";
import { TbBrandOnedrive } from "react-icons/tb";



export default function TraCuu() {
  return (
    <div className='w-full h-510 mt-6 justify-center'>
      <Link to='/' className='ml-28 mr-2 hover:text-red-700'>Trang chủ</Link>
      {'>'}
      <Link to='/TraCuu' className='ml-2 hover:text-red-700'>Tra Cứu</Link>
      <div className='flex justify-center mt-6'>
        <input className='w-880 h-12 pl-2 ml-4 border ' type="" placeholder='Số CCCD *' />
        <button className='flex text-white border h-12 items-center ml-4 bg-zinc-700 p-2 gap-2'>
          <FaSistrix className='size-6 ml-2 ' />
          Tìm kiếm
        </button>
      </div>
      <div>
        <Link className='ml-28 block text-lg hover:text-red-700'>Gia hạn tạm trú</Link>
        <div className='flex ml-28 text-sm gap-4'>
          <div className='flex items-center gap-1'>
            <MdOutlineDateRange/>
            Ngày tạo:
          </div>
          <div className='flex items-center gap-1'>
            <TbBrandOnedrive/>
            Tình trạng:
          </div>
        </div>
      </div>
    </div>
  )
}
