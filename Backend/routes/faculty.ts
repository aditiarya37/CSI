import Router  from "express";
import { FacultyGetInfo } from "../controller/facultyController";
const router = Router();


router.get("/login",(req:any , res:any)=>{
    res.status(200).json({
        msg:"This is login faculty"
    })
})

router.get("/getinfo",FacultyGetInfo)

export default router;