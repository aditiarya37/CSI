import Router  from "express";
const router = Router();

router.get("/login",(req:any , res:any)=>{
    res.status(200).json({
        msg:"This is login stundent"
    })
})

export default router;

