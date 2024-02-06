import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetBets } from "../Features/BetSlice";
import { useEffect } from "react";
const Winners = () => {
  const [activeFilter, setActiveFilter] = useState(100);
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Bet.data);
  const loading = useSelector((state) => state.Bet.loading);
  useEffect(() => {
    dispatch(GetBets());
  }, [dispatch]);

  const filteredData = data?.filter((row) => {
    const matchAmount = row.betAmount === activeFilter;
    const matchSearch = row.mobileNumber
      .toLowerCase()
      .includes(searchText.toLowerCase());
    return matchAmount && matchSearch;
  });

  // Filter winners from filtered data
  const WinnerData = filteredData?.filter((item) => item.isBetWinner === true);

  // Filter data updated within the last hour
  const currentTimestamp = new Date();
  const oneHourAgoTimestamp = new Date(
    currentTimestamp.getTime() - 60 * 60 * 1000 // One hour ago
  );
  console.log('last hour', oneHourAgoTimestamp)

  const recentlyUpdatedData = WinnerData?.filter((item) => {
    const updatedAt = new Date(item.updatedAt);
    console.log('last hour updated data', updatedAt)
    return updatedAt > oneHourAgoTimestamp;
  });


  console.log('filtered data', recentlyUpdatedData)
  console.log(' data', data)

  const handlePublishingWinners = () => { };

  return (
    <>
      {/* <!-- Table Section --> */}
      <div className="max-w-[85rem] px-1 py-10 sm:px-6 lg:px-2 lg:py-4 mx-auto">
        {/* <!-- Header --> */}
        <div className=" text-white">
          <h2 className="text-4xl font-semibold tracking-wide">Winners</h2>
        </div>

        {/* <!-- Tabs --> */}
        <div className="my-5 flex justify-center sm:justify-start flex-wrap gap-2.5 lg:gap-4 items-center text-white">
          <button
            onClick={() => setActiveFilter(100)} // Set active filter and change state
            className={`px-3 sm:px-6 lg:px-8 py-2 text-sm sm:text-sm lg:text-md font-medium border rounded-md ${activeFilter === 100
              ? "bg-[#B600D4] border-[#B600D4]"
              : "border-[#B600D4] text-white hover:bg-[#B600D4] hover:text-white"
              }`}
          >
            100 PKR
          </button>
          <button
            onClick={() => setActiveFilter(200)}
            className={`px-3 sm:px-6 lg:px-8 py-2 text-sm sm:text-sm lg:text-md font-medium border rounded-md ${activeFilter === 200
              ? "bg-[#B600D4] border-[#B600D4]"
              : "border-[#B600D4] text-white hover:bg-[#B600D4] hover:text-white"
              }`}
          >
            200 PKR
          </button>
          <button
            onClick={() => setActiveFilter(500)}
            className={`px-3 sm:px-6 lg:px-8 py-2 text-sm sm:text-sm lg:text-md font-medium border rounded-md ${activeFilter === 500
              ? "bg-[#B600D4] border-[#B600D4]"
              : "border-[#B600D4] text-white hover:bg-[#B600D4] hover:text-white"
              }`}
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
                        <th
                          scope="col"
                          className="px-6 lg:ps-3 xl:ps-6 pe-6 py-4 text-start"
                        >
                          <div className="flex items-center gap-x-2">
                            <span className="text-sm lg:text-md font-medium tracking-wide text-gray-200 uppercase">
                              NO.
                            </span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start"
                        >
                          <div className="flex items-center gap-x-2">
                            <span className="text-sm lg:text-md font-medium tracking-wide text-gray-200 ">
                              Name
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-sm lg:text-md font-medium tracking-wide text-gray-200 ">
                              Bet No
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-sm lg:text-md font-medium tracking-wide text-gray-200 ">
                              Bet Amount
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
                            <span className="text-sm lg:text-md font-medium tracking-wide text-gray-200 ">
                              Account Number
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-center">
                          <div className="flex items-center gap-x-2">
                            <span className="text-sm lg:text-md font-medium tracking-wide text-gray-200 ">
                              Phone Number
                            </span>
                          </div>
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-700">
                      {
                        recentlyUpdatedData.map((rowData, index) => (
                          <tr key={rowData.id}>
                            <td className="h-px w-px whitespace-nowrap">
                              <div className="ps-6 lg:ps-3 xl:ps-6 pe-6 py-4">
                                <div className="flex items-center gap-x-3">
                                  <div className="grow">
                                    <span className="flex items-center justify-center bg-[#B600D4] text-center h-6 w-6 rounded-full text-sm lg:text-md text-gray-200">
                                      {index + 1}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="h-px w-px whitespace-nowrap">
                              <div className="ps-6 lg:ps-3 xl:ps-0 xl:pe-14 pe-6 py-3">
                                <div className="flex items-center gap-x-3">
                                  <div className="grow">
                                    <span className="block text-sm text-gray-200">
                                      {rowData?.name}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="h-px w-72 whitespace-nowrap">
                              <div className=" py-3">
                                <div className="flex item-center gap-2">
                                  {rowData.betNumber
                                    .toString()
                                    .split("")
                                    .map((digit, index) => (
                                      <button key={index} className="border-[1px] border-[#B600D4] bg-transparent h-8 w-8 rounded-md text-sm md:text-md font-semibold text-gray-200 cursor-text">{digit}</button>
                                    ))}
                                </div>
                              </div>
                            </td>
                            <td className="h-px w-72 whitespace-nowrap">
                              <div className="px-6 py-3 flex gap-1 items-center">
                                <span className="block text-sm font-medium text-gray-200">
                                  {rowData?.betAmount} PKR
                                </span>
                              </div>
                            </td>
                            <td className="h-px w-72 whitespace-nowrap">
                              <div className="px-6 py-3 flex gap-1 items-center">
                                <span className="block text-sm font-medium text-gray-200">
                                  {rowData?.prizeAcntInfo.acntTitle}
                                </span>
                              </div>
                            </td>
                            <td className="h-px w-72 whitespace-nowrap">
                              <div className="px-6 py-3 flex gap-1 items-center">
                                <span className="block text-sm font-medium text-gray-200">
                                  {rowData?.prizeAcntInfo.acntNumber}
                                </span>
                              </div>
                            </td>
                            <td className="h-px w-72 whitespace-nowrap">
                              <div className="px-6 py-3">
                                <span className="block text-sm font-medium text-gray-200">
                                  {rowData?.mobileNumber}
                                </span>
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
              <div className="flex pt-2 items-center justify-center ">
                <button
                  onClick={handlePublishingWinners}
                  className="bg-[#B600D4] text-xl px-8 py-2 rounded-md"
                >
                  Publish
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Winners;
