import { LuDoorOpen } from "react-icons/lu";
import { Link, Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open relative">
    <label htmlFor="my-drawer-2" className="absolute right-0 text-2xl btn btn-primary text-white m-5 drawer-button lg:hidden"><LuDoorOpen /></label>
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <Outlet />
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-[#F7EEDD] text-base-content">
      
      <li><Link to={'/'}>Back To Home</Link></li>
      <li><Link to={'/dashboard/my-post'}>My Posts</Link></li>
      <li><Link to={'/dashboard/upload-post'}>Upload A Post</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default DashboardLayout;