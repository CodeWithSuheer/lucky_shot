import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { LogOut } from "lucide-react";
import { useDispatch } from 'react-redux';
import { Logout } from '../Features/AuthSlice';
import { useNavigate } from 'react-router-dom';
import { AlignLeft } from 'lucide-react';


const AdminPanelBody = () => {
    const location = useLocation();
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const LogoutAdmin = () => {
        dispatch(Logout())
            .then((response) => {
                if (response.payload && response.payload.msg) {
                    navigate('/')
                }
            })
            .catch((error) => {
                console.error('Error occurred:', error);
            });
    }
    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };
    console.log('sidebar', isSidebarOpen)
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };


    return (
        <>
            <div className={`bg-black `}>
                {/* <----------------- Sidebar Toggle -----------------> */}
                <div className="sticky top-0 inset-x-0 z-20 border-y px-4 h-16 sm:px-6 md:px-8 lg:hidden bg-gray-900 border-gray-700">
                    <div className="flex justify-between items-center py-4">
                        {/* <!-- Navigation Toggle --> */}

                        <button type="button" class="text-gray-100" aria-label="Toggle navigation" onClick={toggleSidebar}>
                            <AlignLeft />
                        </button>
                        <button onClick={LogoutAdmin} className='mr-3 sm:mr-10 p-1 rounded-lg bg-transparent sm:bg-[#474747]'><LogOut /></button>
                    </div>
                </div>


                <div className={`transition-all duration-300 transform fixed top-16 sm:top-24 start-0 bottom-0 z-50 w-64 border-e border-[#B600D4] pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 ${isSidebarOpen ? 'block' : 'hidden'} [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-700 [&::-webkit-scrollbar-thumb]:bg-slate-500 bg-black`}>

                    <nav className=" py-0 px-0 w-full flex flex-col flex-wrap" >
                        <ul className="space-y-1.5">
                            <li>
                                <Link
                                    onClick={toggleSidebar}
                                    to="/admin"
                                    className={`${location.pathname === "/admin" || location.pathname === "/admin/"
                                        ? "active-link"
                                        : ""
                                        } w-full flex items-center gap-x-3.5 py-2.5 pl-6 mb-2 text-lg tracking-wide font-normal hover:bg-[#474747] text-[#eee] hover:text-[#eee] cursor-pointer`}
                                >
                                    Dashboard
                                </Link>
                            </li>
                            <li><Link onClick={toggleSidebar} to="/admin/users" className={`${location.pathname === "/admin/users" ? "active-link" : ""} w-full flex items-center gap-x-3.5 py-2.5 pl-6 mb-2 text-lg tracking-wide font-normal hover:bg-[#474747] text-[#eee] hover:text-[#eee] cursor-pointer"`}>
                                Users
                            </Link></li>
                            <li><Link onClick={toggleSidebar} to="/admin/bettables" className={`${location.pathname === "/admin/bettables" ? "active-link" : ""} w-full flex items-center gap-x-3.5 py-2.5 pl-6 mb-2 text-lg tracking-wide font-normal hover:bg-[#474747] text-[#eee] hover:text-[#eee] cursor-pointer"`}>
                                Bet Table
                            </Link></li>
                            <li><Link onClick={toggleSidebar} to="/admin/winners" className={`${location.pathname === "/admin/winners" ? "active-link" : ""} w-full flex items-center gap-x-3.5 py-2.5 pl-6 mb-2 text-lg tracking-wide font-normal hover:bg-[#474747] text-[#eee] hover:text-[#eee] cursor-pointer"`}>
                                Winners
                            </Link></li>
                            <li><Link onClick={toggleSidebar} to="/admin/amountdetails" className={`${location.pathname === "/admin/amountdetails" ? "active-link" : ""} w-full flex items-center gap-x-3.5 py-2.5 pl-6 mb-2 text-lg tracking-wide font-normal hover:bg-[#474747] text-[#eee] hover:text-[#eee] cursor-pointer"`}>
                                Amount Details
                            </Link></li>
                            <li >
                                <button type="button" className="w-full flex items-center gap-10 py-2.5 pl-6 mb-2 text-lg tracking-wide font-normal hover:bg-[#474747] text-[#eee] hover:text-[#eee] cursor-pointer" onClick={toggleSubMenu} >

                                    Edit Account
                                    {
                                        isSubMenuOpen ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-up"><path d="m18 15-6-6-6 6" /></svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6" /></svg>
                                        )}
                                </button>

                                <div id="account-accordion" className={`hs-accordion-content w-full overflow-hidden transition-[height] ${isSubMenuOpen ? 'block' : 'hidden'}`}>
                                    <ul className="pt-2 ps-5">

                                        <li><Link onClick={toggleSidebar} to="/admin/addaccounts" className={`${location.pathname === "/admin/addaccounts" ? "active-link" : ""} w-full flex items-center gap-x-3.5 py-2.5 pl-6 mb-2 text-lg tracking-wide font-normal hover:bg-[#474747] text-[#eee] hover:text-[#eee] cursor-pointer"`}>
                                            Add Account
                                        </Link></li>
                                        <li><Link onClick={toggleSidebar} to="/admin/removeaccounts" className={`${location.pathname === "/admin/removeaccounts" ? "active-link" : ""} w-full flex items-center gap-x-3.5 py-2.5 pl-6 mb-2 text-lg tracking-wide font-normal hover:bg-[#474747] text-[#eee] hover:text-[#eee] cursor-pointer"`}>
                                            Remove Account
                                        </Link></li>
                                        <li><Link onClick={toggleSidebar} to="/admin/backupaccounts" className={`${location.pathname === "/admin/backupaccounts" ? "active-link" : ""} w-full flex items-center gap-x-3.5 py-2.5 pl-6 mb-2 text-lg tracking-wide font-normal hover:bg-[#474747] text-[#eee] hover:text-[#eee] cursor-pointer"`}>

                                            Backup Account
                                        </Link></li>
                                    </ul>
                                </div>
                            </li>

                            <li><Link onClick={toggleSidebar} to="/admin/WithDraw" className={`${location.pathname === "/admin/WithDraw" ? "active-link" : ""} w-full flex items-center gap-x-3.5 py-2.5 pl-6 mb-2 text-lg tracking-wide font-normal hover:bg-[#474747] text-[#eee] hover:text-[#eee] cursor-pointer"`}>
                                Add Withdrawal
                            </Link></li>

                        </ul>
                    </nav>
                </div>

                {/* <----------------- Content -----------------> */}
                <div className="w-full pt-10 px-4 border-t border-[#B600D4] sm:px-6 md:px-8 lg:ps-72">
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default AdminPanelBody
