import React, { useState } from 'react'
import DiaChi from '../Diachi'

export default function QuanLyHoSo() {

    const [selectedCity, setSelectedCity] = useState('');
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [selectedWard, setSelectedWard] = useState('');

    const handleSelectCity = (cityName) => {
        setSelectedCity(cityName);
    };

    const handleSelectDistrict = (districtName) => {
        setSelectedDistrict(districtName);
    };

    const handleSelectWard = (wardName) => {
        setSelectedWard(wardName);
    };
    return (


        <div className='h-screen mt-12' >
            <DiaChi
                onSelectCity={handleSelectCity}
                onSelectDistrict={handleSelectDistrict}
                onSelectWard={handleSelectWard}
            />

            <label> {selectedCity} - {selectedDistrict} - {selectedWard} </label>
            <section id="list-wrapper  ">
                <p>Tìm thấy tổng số <strong>0</strong> hồ sơ</p>
                <div>
                    <table className="table table-hover" id="tbl-search-result">
                        <thead>
                            <tr>
                                <th>
                                    <div className="row over-sm">
                                        <div className="col-sm-3 col-md-2">
                                            <div className="row">
                                                <div className="col-sm-3 over-sm">#</div>
                                                <div className="col-sm-9">Số hồ sơ</div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">Thủ tục thực hiện</div>
                                        <div className="col-sm-2 col-md-3">Người nộp</div>
                                        <div className="col-sm-2 col-md-3">Tình trạng hồ sơ</div>
                                        <div className="col-sm-2 col-md-1"></div>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className="form-wrapper">
                            <tr>
                                <th>
                                    <div className="row over-sm">
                                        <div className="col-sm-3 col-md-2">
                                            <div className="row">
                                                <div className="col-sm-3 over-sm"> 1 </div>
                                                <div className="col-sm-9">Số hồ sơ</div>
                                            </div>
                                        </div>
                                        <div className="col-sm-3">Thủ tục thực hiện</div>
                                        <div className="col-sm-2 col-md-3">Người nộp</div>
                                        <div className="col-sm-2 col-md-3">Tình trạng hồ sơ</div>
                                        <div className="col-sm-2 col-md-1"></div>
                                    </div>
                                </th>
                            </tr>
                        </tbody>

                    </table>
                </div>
                <div id="pagination-wrapper">
                </div>
            </section>

        </div>


    )
}
