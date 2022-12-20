/* eslint-disable no-restricted-globals */
/* eslint-disable react/jsx-pascal-case */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import Header_Navbar from "../../Components/NavBar-Sidebar_CompanyList/Header_Navbar";


const Users = () => {
  const navigate = useNavigate();

  const [data,setData] = useState([])


  const [loading,setLoading] = useState(true)



  
  async function getData() {
    await axios
        .get('users')
        .then((resp) => {
            setData(resp.data);
            setLoading(false)
            console.log('resp', resp.data)

        })
        .catch((err) => {
            console.log(err);
        });
}
useEffect(() => {
getData()
},[])

  return (
    <>
      <Header_Navbar />
      <div>
        <div className="pt-1 pb-20  bg-gray-100 mt-[68px]  w-full h-full">
          <div
            
          >
           <div className='pt-4 bg-gray-100 px-4 md:px-10   w-full h-screen'>
        <div className="items-center flex justify-center font-semibold text-6xl">
       Welcome Back
            </div>
        </div>
        
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
