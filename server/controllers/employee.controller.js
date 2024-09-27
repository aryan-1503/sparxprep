import {EmployeeModel} from "../models/employee.model.js";

const createEmployeePost = async (req,res) => {
    const { postId, name, email, body } = req.body;
    try{
        const employee = await EmployeeModel.findOne({ email });
        if(employee) {
            return res.status(406).json({ success: false,message: "Employee already exists"})
        }

        const newEmployee = new EmployeeModel({ postId, name, email, body })
        const savedEmployee = await newEmployee.save();
        return res.status(200).json({ success: true, message: "Employee added" })

    }catch (error) {
        console.log(error)
    }
}

const getAllEmployeePosts = async (req,res) => {
    try{
        const employees = await EmployeeModel.find();
        if(!employees) {
            return res.status(404).json({ success: false, message: "Employees not found"})
        }
        res.status(200).json({ success: true, employees })
    }catch (error) {
        console.log(error)
        return res.status(500).json({ success : false, message: "Internal server error"})
    }
}

const getSingleEmployeePost = async (req,res) => {
    const { id } = req.params;
    try{
        const employee = await EmployeeModel.findById(id);
        if(!employee) {
            return res.status(404).json({ success: false, message: "Employee not found"})
        }
        res.status(200).json({ success: true,message: "Employee Found", employee })
    }catch (error) {
        console.log(error)
    }
}

const getPostByName = async (req,res) => {
    const { name } = req.params;
    try{
        const employee = await EmployeeModel.findOne({ title: name});
        if(!employee) {
            return res.status(404).json({ success: false, message: "Task not found"})
        }
        res.status(200).json({ success: true,message: "Task Found", employee })
    }catch (error) {
        console.log(error)
    }
}

const updateEmployee = async (req,res) => {
    const { id } = req.params;
    try{
        const employee = await EmployeeModel.findByIdAndUpdate(id,{...req.body},{ new: true});
        res.status(200).json({ success: true, message: "Task updated successfully", employee })
    }catch (error) {
        console.log(error)
    }
}

const deleteEmployee = async (req,res) => {
    const {
        params: { id }
    } = req
    try {
        const employee = await EmployeeModel.findByIdAndDelete(id, { new: true});
        res.status(201).json({ success: true, message: "Task deleted", task})
    }catch (error) {
        console.log(error)
    }
}

export {
    createEmployeePost,
    getAllEmployeePosts,
    getSingleEmployeePost,
    getPostByName, updateEmployee,
    deleteEmployee
}