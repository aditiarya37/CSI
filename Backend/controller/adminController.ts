export const AdminGetInfo =(req:any , res:any)=>{
    try {
        res.status(200).json({
            msg: "get info"
        })
    } catch (error) {
        console.error("The error occur in admin")
    }
}