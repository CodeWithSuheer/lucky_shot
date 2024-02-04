import React from 'react';
import { Trash2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAccounts } from '../Features/AccountSlice';
import { useEffect } from 'react';
import { RemoveAccountSlice } from '../Features/AccountSlice';

const RemoveAccount = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.Account.data);
    const loading = useSelector(state => state.Account.loading);

    useEffect(() => {
        dispatch(GetAccounts());
    }, [dispatch]);

    const DeleteAccount = (id) => {
        const userid = {
            id: id
        }
        dispatch(RemoveAccountSlice(userid)).then((response) => {
            if (response.payload.message === "Account Deleted successfully") {
                dispatch(GetAccounts());
            }
        });
    }

   
    return (
        <>
            {/* Table Section */}
            <div className="max-w-[85rem] px-1 py-10 sm:px-6 lg:px-2 lg:py-4 mx-auto">

                {/* Header */}
                <div className="mb-7 flex justify-between flex-wrap items-center text-white">
                    <h2 className='text-2xl xs:text-3xl sm:text-4xl font-semibold tracking-wide'>Remove Accounts</h2>
                </div>

                {/* Table Block */}
                <div className="flex flex-col">
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="rounded-md shadow-sm overflow-hidden bg-[#474747] border-gray-700">
                                {/* Table */}
                                <table className="min-w-full divide-y divide-gray-700">
                                    <thead className="bg-[#676767]">
                                        <tr>
                                            <th scope="col" className="ps-6 lg:ps-3 xl:ps-6 pe-6 py-4 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm lg:text-md  font-semibold uppercase tracking-wide text-gray-200">
                                                        No
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm lg:text-md  font-semibold uppercase tracking-wide text-gray-200">
                                                        Account Title
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm lg:text-md  font-semibold uppercase tracking-wide text-gray-200">
                                                        Account Number
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm lg:text-md  font-semibold uppercase tracking-wide text-gray-200">
                                                        Payment Method
                                                    </span>
                                                </div>
                                            </th>
                                          
                                            <th scope="col" className="px-6 py-3 text-start">
                                                <div className="flex items-center gap-x-2">
                                                    <span className="text-sm lg:text-md  font-semibold uppercase tracking-wide text-gray-200">
                                                        Remove
                                                    </span>
                                                </div>
                                            </th>
                                            <th scope="col" className="px-6 py-3 text-end"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-600 " >
                                        {loading ? (
                                            
                                                <div className=" animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full " role="status" aria-label="loading">
                                                    <span className="sr-only">Loading...</span>
                                                </div>
                                           
                                        ) : (
                                            data.map((data, index) => (
                                                <tr key={index}>
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
                                                            <span className="block text-md lg:text-md tracking-wider font-semiboldtext-gray-200">{data.accountTitle}</span>
                                                        </div>
                                                    </td>
                                                    <td className="h-px w-72 whitespace-nowrap">
                                                        <div className="px-6 py-3">
                                                            <span className="block text-md lg:text-md font-semibold text-gray-200">{data.accountNumber}</span>
                                                        </div>
                                                    </td>
                                                    <td className="h-px w-72 whitespace-nowrap">
                                                        <div className="px-6 py-3 flex gap-3 items-center">
                                                            {data.paymentMethod === 'Jazz Cash' ? (
                                                                <img className='h-4' src="https://play-lh.googleusercontent.com/9-0wlkGycWAJRsuQ-p_bMqDGE0liYgihxKka0PtRjxqEiRVkDKaROEyFxYg520lLbpk" alt="" />
                                                            ) : (
                                                                <img className='h-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK5OMeGQnlZ-I81VAAluwyoYy7-62iQP11lGtti4qaxg&s" alt="" />
                                                            )}
                                                            <span className="block text-md lg:text-md font-semibold text-gray-200">{data.paymentMethod}</span>
                                                        </div>
                                                    </td>
                                                  


                                                    <td className="flex items-center justify-center py-3" onClick={() => DeleteAccount(data?.id)}>
                                                        <div className="trash_button rounded-full bg-[#676767] text-[#ffffff] p-2 ms-2.5 transition hover:scale-110 cursor-pointer">
                                                            <Trash2 size={18} />
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default RemoveAccount;
