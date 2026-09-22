let express=require('express');
let router=express.Router();

router.post("/register",(req,res)=>{
    res.send("register page called");
})

router.post("/login",(req,res)=>{
    res.send("login page called");
})

router.get("/viewtask",(req,res)=>{
    res.send("view task page called")
})

module.exports=router;