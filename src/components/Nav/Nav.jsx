import React from 'react'
import { TiHome } from "react-icons/ti";
import { Link } from 'react-router-dom';
import "./Nav.css"

export default function Nav() {
  return (
    <nav className='Navigator'>
        <Link className="nav-link"><TiHome/></Link>
        <Link to={"/digiwiki"} className="nav-link"><TiHome/></Link>
        <Link to={"/"} className="nav-link"><TiHome/></Link>
        <Link className="nav-link"><TiHome/></Link>
        <Link className="nav-link"><TiHome/></Link>
    </nav>
  )
}
