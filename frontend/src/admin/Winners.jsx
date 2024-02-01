import React from 'react'
import { useState } from 'react';
const Winners = () => {
    const [activeFilter, setActiveFilter] = useState('100 PKR');
  
    const tableData = [
        {
            id: 1,
            name: 'John Doe',
            betNo: [1, 2, 3],
            betAmount: '100 PKR',
            phoneNumber: '0332 4700802',
            accountTitle: 'John Doe',
            accountNumber: '0345 1234567', // Example account number
            paymentMethod: 'EasyPaisa' // Added payment method
        },
        {
            id: 2,
            name: 'Alice Smith',
            betNo: [1, 2, 3],
            betAmount: '200 PKR',
            phoneNumber: '0332 4700802',
            accountTitle: 'Alice Smith',
            accountNumber: '0321 7654321', // Example account number
            paymentMethod: 'JazzCash' // Added payment method
        },
        {
            id: 3,
            name: 'Bob Johnson',
            betNo: [1, 2, 3],
            betAmount: '100 PKR',
            phoneNumber: '0332 4700802',
            accountTitle: 'Bob Johnson',
            accountNumber: '0300 9876543', // Example account number
            paymentMethod: 'Sadapay' // Added payment method
        },
        {
            id: 4,
            name: 'Emma Brown',
            betNo: [1, 2, 3],
            betAmount: '500 PKR',
            phoneNumber: '0336 4700802',
            accountTitle: 'Emma Brown',
            accountNumber: '0312 4567890', // Example account number
            paymentMethod: 'EasyPaisa' // Added payment method
        },
        {
            id: 5,
            name: 'Michael Johnson',
            betNo: [1, 2, 3],
            betAmount: '100 PKR',
            phoneNumber: '0332 4700802',
            accountTitle: 'Michael Johnson',
            accountNumber: '0344 6543210', // Example account number
            paymentMethod: 'JazzCash' // Added payment method
        },
        {
            id: 6,
            name: 'Sarah Williams',
            betNo: [1, 2, 3],
            betAmount: '100 PKR',
            phoneNumber: '0332 4700802',
            accountTitle: 'Sarah Williams',
            accountNumber: '0320 9876543', // Example account number
            paymentMethod: 'Sadapay' // Added payment method
        }
    ];
    
    const filteredData = tableData.filter(row => {
        const matchFilter = row.betAmount === activeFilter;
     return matchFilter
    });

    return (
        <>
        {/* <!-- Table Section --> */}
        <div className="max-w-[85rem] px-1 py-10 sm:px-6 lg:px-2 lg:py-4 mx-auto">

            {/* <!-- Header --> */}
            <div className=" text-white">
                <h2 className='text-4xl font-semibold tracking-wide'>Winners</h2>

             


</div>

         

            {/* <!-- Tabs --> */}
            <div className="my-5 flex justify-center sm:justify-start flex-wrap gap-2.5 lg:gap-4 items-center text-white">
            <button
                onClick={() => setActiveFilter('100 PKR')} // Set active filter and change state
                className={`px-3 sm:px-6 lg:px-8 py-2 text-sm sm:text-sm lg:text-md font-medium border rounded-md ${activeFilter === '100 PKR' ? 'bg-[#B600D4] border-[#B600D4]' : 'border-[#B600D4] text-white hover:bg-[#B600D4] hover:text-white'}`}
            >
                100 PKR
            </button>
            <button
                onClick={() => setActiveFilter('200 PKR')}
                className={`px-3 sm:px-6 lg:px-8 py-2 text-sm sm:text-sm lg:text-md font-medium border rounded-md ${activeFilter === '200 PKR' ? 'bg-[#B600D4] border-[#B600D4]' : 'border-[#B600D4] text-white hover:bg-[#B600D4] hover:text-white'}`}
            >
                200 PKR
            </button>
            <button
                onClick={() => setActiveFilter('500 PKR')}
                className={`px-3 sm:px-6 lg:px-8 py-2 text-sm sm:text-sm lg:text-md font-medium border rounded-md ${activeFilter === '500 PKR' ? 'bg-[#B600D4] border-[#B600D4]' : 'border-[#B600D4] text-white hover:bg-[#B600D4] hover:text-white'}`}
            >
                500 PKR
            </button>
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
    <th scope="col" className="px-6 lg:ps-3 xl:ps-6 pe-6 py-4 text-start">
        <div className="flex items-center gap-x-2">
            <span className="text-sm font-semibold tracking-wide text-gray-800 dark:text-gray-200">
                No
            </span>
        </div>
    </th>
    <th scope="col" className="px-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start">
        <div className="flex items-center gap-x-2">
            <span className="text-sm font-semibold tracking-wide text-gray-800 dark:text-gray-200">
                Name
            </span>
        </div>
    </th>

    <th scope="col" className="px-6 py-3 text-start">
        <div className="flex items-center gap-x-2">
            <span className="text-sm font-semibold tracking-wide text-gray-800 dark:text-gray-200">
                Bet No
            </span>
        </div>
    </th>

    <th scope="col" className="px-6 py-3 text-start">
        <div className="flex items-center gap-x-2">
            <span className="text-sm font-semibold tracking-wide text-gray-800 dark:text-gray-200">
                Bet Amount
            </span>
        </div>
    </th>
    <th scope="col" className="px-6 py-3 text-start">
        <div className="flex items-center gap-x-2">
            <span className="text-sm font-semibold tracking-wide text-gray-800 dark:text-gray-200">
               Account Title
            </span>
        </div>
    </th>

    <th scope="col" className="px-6 py-3 text-start">
        <div className="flex items-center gap-x-2">
            <span className="text-sm font-semibold tracking-wide text-gray-800 dark:text-gray-200">
               Account Number
            </span>
        </div>
    </th>

    <th scope="col" className="px-6 py-3 text-center">
        <div className="flex items-center gap-x-2">
            <span className="text-sm font-semibold tracking-wide text-gray-800 dark:text-gray-200">
                Phone Number
            </span>
        </div>
    </th>
</tr>

                                </thead>

                                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">

                                {filteredData.map((rowData) => (
                                    <tr key={rowData.id}>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="ps-6 lg:ps-3 xl:ps-6 pe-6 py-4">
                                                <div className="flex items-center gap-x-3">
                                                    <div className="grow bg-[#B600D4] rounded-full ">
                                                        <span className="block text-sm text-gray-200 text-center px-1">{rowData?.id}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="h-px w-px whitespace-nowrap">
                                            <div className="ps-6 lg:ps-3 xl:ps-0 xl:pe-24 pe-6 py-3">
                                                <div className="flex items-center gap-x-3">
                                                    <div className="grow">
                                                        <span className="block text-sm text-gray-200">{rowData?.name}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="h-px w-72 whitespace-nowrap">
                                        <div className=" py-3">
<div className="flex item-center gap-2">
{rowData.betNo.map((bet, index) => (
                            <button key={index} className="border border-[#B600D4] bg-transparent px-2 py-1 rounded-md text-sm font-semibold text-[#B600D4] dark:text-gray-200">{bet}</button>
                        ))}
</div>
</div>

                                        </td>
                                        <td className="h-px w-72 whitespace-nowrap">
                                            <div className="px-6 py-3 flex gap-1 items-center">
                                                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">{rowData?.betAmount}</span>
                                            </div>
                                        </td>
                                        <td className="h-px w-72 whitespace-nowrap">
                                            <div className="px-6 py-3 flex gap-1 items-center">
                                                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">{rowData?.accountTitle}</span>
                                            </div>
                                        </td>
                                        <td className="h-px w-72 whitespace-nowrap">
                                            <div className="px-6 py-3 flex gap-1 items-center">
                                                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">{rowData?.accountNumber}</span>
                                            </div>
                                        </td>
                                        <td className="h-px w-72 whitespace-nowrap">
                                            <div className="px-6 py-3">
                                                <span className="block text-sm font-semibold text-gray-800 dark:text-gray-200">{rowData?.phoneNumber}</span>
                                            </div>
                                        </td>
                                    </tr>
                                 
                               ) )}

                                </tbody>
                            </table>
                            {/* <!-- End Table --> */}

                            {/* <!-- Footer --> */}
                            <div className="px-6 py-4 grid gap-3 md:flex md:justify-between dark:bg-black md:items-center border-t border-gray-200 dark:border-gray-700">
                                <div>
                                    <p className="text-sm text-gray-600 dark:text-gray-400">
                                    <span className="font-semibold text-gray-800 dark:text-gray-200">{filteredData.length}</span> results
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

export default Winners
