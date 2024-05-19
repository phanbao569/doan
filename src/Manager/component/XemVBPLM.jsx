import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ApiConfig, { apiUrl } from '../../ApiConfig';


export default function XemVBPLM() {
    const [id, setId] = useState(null);
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

    useEffect(() => {
        const currentUrl = window.location.href;
        const idFromUrl = currentUrl.split('/').pop();
        setId(idFromUrl);
    }, []);

    useEffect(() => {
        const fetchVBInfo = async () => {
            try {
                const response = await axios.get(apiUrl(ApiConfig.getVBPL(id)));
                setVb(response.data);

            } catch (error) {
                console.error('Fetch VB info error:', error);
            }
        };

        fetchVBInfo();
    }, [id]);
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


    return (
        <div className='h-screen'>

            {vb ? (
                <div className='ml-10'>
                    {/* <h2>{vb.id}</h2> */}
                    <p>Tên Thủ Tục: {vb.tenThuTuc}</p>
                    <p>Cơ Quan Thực Hiện: {vb.coQuanThucHien}</p>
                    <div>
                        <p>Cách thức thực hiện:</p>
                        {vb.cachThucThucHien.split(/\r?\n/).map((line, index) => (
                            <p key={index} style={{ marginLeft: line.includes("+") ? "20px" : "0" }}>
                                {line}  
                            </p>
                        ))}
                    </div>
                    {/* <pre className='font-fontgg overflow-hidden h-auto'>Trình Tự Thực Hiện: {vb.trinhTuThucHien.replace(/\\n/g, '\n')}</pre> */}
                    <div>
                        <p>Trình Tự Thực Hiện:</p>
                        {vb.trinhTuThucHien.split(/\r?\n/).map((line, index) => (
                            <p key={index} style={{ marginLeft: line.includes("+") ? "20px" : "0" }}>
                                {line}  
                            </p>
                        ))}
                    </div>
                    <p>Thời Hạn Giải Quyết: {vb.thoiHanGiaiQuyet}</p>
                    <p>Lệ Phí: {vb.lePhi}</p>
                    <p>Thành Phần Hồ Sơ: {vb.thanhPhanHoSo}</p>
                    <p>Yêu Cầu Điều Kiện: {vb.yeuCauDieuKien}</p>
                    <p>Căn Cứ Pháp Lý: {vb.canCuPhapLy}</p>
                    <p>Kết Quả Thực Hiện: {vb.ketQuaThucHien}</p>

                </div>
            ) : (
                <p>Loading...</p>
            )}

            {editMode && (
                <EditForm
                    formData={formData}
                    handleInputChange={handleInputChange}
                    handleSubmit={handleSubmit}
                />
            )}
        </div>
    );
}

function EditForm({ formData, handleInputChange, handleSubmit }) {
    return (
        <div className='grid-container' style={{ display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" }}>
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
                        <input onChange={handleInputChange} type="text" id="cachThucThucHien" name="cachThucThucHien" style={{ width: "100%", padding: "10px", border: "1px solid #ccc", borderRadius: "5px", boxSizing: "border-box" }} value={formData.cachThucThucHien} />
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
        </div>
    );
}
