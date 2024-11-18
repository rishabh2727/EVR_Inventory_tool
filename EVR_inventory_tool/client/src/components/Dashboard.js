import React from "react";
import './dashboard.css';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
    const location = useLocation();
    const { username } = location.state || {}; // Get username passed via state

    // i just wanr the button gho to take me to the gho inventory dashboard. redirect, so 
    const navigate = useNavigate();

    // handler functions for navigating to the dashboard of all mine sites
    const GHO = () => {
        navigate("./GHO")
    }
    const FRO = () => {
        navigate("./FRO")
    }
    const EVO = () => {
        navigate("./EVO")
    }
    const LCO = () => {
        navigate("./LCO")
    }

    return (
        <div className="dashboard-wrapper">
            {/* Background image */}
            <div className="dashboard-background">
                <div className="user-greeting">
                    {/* Greeting the user by their name */}
                    <h1>Welcome to the EVR Dashboard, {username}!</h1>
                </div>
                <div className="site-button-container">
                    {/* Four Buttons */}
                    <button className="site-button" onClick={GHO}>GHO</button>
                    <button className="site-button" onClick={FRO}>FRO</button>
                    <button className="site-button" onClick={EVO}>EVO</button>
                    <button className="site-button" onClick={LCO}>LCO</button>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;