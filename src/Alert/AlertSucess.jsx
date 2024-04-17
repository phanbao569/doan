import React from 'react'
import './AlertSuces.css'
export default function AlertSucess({onClose}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50  ">
    <div className="rounded-lg border-t-4 border-green-400 bg-green-50 ">
      <div className="success-animation">
        <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="checkmark__circle" cx={26} cy={26} r={25} fill="none" /><path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
      </div>
      
      <h3 className="my-2 text-center text-xl font-semibold text-green-800">Congratulation!!!</h3>
      <p className="text-center text-sm font-normal text-green-500 p-6">Your order has been taken and is being attended to</p>
      <button onClick={onClose} className="mx-auto mt-4 block rounded-xl border-4 border-transparent bg-orange-400 px-4 py-2 text-center text-base font-medium text-orange-100 outline-8 hover:outline hover:duration-300">Đóng</button>
    </div>
  </div>

  
  )
}
