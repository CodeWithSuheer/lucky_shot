import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminPanel from './admin/AdminPanel';
import Users from './admin/Users';
import Winners from './admin/Winners';
import BetTable from './admin/BetTable';
import Dashboard from './admin/Dashboard';
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminPanel />}>  // Parent route

            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="bettables" element={<BetTable />} />
            <Route path="winners" element={<Winners />} />

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
