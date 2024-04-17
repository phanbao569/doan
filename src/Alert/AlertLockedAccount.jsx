import React from 'react';
import './AlertWarn.css'; 

export default function AlertLockedAccount({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="rounded-lg border-t-4 border-yellow-400 bg-yellow-50 locked-animation">
      <div className="f-modal-alert">
  <div className="f-modal-icon f-modal-warning scaleWarning">
    <span className="f-modal-body pulseWarningIns" />
    <span className="f-modal-dot pulseWarningIns" />
  </div>
 
</div>

        <h3 className="my-2 text-center text-xl font-semibold text-yellow-800">Warning!!!</h3>
        <p className="text-center text-sm font-normal text-yellow-500 p-6">An warning occurred while processing your request</p>
        <button onClick={onClose} className="mx-auto mt-4 block rounded-xl border-4 border-transparent bg-orange-400 px-4 py-2 text-center text-base font-medium text-orange-100 outline-8 hover:outline hover:duration-300">Đóng</button>
      </div>
    </div>
  );
}
