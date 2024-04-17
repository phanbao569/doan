import axios from 'axios';
import React, { Component } from 'react'

 const GetThongTinUser = async (Data) => {
     try {
        const response = await axios.post('http://172.21.3.222:8888/TTUser/create', Data);
       console.log('Response from server:', response.data);
        return response.data;
     
     } catch (error) {
       alert('đăng kí thất bại do ' + error.response.data);
       console.log(error.data)
        
       console.log('đăng kí thất bại do ' + error.response.data);
       
     }
   }

  export default GetThongTinUser ;