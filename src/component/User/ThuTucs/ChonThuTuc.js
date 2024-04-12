import React from 'react'
import logo from '../img/quochuyvietnam.jpg'
import giahantamtru from '../img/giahantamtru.jpg'
import xoadangkytamtru from '../img/xoadangkytamtru.jpg'
import khaibaotamtru from '../img/khaibaotamtru.jpg'
import khaibaotamvang from '../img/khaibaotamvang.jpg'
import thongbaoluutru from '../img/thongbaoluutru.jpg'
import khaibaothuongtru from '../img/khaibaothuongtru.jpg'
import xoadangkythuongtru from '../img/xoadangkythuongtru.jpg'
import { Link } from 'react-router-dom'
export default function ChonThuTuc() {

    return (
        <div className="container h-screen mb-10 h-screen  mx-auto py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 h-screen  gap-4">
                {/* Khối 1 */}
                <div    >
                    <Link to={`/thutuc/giahantamtru`} >
                        <img src={giahantamtru} alt="logo" className="w-full h-full  rounded-lg shadow-md " />

                    </Link>

                </div>
                {/* Khối 2 */}
                <div >
                    <Link to={`/thutuc/giahantamtru`} >

                        <img src={xoadangkytamtru} alt="logo" className="w-full h-full  rounded-lg shadow-md " />
                    </Link>

                </div>
                {/* Khối 3 */}
                <div >
                    <Link to={`/thutuc/giahantamtru`} >

                        <img src={khaibaotamtru} alt="logo" className="w-full h-full  rounded-lg shadow-md " />
                    </Link>

                </div>
                {/* Khối 4 */}
                <div >
                    <Link to={`/thutuc/giahantamtru`} >

                        <img src={khaibaotamvang} alt="logo" className="w-full h-full  rounded-lg shadow-md " />
                    </Link>

                </div>
                {/* Khối 5 */}
                <div >
                    <Link to={`/thutuc/giahantamtru`} >

                        <img src={thongbaoluutru} alt="logo" className="w-full h-full  rounded-lg shadow-md " />
                    </Link>

                </div>
                {/* Khối 6 */}
                <div >
                    <Link to={`/thutuc/giahantamtru`} >

                        <img src={khaibaothuongtru} alt="logo" className="w-full h-full  rounded-lg shadow-md " />
                    </Link>

                </div>
                {/* Khối 7 */}
                <div >
                    <Link to={`/thutuc/giahantamtru`} >

                        <img src={xoadangkythuongtru} alt="logo" className="w-full h-full  rounded-lg shadow-md " />
                    </Link>

                </div>
                {/* Khối 8 */}

            </div>
        </div>




    )
}
