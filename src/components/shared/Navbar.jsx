import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {

    // Context
    const {user, logOut} = useContext(AuthContext);

    // Hnadle Logout
    const handleLogout = () => {
        logOut()
        .then(() => {})
        .catch(error => console.log(error))
    }

    // menu links
    const links = <>
        <li><NavLink to={'/'} >Home</NavLink></li>
        <li><NavLink to={'/posts'} >Posts</NavLink></li>
        <li><NavLink to={'/about'} >About</NavLink></li>
        <li><NavLink to={'/contact'} >Contact</NavLink></li>
        <li><NavLink to={'/blogs'} >Blogs</NavLink></li>
        {
            user &&
            <li><NavLink to={'/dashboard'} >Dashboard</NavLink></li>
        }
    </>

    return (
        <div className="navbar bg-[#008DDA] md:px-10 lg:px-20 px-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-white gap-1">
        {links}
      </ul>
    </div>
    <Link to={"/"} className="text-3xl text-white font-semibold">trave<span>LL</span>er</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white gap-1">
      {links}
    </ul>
  </div>
  {
    user ?
    <div className="navbar-end">
    <button onClick={handleLogout} className="btn w-28">Logout</button>
  </div>
  :
  <div className="navbar-end">
    <Link to={'/login'} className="btn w-28">Login</Link>
  </div>
  }
</div>
    );
};

export default Navbar;