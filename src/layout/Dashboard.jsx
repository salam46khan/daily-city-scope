import { NavLink, Outlet } from "react-router-dom";
import { BiSolidDashboard } from "react-icons/bi";

const Dashboard = () => {
    return (
        <div className="container mx-auto">
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}

                    <div className="lg:hidden bg-base-300 w-full px-3 py-2 flex items-center">
                        <label htmlFor="my-drawer-2" className="btn  drawer-button lg:hidden text-3xl"><BiSolidDashboard /></label>

                        <p className="font-logoTitle text-3xl ml-3">Daily City Scope</p>
                    </div>

                    <div className="p-3">
                        <Outlet></Outlet>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    
                    <div className="bg-base-300 min-h-full">
                        <h3 className="text-2xl font-logoTitle p-3">Daily City Scope</h3>
                    <ul className="menu p-4 w-80 min-h-full  text-base-content">
                        {/* Sidebar content here */}
                        <li><NavLink to={'/dashboard/home'}>Cart</NavLink></li>
                        <li><NavLink to={'/dashboard/dash_all_user'}>All User</NavLink></li>
                        <div className="divider">OR</div>
                        <li><NavLink to={'/'}>Home</NavLink></li>

                    </ul>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;