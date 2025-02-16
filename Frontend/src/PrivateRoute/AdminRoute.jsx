import React, { useContext } from 'react';
import { Navigate, replace, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/authprovider';

const AdminRoute = ({ childern }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div className="flex mt-64 justify-center h-screen">
            <progress className="progress w-72"></progress>
        </div>;
    }
    if (user) {
        return childern;
    }
    return (<Navigate to={'/login'} state={{ from: location }} replace></Navigate >);
};

export default AdminRoute;