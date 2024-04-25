import moment from 'moment';
import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import _DanhGiaHoSo from './_DanhGiaHoSo';
import _HoiDap from './_HoiDap';
import { GlobalContext } from '../../../App';
import _LichSuHoiDap from './_LichSuHoiDap';
export default function DanhGiaHoiDap() {
  const { user, ttuser } = useContext(GlobalContext)
  const [optionView, setoptionView] = useState("2");
  const handleClickView = (e, value) => {
    setoptionView(value)
  }


  return (
    <div className="flex ">
      <div className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Danh sách hồ sơ</h1>
          <div className='gap-4 flex flex-col' >

            <div onClick={(e) => { handleClickView(e, "2") }} >
              <a href="#" className="text-lg font-semibold text-gray-700 hover:text-blue-500">Hỏi Đáp</a>
            </div>
            <div onClick={(e) => { handleClickView(e, "3") }}>
              <a href="#" className="text-lg font-semibold text-gray-700 hover:text-blue-500">Lịch sử hỏi đáp</a>
            </div >

          </div>
        </div>
      </div>
      {/* Content */}
      <div className="flex-1   ">

        <div className="flex-1 ">
          <table className="min-w-full divide-y divide-gray-200  ">
            <>
              {optionView === "1" ? (
                <div>
                  <_DanhGiaHoSo user={user} ttuser={ttuser} />
                </div>
              ) : optionView === "2" ? (
                <div>
                  <_HoiDap user={user} ttuser={ttuser} />
                </div>
              ) : optionView === "3" ? (
                <div className='mx-auto' >
                  <_LichSuHoiDap />
                </div>
              ) : null} {/* Render null if Option doesn't match any condition */}
            </>
          </table>




        </div>



      </div>
    </div>
  )
}
