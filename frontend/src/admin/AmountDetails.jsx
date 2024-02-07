import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetBets } from '../Features/BetSlice';
import { useEffect } from 'react';
import Modal from 'react-responsive-modal';
const AmountDetails = () => {


    const [activeFilter, setActiveFilter] = useState(100);
    const [searchText, setSearchText] = useState('');
    const [selectedRow, setSelectedRow] = useState(null); // State to hold the selected data
    const [open, setOpen] = useState(false);
    const [totalWinningAmount, SettotalWinningAmount] = useState()
    const [totalWinningBets, SettotalWinningBets] = useState()
    const [totalAmount, SettotalAmount] = useState()
    const [totalBets, SettotalBets] = useState()

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
    const onOpenModal = (number) => {
        setOpen(true);
        const filteredWithNumber = data?.filter((row) => row.mobileNumber === number);

        const calculateTotalWinningAmount = (rows) => {
            let totalWinningAmount = 0;
            let totalSpentAmount = 0;
            let totalWinningBets = 0;

            // Iterate over filtered rows to calculate total winning amount and total spent amount
            rows.forEach((rowData) => {
                // Increment total spent amount by the bet amount
                totalSpentAmount += rowData.betAmount;

                // Check if the user has won the bet
                if (rowData.isBetWinner) {
                    // Increment total winning amount by the bet amount
                    totalWinningAmount += rowData.betAmount;
                    // Increment total winning bets count
                    totalWinningBets++;
                }
            });

            // Return an object containing total winning amount, total spent amount, and total winning bets count
            return { totalWinningAmount, totalSpentAmount, totalWinningBets };
        };

        // Calculate total winning amount, total spent amount, and total winning bets count for the selected user
        const { totalWinningAmount, totalSpentAmount, totalWinningBets } = calculateTotalWinningAmount(filteredWithNumber);

        // Set the selected row, total winning amount, total spent amount, and total winning bets count in the state
        setSelectedRow(filteredWithNumber);
        SettotalWinningAmount(totalWinningAmount);
        SettotalAmount(totalSpentAmount);
        SettotalWinningBets(totalWinningBets);

        // Calculate total number of bets played by the user
        const totalBetsPlayed = filteredWithNumber.length;
        SettotalBets(totalBetsPlayed);
    };

    const onCloseModal = () => setOpen(false);



    return (
        <>
            {/* <!-- Table Section --> */}
            <div className="max-w-[85rem] px-1 py-10 sm:px-6 lg:px-2 lg:py-4 mx-auto">

                {/* <!-- Header --> */}
                <div className="flex justify-between flex-wrap items-center text-white">
                    <h2 className='text-3xl md:text-4xl font-semibold tracking-wide'>Amount Detail</h2>

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
                                className="md:w-64 lg:w-72 py-2 pl-10 pr-4 text-gray-100 bg-transparent border border-[#D9D9D9] rounded-lg focus:border-[#D9D9D9] focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-[#D9D9D9] placeholder:text-sm"
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
                                <div className="rounded-md shadow-sm overflow-hidden bg-[#474747] border-gray-700">
                                    {/* <!-- Table --> */}
                                    <table className="min-w-full divide-y divide-gray-700">
                                        <thead className="bg-[#676767]">
                                            <tr>
                                                <th scope="col" className="px-6 lg:ps-3 xl:ps-6 py-3 text-start">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-sm font-medium tracking-wide text-gray-200">
                                                            No
                                                        </span>
                                                    </div>
                                                </th>
                                                <th scope="col" className="px-6 lg:ps-3 xl:ps-0  py-3 text-start">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-sm font-medium tracking-wide text-gray-200">
                                                            Name
                                                        </span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="px-6 py-3 text-start">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-sm font-medium tracking-wide text-gray-200 ">
                                                            Bet No
                                                        </span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="px-6 py-3 text-start">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-sm font-medium tracking-wide text-gray-200 ">
                                                            Amount
                                                        </span>
                                                    </div>
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-start">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-sm font-medium tracking-wide text-gray-200 ">
                                                            Account Title
                                                        </span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="px-6 py-3 text-start">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-sm font-medium tracking-wide text-gray-200 ">
                                                            Account Number
                                                        </span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="px-6 py-3 text-center">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-sm font-medium tracking-wide text-gray-200 ">
                                                            Phone Number
                                                        </span>
                                                    </div>
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-center">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-sm font-medium tracking-wide text-gray-200 ">
                                                            P.O.P
                                                        </span>
                                                    </div>
                                                </th>

                                            </tr>

                                        </thead>

                                        <tbody className="divide-y divide-gray-700">
                                            {
                                                filteredData.map((rowData, index) => (
                                                    <tr key={rowData.id}>
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
                                                            <div className="ps-6 lg:ps-3 xl:ps-0 xl:pe-14 pe-6 py-3">
                                                                <div className="flex items-center gap-x-3">
                                                                    <div className="grow">
                                                                        <span className="block text-sm md:text-md text-gray-200">{rowData?.name}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td className="h-px w-72 whitespace-nowrap">
                                                            <div className=" py-3">
                                                                <div className="flex item-center gap-1">
                                                                    {rowData.betNumber.toString().split('').map((digit, index) => (
                                                                        <button key={index} className="border-[1px] border-[#B600D4] bg-transparent h-8 w-8 rounded-md text-sm md:text-md font-semibold text-gray-200 cursor-text">{digit}</button>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                        </td>
                                                        <td className="h-px w-72 whitespace-nowrap">
                                                            <div className="px-6 py-3 flex gap-1 items-center">
                                                                <span className="block text-sm md:text-md  font-normal text-gray-200">{rowData?.betAmount} PKR</span>
                                                            </div>
                                                        </td>
                                                        <td className="h-px w-72 whitespace-nowrap">
                                                            <div className="px-6 py-3 flex gap-1 items-center">
                                                                <span className="block text-sm md:text-md font-normal text-gray-200">{rowData?.prizeAcntInfo.acntTitle}</span>
                                                            </div>
                                                        </td>
                                                        <td className="h-px w-76 whitespace-nowrap">
                                                            <div className="px-6 py-3 flex gap-1 items-center">
                                                                <span className="block text-sm md:text-md font-normal text-gray-200">{rowData?.prizeAcntInfo.acntNumber}</span>
                                                            </div>
                                                        </td>
                                                        <td className="h-px w-72 whitespace-nowrap">
                                                            <div className="px-6 py-3">
                                                                <span className="block text-sm md:text-md font-normal text-gray-200">{rowData?.mobileNumber}</span>
                                                            </div>
                                                        </td>
                                                        <td className="h-px w-72 whitespace-nowrap">
                                                            <div className="px-6 py-3" >
                                                                <button className="block text-sm  cursur-pointer text-gray-200" onClick={() => onOpenModal(rowData?.mobileNumber)}>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
                                                                </button>
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

                {open &&
                    <Modal open={open} onClose={onCloseModal} center classNames={{
                        overlay: 'customOverlay',
                        modal: 'customModal',
                    }}>
                        <div class="px-0 py-4 my-4 md:my-1 sm:px-6 lg:px-4 lg:py-8">

                            <div class="mb-6">
                                <h5 class="text-sm sm:text-lg font-normal  text-gray-100 bg-[#0f0f0f] border border-gray-500 rounded-lg mb-1 px-2 sm:px-4 py-1.5">
                                    Total Winning Amount : {totalWinningAmount}
                                </h5>
                                <h5 class="text-sm sm:text-lg font-normal text-gray-100 bg-[#0f0f0f] border border-gray-500 rounded-lg mb-1 px-2 sm:px-4 py-1.5">
                                    Total Winning Bets : {totalWinningBets}
                                </h5>
                                <h5 class="text-sm sm:text-lg font-normal text-gray-100 bg-[#0f0f0f] border border-gray-500 rounded-lg mb-1 px-2 sm:px-4 py-1.5">
                                    Total Amount  : {totalAmount}
                                </h5>
                                <h5 class="text-sm sm:text-lg font-normal text-gray-100 bg-[#0f0f0f] border border-gray-500 rounded-lg mb-1 px-2 sm:px-4 py-1.5">
                                    Total  Bets : {totalBets}
                                </h5>
                            </div>

                            <div class="flex justify-center items-center flex-wrap">
                                {selectedRow.map((data) => (
                                    <div class=" flex flex-col h-full bg-[#0f0f0f] rounded-md mx-0 my-1 md:mx-2">
                                        <div className="w-72 h-50 my-9 pl-0 sm:pl-2 flex items-center justify-center ">
                                            <img
                                                class="object-cover rounded-t-md"
                                                src={data?.image?.secure_url}
                                                alt="Image Description"
                                            />
                                        </div>
                                        <div class="p-4 md:p-6">
                                            <span class="block mb-1 text-md  uppercase text-white ">
                                                Bet Amount : {data?.betAmount}
                                            </span>
                                            <span class="text-md  text-white  ">
                                                Mobile Number : {data?.mobileNumber}
                                            </span>
                                            <div className="flex flex-col justify-start items-start mt-2 ">
                                                <span class="block mb-1 text-md   text-white ">
                                                    Account Title: {data?.prizeAcntInfo.acntTitle}
                                                </span>
                                                <span class="block mb-1 text-md   text-white ">
                                                    Account Number : {data?.prizeAcntInfo.acntNumber}
                                                </span>
                                            </div>
                                        </div>

                                        <div class="mt-auto  p-4 md:p-6 border-t border-gray-200 divide-x divide-gray-200">
                                            <span class="  text-white text-sm  ">
                                                Created Date : {new Date(data.createdAt).toLocaleString()}
                                            </span>

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Modal>
                }

                {/* <!-- End Card --> */}


            </div>

        </>
    )
}

export default AmountDetails
