import { useNavigate } from "react-router-dom"

function Emphome() {
    let currentuser=JSON.parse(localStorage.getItem("currentuser"))
    let navigate=useNavigate()
    let handleLogout=()=>{
        localStorage.removeItem("currentuser")
        navigate("/login")
    }
    return (
        <div>
            <h1>Employee Home</h1>
            <h2>welcome, {currentuser.name}</h2>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Emphome