import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { getIDNguoiThayDoi } from '../../util/jwtUtils';

export default function DanhGiaE() {
    const id= getIDNguoiThayDoi();
    const[formData,setFormData]=useState({})
    const fetchdata= async ()=>{
        try {
            const response = await axios.get(`http://192.168.10.233:8888/TTNV/get/${id}`)
            setFormData(response.data.coQuan)
            console.log(response.data.coQuan);
          
            
        } catch{

        }
        
    }
    const fetchdata2= async ()=>{

       if(formData!==null){ try {
         
        const response2 = await axios.post(`http://192.168.10.233:8888/getAllDanhGiaHoSo`,formData)
        console.log(response2.data,'xin chào');
        
    } catch{

    }}
       
        
    }

    useEffect(() => {
        fetchdata();
    }, []);
    useEffect(() => {
        fetchdata2()
    }, [formData]);
  return (
    <div>DanhGiaM</div>
  )
}
