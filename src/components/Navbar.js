import { token } from 'morgan'
import React from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom"
import { useSelector } from 'react-redux'

const Navbar = () => {
    const navigate=useNavigate()
    const {user}= useSelector(state=>state.user)

    const handleLogout=()=>{
        localStorage.removeItem("token")
        navigate("/login")
    }
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand text-primary" to="/">Welcome {user ? user.name:""}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="">Home</Link>
                    </li>
                
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <Link to="/create">
                        <button className="btn btn-outline-success" type="submit">Add Product</button>
                    </Link>
                    
                </form>
                </div>
                <button className="btn btn-danger m-3" onClick={handleLogout}>Logout</button>
            </div>
        </nav>


    </>
  )
}

export default Navbar