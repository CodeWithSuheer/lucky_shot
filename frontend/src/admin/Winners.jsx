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
                            <div className="rounded-md shadow-sm overflow-hidden bg-[#474747] border-gray-700">
                                {/* <!-- Table --> */}
                                <table className="min-w-full divide-y divide-gray-700">
                                    <thead className="bg-[#676767]">
                                        <tr>
                                            <th scope="col" className="px-6 lg:ps-3 xl:ps-6 pe-6 py-4 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm lg:text-md font-semibold tracking-wide text-gray-200 uppercase">
                                                        No
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm lg:text-md font-semibold tracking-wide text-gray-200 uppercase">
                                                        Name
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm lg:text-md font-semibold tracking-wide text-gray-200 uppercase">
                                                        Bet No
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm lg:text-md font-semibold tracking-wide text-gray-200 uppercase">
                                                        Bet Amount
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm font-semibold tracking-wide text-gray-200 uppercase">
                                                        Account Title
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm lg:text-md font-semibold tracking-wide text-gray-200 uppercase">
                                                        Account Number
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-center">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm lg:text-md font-semibold tracking-wide text-gray-200 uppercase">
                                                        Phone Number
                                                    </span>
                                                </div>
                                            </th>
                                        </tr>

                                    </thead>


                                    <tbody className="divide-y divide-gray-700">

                                        {filteredData.map((rowData) => (
                                            <tr key={rowData.id}>

                                                <td className="h-px w-px whitespace-nowrap">
                                                    <div className="ps-6 lg:ps-3 xl:ps-6 pe-6 py-4">
                                                        <div className="flex items-center gap-x-3">
                                                            <div className="grow">
                                                                <span className="flex items-center justify-center bg-[#d1ae57] text-center h-6 w-6 rounded-full text-sm lg:text-md text-gray-200">{rowData?.id}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="h-px w-px whitespace-nowrap">
                                                    <div className="ps-6 lg:ps-3 xl:ps-0 xl:pe-14 pe-6 py-3">
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
                                                                <button key={index} className="border-2 border-[#B600D4] bg-transparent h-9 w-9 rounded-lg text-lg font-semibold text-gray-200 cursor-text">{bet}</button>
                                                            ))}
                                                        </div>
                                                    </div>

                                                </td>
                                                <td className="h-px w-72 whitespace-nowrap">
                                                    <div className="px-6 py-3 flex gap-1 items-center">
                                                        <span className="block text-sm font-semibold text-gray-200">{rowData?.betAmount}</span>
                                                    </div>
                                                </td>
                                                <td className="h-px w-72 whitespace-nowrap">
                                                    <div className="px-6 py-3 flex gap-1 items-center">
                                                        <span className="block text-sm font-semibold text-gray-200">{rowData?.accountTitle}</span>
                                                    </div>
                                                </td>
                                                <td className="h-px w-72 whitespace-nowrap">
                                                    <div className="px-6 py-3 flex gap-1 items-center">
                                                        <span className="block text-sm font-semibold text-gray-200">{rowData?.accountNumber}</span>
                                                    </div>
                                                </td>
                                                <td className="h-px w-72 whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="block text-sm font-semibold text-gray-200">{rowData?.phoneNumber}</span>
                                                    </div>
                                                </td>
                                            </tr>

                                        ))}

                                    </tbody>
                                </table>
                                {/* <!-- End Table --> */}

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
