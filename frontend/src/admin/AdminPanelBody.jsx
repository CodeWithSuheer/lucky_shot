import { Link, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
const AdminPanelBody = () => {
    const location = useLocation();
    const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };
 console.log('sidebar',isSidebarOpen)
    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };
    
    
    return (
        <>
            <div className={`bg-black `}>
                {/* <----------------- Sidebar Toggle -----------------> */}
                <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-900 dark:border-gray-700">
                    <div className="flex items-center py-4">
                        {/* <!-- Navigation Toggle --> */}
                        <button type="button" class="text-gray-500 hover:text-gray-600" aria-label="Toggle navigation" onClick={toggleSidebar}>
        <span class="sr-only">Toggle Navigation</span>
        <svg class="w-5 h-5" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </button>

                      
                    </div>
                </div>

                <div  className={`  transition-all duration-300 transform fixed top-20 start-0 bottom-0 z-60 w-64 bg-white border-e border-[#B600D4] pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 ${isSidebarOpen ? 'block' : 'hidden'} [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-black`}>

                    <nav className=" py-0 px-0 w-full flex flex-col flex-wrap" >
                        <ul className="space-y-1.5">
                            <li><Link onClick={toggleSidebar} to="/admin/" className={`${location.pathname === "/admin/" ? "active-link" : ""} w-full flex items-center gap-x-3.5 py-2.5 pl-6 mb-2 text-xl tracking-wide font-normal text-[#eee] hover:bg-gray-100 dark:hover:bg-[#474747] dark:text-[#eee] dark:hover:text-[#eee] cursor-pointer"`}>
                                Dashboard
                            </Link></li>
                            <li><Link onClick={toggleSidebar} to="/admin/users" className={`${location.pathname === "/admin/users" ? "active-link" : ""} w-full flex items-center gap-x-3.5 py-2.5 pl-6 mb-2 text-xl tracking-wide  font-normal text-[#eee] hover:bg-gray-100 dark:hover:bg-[#474747] dark:text-[#eee] dark:hover:text-[#eee] cursor-pointer"`}>
                                Users
                            </Link></li>
                            <li><Link onClick={toggleSidebar} to="/admin/bettables" className={`${location.pathname === "/admin/bettables" ? "active-link" : ""} w-full flex items-center gap-x-3.5 py-2.5 pl-6 mb-2 text-xl tracking-wide  font-normal text-[#eee] hover:bg-gray-100 dark:hover:bg-[#474747] dark:text-[#eee] dark:hover:text-[#eee] cursor-pointer"`}>
                                Bet Table
                            </Link></li>
                            <li><Link onClick={toggleSidebar} to="/admin/winners" className={`${location.pathname === "/admin/winners" ? "active-link" : ""} w-full flex items-center gap-x-3.5 py-2.5 pl-6 mb-2 text-xl tracking-wide  font-normal text-[#eee] hover:bg-gray-100 dark:hover:bg-[#474747] dark:text-[#eee] dark:hover:text-[#eee] cursor-pointer"`}>
                                Winners
                            </Link></li>
                            <li><Link onClick={toggleSidebar} to="/admin/amountdetails" className={`${location.pathname === "/admin/amountdetails" ? "active-link" : ""} w-full flex items-center gap-x-3.5 py-2.5 pl-6 mb-2 text-xl tracking-wide  font-normal text-[#eee] hover:bg-gray-100 dark:hover:bg-[#474747] dark:text-[#eee] dark:hover:text-[#eee] cursor-pointer"`}>
                                Amount Details
                            </Link></li>
                            <li >
                                <button type="button" className="w-full flex items-center gap-10 py-2.5 pl-6 mb-2 text-xl tracking-wide  font-normal text-[#eee] hover:bg-gray-100 dark:hover:bg-[#474747] dark:text-[#eee] dark:hover:text-[#eee] cursor-pointer" onClick={toggleSubMenu} >
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
                                        <li><Link onClick={toggleSidebar} to="/admin/addaccounts" className={`${location.pathname === "/admin/addaccounts" ? "active-link" : ""} w-full flex items-center gap-x-3.5 py-2.5 pl-6 mb-2 text-xl tracking-wide  font-normal text-[#eee] hover:bg-gray-100 dark:hover:bg-[#474747] dark:text-[#eee] dark:hover:text-[#eee] cursor-pointer"`}>
                                            Add Account
                                        </Link></li>
                                        <li><Link onClick={toggleSidebar} to="/admin/removeaccounts" className={`${location.pathname === "/admin/removeaccounts" ? "active-link" : ""} w-full flex items-center gap-x-3.5 py-2.5 pl-6 mb-2 text-xl tracking-wide  font-normal text-[#eee] hover:bg-gray-100 dark:hover:bg-[#474747] dark:text-[#eee] dark:hover:text-[#eee] cursor-pointer"`}>
                                            Remove Account
                                        </Link></li>
                                        <li><Link onClick={toggleSidebar} to="/admin/backupaccounts" className={`${location.pathname === "/admin/backupaccounts" ? "active-link" : ""} w-full flex items-center gap-x-3.5 py-2.5 pl-6 mb-2 text-xl tracking-wide  font-normal text-[#eee] hover:bg-gray-100 dark:hover:bg-[#474747] dark:text-[#eee] dark:hover:text-[#eee] cursor-pointer"`}>
                                            Backup Account
                                        </Link></li>
                                    </ul>
                                </div>
                            </li>
                            <li><Link onClick={toggleSidebar} to="/admin/WithDraw" className={`${location.pathname === "/admin/WithDraw" ? "active-link" : ""} w-full flex items-center gap-x-3.5 py-2.5 pl-6 mb-2 text-xl tracking-wide  font-normal text-[#eee] hover:bg-gray-100 dark:hover:bg-[#474747] dark:text-[#eee] dark:hover:text-[#eee] cursor-pointer"`}>
                                Add Withdrawal
                            </Link></li>

                        </ul>
                    </nav>
                </div>

                {/* <----------------- Content -----------------> */}
                <div className="w-full pt-10 px-4 border-t border-[#B600D4] sm:px-6 md:px-8 lg:ps-72">
                    <Outlet />
                    {/* <!-- Page Heading --> */}
                    {/* <header>
                        <p className="mb-2 text-sm font-semibold text-blue-600">Starter Pages & Examples</p>
                        <h1 className="block text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white">Application Layout: Sidebar using Tailwind CSS</h1>
                        <p className="mt-2 text-lg text-gray-800 dark:text-gray-400">This is a simple application layout with sidebar and header examples using Tailwind CSS.</p>
                        <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                            <a className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html" target="_blank">
                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                                </svg>
                                Get the source code
                            </a>
                            <a className="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="../examples.html">
                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                Back to examples
                            </a>
                        </div>
                    </header> */}
                </div>
            </div>
        </>
    )
}

export default AdminPanelBody
