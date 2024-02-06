import React from 'react'
import { Trash2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAccounts } from '../Features/AccountSlice';
import { useEffect } from 'react';
const BackupAccounts = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.Account.data);
    const loading = useSelector(state => state.Account.loading);

    useEffect(() => {
        dispatch(GetAccounts());
    }, [dispatch]);
    const backupData = data?.filter(item => item.backupAccount === true);
    return (
        <>
            {/* <!-- Table Section --> */}
            <div className="max-w-[85rem] px-1 py-10 sm:px-6 lg:px-2 lg:py-4 mx-auto">

                {/* <!-- Header --> */}
                <div className="mb-7 flex justify-between flex-wrap items-center text-white">
                    <h2 className='text-2xl xs:text-3xl sm:text-4xl font-semibold tracking-wide'>Backup Account</h2>
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
                                    <table className="min-w-full divide-y divide-gray-700">
                                        <thead className="bg-[#676767]">

                                            <tr>
                                                <th scope="col" className="ps-6 lg:ps-3 xl:ps-6 pe-6 py-4 text-start">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-sm lg:text-md  font-medium uppercase tracking-wide text-gray-200">
                                                            NO.
                                                        </span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="px-6 py-3 text-start">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-sm lg:text-md  font-medium tracking-wide text-gray-200">
                                                            Account Title
                                                        </span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="px-6 py-3 text-start">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-sm lg:text-md  font-medium tracking-wide text-gray-200">
                                                            Account Number
                                                        </span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="px-6 py-3 text-start">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-sm lg:text-md  font-medium tracking-wide text-gray-200">
                                                            Payment Method
                                                        </span>
                                                    </div>
                                                </th>

                                                <th scope="col" className="px-6 py-3 text-start">
                                                    <div className="flex items-center gap-x-2">
                                                        <span className="text-sm lg:text-md  font-medium tracking-wide text-gray-200">
                                                            Account Limit
                                                        </span>
                                                    </div>
                                                </th>

                                            </tr>
                                        </thead>

                                        <tbody className="divide-y divide-gray-600">
                                            {
                                                backupData?.map((data, index) => (
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
                                                                <span className="block text-md lg:text-md tracking-wider font-semibold text-gray-200">{data.accountTitle}</span>
                                                            </div>
                                                        </td>

                                                        <td className="h-px w-72 whitespace-nowrap">
                                                            <div className="px-6 py-3">
                                                                <span className="block text-md lg:text-md font-semibold text-gray-200">{data.accountNumber}</span>
                                                            </div>
                                                        </td>

                                                        <td className="h-px w-72 whitespace-nowrap">
                                                            <div className="px-6 py-3 flex gap-1 items-center">
                                                                {data.paymentMethod === 'Jazz Cash' ? (
                                                                    <img className='h-4' src="https://play-lh.googleusercontent.com/9-0wlkGycWAJRsuQ-p_bMqDGE0liYgihxKka0PtRjxqEiRVkDKaROEyFxYg520lLbpk" alt="" />
                                                                ) : (
                                                                    <img className='h-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK5OMeGQnlZ-I81VAAluwyoYy7-62iQP11lGtti4qaxg&s" alt="" />
                                                                )}
                                                                <span className="block text-md lg:text-md font-semibold text-gray-200">{data.paymentMethod}</span>
                                                            </div>
                                                        </td>
                                                        <td className="h-px w-72 whitespace-nowrap">
                                                            <div className="px-6 py-3 flex gap-1 items-center">
                                                                {data?.backupAccountCounter < 4 ? (
                                                                    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-[#676767] text-white ">Daily Limit Complete</span>
                                                                ) : (
                                                                    <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-[#676767] text-white ">Monthly Limit Complete</span>
                                                                )}
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

export default BackupAccounts
