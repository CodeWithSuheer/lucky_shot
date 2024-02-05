import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import AdminPanel from './admin/AdminPanel';
import Users from './admin/Users';
import Winners from './admin/Winners';
import BetTable from './admin/BetTable';
import Dashboard from './admin/Dashboard';
import AmountDetails from './admin/AmountDetails';
import AddAccount from './admin/AddAccount';
import RemoveAccount from './admin/RemoveAccount';
import BackupAccounts from './admin/BackupAccounts';
import WithDraw from "./admin/WithDraw";
import './App.css'
import  { Toaster } from 'react-hot-toast';
import { authUserAsync } from "./Features/AuthSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { UserProtected,LoginProtected } from "./components/Protected/Protected";
function App() {
const dispatch = useDispatch()
// useEffect(() => {
//   dispatch(authUserAsync());

// }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
        {/* <Route path="/" element={<LoginProtected> <Login /> </LoginProtected>} /> */}
        <Route path="/" element={ <Login /> } />
          {/* <Route path="/admin" element={<UserProtected>   <AdminPanel/> </UserProtected>}> */}

          <Route path="/admin" element={  <AdminPanel/> }>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="bettables" element={<BetTable />} />
            <Route path="winners" element={<Winners />} />
            <Route path="amountdetails" element={<AmountDetails />} />
            <Route path="WithDraw" element={<WithDraw />} />
            <Route path="addaccounts" element={<AddAccount />} />
            <Route path="removeaccounts" element={<RemoveAccount />} />
            <Route path="backupaccounts" element={<BackupAccounts />} />
          </Route>
        </Routes>
        <Toaster/>
      </BrowserRouter>
    </>
  )
}

export default App
