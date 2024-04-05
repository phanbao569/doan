import axios from 'axios';
import React, { useState } from 'react' ;
import { Field, Form, Formik } from 'formik';
import fetchData from '../../Service/User/ThongTinUser';

export default function NhapThongTinUser() {
   
  const[inForUser,SetinForUser] = useState(
{
   hoTen : "" ,
   cccd : "" ,
   ngaySinh : "" ,
   gioiTinh : "" ,
   quocTich : "" ,
   danToc : "" ,
   tonGiao : "" ,
   noiDKKhaiSinh : {} ,
   queQuan : {} ,
   thuongTru : {} ,
   tamTru : {} ,
   diaChiTTCuThe : "" ,
   thoiHanTamTru : "" ,
   noiOHienTai : "" ,    
   noiKhaiBaoTamVang : {} ,
    TTGiaDinh : {} ,
   idUser : "0c6b4326" 

}

  );
  const handleSubmit = async (values) => {
   
     console.log('Dữ liệu được gửi đi:', values);                          
      const Data =  await fetchData(values);
     SetinForUser(Data)
     }
  
    return (

<>
<Formik  initialValues={
{
  hoTen : "" ,
  cccd : "" ,
  ngaySinh : "" ,
  gioiTinh : "" ,
  quocTich : "" ,
  danToc : "" ,
  tonGiao : "" ,
  noiDKKhaiSinh : {} ,
  queQuan : {} ,
  thuongTru : {} ,
  tamTru : {} ,
  diaChiTTCuThe : "" ,
  thoiHanTamTru : "" ,
  noiOHienTai : "" ,
  noiKhaiBaoTamVang : {} ,
   TTGiaDinh : {} ,
  idUser : "0c6b4326" 
}
}  
 onSubmit={ async (values)=>handleSubmit(values)
 }
 >
<Form>
  <Field name="hoTen"/>
  
</Form>
</Formik>
</>
) 

}
    


  


