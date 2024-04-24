import React, { useState } from 'react';

const ProvinceDropdown = ({ onChange }) => {
  const provinces = [
    "Thành Phố Hà Nội", "Thành phố Hồ Chí Minh", "Thành phố Hải Phòng","Tỉnh Hưng Yên", "Thành phố Đà Nẵng", "Thành phố Cần Thơ", 
    "Tỉnh Hải Dương", "Tỉnh Bà Rịa - Vũng Tàu", "Tỉnh Vĩnh Phúc", "Tỉnh Thanh Hóa", "Tỉnh Nghệ An", 
    "Tỉnh Hà Tĩnh", "Tỉnh Quảng Ninh", "Tỉnh Nam Định", "Tỉnh Thái Bình", "Tỉnh Hải Dương", "Tỉnh Ninh Bình",
    "Tỉnh Hà Nam", "Tỉnh Thái Nguyên", "Tỉnh Lạng Sơn", "Tỉnh Bắc Giang", "Tỉnh Phú Thọ", "Tỉnh Bắc Ninh", 
    "Tỉnh Quảng Ninh", "Tỉnh Hà Giang", "Tỉnh Tuyên Quang", "Tỉnh Lào Cai", "Tỉnh Yên Bái", "Tỉnh Lai Châu",
    "Tỉnh Sơn La", "Tỉnh Điện Biên", "Tỉnh Hòa Bình", "Tỉnh Thanh Hóa", "Tỉnh Nghệ An", "Tỉnh Hà Tĩnh", 
    "Tỉnh Quảng Bình", "Tỉnh Quảng Trị", "Tỉnh Thừa Thiên Huế", "Tỉnh Quảng Nam", "Tỉnh Quảng Ngãi", 
    "Tỉnh Bình Định", "Tỉnh Phú Yên", "Tỉnh Khánh Hòa", "Tỉnh Ninh Thuận", "Tỉnh Bình Thuận", "Tỉnh Kon Tum",
    "Tỉnh Gia Lai", "Tỉnh Đắk Lắk", "Tỉnh Đắk Nông", "Tỉnh Lâm Đồng", "Tỉnh Bình Phước", "Tỉnh Tây Ninh",
    "Tỉnh Bình Dương", "Tỉnh Đồng Nai", "Tỉnh Bà Rịa - Vũng Tàu", "Tỉnh Long An", "Tỉnh Tiền Giang", 
    "Tỉnh Bến Tre", "Tỉnh Trà Vinh", "Tỉnh Vĩnh Long", "Tỉnh Đồng Tháp", "Tỉnh An Giang", "Tỉnh Kiên Giang"
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
    <div>
      <h2>Chọn tỉnh thành</h2>
      <select value={selectedProvince} onChange={handleProvinceChanges}>
        <option value="">Chọn tỉnh thành</option>
        {provinces.map((province, index) => (
          <option key={index} value={province}>{province}</option>
        ))}
      </select>
      <p>Đã chọn: {selectedProvince}</p>
    </div>
  );
};

export default ProvinceDropdown;