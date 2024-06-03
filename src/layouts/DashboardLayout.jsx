import { Link, Outlet } from "react-router-dom";


const DashboardLayout = () => {
    return (
        <div className="drawer lg:drawer-open">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <Outlet />
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-[#F7EEDD] text-base-content">
      
      <li><Link to={'/'}>Back To Home</Link></li>
      <li><a>My Posts</a></li>
      <li><Link to={'/dashboard/upload-post'}>Upload A Post</Link></li>
    </ul>
  
  </div>
</div>
    );
};

export default DashboardLayout;