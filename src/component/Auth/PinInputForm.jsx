import React, { useState, useRef, useEffect } from 'react';

function PinInputForm({ onChange }) {
  const inputRefs = useRef([]);
  const [pinValues, setPinValues] = useState(Array(6).fill(''));

  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  const handleInputChange = (index, event) => {
    const { value } = event.target;
    const newPinValues = [...pinValues];
    newPinValues[index] = value;
    setPinValues(newPinValues);
    
    if (value && index < inputRefs.current.length - 1) {
      // Nếu ô input có giá trị và không phải là ô cuối cùng, chuyển trỏ đến ô input tiếp theo
      inputRefs.current[index + 1].focus();
    } else if (!value && index > 0) {
      // Nếu ô input trống và không phải là ô đầu tiên, chuyển trỏ đến ô input trước đó
      inputRefs.current[index - 1].focus();
    }
  
    // Gọi hàm callback onChange và truyền giá trị pinValues lên component cha
    onChange(newPinValues.join(''));
  };

  const handleBackspace = (index, event) => {
    if (event.key === 'Backspace' && pinValues[index] === '' && index > 0) {
      // Nếu nhận diện sự kiện Backspace và giá trị của ô input là rỗng và không phải là ô input đầu tiên, chuyển trỏ đến ô input trước đó
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <form className="max-w-sm mx-auto">
      <div className="flex mb-2 space-x-2 rtl:space-x-reverse">
        {[...Array(6)].map((_, index) => (
          <div key={index}>
            <label htmlFor={`code-${index + 1}`} className="sr-only">Code {index + 1}</label>
            <input
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              id={`code-${index + 1}`}
              className="block w-9 h-9 py-3 text-sm font-extrabold text-center text-gray-900 bg-white border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              required
              value={pinValues[index]}
              onChange={(e) => handleInputChange(index, e)}
              onKeyDown={(e) => handleBackspace(index, e)}
            />
          </div>
        ))}
      </div>
      <p id="helper-text-explanation" className="mt-2 text-sm text-gray-500 dark:text-gray-400">Please introduce the 6 digit code we sent via email.</p>
    </form>
  );
}

export default PinInputForm;
