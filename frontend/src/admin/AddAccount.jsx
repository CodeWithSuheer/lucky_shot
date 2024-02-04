import React from 'react'

const AddAccount = () => {
    return (
        <>
            <div className="max-w-[85rem] px-1 py-10 sm:px-6 lg:px-1 lg:py-4 mx-auto">
                <div className="bg-[#474747] rounded-sm pt-9 pb-7 px-7">
                    <div className="mb-7 flex justify-center items-center text-white">
                        <h2 className='text-2xl xs:text-3xl sm:text-4xl font-semibold tracking-wide'>Add Accounts</h2>
                    </div>


                    <div className="grid grid-cols-1 gap-6 mt-12 sm:grid-cols-2">
                        {/* ------------ INPUT FIELDS ------------ */}
                        <div>
                            <label className="block mb-2 text-md font-medium text-gray-200">Account Number</label>
                            <input type="text" placeholder="Enter Your Name" className="block w-full px-5 py-4 mt-2 border rounded-lg placeholder-[#b4b4b4] bg-transparent text-gray-300 border-[#B600D4] focus:border-[#B600D4] focus:border-[#B600D4] focus:ring-[#B600D4] focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                        <div>
                            <label className="block mb-2 text-md font-medium text-gray-200">Account Title</label>
                            <input type="text" placeholder="Enter Your Account Title" className="block w-full px-5 py-4 mt-2 border rounded-lg placeholder-[#b4b4b4] bg-transparent text-gray-300 border-[#B600D4] focus:border-[#B600D4] focus:border-[#B600D4] focus:ring-[#B600D4] focus:outline-none focus:ring focus:ring-opacity-40" />
                        </div>

                    </div>
                    {/* ------------ CHECK BOX ------------ */}
                    <div className=" flex flex-wrap justify-start gap-5 md:gap-8 lg:gap-32  items-center py-6">
                        <label htmlFor="hs-radio-on-right" className="flex items-center p-3 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 bg-transparent text-gray-400">
                            <span className='h-8 w-8 p-[3px] bg-white rounded-md mr-2'>
                                <img className='rounded-md' src="https://play-lh.googleusercontent.com/9-0wlkGycWAJRsuQ-p_bMqDGE0liYgihxKka0PtRjxqEiRVkDKaROEyFxYg520lLbpk" alt="" />
                            </span>
                            <span className="text-lg mr-3 text-gray-500 text-[#cfcfcf]">Jazz Cash</span>

                            <input type="radio" name="hs-radio-on-right" className="mt-0.5 accent-[#B600D4] border-gray-200 rounded-full text-blue-600 " />
                        </label>

                        <label htmlFor="hs-radioradio-on-right" className="flex items-center p-3  rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 bg-transparent text-gray-400">
                            <span className='h-8 w-8 p-[3px] bg-white rounded-md mr-2'>
                                <img className='rounded-md' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK5OMeGQnlZ-I81VAAluwyoYy7-62iQP11lGtti4qaxg&s" alt="" />
                            </span>
                            <span className="text-lg mr-3 text-gray-500 text-[#cfcfcf]">Easy Paisa</span>

                            <input type="radio" name="hs-radio-on-right" className="mt-0.5 accent-[#B600D4] border-gray-200 rounded-full text-blue-600 " />
                        </label>
                    </div>

                    {/* ------------ SUBMIT ------------ */}
                    <div className="flex justify-center items-center">
                        <div className="button_div w-full">
                            <div className="flex justify-center">
                                <button type="submit" className='gradent px-8 py-2.5 rounded-md text-xl font-semibold'>Submit</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default AddAccount
