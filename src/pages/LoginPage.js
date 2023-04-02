import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useDispatch,useSelector} from "react-redux"
import { showLoading,hideLoading } from '../redux/features/alertSlice';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [userDetail, setUserDetail]= useState({email:"",password:""});
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const handleData=(e)=>{
    setUserDetail({...userDetail,[e.target.name]:e.target.value})
  
  }
  const handleLogin=async(e)=>{
    e.preventDefault();
    console.log(userDetail);
    try{
      dispatch(showLoading())
      const res= await axios.post("/api/v1/user/login",userDetail);
      dispatch(hideLoading());
      if(res.data.success){
        toast.success("login successfully");

        localStorage.setItem("token",res.data.token);
        navigate("/")
      }else{
        toast.error(res.data.message)
      }


    }catch(error){
      console.log(error)
      dispatch(hideLoading());

    }
  }

  useEffect(()=>{
    toast.success("Register successully");
  },[])
  
  return (
    <>
        <ToastContainer/>
        
        <form className='register'>
            
            <div className="mb-3 register-form">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" name='email'value={userDetail.email} onChange={handleData} />
             
            </div>
            <div className="mb-3 register-form">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" name="password" value={userDetail.password} onChange={handleData}  />
            </div>
            
            <button type="submit" className="btn btn-primary" onClick={handleLogin}>Login</button>
        </form>

    </>
  )
}

export default LoginPage