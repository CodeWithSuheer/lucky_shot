import React from 'react'
import { Trash2 } from 'lucide-react';


const userData = [
    {
        name: 'Umer Javaid',
        accountTitle: 'UMER JAVAID',
        payment: 'sadapay',
        accountNumber: '03324700802'
    },
    {
        name: 'Umer Javaid',
        accountTitle: 'UMER JAVAID',
        payment: 'sadapay',
        accountNumber: '03324700802'
    },
    {
        name: 'Umer Javaid',
        accountTitle: 'UMER JAVAID',
        payment: 'sadapay',
        accountNumber: '03324700802'
    },
]

const RemoveAccount = () => {

    return (
        <>
            {/* <!-- Table Section --> */}
            <div className="max-w-[85rem] px-1 py-10 sm:px-6 lg:px-2 lg:py-4 mx-auto">

                {/* <!-- Header --> */}
                <div className="mb-7 flex justify-between flex-wrap items-center text-white">
                    <h2 className='text-2xl xs:text-3xl sm:text-4xl font-semibold tracking-wide'>Remove Accounts</h2>
                </div>


                {/* <!-- Table Block --> */}
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="bg-white rounded-md shadow-sm overflow-hidden dark:bg-[#474747] dark:border-gray-700">
                                {/* <!-- Table --> */}
                                <table className="min-w-full divide-y divide-[#555555]">

                                    <thead className="bg-gray-50 dark:bg-[#676767]">
                                        <tr>
                                            <th scope="col" className="ps-6 lg:ps-3 xl:ps-6 pe-6 py-4 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm lg:text-md  font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        No
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm lg:text-md  font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Account Title
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm lg:text-md  font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Account Number
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm lg:text-md  font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Payment Method
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm lg:text-md  font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                                                        Remove
                                                    </span>
                                                </div>
                                            </th>


                                            <th scope="col" className="px-6 py-3 text-end"></th>
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-[#555555]">
                                        {userData.map((data, index) => (
                                            <tr>
                                                <td className="h-px w-px whitespace-nowrap">
                                                    <div className="ps-6 lg:ps-3 xl:ps-6 pe-6 py-4">
                                                        <div className="flex items-center gap-x-3">
                                                            <div className="grow">
                                                                <span className="flex items-center justify-center bg-[#B600D4] text-center h-6 w-6 rounded-full text-sm lg:text-md text-gray-200">{index + 1}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>

                                                <td className="h-px w-72 whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="block text-md lg:text-md tracking-wider font-semibold text-gray-800 dark:text-gray-200">{data.accountTitle}</span>
                                                    </div>
                                                </td>

                                                <td className="h-px w-72 whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="block text-md lg:text-md font-semibold text-gray-800 dark:text-gray-200">{data.accountNumber}</span>
                                                    </div>
                                                </td>

                                                <td className="h-px w-72 whitespace-nowrap">
                                                    <div className="px-6 py-3 flex gap-1 items-center">
                                                        <img className='h-4' src="https://www.software786.com/wp-content/uploads/2023/04/sadapay-logo-600x445.png" alt="" />
                                                        <span className="block text-md lg:text-md font-semibold text-gray-800 dark:text-gray-200">{data.payment}</span>
                                                    </div>
                                                </td>

                                                <td className="flex items-center justify-center py-3">
                                                    <div className="trash_button rounded-full bg-[#676767] text-[#ffffff] p-2 ms-2.5 transition hover:scale-110 cursor-pointer">
                                                        <Trash2 size={18} />
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
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
                {/* <!-- End Table Block --> */}
            </div>
        </>
    )
}

export default RemoveAccount