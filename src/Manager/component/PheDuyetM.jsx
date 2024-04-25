import React from 'react'
import { MdManageAccounts } from "react-icons/md";
import { NavLink } from 'react-router-dom';

export default function PheDuyetM() {
    return (
        <div className='w-full h-full flex justify-center'>
            <div className='flex h-800 gap-10 m-auto pt-20'>
                <NavLink to='/QLTKM' className='flex w-225 h-32 text-white bg-gray-800 justify-center content-center'>
                    <MdManageAccounts className='' />
                    Phê duyệt tài khoản
                </NavLink>
                <NavLink to='/QLHoSo' className='flex w-225 h-32 text-white bg-gray-800 justify-center content-center '>
                    <MdManageAccounts className='' />
                    Phêt duyệt hồ sơ
                </NavLink>
                <div>

                </div>
            </div>
        </div>
    )
}
