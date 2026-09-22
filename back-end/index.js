let express=require('express');
let app=express();
let mongoose=require('mongoose');
let hrroutes=require('./routes/hr_routes')
let emproutes=require('./routes/emp_routes')
app.use(express.json());

//localhost:3000/api/hr/viewemployees
mongoose.connect("mongodb://localhost:27017/hrmanagement").then(
    ()=>{console.log("db connect is successfull")}).catch(
        (err)=>console.log(err));
app.use("/api/hr",hrroutes);
app.use("/api/emp",emproutes);
//localhost:3000/api/hr/viewtasks



//run server
app.listen(3000,()=>{
    console.log("server listening on port 3000");
})