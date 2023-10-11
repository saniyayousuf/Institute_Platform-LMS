import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminDashboard from '../../Screens/Admin/Admin_dashboard';
import Signup from '../../Screens/Authentication/Signup';
import Login from '../../Screens/Authentication/Login';
import InstitueDashboard from '../../Screens/Institute/Institute_Dashboard/Institute_dashboard';




export default function Approuter() {

    return (
        <Router>
            <>
                
                <Routes>
                  
                    <Route path="admin-dashboard/*" element={<AdminDashboard />} />
                    <Route path="institute-dashboard/*" element={<InstitueDashboard />} />
                    <Route path="/" element={<Signup />} />
                    <Route path="login" element={<Login />} />
                </Routes>
            </>
        </Router>

    );
}

