import React, { useState } from 'react';
import { AddAccountSLice } from '../Features/AccountSlice';
import { useDispatch } from 'react-redux';
const AddAccount = () => {
    const [formData, setFormData] = useState({
        accountNumber: '',
        accountTitle: '',
        limit: '50,000', // Initialize limit to 50,000
        paymentMethod: '', // Initialize selected option for radio buttons
    });

    // Initialize useDispatch hook
    const dispatch = useDispatch();

    // Handle input changes
    // Handle input changes
    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
    };

    // Handle radio button selection
    const handleRadioChange = (e) => {
        setFormData({ ...formData, paymentMethod: e.target.value });
    };

    // Handle form submission
    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const limitValue = parseFloat(formData.limit.replace(/,/g, ''));

        // Create a new payload with the limit value as a number
        const payloadData = {
            ...formData,
            limit: limitValue
        };

        // Dispatch the synchronous action with the form data
        dispatch(AddAccountSLice(payloadData))
            .then((response) => {
                if (response.payload && response.payload.message) {
                    setFormData({
                        accountNumber: '',
                        accountTitle: '',
                        limit: '50,000',
                        paymentMethod: ''
                    });
                }
            })
            .catch((error) => {
                console.error('Error occurred:', error);
            });
    };



    return (
        <>
            <div className="md:max-w-[85rem] px-1 py-10 sm:px-6 lg:px-1 lg:py-4 mx-auto">
                <div className="bg-[#474747] rounded-md pt-9 pb-7 px-4 md:px-7">
                    <div className="mb-7 flex justify-center items-center text-white">
                        <h2 className='text-3xl xs:text-3xl sm:text-4xl font-medium sm:font-semibold tracking-wide'>Add Accounts</h2>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 gap-3 mt-5 sm:grid-cols-1 md:grid-cols-2">
                            <div className='md:col-span-1 mb-3 sm:mb-0'>
                                <label className="block mb-2 text-sm sm:text-md font-medium text-gray-200">Account Number :</label>
                                <input
                                    type="number"
                                    name="accountNumber"
                                    placeholder="Enter Your Account Number"
                                    className="block w-full px-5 py-4 mt-2 border rounded-lg placeholder-[#b4b4b4] bg-transparent text-gray-300 border-[#B600D4] focus:border-[#B600D4] focus:ring-[#B600D4] focus:outline-none focus:ring focus:ring-opacity-40"
                                    value={formData.accountNumber}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className='md:col-span-1 mb-3 sm:mb-0'>
                                <label className="block mb-2 text-sm sm:text-md font-medium text-gray-200">Account Title :</label>
                                <input
                                    type="text"
                                    name="accountTitle"
                                    placeholder="Enter Your Account Title"
                                    className="block w-full px-5 py-4 mt-2 border rounded-lg placeholder-[#b4b4b4] bg-transparent text-gray-300 border-[#B600D4] focus:border-[#B600D4] focus:ring-[#B600D4] focus:outline-none focus:ring focus:ring-opacity-40"
                                    value={formData.accountTitle}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='md:col-span-2'>
                                <label className="block mb-2 text-sm sm:text-md font-medium text-gray-200">Account Limit :</label>
                                <input
                                    type="text"
                                    name="limit"
                                    placeholder="Enter Your Account Limit"
                                    className="block w-full px-5 py-4 mt-2 border rounded-lg placeholder-[#b4b4b4] bg-transparent text-gray-300 border-[#B600D4] focus:border-[#B600D4] focus:ring-[#B600D4] focus:outline-none focus:ring focus:ring-opacity-40"
                                    value={formData.limit}
                                    onChange={handleChange}

                                />
                            </div>

                        </div>

                        <div className="flex flex-wrap justify-start gap-5 md:gap-8 lg:gap-32 items-center py-6">
                            {/* Radio buttons */}
                            <label htmlFor="jazzCash" className="flex items-center rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 bg-transparent text-gray-400">
                                <span className='h-8 w-8 p-[3px] bg-white rounded-md mr-2'>
                                    <img className='rounded-md cursor-pointer' src="https://play-lh.googleusercontent.com/9-0wlkGycWAJRsuQ-p_bMqDGE0liYgihxKka0PtRjxqEiRVkDKaROEyFxYg520lLbpk" alt="" />
                                </span>
                                <span className="text-lg mr-3 text-[#cfcfcf] cursor-pointer">Jazz Cash</span>
                                <input
                                    type="radio"
                                    id="jazzCash"
                                    name="paymentMethod"
                                    value="Jazz Cash"
                                    required
                                    checked={formData.paymentMethod === 'Jazz Cash'}
                                    onChange={handleRadioChange}
                                    className="mt-0.5 accent-[#B600D4] border-gray-200 rounded-full text-blue-600 cursor-pointer"
                                />
                            </label>

                            <label htmlFor="easyPaisa" className="flex items-center rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 bg-transparent text-gray-400">
                                <span className='h-8 w-8 p-[3px] bg-white rounded-md mr-2'>
                                    <img className='rounded-md cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK5OMeGQnlZ-I81VAAluwyoYy7-62iQP11lGtti4qaxg&s" alt="" />
                                </span>
                                <span className="text-lg mr-3 text-[#cfcfcf] cursor-pointer">Easy Paisa</span>
                                <input
                                    type="radio"
                                    id="easyPaisa"
                                    name="paymentMethod"
                                    value="Easy Paisa"
                                    required
                                    checked={formData.paymentMethod === 'Easy Paisa'}
                                    onChange={handleRadioChange}
                                    className="mt-0.5 accent-[#B600D4] border-gray-200 rounded-full text-blue-600 cursor-pointer"
                                />
                            </label>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center items-center">
                            <div className="button_div w-full">
                                <div className="flex justify-center">
                                    <button type="submit" className='gradent px-7 py-2 rounded-md text-lg font-normal'>Submit</button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default AddAccount;
