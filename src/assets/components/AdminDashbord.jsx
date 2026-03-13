import React from "react";
import "../cssComponents/AdminDashbord.css";


function AdminDashboard() {
  return (
    <div className="admin-container">

      {/* Sidebar */}
      <div className="admin-sidebar">

        <h2 className="admin-logo">Admin Panel</h2>

        <ul className="admin-menu">
          <li>Dashboard</li>
          <li>Products</li>
          <li>Orders</li>
          <li>Users</li>
          <li>Settings</li>
          <li>Logout</li>
        </ul>

      </div>


      {/* Main Content */}
      <div className="admin-main">

        {/* Top Navbar */}
        <div className="admin-navbar">
          <h3>Dashboard</h3>
          <span>Welcome Admin</span>
        </div>


        {/* Dashboard Cards */}
        <div className="admin-cards">

          <div className="admin-card">
            <h4>Total Users</h4>
            <p>120</p>
          </div>

          <div className="admin-card">
            <h4>Total Orders</h4>
            <p>75</p>
          </div>

          <div className="admin-card">
            <h4>Total Products</h4>
            <p>40</p>
          </div>

          <div className="admin-card">
            <h4>Revenue</h4>
            <p>$2500</p>
          </div>

        </div>


        {/* Table Section */}
        <div className="admin-table-section">

          <h3>Recent Orders</h3>

          <table className="admin-table">

            <thead>
              <tr>
                <th>Order ID</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>#101</td>
                <td>Rahul</td>
                <td>Shirt</td>
                <td>Delivered</td>
              </tr>

              <tr>
                <td>#102</td>
                <td>Amit</td>
                <td>Shoes</td>
                <td>Pending</td>
              </tr>

              <tr>
                <td>#103</td>
                <td>Priya</td>
                <td>Bag</td>
                <td>Shipped</td>
              </tr>
            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;