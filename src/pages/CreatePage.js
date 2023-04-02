import React, { useState } from 'react'
import "./CreatePage.css"

const CreatePage = (e) => {
    const [oemDetail,setOemDetail]=useState({model:"",yearOfModel:"",price:"",colors:"",milleage:"",power:"",maxSpeed:""})
    const [marketplaceInventry,setMarketPlaceInventry]=useState({odometers:"",majorScratches:"",originalPaint:"",noOfAccidentRepoted:"",numberOfPreviousBuyer:"",registrationPlace:""})
    const handleOem=(e)=>{
        setOemDetail({...oemDetail,[e.target.name]:e.target.value})

    }
    const handleMarketPlaceInventry=(e)=>{
        setMarketPlaceInventry({...marketplaceInventry,[e.target.name]:e.target.value})

    }
    const handleCarDetails=()=>{
        console.log(oemDetail,marketplaceInventry)
    }
  return (
    <>
        <h1> Add Details of Car</h1>
        <form className='register edit-register'>
            
            <div>
                <h3>Original Equipment Model Specification:</h3>
                <div className="mb-3 register-form">
                        <label htmlFor="exampleInputEmail1" className="form-label">Model No:</label>
                        <input type="email" className="form-control" name= "model" value={oemDetail.model} onChange={handleOem}  />
                        
                </div>
                <div className="mb-3 register-form">
                    <label htmlFor="exampleInputEmail1" className="form-label">Year of Model:</label>
                    <input type="email" className="form-control" name="yearOfModel" value={oemDetail.yearOfModel} onChange={handleOem}  />
                
                </div>
                <div className="mb-3 register-form">
                    <label htmlFor="exampleInputPassword1" className="form-label">Price:</label>
                    <input type="text" className="form-control" name='price' value={oemDetail.price} onChange={handleOem} />
                </div>

                <div className="mb-3 register-form">
                    <label htmlFor="exampleInputPassword1" className="form-label">Color:</label>
                    <input type="text" className="form-control" name='colors' value={oemDetail.colors} onChange={handleOem} />

                </div>
                <div className="mb-3 register-form">
                    <label htmlFor="exampleInputPassword1" className="form-label">Milleage:</label>
                    <input type="text" className="form-control" name='milleage' value={oemDetail.milleage} onChange={handleOem} />
                </div>
                <div className="mb-3 register-form">
                    <label htmlFor="exampleInputPassword1" className="form-label">Power:</label>
                    <input type="text" className="form-control" name='power' value={oemDetail.power} onChange={handleOem} />
                </div>
                <div className="mb-3 register-form">
                    <label htmlFor="exampleInputPassword1" className="form-label">Max Speed:</label>
                    <input type="text" className="form-control" name='maxSpeed' value={oemDetail.maxSpeed} onChange={handleOem} />
                </div>
            </div>
                <div>
                <h3>Add Market Place Inventary Details:</h3>


                    <div className="mb-3 register-form">
                                <label htmlFor="exampleInputEmail1" className="form-label">Odometer Reading:</label>
                                <input type="email" className="form-control" name= "odometers" value={marketplaceInventry.odometers} onChange={handleMarketPlaceInventry}  />         
                    </div>
                    <div className="mb-3 register-form">
                                <label htmlFor="exampleInputEmail1" className="form-label">Mention Major Scratches:</label>
                                <input type="email" className="form-control" name= "majorScratches" value={marketplaceInventry.majorScratches} onChange={handleMarketPlaceInventry}  />         
                    </div>
                    <div className="mb-3 register-form">
                                <label htmlFor="exampleInputEmail1" className="form-label">Original colors:</label>
                                <input type="email" className="form-control" name= "originalPaint" value={marketplaceInventry.originalPaint} onChange={handleMarketPlaceInventry}  />         
                    </div>
                    <div className="mb-3 register-form">
                                <label htmlFor="exampleInputEmail1" className="form-label">No of accident reported:</label>
                                <input type="email" className="form-control" name= "noOfAccidentRepoted" value={marketplaceInventry.noOfAccidentRepoted} onChange={handleMarketPlaceInventry}  />         
                    </div>
                    <div className="mb-3 register-form">
                        <label htmlFor="exampleInputEmail1" className="form-label">No of previous buyer:</label>
                        <input type="email" className="form-control" name= "numberOfPreviousBuyer" value={marketplaceInventry.numberOfPreviousBuyer} onChange={handleMarketPlaceInventry}  />         
                    </div>
                    <div className="mb-3 register-form">
                        <label htmlFor="exampleInputEmail1" className="form-label">Registration Place:</label>
                        <input type="email" className="form-control" name= "registrationPlace" value={marketplaceInventry.registrationPlace} onChange={handleMarketPlaceInventry}  />         
                    </div>

                </div> 
            <button type="submit" className="btn btn-primary" onClick={handleCarDetails}>Register</button>
            
        </form>
    
    </>
  )
}

export default CreatePage