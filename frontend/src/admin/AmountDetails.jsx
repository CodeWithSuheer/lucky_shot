import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetBets } from '../Features/BetSlice';
import { useEffect } from 'react';
const AmountDetails = () => {
   
    
    const [activeFilter, setActiveFilter] = useState(100);
    const [searchText, setSearchText] = useState('');
    const [selectedRow, setSelectedRow] = useState(null); // State to hold the selected data
    const [showModal, setShowModal] = useState(false); 
    
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
    const openModal = (rowData) => {
        console.log("Opening modal with rowData:", rowData);
        setSelectedRow(rowData); // Set the selected data
        setShowModal(true); // Show the modal
    };
    

    const closeModal = () => {
        setShowModal(false); // Close the modal
    };
    return (
        <>
            {/* <!-- Table Section --> */}
            <div className="max-w-[85rem] px-1 py-10 sm:px-6 lg:px-2 lg:py-4 mx-auto">

                {/* <!-- Header --> */}
                <div className="flex justify-between flex-wrap items-center text-white">
                    <h2 className='text-4xl font-semibold tracking-wide'>Amount Detail</h2>

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


                {/* <!-- Card --> */}
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="rounded-md shadow-sm overflow-hidden bg-[#474747] border-gray-700">
                                {/* <!-- Table --> */}
                                <table className="min-w-full divide-y divide-gray-700">
                                    <thead className="bg-[#676767]">
                                        <tr>
                                            <th scope="col" className="px-6 lg:ps-3 xl:ps-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm font-semibold tracking-wide text-gray-200">
                                                        No
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 lg:ps-3 xl:ps-0  py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm font-semibold tracking-wide text-gray-200">
                                                        Name
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm font-semibold tracking-wide text-gray-200 uppercase">
                                                        Bet No
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm font-semibold tracking-wide text-gray-200 uppercase">
                                                        Amount
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
                                                    <span className="text-sm font-semibold tracking-wide text-gray-200 uppercase">
                                                        Account Number
                                                    </span>
                                                </div>
                                            </th>

                                            <th scope="col" className="px-6 py-3 text-center">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm font-semibold tracking-wide text-gray-200 uppercase">
                                                        Phone Number
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-center">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm font-semibold tracking-wide text-gray-200 uppercase">
                                                        P.O.P
                                                    </span>
                                                </div>
                                            </th>

                                        </tr>

                                    </thead>

                                    <tbody className="divide-y divide-gray-700">
                                    {loading ? (
                                            
                                            <div className=" animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full " role="status" aria-label="loading">
                                                <span className="sr-only">Loading...</span>
                                            </div>
                                       
                                    ) : (
                                        filteredData.map((rowData,index) => (
                                            <tr key={rowData.id}>
                                                <td className="h-px w-px whitespace-nowrap">
                                                    <div className="ps-6 lg:ps-3 xl:ps-6 pe-6 py-4">
                                                        <div className="flex items-center gap-x-3">
                                                            <div className="grow">
                                                                <span className="flex items-center justify-center bg-[#B600D4] text-center h-6 w-6 rounded-full text-sm lg:text-md text-gray-200">{index+1}</span>
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
    {rowData.betNumber.toString().split('').map((digit, index) => (
        <button key={index} className="border-2 border-[#B600D4] bg-transparent h-9 w-9 rounded-lg text-lg font-semibold text-gray-200 cursor-text">{digit}</button>
    ))}
</div>
                                                    </div>

                                                </td>
                                                <td className="h-px w-72 whitespace-nowrap">
                                                    <div className="px-6 py-3 flex gap-1 items-center">
                                                        <span className="block text-sm font-semibold text-gray-200">{rowData?.betAmount} PKR</span>
                                                    </div>
                                                </td>
                                                <td className="h-px w-72 whitespace-nowrap">
                                                    <div className="px-6 py-3 flex gap-1 items-center">
                                                        <span className="block text-sm  text-gray-200">{rowData?.prizeAcntInfo.acntTitle}</span>
                                                    </div>
                                                </td>
                                                <td className="h-px w-72 whitespace-nowrap">
                                                    <div className="px-6 py-3 flex gap-1 items-center">
                                                        <span className="block text-sm  text-gray-200">{rowData?.prizeAcntInfo.acntNumber}</span>
                                                    </div>
                                                </td>
                                                <td className="h-px w-72 whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="block text-sm  text-gray-200">{rowData?.mobileNumber}</span>
                                                    </div>
                                                </td>
                                                <td className="h-px w-72 whitespace-nowrap">
                                                    <div className="px-6 py-3" >
                                                        <button className="block text-sm  cursur-pointer text-gray-200" onClick={() => openModal(rowData)}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                                                        </button>
                                                    </div>
                                                </td>

                                            </tr>

                                        ))
                                    )}

                                    </tbody>
                                </table>
                                {/* <!-- End Table --> */}


                            </div>
                        </div>
                    </div>
                </div>

{showModal && <div class="w-full max-w-md mx-auto p-6">
    
  
    <div  class="hs-overlay  w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto">
      <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
        <div class="relative flex flex-col bg-white shadow-lg rounded-xl ">
          <div class="absolute top-2 end-2 z-[10]">
            <button type="button" onClick={closeModal}  class="inline-flex justify-center items-center w-8 h-8 text-sm font-semibold rounded-lg border border-transparent bg-white/10 text-white hover:bg-white/20 disabled:opacity-50 disabled:pointer-events-none " >
              <span class="sr-only">Close</span>
              <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
  
          <div class="aspect-w-16 aspect-h-8">
            <img class="w-full object-cover rounded-t-xl" src="https://images.unsplash.com/photo-1648747067020-73f77da74e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3425&q=80" alt="Image Description" />
          </div>
  
          <div class="p-4 sm:p-10 text-center overflow-y-auto">
            <h3 class="mb-2 text-2xl font-bold text-gray-800 dark:text-gray-200">
              Yeahhhh 🎉
            </h3>
            <p class="text-gray-500">
              Thank you for your subscription. You will be sent the next issue of our newsletter shortly.
            </p>
  
            <div class="mt-6 flex justify-center gap-x-4">
              <button type="button" class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none " data-hs-overlay="#hs-subscription-with-image">
                Got it
              </button>
              <a class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none " href="#">
                Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

                {/* <!-- End Card --> */}


            </div>

        </>
    )
}

export default AmountDetails
