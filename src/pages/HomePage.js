import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import { useSelector } from 'react-redux'

const HomePage = () => {
    const {user}=useSelector(state=>state.user);
    

    const getUserData=async()=>{
        try{
            const res=await axios.post("/api/v1/user/getUserdata",{},{
                headers:{
                    Authorization: "Bearer "+localStorage.getItem("token") 
                }
            })

        }
        catch(error){
            console.log(error)
        }

    }
    useEffect(()=>{
        getUserData();
    },[getUserData])
  return (
    <>  

        <Navbar/>
        <div className='conatiner'>
            <div className='row'>
            <div className='col-md-3 mt-3 m-1'>
                                <div className="card" style={{width: '18rem'}}>
                                    <img src="..." className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                
                                </div>
                            </div>
                            <div className='col-md-3 mt-3 m-1'>
                                <div className="card" style={{width: '18rem'}}>
                                    <img src="..." className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                
                                </div>
                            </div>

                            <div className='col-md-3 mt-3 m-1'>
                                <div className="card" style={{width: '18rem'}}>
                                    <img src="..." className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                
                                </div>
                            </div>
                            <div className='col-md-3 mt-3 m-1'>
                                <div className="card" style={{width: '18rem'}}>
                                    <img src="..." className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                
                                </div>
                            </div>
                            <div className='col-md-3 mt-3 m-1'>
                                <div className="card" style={{width: '18rem'}}>
                                    <img src="..." className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                
                                </div>
                            </div>
                            <div className='col-md-3 mt-3 m-1'>
                                <div className="card" style={{width: '18rem'}}>
                                    <img src="..." className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                
                                </div>
                            </div>
                
  

            </div>

        </div>
       

    </>
  )
}

export default HomePage