import React from 'react'
import { LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Logout } from '../Features/AuthSlice';
import { useNavigate } from 'react-router-dom';
const AdminHeader = () => {
const dispatch = useDispatch()
const navigate = useNavigate()
const LogoutAdmin = ( ) => {
    dispatch(Logout())
    .then((response) => {
        if (response.payload && response.payload.msg) {
           navigate('/')
        }
    })
    .catch((error) => {
        console.error('Error occurred:', error);
    });
}
    return (
        <>
            <div className='sticky hidden lg:flex justify-between items-center top-0 inset-x-0 z-20 bg-black text-white font-semibold pl-10 h-20'>
               <Link to={'/admin'}>   
                <img className='h-20 py-1' src="https://cdn.shopify.com/s/files/1/0704/6378/2946/files/Lucky_Logo_Casino.png?v=1706801454" alt="" />
                </Link>
                <button  onClick={LogoutAdmin} className='mr-10 p-2 rounded-lg bg-[#474747]'><LogOut /></button>
            </div>
            
        </>
    )
}

export default AdminHeader
