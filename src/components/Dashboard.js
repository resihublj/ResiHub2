import React from "react";

export default function Dashboard() {
  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <div style={styles.sidebar}>
        <div style={styles.logo}>
          <img
            src="https://via.placeholder.com/150x50?text=RESTHUB"
            alt="Logo"
            style={{ maxWidth: "100%" }}
          />
        </div>
        <div style={styles.menu}>
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
              style={{
                ...styles.menuItem,
                backgroundColor: i === 0 ? "#eef4ff" : "transparent",
                color: i === 0 ? "#2563eb" : "#333",
                fontWeight: i === 0 ? "600" : "normal",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div style={styles.main}>
        {/* Top Bar */}
        <div style={styles.topBar}>
          <div>
            <h2 style={{ margin: 0 }}>Dashboard Overview</h2>
            <p style={{ margin: 0, color: "#666", fontSize: "14px" }}>
              Welcome back, John! Here’s what's happening in Greenfield Residency today.
            </p>
          </div>
          <div style={styles.profile}>
            <img
              src="https://via.placeholder.com/40"
              alt="profile"
              style={styles.avatar}
            />
            <span>John Smith</span>
          </div>
        </div>

        {/* Stats */}
        <div style={styles.statsRow}>
          {[
            { label: "Maintenance Due", value: "₹5,000", sub: "Due by: 15th March 2024", subColor: "red" },
            { label: "Dues Collected", value: "₹20,500", sub: "View all >", subColor: "green" },
            { label: "Total Residents", value: "45", sub: "View all >", subColor: "#2563eb" },
            { label: "Total Visitors", value: "13", sub: "View all >", subColor: "#2563eb" },
            { label: "Upcoming Events", value: "3", sub: "View all >", subColor: "#2563eb" },
          ].map((stat, i) => (
            <div key={i} style={styles.statCard}>
              <h4 style={{ margin: 0 }}>{stat.label}</h4>
              <h2 style={{ margin: "5px 0" }}>{stat.value}</h2>
              <p style={{ color: stat.subColor, fontSize: "14px", margin: 0 }}>{stat.sub}</p>
            </div>
          ))}
        </div>

        {/* Two Columns */}
        <div style={styles.columns}>
          <div style={{ flex: 2 }}>
            {/* Recent Complaints */}
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Recent Complaints</h3>
              {[
                { text: "Elevator Issue - B Wing", reporter: "Sarah Johnson", time: "3 hours ago", bg: "#ffecec" },
                { text: "Noise Complaint", reporter: "Mike Chen", time: "5 hours ago", bg: "#fff9e6" },
                { text: "Plumbing Issue", reporter: "Emily Davis", time: "1 day ago", bg: "#ecfff1" },
              ].map((c, i) => (
                <div key={i} style={{ ...styles.cardRow, background: c.bg }}>
                  <div>
                    <strong>{c.text}</strong>
                    <p style={styles.subText}>Reported by: {c.reporter}</p>
                  </div>
                  <span style={styles.time}>{c.time}</span>
                </div>
              ))}
            </div>

            {/* Recent Notices */}
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Recent Notices</h3>
              {[
                { text: "Elevator Issue - B Wing", reporter: "Sarah Johnson", time: "3 hours ago" },
                { text: "Noise Complaint", reporter: "Mike Chen", time: "5 hours ago" },
                { text: "Plumbing Issue", reporter: "Emily Davis", time: "1 day ago" },
              ].map((n, i) => (
                <div key={i} style={styles.cardRow}>
                  <div>
                    <strong>{n.text}</strong>
                    <p style={styles.subText}>Reported by: {n.reporter}</p>
                  </div>
                  <span style={styles.time}>{n.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div style={{ flex: 1, marginLeft: "20px" }}>
            {/* Upcoming Events */}
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Upcoming Events</h3>
              {[
                { title: "Society Meeting", place: "Community Hall, 09:00 PM" },
                { title: "Janmashtami", place: "Garden, 07:00 PM" },
                { title: "Navratri", place: "Garden, 08:00 PM – 02:00 AM" },
              ].map((e, i) => (
                <div key={i} style={styles.eventCard}>
                  <strong>{e.title}</strong>
                  <p style={styles.subText}>{e.place}</p>
                </div>
              ))}
            </div>

            {/* Community Polls */}
            <div style={styles.section}>
              <h3 style={styles.sectionTitle}>Community Polls</h3>
              <p style={{ fontWeight: "bold" }}>Navaratri Timing</p>
              {[
                "08:00 PM to 12:00 PM",
                "09:00 PM to 12:00 PM",
                "10:00 PM to 12:00 PM",
                "09:00 PM to 01:00 PM",
                "08:00 PM to 02:00 PM",
              ].map((t, i) => (
                <label key={i} style={styles.pollOption}>
                  <input
                    type="radio"
                    name="poll"
                    defaultChecked={t === "09:00 PM to 01:00 PM"}
                  />{" "}
                  {t}
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Inline Styles
const styles = {
  container: { display: "flex", fontFamily: "Arial, sans-serif", background: "#f8f9fa" },
  sidebar: { width: "240px", background: "#fff", padding: "20px 0", borderRight: "1px solid #ddd", height: "100vh" },
  logo: { padding: "0 20px", marginBottom: "20px" },
  menu: {},
  menuItem: { padding: "12px 20px", cursor: "pointer" },
  main: { flex: 1, padding: "20px" },
  topBar: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" },
  profile: { display: "flex", alignItems: "center", gap: "10px" },
  avatar: { borderRadius: "50%", width: "40px", height: "40px" },
  statsRow: { display: "flex", gap: "10px", marginBottom: "20px" },
  statCard: { background: "#fff", padding: "15px", flex: 1, borderRadius: "8px", border: "1px solid #eee" },
  columns: { display: "flex", gap: "20px" },
  section: { background: "#fff", padding: "15px", borderRadius: "8px", marginBottom: "20px", border: "1px solid #eee" },
  sectionTitle: { marginTop: 0, fontSize: "16px", borderBottom: "1px solid #eee", paddingBottom: "8px" },
  cardRow: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", borderBottom: "1px solid #eee", borderRadius: "4px", marginBottom: "8px" },
  subText: { margin: 0, fontSize: "13px", color: "#666" },
  time: { fontSize: "12px", color: "#999" },
  eventCard: { padding: "10px", background: "#f9f9f9", borderRadius: "6px", marginBottom: "8px" },
  pollOption: { display: "block", marginBottom: "5px", fontSize: "14px" },
};
