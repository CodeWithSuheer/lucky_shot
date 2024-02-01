import React from 'react'

const AddAccount = () => {
    return (
        <>
            <div className="max-w-[85rem] px-1 py-10 sm:px-6 lg:px-1 lg:py-4 mx-auto">
                <div className="bg-[#474747] rounded-sm pt-9 pb-7 px-7">
                    <div className="mb-7 flex justify-center items-center text-white">
                        <h2 className='text-2xl xs:text-3xl sm:text-4xl font-semibold tracking-wide'>Add Accounts</h2>
                    </div>

                    <form class="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2">
                        {/* ------------ INPUT FIELDS ------------ */}
                        <div>
                            <label class="block mb-2 text-md font-medium text-gray-600 dark:text-gray-200">Account Number</label>
                            <input type="text" placeholder="Enter Your Name" class="block w-full px-5 py-4 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-[#b4b4b4] dark:bg-transparent dark:text-gray-300 dark:border-[#B600D4] focus:border-[#B600D4] dark:focus:border-[#B600D4] focus:ring-[#B600D4] focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label class="block mb-2 text-md font-medium text-gray-600 dark:text-gray-200">Account Title</label>
                            <input type="text" placeholder="Enter Your Account Title" class="block w-full px-5 py-4 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg dark:placeholder-[#b4b4b4] dark:bg-transparent dark:text-gray-300 dark:border-[#B600D4] focus:border-[#B600D4] dark:focus:border-[#B600D4] focus:ring-[#B600D4] focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        {/* ------------ CHECK BOX ------------ */}
                        <div class="grid sm:grid-cols-2 gap-2">
                            <label for="hs-radio-on-right" class="flex items-center p-3 w-full bg-white rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-transparent dark:text-gray-400">
                                <span className='h-8 w-8 p-[3px] bg-white rounded-md mr-2'>
                                    <img className='rounded-md' src="https://play-lh.googleusercontent.com/9-0wlkGycWAJRsuQ-p_bMqDGE0liYgihxKka0PtRjxqEiRVkDKaROEyFxYg520lLbpk" alt="" />
                                </span>
                                <span class="text-lg mr-3 text-gray-500 dark:text-[#cfcfcf]">Jazz Cash</span>

                                <input type="radio" name="hs-radio-on-right" class="mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-radio-on-right" />
                            </label>

                            <label for="hs-radioradio-on-right" class="flex items-center p-3 w-full bg-white rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-transparent dark:text-gray-400">
                                <span className='h-8 w-8 p-[3px] bg-white rounded-md mr-2'>
                                    <img className='rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK5OMeGQnlZ-I81VAAluwyoYy7-62iQP11lGtti4qaxg&s" alt="" />
                                </span>
                                <span class="text-lg mr-3 text-gray-500 dark:text-[#cfcfcf]">Easy Paisa</span>

                                <input type="radio" name="hs-radio-on-right" class="mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-radioradio-on-right" checked />
                            </label>
                        </div>

                        {/* ------------ SUBMIT ------------ */}
                        <div className="col-span-2">
                            <div className="button_div w-full">
                                <div className="flex justify-center">
                                    <button type="submit" className='gradent px-8 py-2.5 rounded-md text-xl font-semibold'>Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default AddAccount
