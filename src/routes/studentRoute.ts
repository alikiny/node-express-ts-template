import { Router } from "express";
import studentController from "../controllers/studentController";

const studentRoute = Router()
studentRoute.get('', studentController.getAllStudents)
studentRoute.get('/:id', studentController.getStudentById)

export default studentRoute