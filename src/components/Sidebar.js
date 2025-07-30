import react from "react";
import '../styles/Sidebar.css';

function Sidebar() {
    return (
        <div class="container">
            <aside class="sidebar">
                <h2 class="logo">ResiHub</h2>
                <ul class="nav">
                    <li class="active-li"><a href="#home">Overview</a></li>
                    <li><a href="#profile-section">Profile</a></li>
                    <li><a href="#notices">Notices</a></li>
                    <li><a href="#complaint-section">Complaints</a></li>
                    <li><a href="#">Maintenance</a></li>
                    <li><a href="../change-pass.html" id="changePasswordBtn">Change Password</a></li>
                    <li><a href="../logout.php">Logout</a></li>
                </ul>
                <div class="user-info">
                    <img src="../images/user.svg" alt="user" class="user-img" />
                    <div class="user-details">
                        <h3>John Doe</h3>
                        <p>Resident</p>
                    </div>
                </div>
            </aside>
        </div>
    );
}

export default Sidebar;