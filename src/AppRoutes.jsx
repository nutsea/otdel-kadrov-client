import React from "react";
import { Routes, Route } from "react-router-dom";
import User from './pages/User';
import Test from "./pages/Test";
import TestCreate from "./pages/TestCreate";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={ <User /> } />
            <Route path="/test" element={ <Test /> } />
            <Route path="/testcreate" element={ <TestCreate /> } />
        </Routes>
    );
}
 
export default AppRoutes;