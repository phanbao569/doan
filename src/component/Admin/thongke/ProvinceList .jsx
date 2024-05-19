import React, { useState } from 'react';
import { Select, Option } from "@material-tailwind/react";
const ProvinceDropdown = ({ onChange }) => {
  const provinces = [
    "Thành phố Hồ Chí Minh",
    "Thành phố Hà Nội",
    "Thành phố Hải Phòng",
    "Thành phố Đà Nẵng",
    "Tỉnh Hà Giang",
    "Tỉnh Cao Bằng",
    "Tỉnh Lai Châu",
    "Tỉnh Lào Cai",
    "Tỉnh Tuyên Quang",
    "Tỉnh Lạng Sơn",
    "Tỉnh Bắc Kạn",
    "Tỉnh Thái Nguyên",
    "Tỉnh Yên Bái",
    "Tỉnh Sơn La",
    "Tỉnh Phú Thọ",
    "Tỉnh Vĩnh Phúc",
    "Tỉnh Quảng Ninh",
    "Tỉnh Bắc Giang",
    "Tỉnh Bắc Ninh",
    "Tỉnh Hải Dương",
    "Tỉnh Hưng Yên",
    "Tỉnh Thái Bình",
    "Tỉnh Hà Nam",
    "Tỉnh Nam Định",
    "Tỉnh Ninh Bình",
    "Tỉnh Thanh Hóa",
    "Tỉnh Nghệ An",
    "Tỉnh Hà Tĩnh",
    "Tỉnh Quảng Bình",
    "Tỉnh Quảng Trị",
    "Tỉnh Thừa Thiên Huế",
    "Tỉnh Quảng Nam",
    "Tỉnh Quảng Ngãi",
    "Tỉnh Bình Định",
    "Tỉnh Phú Yên",
    "Tỉnh Khánh Hòa",
    "Tỉnh Ninh Thuận",
    "Tỉnh Bình Thuận",
    "Tỉnh Kon Tum",
    "Tỉnh Gia Lai",
    "Tỉnh Đắk Lắk",
    "Tỉnh Đắk Nông",
    "Tỉnh Lâm Đồng",
    "Tỉnh Bình Phước",
    "Tỉnh Tây Ninh",
    "Tỉnh Bình Dương",
    "Tỉnh Đồng Nai",
    "Tỉnh Bà Rịa - Vũng Tàu",
    "Tỉnh Long An",
    "Tỉnh Tiền Giang",
    "Tỉnh Bến Tre",
    "Tỉnh Trà Vinh",
    "Tỉnh Vĩnh Long",
    "Tỉnh Đồng Tháp",
    "Tỉnh An Giang",
    "Tỉnh Kiên Giang",
    "Thành phố Cần Thơ",
    "Tỉnh Hậu Giang",
    "Tỉnh Sóc Trăng",
    "Tỉnh Bạc Liêu",
    "Tỉnh Cà Mau",
    "Tỉnh Điện Biên",
    "Tỉnh Đắk Nông"
];

  const [selectedProvince, setSelectedProvince] = useState('');

  const handleProvinceChanges = (event) => {
    const province = event.target.value;
    setSelectedProvince(province);
    if (onChange) {
      onChange(province);
    }
  };

  return (
    <div className="max-w-sm mx-auto">
      
      <select  className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={selectedProvince} onChange={handleProvinceChanges}>
        <option value="">Cả nước</option>
        {provinces.map((province, index) => (
          <option key={index} value={province}>{province}</option>
        ))}
      </select>
    </div>
  );
};

export default ProvinceDropdown;