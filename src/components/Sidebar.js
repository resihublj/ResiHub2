import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img
          src="https://via.placeholder.com/150x50?text=RESTHUB"
          alt="Logo"
        />
      </div>
      <div className="menu">
        {[
          "Dashboard Overview",
          "Maintenance Management",
          "Notices Board",
          "Complaints Handling",
          "Event & Facility Bookings",
          "Payments Overview",
          "Community Polls",
        ].map((item, i) => (
          <div
            key={i}
            className={`menu-item ${i === 0 ? "active" : ""}`}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
