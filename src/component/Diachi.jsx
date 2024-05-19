import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DiaChi = ({ onSelectCity, onSelectDistrict, onSelectWard }) => {
  const [cities, setCities] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json");
        setCities(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleCityChange = (e) => {
    const selectedCityId = e.target.value;
    if (selectedCityId) {
      const selectedCity = cities.find(city => city.Id === selectedCityId);
      setDistricts(selectedCity ? selectedCity.Districts : []);
      onSelectCity(selectedCity ? selectedCity.Name : '');
    } else {
      setDistricts([]);
      setWards([]);
      onSelectCity('');
    }
  };

  const handleDistrictChange = (e) => {
    const selectedDistrictId = e.target.value;
    if (selectedDistrictId) {
      const selectedDistrict = districts.find(district => district.Id === selectedDistrictId);
      setWards(selectedDistrict ? selectedDistrict.Wards : []);
      onSelectDistrict(selectedDistrict ? selectedDistrict.Name : '');
    } else {
      setWards([]);
      onSelectDistrict('');
    }
  };

  const handleWardChange = (e) => {
    const selectedWardId = e.target.value;
    if (selectedWardId) {
      const selectedWard = wards.find(ward => ward.Id === selectedWardId);
      onSelectWard(selectedWard ? selectedWard.Name : '');
    } else {
      onSelectWard('');
    }
  };

  return (
    <div className='flex gap-4'>
      <div className='w-1/3 '>
      <label className='font-bold text-center' > Tỉnh/thành phố </label>

      <select className="form-select form-select-sm mb-3" onChange={handleCityChange}>
        <option value="" selected>Chọn thành phố</option>
        {cities.map(city => (
          <option key={city.Id} value={city.Id}>{city.Name}</option>
        ))}
      </select>
      </div>
      <div className='w-1/3'> 
      <label className='font-bold text-center' > Quận/huyện </label>

      <select className="form-select form-select-sm mb-3" onChange={handleDistrictChange}>
        <option value="" selected>Chọn quận huyện</option>
        {districts.map(district => (
          <option key={district.Id} value={district.Id}>{district.Name}</option>
        ))}
      </select>
      </div>
      <div className='w-1/3'> 
      <label className='font-bold text-center' > Phường/xã </label>

      <select className="form-select form-select-sm mb-3" onChange={handleWardChange}>
        <option value="" selected>Chọn phường xã</option>
        {wards.map(ward => (
          <option key={ward.Id} value={ward.Id}>{ward.Name}</option>
        ))}
      </select>
      </div>
    </div>
  );
};

export default DiaChi;
