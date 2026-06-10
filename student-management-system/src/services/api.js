import axios from "axios"

const api = axios.create({
    baseURL: "http://localhost:3000",
})

const studentsPath = "/students"

export const getStudents = async () => {
    const response = await api.get(studentsPath)
    return response.data
}

export const createStudent = async (student) => {
    const response = await api.post(studentsPath, student)
    return response.data
}

export const updateStudent = async (id, student) => {
    const response = await api.put(`${studentsPath}/${id}`, student)
    return response.data
}

export const deleteStudent = async (id) => {
    await api.delete(`${studentsPath}/${id}`)
    return id
}

export default api