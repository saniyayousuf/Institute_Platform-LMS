import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminDashboard from '../../Screens/Admin/Admin_dashboard';
import Signup from '../../Screens/Authentication/Signup';
import Login from '../../Screens/Authentication/Login';
import InstitueDashboard from '../../Screens/Institute/Institute_Dashboard/Institute_dashboard';
import InstituteForm from '../../Screens/Admin/admin_screens/InstituteForm';
import Admin from '../../Screens/Admin';
import Institute from '../../Screens/Institute';
import Student from '../../Screens/Student';
import Registrayionform from '../../Screens/Student/registrationform';
import NotFound from '../../Screens/NotFound';




export default function Approuter() {

    return (
        <Router>
            <>
                
                <Routes>
                  
                   <Route path="admin-dashboard/*" element={<AdminDashboard />} />
                    {/*  <Route path="institute-dashboard/*" element={<InstitueDashboard />} />
                    <Route path="institute-form" element={<InstituteForm />} />
                    <Route path="/" element={<Signup />} />
                    <Route path="login" element={<Login />} /> */}
                    <Route path="Admin/*" element={<Admin />} /> 
                    <Route path="Institute/*" element={<Institute />} /> 
                    <Route path="Student/*" element={<Student />} /> 
                    <Route path="*" element={<NotFound />} /> 
                    {/* public routes */}

                    <Route path="/:ins/registrationform" element={<Registrayionform />} /> 
                    <Route path="/registrationform" element={<Registrayionform />} /> 
                    <Route path="/" element={<Login />} /> 
                </Routes>
            </>
        </Router>

    );
}

