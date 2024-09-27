import React, {useContext, useState} from 'react';
import EmployeeContext from "../context/EmployeeContext.jsx";
import {api} from "../api/base.js";

const AddEmployeeCard = () => {
    const { setIsOpen } = useContext(EmployeeContext);
    const [formData,setFormData] = useState({
        postId: "",
        name: "",
        email: "",
        body: "",
    })


    const handleChange = (e) => {
        // Handles form data change
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }



    const handleAdd = async (e) => {
        e.preventDefault()
        console.log(formData)
        try{
            const res = await api.post("employee/create",formData);
            // console.log(res.data)
            alert(res.data.message)
            window.location.reload()
        }catch (e) {
            console.log(e)
        }finally {
            setIsOpen(false)
        }
    }
    return (
        <div className="flex bg-white justify-center items-center p-6 shadow-2xl rounded-xl text-lg">
            <h1 className="px-4 mr-8 font-bold text-2xl">Add New Employee</h1>
            <form onSubmit={handleAdd} className="flex flex-col gap-4">
                <input
                    type="text"
                    placeholder="Post Id"
                    name="postId"
                    onChange={handleChange}
                    value={formData.postId}
                    required
                    className="border-2 border-black rounded p-2 placeholder:text-gray-800"
                />
                <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    onChange={handleChange}
                    value={formData.name}
                    required
                    className="border-2 border-black rounded p-2"
                />
                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                    required
                    className="border-2 border-black rounded p-2"
                />
                <input
                    type="text"
                    placeholder="Body"
                    name="body"
                    onChange={handleChange}
                    value={formData.body}
                    required
                    className="border-2 border-black rounded p-2"
                />

                <button className="bg-black text-white font-bold rounded py-2" type="submit">
                    Add
                </button>
                <button type="button" onClick={() => setIsOpen(false)}>Close</button>
            </form>
        </div>
    );
};

export default AddEmployeeCard;