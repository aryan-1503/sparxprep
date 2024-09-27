import mongoose, {model, Schema} from "mongoose";

const EmployeeSchema = new Schema({
    postId: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    body : {
        type: String,
        required: true
    }
})

const EmployeeModel = model("Employee",EmployeeSchema,"employees");

export { EmployeeModel }