import React from 'react'

const AddAccount = () => {
    return (
        <>
            <div className="max-w-[85rem] px-1 py-10 sm:px-6 lg:px-2 lg:py-4 mx-auto">
                <div className="bg-[#474747] rounded-sm pt-9 pb-7 px-7">
                    <div className="mb-7 flex justify-center items-center text-white">
                        <h2 className='text-2xl xs:text-3xl sm:text-4xl font-semibold tracking-wide'>Add Accounts</h2>
                    </div>

                    <form class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2">
                        <div>
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Account Number</label>
                            <input type="text" placeholder="Enter Your Name" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-[#cfcfcf] dark:bg-transparent dark:text-gray-300 dark:border-[#B600D4] focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label class="block mb-2 text-sm text-gray-600 dark:text-gray-200">Account Title</label>
                            <input type="text" placeholder="Enter Your Account Title" class="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-[#cfcfcf] dark:bg-transparent dark:text-gray-300 dark:border-[#B600D4] focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddAccount
