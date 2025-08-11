import React from "react";
import "./Dashboard.css"; 

export default function Dashboard() {
  return (
    <div className="main">
      {/* Stats */}
      <div className="stats-row">
        {[
          { label: "Maintenance Due", value: "₹5,000", sub: "Due by: 15th March 2024", subColor: "red" },
          { label: "Dues Collected", value: "₹20,500", sub: "View all >", subColor: "green" },
          { label: "Total Residents", value: "45", sub: "View all >", subColor: "#2563eb" },
          { label: "Total Visitors", value: "13", sub: "View all >", subColor: "#2563eb" },
          { label: "Upcoming Events", value: "3", sub: "View all >", subColor: "#2563eb" },
        ].map((stat, i) => (
          <div key={i} className="stat-card">
            <h4>{stat.label}</h4>
            <h2>{stat.value}</h2>
            <p style={{ color: stat.subColor }}>{stat.sub}</p>
          </div>
        ))}
      </div>

      {/* Two Columns */}
      <div className="columns">
        <div className="left-col">
          {/* Recent Complaints */}
          <div className="section">
            <h3 className="section-title">Recent Complaints</h3>
            {[
              { text: "Elevator Issue - B Wing", reporter: "Sarah Johnson", time: "3 hours ago", bg: "#ffecec" },
              { text: "Noise Complaint", reporter: "Mike Chen", time: "5 hours ago", bg: "#fff9e6" },
              { text: "Plumbing Issue", reporter: "Emily Davis", time: "1 day ago", bg: "#ecfff1" },
            ].map((c, i) => (
              <div key={i} className="card-row" style={{ background: c.bg }}>
                <div>
                  <strong>{c.text}</strong>
                  <p className="sub-text">Reported by: {c.reporter}</p>
                </div>
                <span className="time">{c.time}</span>
              </div>
            ))}
          </div>

          {/* Recent Notices */}
          <div className="section">
            <h3 className="section-title">Recent Notices</h3>
            {[
              { text: "Elevator Issue - B Wing", reporter: "Sarah Johnson", time: "3 hours ago" },
              { text: "Noise Complaint", reporter: "Mike Chen", time: "5 hours ago" },
              { text: "Plumbing Issue", reporter: "Emily Davis", time: "1 day ago" },
            ].map((n, i) => (
              <div key={i} className="card-row">
                <div>
                  <strong>{n.text}</strong>
                  <p className="sub-text">Reported by: {n.reporter}</p>
                </div>
                <span className="time">{n.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="right-col">
          {/* Upcoming Events */}
          <div className="section">
            <h3 className="section-title">Upcoming Events</h3>
            {[
              { title: "Society Meeting", place: "Community Hall, 09:00 PM" },
              { title: "Janmashtami", place: "Garden, 07:00 PM" },
              { title: "Navratri", place: "Garden, 08:00 PM – 02:00 AM" },
            ].map((e, i) => (
              <div key={i} className="event-card">
                <strong>{e.title}</strong>
                <p className="sub-text">{e.place}</p>
              </div>
            ))}
          </div>

          {/* Community Polls */}
          <div className="section">
            <h3 className="section-title">Community Polls</h3>
            <p className="poll-question">Navaratri Timing</p>
            {[
              "08:00 PM to 12:00 PM",
              "09:00 PM to 12:00 PM",
              "10:00 PM to 12:00 PM",
              "09:00 PM to 01:00 PM",
              "08:00 PM to 02:00 PM",
            ].map((t, i) => (
              <label key={i} className="poll-option">
                <input type="radio" name="poll" defaultChecked={t === "09:00 PM to 01:00 PM"} /> {t}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
