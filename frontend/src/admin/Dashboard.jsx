
import CircularProgress from '../components/Progress/Progress'
import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetBets } from '../Features/BetSlice';
import { useEffect } from 'react';
import moment from 'moment';
const Dashboard = () => {

  const dispatch = useDispatch();
  const Betdata = useSelector(state => state.Bet.data);
  const loading = useSelector(state => state.Bet.loading);
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [totalSales, setTotalSales] = useState(0);
  const [totalCustomerslast, setTotalCustomerslast] = useState(0);
  const [totalRevenuelast, setTotalRevenuelast] = useState(0);
  const [totalSaleslast, setTotalSaleslast] = useState(0);
  const [mostRepeatedNumbers, setMostRepeatedNumbers] = useState([]);
  console.log('data', Betdata)

  useEffect(() => {
    dispatch(GetBets());
  }, [dispatch]);

  useEffect(() => {
    if (Betdata) {
      calculateRevenueAndCustomers(Betdata);
      calculateMostRepeatedBetNumbers(Betdata);
      calculatelastsavendata(sevenDaysAgodata)
    }
  }, [Betdata]);

  // Calculate total revenue, total customers, and total sales
  const calculateRevenueAndCustomers = (data) => {
    let revenue = 0;
    let customers = new Set();
    let sales = data.length;

    data.forEach((row) => {
      revenue += row.betAmount;
      customers.add(row.accountUsed.number);
    });

    setTotalRevenue(revenue);
    setTotalCustomers(customers.size);
    setTotalSales(sales);
  };

  const calculateMostRepeatedBetNumbers = (data) => {
    const betNumbersByDay = {
      Mon: {}, Tue: {}, Wed: {}, Thu: {}, Fri: {}, Sat: {}, Sun: {}
    };

    data.forEach(item => {
      const createdAt = moment(item.createdAt);
      const dayOfWeek = createdAt.format('ddd');
      const betNumber = item.betNumber;

      if (!betNumbersByDay[dayOfWeek]) {
        betNumbersByDay[dayOfWeek] = {};
      }

      betNumbersByDay[dayOfWeek][betNumber] = (betNumbersByDay[dayOfWeek][betNumber] || 0) + 1;
    });

    const mostRepeatedNumbers = Object.keys(betNumbersByDay).map(day => {
      const dayData = betNumbersByDay[day];
      const mostRepeatedNumber = Object.keys(dayData).reduce((a, b) => dayData[a] > dayData[b] ? a : b, null);
      const frequency = mostRepeatedNumber ? dayData[mostRepeatedNumber] : 0;

      return {
        name: day,
        betNumber: mostRepeatedNumber,
        frequency: frequency
      };
    });

    setMostRepeatedNumbers(mostRepeatedNumbers);
  };

  const currentTimestamp = new Date();
  const sevenDaysAgoTimestamp = new Date(
    currentTimestamp.getTime() - 7 * 24 * 60 * 60 * 1000
  );

  const sevenDaysAgodata = Betdata?.filter((item) => {
    const createdAt = new Date(item.createdAt);
    // Exclude today's data
    return createdAt >= sevenDaysAgoTimestamp && createdAt < currentTimestamp;
  });

  console.log('last saven days data', sevenDaysAgodata)
  const calculatelastsavendata = (data) => {
    let revenuelast = 0;
    let customerslast = new Set();
    let saleslast = data.length;

    data.forEach((row) => {
      revenuelast += row.betAmount;
      customerslast.add(row.accountUsed.number);
    });

    setTotalRevenuelast(revenuelast);
    setTotalCustomerslast(customerslast.size);
    setTotalSaleslast(saleslast);
  };

  console.log('Sales Percentage Change:', sevenDaysAgodata);
  const customersPercentageChange =
    totalCustomerslast !== 0
      ? ((totalCustomers) / totalCustomerslast) * 100
      : 0;
  const SalesPercentageChange =
    totalSaleslast !== 0
      ? ((totalSales) / totalSaleslast) * 100
      : 0;
  const RevenuePercentageChange =
    totalRevenuelast !== 0
      ? ((totalRevenue) / totalRevenuelast) * 100
      : 0;




  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="label">{` Bet Number ${payload[0].payload.betNumber}`}</p>
          <p className="intro">{`Frequency : ${payload[0].value}`}</p>
        </div>
      );
    }

    return null;
  };



  return (
    <div className="max-w-[85rem] px-1 py-10 sm:px-6 lg:px-2 lg:py-4 mx-auto">

      <h2 className='text-2xl xs:text-3xl sm:text-4xl font-semibold tracking-wide'>Dashboard</h2>
      {loading ? (
                    <div className="flex justify-center mt-12 items-center">
                        <div className=" animate-spin inline-block w-8 h-8 border-[3px] border-current border-t-transparent text-[#B600D4] rounded-full " role="status" aria-label="loading">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                ) : (
      <div className="grid sm:grid-cols-1 my-5 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-6">
        <a className="group flex flex-col bg-[#474747] border-none shadow-sm rounded-md hover:shadow-md dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" href="#">
          <div className="p-4 md:p-5">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-xl xs:text-2xl sm:text-xl mb-2 font-regular tracking-wide">Customer</h3>
                <p className="text-xl xs:text-2xl sm:text-3xl mb-3 font-bold tracking-wide">{totalCustomers}</p>
                <div className="text-sm w-16 bg-[#5E4D61] text-center xs:text-xl sm:text-lg rounded-lg font-normal tracking-wide ">+{totalCustomers}</div>
              </div>
              <div className="ps-3">
                <CircularProgress
                  identifier="development3"
                  startValue={0}
                  endValue={4}
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
                <h3 className="text-xl xs:text-2xl sm:text-xl mb-2 font-regular tracking-wide">New Bets</h3>
                <p className="text-xl xs:text-2xl sm:text-3xl mb-3 font-bold tracking-wide">{totalSales}</p>
                <div className="text-sm w-16 bg-[#5E4D61] text-center xs:text-xl sm:text-lg rounded-lg font-normal tracking-wide ">{SalesPercentageChange}%</div>
              </div>
              <div className="ps-3">
                <CircularProgress
                  identifier="development5"
                  startValue={0}
                  endValue={8}
                  speed={10}
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
                <p className="text-xl xs:text-2xl sm:text-3xl mb-3 font-bold tracking-wide">{totalRevenue}</p>
                <div className="text-sm w-16 bg-[#5E4D61] text-center xs:text-xl sm:text-lg rounded-lg font-normal tracking-wide ">{RevenuePercentageChange}</div>
              </div>
              <div className="ps-3">
                <CircularProgress
                  identifier="development8"
                  startValue={0}
                  endValue={RevenuePercentageChange}
                  speed={20}
                  circleColor="#B600D4"
                />
              </div>
            </div>
          </div>
        </a>






      </div>

                )}

      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <AreaChart
            data={mostRepeatedNumbers}
            margin={{
              top: 10,
              right: 0,
              left: 0,
              bottom: 0,
            }}

          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="frequency" stroke="#B600D4" fill="#B600D4" />
          </AreaChart>
        </ResponsiveContainer>


      </div>






      <div className="grid grid-cols-1 my-5 sm:grid-cols-2 md:grid-cols-3  gap-3 sm:gap-6">
        <div className="bg-[#474747] px-4 py-4 rounded-md">
          <h4 className='text-center text-[#cc76da] font-medium text-xl text-wide'>Most Located</h4>
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


        <div className=" bg-[#474747] md:col-span-2 px-4 py-2 rounded-md">

        </div>


      </div>


    </div>
  )
}

export default Dashboard