export  const FacultyGetInfo = (req:any,res:any)=>{
    try {
        res.status(200).json({
            msg : "This is data"
        })
    } catch (error) {
        console.error("Error occured in FacultyGetInfo")
        
    }
}