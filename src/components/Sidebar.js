import React from "react";
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="container">
            <div className="main">
                <aside className="aside">
                    <h1>ResiHub</h1>
                    <ul>
                        <li className="links">Dashboard Overview</li>
                        <li className="links">Maintanance</li>
                        <li className="links">Complaints</li>
                        <li className="links">Notices</li>
                        <li className="links">Profile</li>
                        <li className="links">Payments</li>
                    </ul>
                </aside>
            </div>
        </div>
    );
}

export default Sidebar;