import React from 'react'
import { CalendarDays } from 'lucide-react';


const Users = () => {
    return (
        <>
            {/* <!-- Table Section --> */}
            <div className="max-w-[85rem] px-1 py-10 sm:px-6 lg:px-2 lg:py-4 mx-auto">

                {/* <!-- Header --> */}
                <div className="flex justify-between flex-wrap items-center text-white">
                    <h2 className='text-4xl font-semibold tracking-wide'>Users</h2>

                    <button className='bg-gray-600 text-gray-200 px-3 py-2.5 rounded-md flex items-center gap-6'>
                        <span className="text-xs md:text-sm">Mon 04-Feb-24</span>
                        <span><CalendarDays size={20} /></span>
                    </button>
                </div>

                {/* <!-- Tabs --> */}
                <div className="my-5 flex justify-center sm:justify-start flex-wrap gap-2.5 lg:gap-4 items-center text-white">
                    <button className='px-3 sm:px-6 lg:px-8 py-2 text-sm sm:text-sm lg:text-md font-medium bg-[#B600D4] border rounded-md border-[#B600D4]'>100 PKR</button>
                    <button className='px-3 sm:px-6 lg:px-8 py-2 text-sm sm:text-sm lg:text-md font-medium border rounded-md border-[#B600D4]'>200 PKR</button>
                    <button className='px-3 sm:px-6 lg:px-8 py-2 text-sm sm:text-sm lg:text-md font-medium border rounded-md border-[#B600D4]'>500 PKR</button>
                </div>


                {/* <!-- Card --> */}
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="bg-white rounded-md shadow-sm overflow-hidden dark:bg-[#474747] dark:border-gray-700">
                                {/* <!-- Table --> */}
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                    <thead className="bg-gray-50 dark:bg-[#676767]">
                                        <tr>
                                            <th scope="col" className="ps-6 lg:ps-3 xl:ps-6 pe-6 py-4 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        No
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Name
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Account Title
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Payment Method
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Account Number
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-end"></th>
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                        <tr>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="ps-6 lg:ps-3 xl:ps-6 pe-6 py-4">
                                                    <div className="flex items-center gap-x-3">
                                                        <div className="grow">
                                                            <span className="block text-sm text-gray-200">01</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="ps-6 lg:ps-3 xl:ps-0 xl:pe-24 pe-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <div className="grow">
                                                            <span className="block text-sm text-gray-200">Umer Javaid</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">UMER JAVAID</span>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3 flex gap-1 items-center">
                                                    <img className='h-4' src="https://www.software786.com/wp-content/uploads/2023/04/sadapay-logo-600x445.png" alt="" />
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">Sadapay</span>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">0332 4700802</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="ps-6 lg:ps-3 xl:ps-6 pe-6 py-4">
                                                    <div className="flex items-center gap-x-3">
                                                        <div className="grow">
                                                            <span className="block text-sm text-gray-200">01</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="ps-6 lg:ps-3 xl:ps-0 xl:pe-24 pe-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <div className="grow">
                                                            <span className="block text-sm text-gray-200">Umer Javaid</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">UMER JAVAID</span>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3 flex gap-1 items-center">
                                                    <img className='h-4' src="https://www.software786.com/wp-content/uploads/2023/04/sadapay-logo-600x445.png" alt="" />
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">Sadapay</span>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">0332 4700802</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="ps-6 lg:ps-3 xl:ps-6 pe-6 py-4">
                                                    <div className="flex items-center gap-x-3">
                                                        <div className="grow">
                                                            <span className="block text-sm text-gray-200">01</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="ps-6 lg:ps-3 xl:ps-0 xl:pe-24 pe-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <div className="grow">
                                                            <span className="block text-sm text-gray-200">Umer Javaid</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">UMER JAVAID</span>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3 flex gap-1 items-center">
                                                    <img className='h-4' src="https://www.software786.com/wp-content/uploads/2023/04/sadapay-logo-600x445.png" alt="" />
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">Sadapay</span>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">0332 4700802</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="ps-6 lg:ps-3 xl:ps-6 pe-6 py-4">
                                                    <div className="flex items-center gap-x-3">
                                                        <div className="grow">
                                                            <span className="block text-sm text-gray-200">01</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="ps-6 lg:ps-3 xl:ps-0 xl:pe-24 pe-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <div className="grow">
                                                            <span className="block text-sm text-gray-200">Umer Javaid</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">UMER JAVAID</span>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3 flex gap-1 items-center">
                                                    <img className='h-4' src="https://www.software786.com/wp-content/uploads/2023/04/sadapay-logo-600x445.png" alt="" />
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">Sadapay</span>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">0332 4700802</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="ps-6 lg:ps-3 xl:ps-6 pe-6 py-4">
                                                    <div className="flex items-center gap-x-3">
                                                        <div className="grow">
                                                            <span className="block text-sm text-gray-200">01</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="ps-6 lg:ps-3 xl:ps-0 xl:pe-24 pe-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <div className="grow">
                                                            <span className="block text-sm text-gray-200">Umer Javaid</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">UMER JAVAID</span>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3 flex gap-1 items-center">
                                                    <img className='h-4' src="https://www.software786.com/wp-content/uploads/2023/04/sadapay-logo-600x445.png" alt="" />
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">Sadapay</span>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">0332 4700802</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="ps-6 lg:ps-3 xl:ps-6 pe-6 py-4">
                                                    <div className="flex items-center gap-x-3">
                                                        <div className="grow">
                                                            <span className="block text-sm text-gray-200">01</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-px whitespace-nowrap">
                                                <div className="ps-6 lg:ps-3 xl:ps-0 xl:pe-24 pe-6 py-3">
                                                    <div className="flex items-center gap-x-3">
                                                        <div className="grow">
                                                            <span className="block text-sm text-gray-200">Umer Javaid</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">UMER JAVAID</span>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3 flex gap-1 items-center">
                                                    <img className='h-4' src="https://www.software786.com/wp-content/uploads/2023/04/sadapay-logo-600x445.png" alt="" />
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">Sadapay</span>
                                                </div>
                                            </td>
                                            <td className="h-px w-72 whitespace-nowrap">
                                                <div className="px-6 py-3">
                                                    <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">0332 4700802</span>
                                                </div>
                                            </td>
                                        </tr>
                                        

                                    </tbody>
                                </table>
                                {/* <!-- End Table --> */}

                                {/* <!-- Footer --> */}
                                <div className="px-6 py-4 grid gap-3 md:flex md:justify-between dark:bg-black md:items-center border-t border-gray-200 dark:border-gray-700">
                                    <div>
                                        <p className="text-sm text-gray-600 dark:text-gray-400">
                                            <span className="font-semibold text-gray-800 dark:text-gray-200">6</span> results
                                        </p>
                                    </div>

                                    <div>
                                        <div className="inline-flex gap-x-2">
                                            <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                                                Prev
                                            </button>

                                            <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                                                Next
                                                <svg className="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Footer --> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- End Card --> */}
            </div>
        </>
    )
}

export default Users
