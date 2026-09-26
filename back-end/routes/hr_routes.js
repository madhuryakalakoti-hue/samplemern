let express=require('express');
let router=express.Router();
let {users}=require('../models/users');
router.get("/viewemployees",async(req,res)=>{
    let result=await users.find();
    res.send(result);
})

router.post("/assign-task",(req,res)=>{
    res.send("assign task router called");
})

router.post("/viewtask",(req,res)=>{
    res.send("view task router called");
})

router.delete("/deleteemployee/:id",async(req,res)=>{
    let deleterec=await users.findByIdAndDelete(req.params.id);
    res.send(deleterec);
})

module.exports=router;