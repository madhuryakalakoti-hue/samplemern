
import './Header_com.css'
import { Link, useLocation, useNavigate } from 'react-router-dom'

function Header_component() {

  useLocation()

  let currentuser = JSON.parse(localStorage.getItem("currentuser") || "null")
  let navigate = useNavigate()

  let handleLogout = (e) => {
    localStorage.removeItem("currentuser")
    navigate("/login")
  }

  return (
    <div className="header-wrapper">

      <nav className="custom-navbar">

        <div className="navbar-container">

          {/* Website Name */}
          <Link to="/" className="brand-logo">
            HR Management
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Navbar Content */}
          <div
            className="navbar-content"
            id="navbarContent"
          >

            {/* Main Navigation Links */}
            <div className="main-links">

              <Link to="/" className="nav-item-link">
                Home
              </Link>

              <Link to="/About" className="nav-item-link">
                About Us
              </Link>

              <Link to="/Contact" className="nav-item-link">
                Contact Us
              </Link>

            </div>


            {/* If not logged in */}
            {!currentuser && (
              <div className="right-links">

                <Link to="/Login" className="login-btn">
                  Login
                </Link>

                <Link to="/Register" className="register-btn">
                  Register
                </Link>

              </div>
            )}


            {/* If logged in as HR */}
            {currentuser && currentuser.role === "HR" && (
              <div className="right-links">

                <Link to="#" className="assign-btn">
                  Assign Task
                </Link>

                <button
                  onClick={handleLogout}
                  className="logout-btn"
                >
                  Logout
                </button>

              </div>
            )}


            {/* If logged in as Employee */}
            {currentuser && currentuser.role === "Employee" && (
              <div className="right-links">

                <Link
                  to="/emphome"
                  className="employee-btn"
                >
                  Employee Home
                </Link>

                <button
                  onClick={handleLogout}
                  className="logout-btn"
                >
                  Logout
                </button>

              </div>
            )}

          </div>

        </div>

      </nav>

    </div>
  )
}

export default Header_component
