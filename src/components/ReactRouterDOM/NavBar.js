import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <ul style={{display:"flex", justifyContent:"flex-end", listStyle:"none", fontSize:"20px"}}>
        <li style={{padding:"0 10px"}}>
          <Link to="/">Home</Link>
        </li>
        <li style={{padding:"0 10px"}}>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li style={{padding:"0 10px"}}> 
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
