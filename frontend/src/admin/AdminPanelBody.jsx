import { Link, Outlet, useLocation } from "react-router-dom";

const AdminPanelBody = () => {
    const location = useLocation();

    const handleLog = () => {
        console.log('hello');
    }

    return (
        <>
            <div className="bg-black">
                {/* <----------------- Sidebar Toggle -----------------> */}
                <div className="sticky top-0 inset-x-0 z-20 bg-white border-y px-4 sm:px-6 md:px-8 lg:hidden dark:bg-gray-900 dark:border-gray-700">
                    <div className="flex items-center py-4">
                        {/* <!-- Navigation Toggle --> */}
                        <button type="button" onClick={handleLog} className="text-gray-500 hover:text-gray-600" data-hs-overlay="#docs-sidebar" aria-controls="docs-sidebar" aria-label="Toggle navigation">
                            <span className="sr-only">Toggle Navigation</span>
                            <svg className="flex-shrink-0 w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                        </button>

                        {/* <!-- Breadcrumb --> */}
                        {/* <ol className="ms-3 flex items-center whitespace-nowrap" aria-label="Breadcrumb">
                            <li className="flex items-center text-sm text-gray-800 dark:text-gray-400">
                                Application Layout
                                <svg className="flex-shrink-0 mx-3 overflow-visible h-2.5 w-2.5 text-gray-400 dark:text-gray-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5 1L10.6869 7.16086C10.8637 7.35239 10.8637 7.64761 10.6869 7.83914L5 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                            </li>
                            <li className="text-sm font-semibold text-gray-800 truncate dark:text-gray-400" aria-current="page">
                                Dashboard
                            </li>
                        </ol> */}
                        {/* <!-- End Breadcrumb --> */}
                    </div>
                </div>

                <div id="application-sidebar" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-20 start-0 bottom-0 z-[60] w-64 bg-white border-e border-[#B600D4] pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-black">
                    {/* <div className="px-6"><a className="flex-none text-xl font-semibold dark:text-white" href="#" aria-label="Brand">Brand</a></div> */}

                    <nav className="hs-accordion-group py-6 px-2 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
                        <ul className="space-y-1.5">
                            <li><Link to="/admin/" className={`w-full flex items-center gap-x-3.5 py-2 px-2.5 text-xl font-normal text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-200 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"`}>
                                Dashboard
                            </Link></li>
                            <li><Link to="/admin/users" className={`w-full flex items-center gap-x-3.5 py-2 px-2.5 text-xl font-normal text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-200 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"`}>
                                Users
                            </Link></li>
                            <li><Link to="/admin/bettables" className={`w-full flex items-center gap-x-3.5 py-2 px-2.5 text-xl font-normal text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-200 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"`}>
                                Bet Table
                            </Link></li>
                            <li><Link to="/admin/winners" className={`w-full flex items-center gap-x-3.5 py-2 px-2.5 text-xl font-normal text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-200 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"`}>
                                Winners
                            </Link></li>
                            <li><Link to="/admin/amountdetails" className={`w-full flex items-center gap-x-3.5 py-2 px-2.5 text-xl font-normal text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-200 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"`}>
                                Amount Details
                            </Link></li>
                            <li><Link to="/admin/WithDraw" className={`w-full flex items-center gap-x-3.5 py-2 px-2.5 text-xl font-normal text-slate-700 rounded-md hover:bg-gray-100 dark:hover:bg-gray-900 dark:text-slate-200 dark:hover:text-slate-300 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"`}>
                                WithDraw
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
