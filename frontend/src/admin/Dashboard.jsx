import React from 'react'
import CircularProgress from '../components/Progress/Progress'

const Dashboard = () => {
  return (
    <div className="max-w-[85rem] px-1 py-10 sm:px-6 lg:px-2 lg:py-4 mx-auto">

      <h2 className='text-2xl xs:text-3xl sm:text-4xl font-semibold tracking-wide'>Dashboard</h2>

      <div className="grid sm:grid-cols-1 my-5 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-6">
        <a className="group flex flex-col bg-[#474747] border-none shadow-sm rounded-md hover:shadow-md dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          <div className="p-4 md:p-5">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl xs:text-2xl sm:text-xl mb-2 font-regular tracking-wide">Customer</h3>
                <p className="text-xl xs:text-2xl sm:text-3xl mb-3 font-bold tracking-wide">256,356</p>
                <div className="text-sm w-16 bg-[#5E4D61] text-center xs:text-xl sm:text-lg rounded-lg font-normal tracking-wide ">+1.9K</div>
              </div>
              <div className="ps-3">
                <CircularProgress
                  identifier="development5"
                  startValue={0}
                  endValue={80}
                  speed={20}
                  circleColor="#B600D4"
                />
              </div>
            </div>
          </div>
        </a>
        <a className="group flex flex-col bg-[#474747] border-none shadow-sm rounded-md hover:shadow-md dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          <div className="p-4 md:p-5">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl xs:text-2xl sm:text-xl mb-2 font-regular tracking-wide">New Sales</h3>
                <p className="text-xl xs:text-2xl sm:text-3xl mb-3 font-bold tracking-wide">256,356</p>
                <div className="text-sm w-16 bg-[#5E4D61] text-center xs:text-xl sm:text-lg rounded-lg font-normal tracking-wide ">60%</div>
              </div>
              <div className="ps-3">
                <CircularProgress
                  identifier="development5"
                  startValue={0}
                  endValue={80}
                  speed={20}
                  circleColor="#B600D4"
                />
              </div>
            </div>
          </div>
        </a>
        <a className="group flex flex-col bg-[#474747] border-none shadow-sm rounded-md hover:shadow-md dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          <div className="p-4 md:p-5">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl xs:text-2xl sm:text-xl mb-2 font-regular tracking-wide">Total Revenue</h3>
                <p className="text-xl xs:text-2xl sm:text-3xl mb-3 font-bold tracking-wide">2 Million</p>
                <div className="text-sm w-16 bg-[#5E4D61] text-center xs:text-xl sm:text-lg rounded-lg font-normal tracking-wide ">+1.9K</div>
              </div>
              <div className="ps-3">
                <CircularProgress
                  identifier="development5"
                  startValue={0}
                  endValue={80}
                  speed={20}
                  circleColor="#B600D4"
                />
              </div>
            </div>
          </div>
        </a>


        {/* <a className="group flex flex-col bg-[#676767]  border-none shadow-sm rounded-md hover:shadow-md  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          <div className="p-4 md:p-5">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl xs:text-2xl sm:text-3xl font-regular tracking-wide">
                  Customer
                </h3>
                <p className="text-xl xs:text-2xl sm:text-3xl font-bold tracking-wide">
                  256,356
                </p>

                <div className="text-sm w-16  bg-black my-2 text-center xs:text-xl sm:text-xl font-semibold tracking-wide ">
                  +1.9K
                </div>
              </div>
              <div className="ps-3">
                <CircularProgress
                  identifier="development4"
                  startValue={0}
                  endValue={80}
                  speed={30}
                  circleColor="#B600D4"
                />

              </div>
            </div>
          </div>
        </a>

        <a className="group flex flex-col bg-[#676767]  border-none shadow-sm rounded-md hover:shadow-md  dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          <div className="p-4 md:p-5">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl xs:text-2xl sm:text-3xl font-regular tracking-wide">
                  Customer
                </h3>
                <p className="text-xl xs:text-2xl sm:text-3xl font-bold tracking-wide">
                  256,356
                </p>

                <div className="text-sm w-16  bg-black my-2 text-center xs:text-xl sm:text-xl font-semibold tracking-wide ">
                  +1.9K
                </div>
              </div>
              <div className="ps-3">
                <CircularProgress
                  identifier="development5"
                  startValue={0}
                  endValue={80}
                  speed={30}
                  circleColor="#B600D4"
                />

              </div>
            </div>
          </div>
        </a> */}



      </div>



      <div className="grid sm:grid-cols-1 my-5 sm:grid-cols-2 md:grid-cols-3  gap-3 sm:gap-6">
      <div className="bg-[#474747] px-4 py-4 rounded-md">
<h4 className='text-center text-[#B600D4] font-medium text-xl'>Most Located</h4>
<div className="flex justify-between items-center py-1">
<p className='text-md font-normal text-white'>Punjab</p>
<p className='text-lg font-medium text-white'>80%</p>

</div>
<div className="flex justify-between items-center py-1">
<p className='text-md font-normal text-white'>Sindh</p>
<p className='text-lg font-medium text-white'>60%</p>

</div>
<div className="flex justify-between items-center py-1">
<p className='text-md font-normal text-white'>KPK</p>
<p className='text-lg font-medium text-white'>25%</p>

</div>
<div className="flex justify-between items-center py-1">
<p className='text-md font-normal text-white'>Balochistan</p>
<p className='text-lg font-medium text-white'>80%</p>

</div>




      </div>


    <div className=" bg-[#474747] md:col-span-2 px-4 py-2">

    </div>


      </div>


    </div>
  )
}

export default Dashboard
