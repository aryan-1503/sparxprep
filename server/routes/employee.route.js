import { Router } from "express"
import {
    createEmployeePost,
    deleteEmployee,
    getAllEmployeePosts, getPostByName,
    getSingleEmployeePost, updateEmployee
} from "../controllers/employee.controller.js";


const employeeRouter = Router();

employeeRouter
    .post("/create",createEmployeePost)
    .get("/all",getAllEmployeePosts)
    .get("/:id",getSingleEmployeePost)
    .get("/name/:name",getPostByName)
    .put("/:id",updateEmployee)
    .delete("/:id",deleteEmployee)


export { employeeRouter }