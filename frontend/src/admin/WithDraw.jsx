import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetBets, createBetWiners, getBetsOF24Hours } from "../Features/BetSlice";
import { useEffect, useState } from "react";
import Modal from "react-responsive-modal";
const WithDraw = () => {
  const [activeFilter, setActiveFilter] = useState(100);
  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [open, setOpen] = useState(false);

  const onOpenModal = (rowData) => {
    setOpen(true);
    setSelectedRow(rowData);
  };
  const onCloseModal = () => setOpen(false);
  const dispatch = useDispatch();
  const data = useSelector((state) => state.Bet.getBetsOF24Hours);
  const loading = useSelector((state) => state.Bet.loading);

  useEffect(() => {
    dispatch(GetBets());
    dispatch(getBetsOF24Hours());
  }, [dispatch]);

  

  console.log("data", data);
  const filteredData = data?.filter((row) => {
    const matchAmount = row.betAmount === activeFilter;
    const matchSearch = row.mobileNumber
      .toLowerCase()
      .includes(searchText.toLowerCase());
   

    // Default case
    return matchSearch && matchAmount;
  });

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const handleselected = (id) => {
    setSelectedIds((prevSelectedIds) => {
      const isSelected = prevSelectedIds.includes(id);
      if (isSelected) {
        return prevSelectedIds.filter((selectedId) => selectedId !== id);
      } else {
        return [...prevSelectedIds, id];
      }
    });
  };
  const handleCreateWinners = () => {
    dispatch(createBetWiners({ ids: selectedIds }));
  };

  return (
    <>
      {/* <!-- Table Section --> */}
      <div className="max-w-[85rem] px-1 py-10 sm:px-6 lg:px-2 lg:py-4 mx-auto">
        {/* <!-- Header --> */}
        <div className="flex justify-between flex-wrap items-center text-white">
          <h2 className="text-4xl font-semibold tracking-wide">Add WithDraw</h2>

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
            className={`px-3 sm:px-6 lg:px-8 py-2 text-sm sm:text-sm lg:text-md font-medium border rounded-md ${
              activeFilter === 100
                ? "bg-[#B600D4] border-[#B600D4]"
                : "border-[#B600D4] text-white hover:bg-[#B600D4] hover:text-white"
            }`}
          >
            100 PKR
          </button>
          <button
            onClick={() => setActiveFilter(200)}
            className={`px-3 sm:px-6 lg:px-8 py-2 text-sm sm:text-sm lg:text-md font-medium border rounded-md ${
              activeFilter === 200
                ? "bg-[#B600D4] border-[#B600D4]"
                : "border-[#B600D4] text-white hover:bg-[#B600D4] hover:text-white"
            }`}
          >
            200 PKR
          </button>
          <button
            onClick={() => setActiveFilter(500)}
            className={`px-3 sm:px-6 lg:px-8 py-2 text-sm sm:text-sm lg:text-md font-medium border rounded-md ${
              activeFilter === 500
                ? "bg-[#B600D4] border-[#B600D4]"
                : "border-[#B600D4] text-white hover:bg-[#B600D4] hover:text-white"
            }`}
          >
            500 PKR
          </button>
        </div>

        {loading ? (
          <div className="flex justify-center mt-12 items-center">
            <div
              className=" animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-[#B600D4] rounded-full "
              role="status"
              aria-label="loading"
            >
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
                          className="px-6 lg:ps-3 xl:ps-6 py-3 text-start"
                        >
                          <div className="flex items-center gap-x-2">
                            <span className="text-sm font-medium tracking-wide text-gray-200">
                              No
                            </span>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-6 lg:ps-3 xl:ps-0  py-3 text-start"
                        >
                          <div className="flex items-center gap-x-2">
                            <span className="text-sm font-medium tracking-wide text-gray-200">
                              Name
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-sm font-medium tracking-wide text-gray-200">
                              Bet No
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-sm font-medium tracking-wide text-gray-200">
                              Amount
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-sm font-medium tracking-wide text-gray-200">
                              Account Title
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-start">
                          <div className="flex items-center gap-x-2">
                            <span className="text-sm font-medium tracking-wide text-gray-200">
                              Account Number
                            </span>
                          </div>
                        </th>

                        <th scope="col" className="px-6 py-3 text-center">
                          <div className="flex items-center gap-x-2">
                            <span className="text-sm font-medium tracking-wide text-gray-200">
                              Phone Number
                            </span>
                          </div>
                        </th>
                        <th scope="col" className="px-6 py-3 text-center">
                          <div className="flex items-center gap-x-2">
                            <span className="text-sm font-medium tracking-wide text-gray-200">
                              P.O.P
                            </span>
                          </div>
                        </th>
                      </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-700">
                      {filteredData.map((rowData, index) => (
                        <tr key={rowData.id}>
                          <td className="h-px w-px whitespace-nowrap">
                            <div className="ps-3 lg:ps-3 xl:ps-6 pe-4 py-4">
                              <div className="flex items-center gap-x-1">
                                {rowData.isBetWinner ||
                                selectedIds.includes(rowData.id) ? (
                                  <span
                                    className="bg-[#00c14d] rounded-full h-3 w-3 cursor-pointer"
                                    onClick={() => handleselected(rowData.id)}
                                  ></span>
                                ) : (
                                  <span
                                    className=" border-2 border-[#00c14d] rounded-full h-3 w-3 cursor-pointer"
                                    onClick={() => handleselected(rowData.id)}
                                  ></span>
                                )}
                                <div
                                  className={` ${
                                    rowData.withdraw
                                      ? "bg-[#B600D4] grow"
                                      : "bg-[#B600D4] grow"
                                  } rounded-full h-7 w-0 md:h-6 md:w-6  flex items-center justify-center`}
                                >
                                  <span className="block text-xs text-gray-200 text-center">
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
                                    <button
                                      key={index}
                                      className="border-[1px] border-[#B600D4] bg-transparent h-8 w-8 rounded-md text-sm md:text-md font-semibold text-gray-200 cursor-text"
                                    >
                                      {digit}
                                    </button>
                                  ))}
                              </div>
                            </div>
                          </td>
                          <td className="h-px w-72 whitespace-nowrap">
                            <div className="px-6 py-3 flex gap-1 items-center">
                              <span className="block text-sm font-medium text-gray-200">
                                {rowData?.betAmount}
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
                          <td className="h-px w-72 whitespace-nowrap">
                            <div className="px-6 py-3">
                              <button
                                className="block text-sm  cursur-pointer text-gray-200"
                                onClick={() => onOpenModal(rowData)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  class="lucide lucide-eye"
                                >
                                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                  <circle cx="12" cy="12" r="3" />
                                </svg>
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {/* <!-- End Table --> */}
                </div>
              </div>
              <div className="flex pt-2 py-3 items-center justify-center ">
                <button
                  onClick={handleCreateWinners}
                  className="gradent px-7 py-2 rounded-md text-lg font-normal"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        )}

        {/* <!-- End Card --> */}

        {open && (
          <>
            <section className="bg-black">
              <Modal
                open={open}
                onClose={onCloseModal}
                center
                classNames={{
                  overlay: "customOverlay",
                  modal: "customModal",
                }}
              >
                <div className="w-72 h-50 my-9 flex items-center justify-center ">
                  <img
                    class="object-cover rounded-t-xl"
                    src={selectedRow?.image?.secure_url}
                    alt="Image Description"
                  />
                </div>
              </Modal>
            </section>
          </>
        )}
      </div>
    </>
  );
};

export default WithDraw;
