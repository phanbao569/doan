import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import ApiConfig, { apiUrl } from '../../ApiConfig';

export default function VBPLME() {
    const [formData, setFormData] = useState([
    ]
    );

    useEffect(() => {
        fetchVBPL();
    }, []);

    const fetchVBPL = async () => {
        try {
            const response = await axios.get(apiUrl(ApiConfig.getAllVBPL));
            setFormData(response.data);

        } catch (error) {
            console.error('Fetch products error:', error);
        }
    };
    console.log(formData)
    return (
        <div>
            
            <div className='container h-screen' style={{ display: "flex", justifyContent: "space-between", flexDirection: "row-reverse", color: "#000" }}>

                <div className='container' style={{ width: "100%", padding: "20px", borderRadius: "5px" }}>

                    <table style={{ width: "90%", margin: "0 auto", borderCollapse: "collapse" }}>

                        <tr style={{ height: "50px" }}>
                            <th style={{ padding: "5px 10px", border: "1px dashed #ddd" }}>Tên văn pháp luật</th>
                            <th style={{ padding: "5px 10px", border: "1px dashed #ddd" }}>Tên người thay đổi</th>
                            <th style={{ padding: "5px 10px", border: "1px dashed #ddd" }}>Ngày thay đổi</th>

                        </tr>
                        <tbody>
                            {formData.map((item, index) => (
                                <tr key={index}>
                                    <td style={{ padding: "5px 10px", border: "1px dashed #ddd" }}>{item.tenThuTuc}</td>
                                    <td style={{ padding: "5px 10px", border: "1px dashed #ddd" }}>{item.coQuanThucHien}</td>
                                    <td style={{ padding: "5px 10px", border: "1px dashed #ddd" }}>{item.updated_at}</td>
                                    <td style={{ padding: "5px 10px", border: "1px dashed #ddd" }}>
                                        <Link to={`/xemVBPL/${item.id}`} className='button-xemvb'>Xem VB</Link>

                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    )

}
