export const StudentInfoGet  =(req:any,res:any)=>{
  
    try {
        res.status(200).json({
            msg : "this is student info from controller"
        })      
    } catch (error) {
        console.error("this is error from student controller")
    }
}