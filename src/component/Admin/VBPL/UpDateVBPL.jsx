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
  
            <button onClick={handleSubmit} style={{ width: "100%", padding: "10px", marginTop: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "5px", cursor: "pointer" }}>Sửa</button>
          </form>
        </div>
      </div>
    );
  }
  