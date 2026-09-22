let express=require('express');
let app=express();
let hrroutes=require('./routes/hr_routes');
let emproutes=require('./routes/emp_routes');
app.use("/api/hr",hrroutes);
//localhost:3000/api/hr/viewemployees
app.use("/api/emp",emproutes);

//run the server
app.listen(3000,()=>{
    console.log("server listening on port 3000");
})