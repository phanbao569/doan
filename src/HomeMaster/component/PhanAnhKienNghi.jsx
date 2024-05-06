import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

export default function PhanAnhKienNghi() {
    return (
        <div className='h-full '>
            <Link to='/' className='ml-28 mr-2 hover:text-red-700 b'>Trang chủ</Link>
            {'>'}
            <Link to='/PhanAnh' className='ml-2 hover:text-red-700'>Phản ánh kiến nghị</Link>
            <div className='form w-880 h-auto p-3 bg-red-900'>
                <h1>Tiếp nhận phản ánh kiến nghị</h1>
                <div className='flex'>
                    Họ và tên:
                    <input type="text"/>
                </div>
                <div className='flex gap-3'>
                    Địa chỉ: 
                    <select name="" id="" className='w-14' ></select>
                    <select name="" id="" className='w-14' ></select>
                    <select name="" id="" className='w-14' ></select>

                </div>
                    <select name="" id="" className='w-225' ></select>
            </div>
        </div>
    )
}
