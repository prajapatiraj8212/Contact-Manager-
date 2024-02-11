import React from 'react'
import { Link } from 'react-router-dom';

let Navbar = () => {
  return (
    <React.Fragment>
 <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
 <div className='container'>
 <Link to={'/'} className='navbar-brand'>
 <i className='fa fa-phone  text-warning'/> Contact <span className='text-warning'>Manager</span></Link>
 
 </div>
 </nav>
    </React.Fragment>
  )
};

export default Navbar;
