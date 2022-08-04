import { Request, Response } from "express";
import studentService from "../services/studentService";

const getAllStudents = async (req: Request, res: Response) => {
    const response = await studentService.getAllStudents()
    console.log(response)
    return res.json(response)
}

const getStudentById = async (req: Request, res: Response) => {
    const {id} = req.params
    const response = await studentService.getStudentById(id)
    console.log(response)
    return res.json(response)
}

export default {
    getAllStudents,
    getStudentById
}