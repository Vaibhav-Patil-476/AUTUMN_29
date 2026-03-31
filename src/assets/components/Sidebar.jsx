import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import"../cssComponents/Sidebar.css"

function Sidebar() {
  return (
    <div className="row">
      {/* Sidebar Column */}
      <div className="col-3">
        <nav id="sidebarMenu" className="sidebar">
          <div className=" pt-2">
            <div >

              <Link to="/admin" className="list-group-item list-group-item-action py-2 ripple">
                <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                <span>DASHBORD</span>
              </Link>

              <Link to="/admin/addproduct" className="list-group-item list-group-item-action py-2 ripple">
                <i className="fas fa-chart-area fa-fw me-3"></i>
                <span>ADD PRODUCTS</span>
              </Link>

              <Link to="/admin/allproduct" className="list-group-item list-group-item-action py-2 ripple">
                <i className="fas fa-users fa-fw me-3"></i>
                <span>ALL PRODUCTS</span>
              </Link>

                <Link to="/adminlogin" className="list-group-item list-group-item-action py-2 ripple">
                <i className="fas fa-users fa-fw me-3"></i>
                <span>Log Out</span>
              </Link>

            </div>
          </div>
        </nav>
      </div>

      {/* Main Content Column */}
      <div className="col-9">
        <Outlet />
      </div>

    </div>
  )
}

export default Sidebar