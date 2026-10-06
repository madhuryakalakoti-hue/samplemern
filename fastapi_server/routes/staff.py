from fastapi import APIRouter

staff_router = APIRouter(prefix="/staff",tags=["staff"])
#localhost:8000/student/addstudent
@staff_router.post("/addStaff")
def addStaff():
    return "add staff method called"
@staff_router.get("/getStaff")
def getStaff():
    return "get staff method called"
@staff_router.put("/updateStaff")
def updateStaff():
    return "update staff method called"
@staff_router.delete("/deleteStaff")
def deleteStaff():
    return "delete staff method called"