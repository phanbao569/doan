// Trong YearSelector.js

import React, { useState } from 'react';
import { Select, Option } from "@material-tailwind/react";
const YearSelector = ({ onChange }) => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setSelectedYear] = useState(currentYear);
  const years = [];
  for (let year = 1990; year <= currentYear; year++) {
    years.push(year);
  }

  const handleYearChanges = (e) => {
    const year = parseInt(e.target.value);
    setSelectedYear(year);
    if (onChange) {
      onChange(year);
    }
  };

  return (
    <div className='max-w-sm mx-auto'>
       
<select className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={selectedYear} onChange={handleYearChanges}>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
      </div>
  );
};

export default YearSelector;
