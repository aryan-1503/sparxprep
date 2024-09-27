import express, {urlencoded} from "express";
import cors from "cors"
import cookieParser from "cookie-parser"
import "dotenv/config"
import { connectToDB } from "./utils/connectToDb.js";
import {employeeRouter} from "./routes/employee.route.js";


const PORT = process.env.PORT || 8000
console.log("SnapShare backend")
const app = express()
await connectToDB();

app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true,
}))

app.use(express.json());
app.use(urlencoded({ extended:true }))
app.use(cookieParser(process.env.SECRET,{
    httpOnly: true,
    secure: true,
    sameSite: "none"
}));


//Routers

app.use("/api/v1/employee", employeeRouter)

app.get("/", (req, res) => {
    res.send("HealthCheck");
});


app.listen(PORT, () => {
    console.log(`Server running on : ${PORT}`);
});






