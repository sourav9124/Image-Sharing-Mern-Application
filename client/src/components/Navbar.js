import React from 'react'
import {Link} from 'react-router-dom'

const Navbar=()=>{

   return(
    <nav>
    <div className="nav-wrapper white">
        <Link to="/" className="brand-logo left">Green Deck</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/signin">Signin</Link></li>
        <li><Link to="/createpost">Create</Link></li>
      </ul>
    </div>
  </nav>

   );



}
export default Navbar