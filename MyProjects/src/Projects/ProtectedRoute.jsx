import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({element}) => {

    const user = localStorage.getItem("sasi")
    return user ? element : <Navigate to='/'/>
};

export default ProtectedRoute;