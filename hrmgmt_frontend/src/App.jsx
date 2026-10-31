import Header_component from './components/Header_component'
import Footer_component from './components/Footer_component'
import Home from './pages/Home'
import  About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import UserHome from './pages/UserHome'

import HrHome from './pages/HrHome'
import EmpHome from './pages/EmpHome'
import AdminHome from './pages/AdminHome'

import {Routes,Route} from 'react-router-dom'
function App() {  
  return (
    <div>
     <Header_component></Header_component> 
    <Routes>
       <Route path="/" element={<Home/>}></Route>
       <Route path="/register" element={<Register/>}></Route>
       <Route path="/login" element={<Login/>}></Route>
       
       <Route path="/hrhome" element={<HrHome/>}></Route>
       <Route path="/emphome" element={<EmpHome/>}></Route>
       <Route path="/adminhome" element={<AdminHome/>}></Route>
       

       <Route path="/userhome" element={<UserHome/>}></Route>
       <Route path="/about" element={<About/>}></Route>
       <Route path="/contact" element={<Contact/>}></Route>
    </Routes>
    <Footer_component></Footer_component>
    </div>
  )
}
export default App