import React from 'react';
import './AlertErr.css'; 

export default function AlertError({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="rounded-lg border-t-4 border-red-400 bg-red-50">
        <div className="error-animation">
          <svg className="crossmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
            <circle className="crossmark__circle" cx={26} cy={26} r={25} fill="none" />
            <path className="crossmark__cross" fill="none" d="M16,16 36,36 M36,16 16,36" />
          </svg>
        </div>

        <h3 className="my-2 text-center text-xl font-semibold text-red-800">Error!!!</h3>
        <p className="text-center text-sm font-normal text-red-500 p-6">An error occurred while processing your request</p>
        <button onClick={onClose} className="mx-auto mt-4 block rounded-xl border-4 border-transparent bg-orange-400 px-4 py-2 text-center text-base font-medium text-orange-100 outline-8 hover:outline hover:duration-300">Đóng</button>
      </div>
    </div>
  );
}
