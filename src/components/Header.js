import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/img/logo.svg";


const Header = () => {
  return (
    <header className="py-6 border-b mb-12">
        <div className="container mx-auto flex justify-between items-center">
      <Link to="/">
        <img src={Logo} alt="" />
      </Link>
      <div className="flex gap-6 items-center">
        <Link className="hover:bg-violet-900 transition" to="">Log In</Link>
        <Link className="bg-violet-700 hover:bg-violet-800 text-white px-4 rounded-lg transition py-3" to="">Sign Up</Link>
      </div>
    </div>
    </header>
  )
}

export default Header

