import {use, useState} from "react"

function Contact(){
    let [name,setName]=useState("")
    let [age,setAge]=useState(18)
    let [phno,setPhno]=useState("")

    let RegisterData=(event)=>{
        event.preventDefault();
        console.log(name);
        console.log(age);
    }
 return(
    <div>
        <h1>Contact page called</h1>
        <form onSubmit={RegisterData}>
            <input type="text" value={name} onChange={(event)=>setName(event.target.value)} placeholder="Enter your name"></input><br/>
            <input type="number" value={age} onChange={(e)=>setAge(e.target.value)} placeholder="Enter your age"></input><br/>
            <input type="text" value={phno}  onChange={(e)=>setPhno(e.target.value)} placeholder="Enter your phn no"></input><br/>
            <button>Submit</button>
        </form>
        <h3>{name}</h3>
        <h3>{age}</h3>
        <h3>{phno}</h3>
  
    </div>
    

 )
}
export default Contact