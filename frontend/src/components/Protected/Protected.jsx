import React from 'react';
import { useSelector } from 'react-redux';


import { Navigate } from 'react-router-dom'
const UserProtected = ({ children }) => {
  const user = useSelector((state) => state.Auth.User);
  if(user) {
      return children ;
  }
 else {
  return <Navigate to='/' replace={true}/>
 }}

 const LoginProtected = ({ children }) => {
  const user = useSelector((state) => state.Auth.User);
  if(user) {
      return <Navigate to='/admin' replace={true}/> ;
  }
 else {
  return children
 }}


export  {UserProtected,LoginProtected}
  
  


