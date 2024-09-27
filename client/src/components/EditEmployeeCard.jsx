import React, {useContext, useState} from 'react';
import {api} from "../api/base.js";
import EmployeeContext from "../context/EmployeeContext.jsx";

const EditEmployeeCard = ({ id, postId, name, email, body }) => {
    const [formData,setFormData] = useState({
        postId: postId,
        name: name,
        email: email,
        body: body,
    })
    const { selectedEmployees,setEditOpen } = useContext(EmployeeContext);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name] : value
        })
    }
    const handleEdit = async ( e) => {
        e.preventDefault();
        console.log("Edit button clicked")
        try{
            console.log(selectedEmployees)
            const res = await api.put(`employee/${selectedEmployees.id}`,formData);
            setEditOpen(false)
            window.location.reload()
        }catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="flex bg-white justify-center items-center p-6 shadow-2xl rounded-xl text-lg">
            <h1 className="px-4 mr-8 font-bold text-2xl">Edit Employee Data</h1>
            <form onSubmit={handleEdit} className="flex flex-col gap-4">
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

                <button onClick={handleEdit} className="bg-black text-white font-bold rounded py-2" type="submit">
                    Edit
                </button>
                <button type="button" onClick={() => setEditOpen(false)}>Close</button>
            </form>
        </div>
    );
};

export default EditEmployeeCard;