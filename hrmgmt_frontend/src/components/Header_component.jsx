import './Header_com.css'
import { Link,useLocation,useNavigate } from 'react-router-dom'

function Header_component(){
  useLocation()
  let currentuser=JSON.parse(localStorage.getItem("currentuser") || "null")
  let navigate=useNavigate()
  let handleLogout=(e)=>{
    localStorage.removeItem("currentuser")
    navigate("/login")
  }

  return(
    <div>
      <div className="header">
      <Link to="/">Home</Link>
      <Link to="/About">About us</Link>
      <Link to="/Contact">Contact us</Link>

      {/* if not logged in then show login and register links */}
      {!currentuser && (
        <div>
          <Link to="/Login">Login</Link>
          <Link to="/Register">Register</Link>
        </div>
      )}

      {/* if logged in as hr then show hrhome link */}
      {currentuser && currentuser.role === "HR" && (
        <div>
          <Link to='#'>Assign Task</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}

      {/* if logged in as employee then show emphome link */}
      {currentuser && currentuser.role === "Employee" && (
        <div>
          <Link to="/emphome">view Home</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
      </div>
    </div>
  )
}
export default Header_component