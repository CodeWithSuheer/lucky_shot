import React from 'react'
import { Trash2 } from 'lucide-react';

const BackupAccounts = () => {
    const userData = [
        {
            name: 'Umer Javaid',
            accountTitle: 'UMER JAVAID',
            payment: 'sadapay',
            accountNumber: '03324700802'
        },
        {
            name: 'Umer Javaid',
            accountTitle: 'UMER JAVAID',
            payment: 'sadapay',
            accountNumber: '03324700802'
        },
        {
            name: 'Umer Javaid',
            accountTitle: 'UMER JAVAID',
            payment: 'sadapay',
            accountNumber: '03324700802'
        },
    ]
    return (
        <>
            {/* <!-- Table Section --> */}
            <div className="max-w-[85rem] px-1 py-10 sm:px-6 lg:px-2 lg:py-4 mx-auto">

                {/* <!-- Header --> */}
                <div className="mb-7 flex justify-between flex-wrap items-center text-white">
                    <h2 className='text-2xl xs:text-3xl sm:text-4xl font-semibold tracking-wide'>Backup Account</h2>
                </div>


                {/* <!-- Table Block --> */}
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



                                        </tr>
                                    </thead>

                                    <tbody className="divide-y divide-gray-600">
                                        {userData.map((data, index) => (
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
                                                        <img className='h-4' src="https://www.software786.com/wp-content/uploads/2023/04/sadapay-logo-600x445.png" alt="" />
                                                        <span className="block text-md lg:text-md font-semibold text-gray-200">{data.payment}</span>
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
                {/* <!-- End Table Block --> */}
            </div>
        </>
    )
}

export default BackupAccounts
