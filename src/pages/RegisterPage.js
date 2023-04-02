import React, { useState } from 'react'
import "./RegisterPage.css"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch,useSelector } from 'react-redux';
import { hideLoading, showLoading } from '../redux/features/alertSlice';

const RegisterPage = () => {
  const navigate= useNavigate();
  const dispatch= useDispatch();

  const [userDetail, setUserDetail]= useState({name:"",email:"",password:""});
  const handleData=(e)=>{
    
    setUserDetail({...userDetail,[e.target.name]:e.target.value})
    console.log(userDetail)

  }
  const handleRegister=async(e)=>{
    dispatch(showLoading())
    e.preventDefault();
    try{
      const res= await axios.post("/api/v1/user/register",userDetail)
      dispatch(hideLoading())
    if(res.data.success){
      // toast.success("Register successfully")
      navigate("/login")
    }else{
      toast.error(res.data.message)
    }
    }catch(error){
      console.log(error)
      toast.error("Something went wrong")

    }

  }

  return (
    <>
        <form className='register'>
            <div className="mb-3 register-form">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input type="email" className="form-control" name= "name" value={userDetail.name} onChange={handleData}  />
                    
            </div>
            <div className="mb-3 register-form">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" name="email" value={userDetail.email} onChange={handleData}  />
             
            </div>
            <div className="mb-3 register-form">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" name='password' value={userDetail.password} onChange={handleData} />
            </div>
            
            <button type="submit" className="btn btn-primary" onClick={handleRegister}>Register</button>
            
        </form>
        <ToastContainer/>
        

    </>
  )
}

export default RegisterPage