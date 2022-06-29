import React from 'react';
import { Link } from 'react-router-dom';
import '../style/Navbar.css';
import navimg1 from '../assets/navimg/logo3 (1).PNG';
import img2 from '../assets/navimg/shoppershop.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to={'/'}> <div className='navcontent ms-4' >
      <img src={navimg1} className="mt-1" height='55px' alt="" /> 
      {/* <div className='ms-1' > <p style={{fontSize:"30px", marginBottom:"0px", fontWeight:"bold" }} >Intrakraft</p> <p style={{fontSize:'12px'}} >connect. interact. Transact.</p></div> */}
       </div> </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to={'/orders'}>Orders</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={'/'}>Brands</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to={'/connections'}>Connections</Link>
        </li>

        <li className="nav-item iconi">
          <Link className="nav-link active" to={'/'}><i className="fa-solid fa-bag-shopping"></i></Link>
          <Link className="nav-link active" to={'/'}><i className="fa-solid fa-bell"></i></Link>
        </li>

        {/* <li className="nav-item">
          <Link className="nav-link active" to={'/'}><i className="fa-solid fa-bell"></i></Link>
        </li> */}

        <li className="nav-item dropdown" style={{borderLeft:"2px solid gray", paddingLeft:"10px"}}>
          <a className="nav-link active dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               <img src={img2} className='rounded-circle' style={{width:"40px",height:"40px"}} alt="ss" /> 
               welcome 
               {/* <li>shoppershop</li> */}
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar