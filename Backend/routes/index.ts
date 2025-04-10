import  {Router}  from "express";
import faculty from "./faculty";
import admin from "./admin";
import student from "./student"

const router = Router();

router.use("/faculty",faculty)

router.use("/admin",admin)

router.use("/student",student)

export default router;