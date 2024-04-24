import React from 'react'

export default function ThongTinNguoiKhaiBao(props) {
    const { user, ttuser } = props;
    return (
        <div className='' >
        <div class='bg-yellow-200 w-full d-flex rounded-3xl	'>
            <label className='text-xl font-family-sans mx-auto' >
                THÔNG TIN NGƯỜI THÔNG BÁO
            </label>
        </div>
        <div class=" flex gap-24 ">
            <div class="w-full flex flex-col ">
                <div>
                    <label className='font-bold text-center ' > Tỉnh/Thành phố </label>
                </div>
                <input className=" text-center mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={ttuser?.queQuan?.tinh}
                />

            </div>
            <div class="w-full flex flex-col ">
                <div>
                    <label className='font-bold text-center' > Quận/Huyện </label>

                </div>
                <input className=" text-center mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={ttuser?.queQuan?.huyen}
                />


            </div>
            <div class="w-full flex flex-col ">
                <div>
                    <label className='font-bold text-center' > Phường/Xã </label>

                </div>
                <input className=" text-center mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={ttuser?.queQuan?.xa}
                />
            </div>

        </div>
        <div className='flex gap-24  '>
            <div class="w-full flex flex-col ">
                <div>
                    <label className='font-bold text-center' > Họ tên  </label>
                </div>
                <input className=" text-center  bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    disabled placeholder='Họ tên '
                    value={user?.hoTen} />
            </div>
            <div class="w-full flex flex-col  ">
                <div>
                    <label className='font-bold text-center' > Ngày tháng năm sinh </label>
           

                </div>
                <input value={ttuser?.ngaySinh} type="date" className=" text-center mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    disabled />
            </div>

        </div>
        <div class=" flex gap-24 ">
            <div class="w-full flex flex-col ">
                <div>
                    <label className='font-bold text-center' > số định danh cá nhân </label>


                </div>
                <input className=" text-center mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    disabled placeholder='Địa chỉ đăng ký tạm trú ' value={user?.cccd} />


            </div>
            <div class="w-full flex flex-col ">
                <div>
                    <label className='font-bold text-center' > Số điện thoại liên hệ </label>

                </div>
                <input className=" text-center mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    disabled placeholder='Địa chỉ đăng ký tạm trú ' value={user?.sdt} />
            </div>
            <div class="w-full flex flex-col ">
                <div>
                    <label className='font-bold text-center' > Email </label>
                </div>
                <input className=" text-center mb-2 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    disabled placeholder='Địa chỉ đăng ký tạm trú ' value={user?.email} />
            </div>

        </div>
    </div>
    )
}
