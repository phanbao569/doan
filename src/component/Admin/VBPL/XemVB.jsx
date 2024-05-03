import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApiConfig, { apiUrl } from '../../../ApiConfig';
import { useParams } from 'react-router-dom';
import { GiAutoRepair } from "react-icons/gi";
import { RiDeleteBin5Line } from "react-icons/ri";
export default function XemVB() {
  let { id } = useParams();

  const [vb, setVb] = useState(null);
  const [editMode, setEditMode] = useState(false);
    const [formData, setFormData] = useState({
      tenThuTuc: '',
      coQuanThucHien: '',
      cachThucThucHien: '',
      trinhTuThucHien: '',
      thoiHanGiaiQuyet: '',
      lePhi: '',
      thanhPhanHoSo: '',
      yeuCauDieuKien: '',
      canCuPhapLy: '',
      ketQuaThucHien: '',
      idNguoiThayDoi: '0',
    });

  const fetchVBInfo = async () => {
    try {
      const response = await axios.get(apiUrl(ApiConfig.getVBPL(id)));
      setVb(response.data);
    } catch (error) {
      console.error('Fetch VB info error:', error);
    }


  };

  useEffect(() => {

    if (id !== undefined && id !== null)
      fetchVBInfo();
  }, [id]);

  const handleEditClick = () => {
    setEditMode(true);
    setFormData({
      id: id,
      tenThuTuc: vb.tenThuTuc,
      coQuanThucHien: vb.coQuanThucHien,
      cachThucThucHien: vb.cachThucThucHien,
      trinhTuThucHien: vb.trinhTuThucHien,
      thoiHanGiaiQuyet: vb.thoiHanGiaiQuyet,
      lePhi: vb.lePhi,
      thanhPhanHoSo: vb.thanhPhanHoSo,
      yeuCauDieuKien: vb.yeuCauDieuKien,
      canCuPhapLy: vb.canCuPhapLy,
      ketQuaThucHien: vb.ketQuaThucHien,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.put(apiUrl(ApiConfig.updateVBPL), formData);
      // setVb(formData);

      setEditMode(false);
    } catch (error) {
      console.error('Update VB error:', error);
    }
  };

  const handleDeleteClick = () => {

  };

  return (
    <div>

      {vb ? (
        editMode ? (<div className='grid-container' style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
          <div className='' style={{ width: "60%", padding: "20px", border: "1px solid #ccc", borderRadius: "5px", backgroundColor: "#f9f9f9" }}>
            <form style={{ maxWidth: "100%", margin: "0 auto" }}>
              <div style={{ display: "flex", marginBottom: "10px" }}>
                <label htmlFor="tenThuTuc" style={{ marginRight: "10px", minWidth: "200px", marginBottom: "5px", textAlign: "left" }}>Tên Thủ Tục:</label>
                <input onChange={handleInputChange} type="text" id="tenThuTuc" name="tenThuTuc" style={{ flex: "1", padding: "10px" }} value={formData.tenThuTuc} />
              </div>

              <div style={{ display: "flex", marginBottom: "10px" }}>
                <label htmlFor="coQuanThucHien" style={{ marginRight: "10px", minWidth: "200px", marginBottom: "5px", textAlign: "left" }}>Cơ Quan Thực Hiện:</label>
                <input onChange={handleInputChange} type="text" id="coQuanThucHien" name="coQuanThucHien" style={{ flex: "1", padding: "10px" }} value={formData.coQuanThucHien} />
              </div>

              <div style={{ display: "flex", marginBottom: "10px" }}>
                <label htmlFor="cachThucThucHien" style={{ marginRight: "10px", minWidth: "200px", marginBottom: "5px", textAlign: "left" }}>Cách Thức Thực Hiện:</label>
                <textarea onChange={handleInputChange} type="text" id="cachThucThucHien" name="cachThucThucHien" style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", boxSizing: "border-box" }} value={formData.cachThucThucHien} />
              </div>

              <div style={{ display: "flex", marginBottom: "10px" }}>
                <label htmlFor="trinhTuThucHien" style={{ marginRight: "10px", minWidth: "200px", marginBottom: "5px", textAlign: "left" }}>Trình Tự Thực Hiện:</label>
                <textarea onChange={handleInputChange} id="trinhTuThucHien" name="trinhTuThucHien" style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", boxSizing: "border-box" }} value={formData.trinhTuThucHien}></textarea>
              </div>

              <div style={{ display: "flex", marginBottom: "10px" }}>
                <label htmlFor="thoiHanGiaiQuyet" style={{ marginRight: "10px", minWidth: "200px", marginBottom: "5px", textAlign: "left" }}>Thời Hạn Giải Quyết:</label>
                <input onChange={handleInputChange} type="text" id="thoiHanGiaiQuyet" name="thoiHanGiaiQuyet" style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", boxSizing: "border-box" }} value={formData.thoiHanGiaiQuyet} />
              </div>

              <div style={{ display: "flex", marginBottom: "10px" }}>
                <label htmlFor="lePhi" style={{ marginRight: "10px", minWidth: "200px", marginBottom: "5px", textAlign: "left" }}>Lệ Phí:</label>
                <input onChange={handleInputChange} type="text" id="lePhi" name="lePhi" style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", boxSizing: "border-box" }} value={formData.lePhi} />
              </div>

              <div style={{ display: "flex", marginBottom: "10px" }}>
                <label htmlFor="thanhPhanHoSo" style={{ marginRight: "10px", minWidth: "200px", marginBottom: "5px", textAlign: "left" }}>Thành Phần Hồ Sơ:</label>
                <textarea onChange={handleInputChange} id="thanhPhanHoSo" name="thanhPhanHoSo" style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", boxSizing: "border-box" }} value={formData.thanhPhanHoSo}></textarea>
              </div>

              <div style={{ display: "flex", marginBottom: "10px" }}>
                <label htmlFor="yeuCauDieuKien" style={{ marginRight: "10px", minWidth: "200px", marginBottom: "5px", textAlign: "left" }}>Yêu Cầu Điều Kiện:</label>
                <textarea onChange={handleInputChange} id="yeuCauDieuKien" name="yeuCauDieuKien" style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", boxSizing: "border-box" }} value={formData.yeuCauDieuKien}></textarea>
              </div>

              <div style={{ display: "flex", marginBottom: "10px" }}>
                <label htmlFor="canCuPhapLy" style={{ marginRight: "10px", minWidth: "200px", marginBottom: "5px", textAlign: "left" }}>Căn Cứ Pháp Lý:</label>
                <textarea onChange={handleInputChange} id="canCuPhapLy" name="canCuPhapLy" style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", boxSizing: "border-box" }} value={formData.canCuPhapLy}></textarea>
              </div>

              <div style={{ display: "flex", marginBottom: "10px" }}>
                <label htmlFor="ketQuaThucHien" style={{ marginRight: "10px", minWidth: "200px", marginBottom: "5px", textAlign: "left" }}>Kết Quả Thực Hiện:</label>
                <textarea onChange={handleInputChange} id="ketQuaThucHien" name="ketQuaThucHien" style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", boxSizing: "border-box" }} value={formData.ketQuaThucHien}></textarea>
              </div>

              <button onClick={handleSubmit} style={{ width: "100%", padding: "10px", marginTop: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>Gửi</button>
            </form>
          </div>
        </div>) : (
          <div className='text-start m-8'>
         <div className="d-flex justify-content-end align-items-center">
  <GiAutoRepair className="text-primary mr-2 text-2xl" type="button" onClick={handleEditClick} />
  <RiDeleteBin5Line className="text-danger text-2xl" type="button" onClick={handleDeleteClick} />
</div>
            
            {/* <h2>{vb?.id}</h2> */}
            <p className=''>Tên Thủ Tục:</p>
              <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
                <div className="p-2 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p className="mb-2 text-gray-500 dark:text-gray-400"> {vb?.tenThuTuc}</p>
                </div>
              </div>
            <p>Cơ Quan Thực Hiện: </p>
            <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
                <div className="p-2 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p className="mb-2 text-gray-500 dark:text-gray-400"> {vb?.coQuanThucHien}</p>
                </div>
              </div>
            <p>Cách Thức Thực Hiện: </p>
            <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
                <div className="p-2 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p className="mb-2 text-gray-500 dark:text-gray-400"> {vb.cachThucThucHien.split(/\r?\n/).map((line, index) => (
                            <p key={index} style={{ marginLeft: line.includes("+") ? "30px" : "0" }}>{line}</p>
                        ))}</p>
                </div>
              </div>
            <p>Trình Tự Thực Hiện: </p>
            <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
                <div className="p-2 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p className="mb-2 text-gray-500 dark:text-gray-400"> <div>

                  {vb.trinhTuThucHien.split(/\r?\n/).map((line, index) => (
            <p key={index} style={{ marginLeft: line.includes("+") ? "30px" : "0" }}>
                {line}
            </p>
        ))}

                    </div></p>
                </div>
              </div>
            <p>Thời Hạn Giải Quyết: </p>
            <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
                <div className="p-2 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p className="mb-2 text-gray-500 dark:text-gray-400"> {vb?.thoiHanGiaiQuyet}</p>
                </div>
              </div>
            <p>Lệ Phí: </p>
            <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
                <div className="p-2 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p className="mb-2 text-gray-500 dark:text-gray-400"> {vb?.lePhi}</p>
                </div>
              </div>
            <p>Thành Phần Hồ Sơ: </p>
            <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
                <div className="p-2 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">{vb?.thanhPhanHoSo}</p>
                </div>
              </div>
            <p>Yêu Cầu Điều Kiện: </p>
            <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
                <div className="p-2 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p className="mb-2 text-gray-500 dark:text-gray-400"> {vb?.yeuCauDieuKien}</p>
                </div>
              </div>
            <p>Căn Cứ Pháp Lý: </p>
            <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
                <div className="p-2 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">{vb?.canCuPhapLy}</p>
                </div>
              </div>
            <p>Kết Quả Thực Hiện: </p>
            <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
                <div className="p-2 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p className="mb-2 text-gray-500 dark:text-gray-400"> {vb?.ketQuaThucHien}</p>
                </div>
              </div>
            {/* <p>ID Người Thay Đổi: </p>
            <div id="accordion-collapse-body-1" className="" aria-labelledby="accordion-collapse-heading-1">
                <div className="p-2 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p className="mb-2 text-gray-500 dark:text-gray-400"> {vb?.idNguoiThayDoi}</p>
                </div>
              </div> */}
          

          </div>)

      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

