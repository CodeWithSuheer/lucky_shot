import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetBets } from '../Features/BetSlice';
import { useEffect } from 'react';
const BetTable = () => {
    const [activeFilter, setActiveFilter] = useState(100);
    const [searchText, setSearchText] = useState('');
    const dispatch = useDispatch();
    const data = useSelector(state => state.Bet.data);
    const loading = useSelector(state => state.Bet.loading);
    useEffect(() => {
        dispatch(GetBets());
    }, [dispatch]);
 
    const filteredData = data?.filter(row => {
        // Check if betAmount matches the activeFilter
        const matchAmount = row.betAmount === activeFilter;
        // Check if mobileNumber contains the searchText (case insensitive)
        const matchSearch = row.mobileNumber.toLowerCase().includes(searchText.toLowerCase());
        // Return true if both conditions are met
        return matchAmount && matchSearch;
    });
    

    // Event handler for search input
    const handleSearch = (event) => {
        setSearchText(event.target.value);
    };

    return (
        <>
            {/* <!-- Table Section --> */}
            <div className="max-w-[85rem] px-1 py-10 sm:px-6 lg:px-2 lg:py-4 mx-auto">

                {/* <!-- Header --> */}
                <div className="flex justify-between flex-wrap items-center text-white">
                    <h2 className='text-4xl font-semibold tracking-wide'>Bet Table</h2>


                    {/* <!-- search bar --> */}
                    <div className="search_bar mr-10">
                        <div className="relative mt-4 md:mt-0">
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg
                                    className="w-5 h-5 text-[#B600D4]"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    ></path>
                                </svg>
                            </span>

                            <input
                                type="text"
                                className="md:w-64 lg:w-72 py-2 pl-10 pr-4 text-gray-700 bg-transparent border border-[#D9D9D9] rounded-lg focus:border-[#D9D9D9] focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-[#D9D9D9] placeholder:text-sm"
                                placeholder="Search by Phone Number"
                                value={searchText}
                                onChange={handleSearch}
                            />
                        </div>
                    </div>
                </div>



                {/* <!-- Tabs --> */}
                <div className="my-5 flex justify-center sm:justify-start flex-wrap gap-2.5 lg:gap-4 items-center text-white">
                    <button
                        onClick={() => setActiveFilter(100)} // Set active filter and change state
                        className={`px-3 sm:px-6 lg:px-8 py-2 text-sm sm:text-sm lg:text-md font-medium border rounded-md ${activeFilter === 100 ? 'bg-[#B600D4] border-[#B600D4]' : 'border-[#B600D4] text-white hover:bg-[#B600D4] hover:text-white'}`}
                    >
                        100  PKR
                    </button>
                    <button
                        onClick={() => setActiveFilter(200)}
                        className={`px-3 sm:px-6 lg:px-8 py-2 text-sm sm:text-sm lg:text-md font-medium border rounded-md ${activeFilter === 200 ? 'bg-[#B600D4] border-[#B600D4]' : 'border-[#B600D4] text-white hover:bg-[#B600D4] hover:text-white'}`}
                    >
                        200 PKR
                    </button>
                    <button
                        onClick={() => setActiveFilter(500)}
                        className={`px-3 sm:px-6 lg:px-8 py-2 text-sm sm:text-sm lg:text-md font-medium border rounded-md ${activeFilter === 500 ? 'bg-[#B600D4] border-[#B600D4]' : 'border-[#B600D4] text-white hover:bg-[#B600D4] hover:text-white'}`}
                    >
                        500 PKR
                    </button>
                </div>
                {loading ? (
                                            <div className="flex justify-center mt-12 items-center">
                                            <div className=" animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-[#B600D4] rounded-full " role="status" aria-label="loading">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                            </div>
                                    ) : (


              
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className=" rounded-md shadow-sm overflow-hidden bg-[#474747] border-gray-700">
                                {/* <!-- Table --> */}

                                <table className="min-w-full divide-y  divide-gray-700">
                                    <thead className="bg-[#676767]">
                                        <tr>
                                            <th scope="col" className="ps-6 lg:ps-3 xl:ps-6 pe-6 py-4 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm lg:text-md font-semibold uppercase tracking-wide text-gray-200">
                                                        No
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="ps-6 lg:ps-3 xl:ps-10 pe-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm lg:text-md font-semibold uppercase tracking-wide text-gray-200">
                                                        Name
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm lg:text-md font-semibold uppercase tracking-wide text-gray-200">
                                                        Bet No
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm lg:text-md font-semibold uppercase tracking-wide text-gray-200">
                                                        Bet Amount
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm lg:text-md font-semibold uppercase tracking-wide text-gray-200">
                                                        Phone Number
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-end"></th>
                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-gray-600">
                                 {
                                        filteredData?.map((rowData, index) => (
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
                                                <td className="h-px w-px whitespace-nowrap">
                                                    <div className="ps-6 lg:ps-3 xl:ps-10 xl:pe-20 pe-6 py-3">
                                                        <div className="flex items-center gap-x-3">
                                                            <div className="grow">
                                                                <span className="block text-md lg:text-md text-gray-200">{rowData.name}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="h-px w-72 whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                    <div className="flex item-center gap-1">
    {rowData.betNumber.toString().split('').map((digit, index) => (
        <button key={index} className="border-2 border-[#B600D4] bg-transparent h-9 w-9 rounded-lg text-lg font-semibold text-gray-200 cursor-text">{digit}</button>
    ))}
</div>


                                                    </div>
                                                </td>
                                                <td className="h-px w-72 whitespace-nowrap">
                                                    <div className="px-6 py-3 flex gap-1 items-center">
                                                        <span className="block text-md lg:text-md  text-gray-200">{rowData.betAmount} PKR</span>
                                                    </div>
                                                </td>
                                                <td className="h-px w-72 whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="block text-md lg:text-md  text-gray-200">{rowData.mobileNumber}</span>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                    </tbody>

                                </table>
                                {/* <!-- End Table --> */}


                            </div>
                        </div>
                    </div>
                </div>
                                    )}
            </div>
        </>
    )
}

export default BetTable
