// Trong YearSelector.js

import React, { useState } from 'react';

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
    <select value={selectedYear} onChange={handleYearChanges}>
      {years.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
    </select>
  );
};

export default YearSelector;
