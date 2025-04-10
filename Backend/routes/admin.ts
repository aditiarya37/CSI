import Router  from "express";
import { AdminGetInfo } from "../controller/adminController";
const router = Router();


router.get("/login",(req:any , res : any)=>{
    res.status(200).json({
        msg : "this is login data"
    })
})

router.get("/getinfo",AdminGetInfo)

export default router;