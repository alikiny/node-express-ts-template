import pool from "../index";

const getAllStudents = async() => {
    try {
        const result = await pool.query("select * from students")
        return result?.rows
    } catch (e) {
        throw new Error(e.message)
    }
}

const getStudentById = async (id: string) => {
    try {
        //const result = await pool.query(`select * from students where students.id = ${id}`)
        const result = await pool.query('select * from students where students.id = $1', [id])
        return result?.rows
    } catch (e) {
        throw new Error(e.message)
    }
}

export default {
    getAllStudents,
    getStudentById
}