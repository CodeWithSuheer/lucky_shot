import React, { useState } from 'react'
import { CalendarDays } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { GetBets } from '../Features/BetSlice';
import { useEffect } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { Calendar, DateRange, DateRangePicker } from 'react-date-range';
import { parseISO } from 'date-fns';
const Users = () => {
    const [activeFilter, setActiveFilter] = useState(100);
    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: null,
          key: 'selection'
        }
      ]);
    const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
    const dispatch = useDispatch();
    const data = useSelector(state => state.Bet.data);
    const loading = useSelector(state => state.Bet.loading);
    useEffect(() => {
        dispatch(GetBets());
    }, [dispatch]);


    const currentdate = new Date().toLocaleDateString();
    const filteredData = data?.filter(row => {
        // Check if betAmount matches the activeFilter
        const matchAmount = row.betAmount === activeFilter;
    
        if (state[0]?.startDate && state[0]?.endDate && state[0]?.startDate.toLocaleDateString() !== state[0]?.endDate.toLocaleDateString()) {
            // Parse ISO format createdAt string to Date object
            const createdAtDate = parseISO(row.createdAt);
    
            // Check if the createdAtDate falls within the selected date range
            return (
                (!state[0]?.startDate || createdAtDate >= state[0]?.startDate) &&
                (!state[0]?.endDate || createdAtDate <= state[0]?.endDate)
            ) && matchAmount;
        }  else if (state[0]?.startDate && state[0]?.endDate && state[0]?.startDate.toLocaleDateString() === state[0]?.endDate.toLocaleDateString()) {
            // If startDate and endDate are the same, filter data for that single date
          console.log('single date ')
            const selectedDate = state[0]?.startDate.toLocaleDateString();
          
            const createdAtDate = new Date(row?.createdAt);
const formattedDate = createdAtDate.toLocaleDateString("en-GB");


    
            return (
                formattedDate === selectedDate
            ) && matchAmount;
        } else {
            // No date range selected, return true to include all data
            return matchAmount;
        }
    });
    
    
    
    
    
console.log('payment method',filteredData)
console.log('date range',state[0]?.startDate.toLocaleDateString())

    return (
        <>
            {/* <!-- Table Section --> */}
            <div className="max-w-[85rem] px-1 py-10 sm:px-6 lg:px-2 lg:py-4 mx-auto">

                {/* <!-- Header --> */}
                <div className="flex justify-between flex-wrap items-center text-white">
                    <h2 className='text-3xl sm:text-4xl font-semibold tracking-wide'>Users</h2>

                    <button onClick={onOpenModal} className='bg-[#676767] text-gray-200 px-3 py-2.5 mt-2 sm:mt-0 rounded-md flex items-center gap-6'>
                        <span className="text-xs md:text-sm">{currentdate}</span>
                        <span><CalendarDays size={20} /></span>
                    </button>
           
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
                                                    <span className="text-sm lg:text-md  font-medium uppercase tracking-wide text-gray-200">

                                                        N0.
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="ps-6 lg:ps-3 xl:ps-10 pe-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm lg:text-md  font-medium  tracking-wide text-gray-200">
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
                                                    <div className="ps-6 lg:ps-3 xl:ps-6 pe-6 py-4">
                                                        <div className="flex items-center gap-x-3">
                                                            <div className="grow">
                                                                <span className="flex items-center justify-center bg-[#B600D4] text-center h-6 w-6 rounded-full text-md lg:text-md text-gray-200">{index + 1}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="h-px w-px whitespace-nowrap">
                                                    <div className="ps-6 lg:ps-3 xl:ps-10 xl:pe-24 pe-6 py-3">
                                                        <div className="flex items-center gap-x-3">
                                                            <div className="grow">
                                                                <span className="block text-md md:text-lg  text-gray-200">{data.name}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="h-px w-72 whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="block text-md lg:text-lg tracking-wider  text-gray-200">{data?.prizeAcntInfo.acntTitle}</span>
                                                    </div>
                                                </td>
                                                <div className="px-6 py-3 flex gap-2 items-center">
        {data.prizeAcntInfo.paymentMethod === 'Jazz Cash' ? (
            <img className='h-4' src="https://play-lh.googleusercontent.com/9-0wlkGycWAJRsuQ-p_bMqDGE0liYgihxKka0PtRjxqEiRVkDKaROEyFxYg520lLbpk" alt="" />
        ) : (
            <img className='h-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK5OMeGQnlZ-I81VAAluwyoYy7-62iQP11lGtti4qaxg&s" alt="" />
        )}
        <span className="block text-sm text-wider md:text-lg  text-gray-200">{data.prizeAcntInfo.paymentMethod}</span>
    </div>
                                                <td className="h-px w-78 whitespace-nowrap">
                                                    <div className="px-6 py-3">
                                                        <span className="block text-md md:text-lg  text-gray-200">{data?.prizeAcntInfo.acntNumber}</span>
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

{open && (
    <Modal open={open} onClose={onCloseModal} center>
        <div style={{ overflowX: "auto" }}>
        <DateRange
        color='#B600D4'
        rangeColors={'#B600D4'}
  editableDateInputs={true}
  onChange={item => {
    if (item.selection.endDate === null) {
      // If endDate is null, set it to undefined to indicate a single date selection
      setState([{
        startDate: item.selection.startDate,
        endDate: undefined,
        key: 'selection'
      }]);
    } else {
      setState([item.selection]);
    }
  }}
  moveRangeOnFirstSelection={false}
  ranges={state}
  className='my-6'
/>

        </div>
    </Modal>
)}


               
            </div>
        </>
    )
}

export default Users
