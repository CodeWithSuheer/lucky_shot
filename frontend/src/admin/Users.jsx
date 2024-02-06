import React, { useState } from 'react'
import { CalendarDays } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { GetBets } from '../Features/BetSlice';
import { useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import { parseISO, format } from 'date-fns';
const Users = () => {
    const [activeFilter, setActiveFilter] = useState(100);
    const [date,setdate] = useState()
    const dispatch = useDispatch();
    const data = useSelector(state => state.Bet.data);
    const loading = useSelector(state => state.Bet.loading);
    useEffect(() => {
        dispatch(GetBets());
    }, [dispatch]);


 
    const filteredData = data?.filter(row => {
        const matchAmount = row.betAmount === activeFilter;

        // Check if date is selected and row's date matches
        const dateMatches = date ? format(new Date(row.createdAt), 'yyyy-MM-dd') === date : true;

        return matchAmount && dateMatches;
    });





   

    return (
        <>
            {/* <!-- Table Section --> */}
            <div className="max-w-[85rem] px-1 py-10 sm:px-6 lg:px-2 lg:py-4 mx-auto">

                {/* <!-- Header --> */}
                <div className="flex justify-between flex-wrap items-center text-white">
                    <h2 className='text-3xl sm:text-4xl font-semibold tracking-wide'>Users</h2>

                    <div  className='bg-[#676767] text-gray-200 px-3 py-2.5 mt-2 sm:mt-0 rounded-md flex items-center gap-6'>
                        <input type='date' name='date' value={date} onChange={(e)=>setdate(e.target.value)} className='bg-[#676767] onFoucs:border-none accent-[#B600D4] focus:outline-none focus:ring-0'  />
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
                                <div className="rounded-md shadow-sm overflow-hidden bg-[#474747] border-gray-700">
                                    {/* <!-- Table --> */}
                                    <table className="min-w-full divide-y  divide-gray-700">
                                        <thead className="bg-[#676767]">
                                            <tr>
                                                <th scope="col" className="ps-6 lg:ps-3 xl:ps-6 pe-6 py-4 text-start">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-sm lg:text-md font-medium tracking-wide text-gray-200">
                                                            No
                                                        </span>
                                                    </div>
                                                </th>
                                                <th scope="col" className="ps-6 lg:ps-3 xl:ps-6 pe-6 py-3 text-start">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-sm lg:text-md font-medium tracking-wide text-gray-200">
                                                            Name
                                                        </span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="px-6 py-3 text-start">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-sm lg:text-md  font-medium  tracking-wide text-gray-200">
                                                            Account Title
                                                        </span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="px-6 py-3 text-start">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-sm lg:text-md  font-medium   text-gray-200">
                                                            Payment Method
                                                        </span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="px-6 py-3 text-start">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-sm lg:text-md  font-medium  tracking-wide text-gray-200">
                                                            Account Number
                                                        </span>
                                                    </div>
                                                </th>

                                            </tr>
                                        </thead>

                                        <tbody className="divide-y divide-gray-600">

                                            {
                                                filteredData.map((data, index) => (
                                                    <tr>
                                                        <td className="h-px w-px whitespace-nowrap">
                                                            <div className="ps-6 lg:ps-3 xl:ps-5 pe-6 py-4">
                                                                <div className="flex items-center gap-x-3">
                                                                    <div className="grow">
                                                                        <span className="flex items-center justify-center bg-[#B600D4] text-center h-6 w-6 rounded-full text-md lg:text-md text-gray-200">{index + 1}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>

                                                        <td className="h-px w-px whitespace-nowrap">
                                                            <div className="ps-6 lg:ps-3 xl:ps-5 xl:pe-32 pe-6 py-3">
                                                                <div className="flex items-center gap-x-3">
                                                                    <div className="grow">
                                                                        <span className="block text-md md:text-md text-gray-200">{data.name}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="h-px w-72 whitespace-nowrap">
                                                            <div className="px-6 py-3">
                                                                <span className="block text-md lg:text-md tracking-wider  text-gray-200">{data?.prizeAcntInfo.acntTitle}</span>
                                                            </div>
                                                        </td>
                                                        <div className="px-6 py-3 flex gap-2 items-center">
                                                        {data.prizeAcntInfo.paymentMethod === 'Jazz Cash' ? (
    <img className='h-4' src="https://play-lh.googleusercontent.com/9-0wlkGycWAJRsuQ-p_bMqDGE0liYgihxKka0PtRjxqEiRVkDKaROEyFxYg520lLbpk" alt="Jazz Cash" />
) : data.prizeAcntInfo.paymentMethod === 'Nayapay' ? (
    <img className='h-4' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/nay_pay.png?v=1707239753" alt="Naya Pay" />
) : data.prizeAcntInfo.paymentMethod === 'Sadapay' ? (
    <img className='h-4' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/sada_pay.png?v=1707239753" alt="Sadapay" />
) : (
    <img className='h-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK5OMeGQnlZ-I81VAAluwyoYy7-62iQP11lGtti4qaxg&s" alt="Default Image" />
)}

                                                            <span className="block text-sm text-wider md:text-md  text-gray-200">{data.prizeAcntInfo.paymentMethod}</span>
                                                        </div>
                                                        <td className="h-px w-78 whitespace-nowrap">
                                                            <div className="px-6 py-3">
                                                                <span className="block text-md md:text-md  text-gray-200">{data?.prizeAcntInfo.acntNumber}</span>
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
                )}

             



            </div>
        </>
    )
}

export default Users
