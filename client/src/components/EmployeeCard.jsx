import React, { useContext } from 'react';
import EmployeeContext from "../context/EmployeeContext.jsx";
import { api } from "../api/base.js";
import axios from "axios";

const EmployeeCard = ({ id, postId, name, email, body }) => {
    const { setEditOpen,selectedEmployees, setSelectedEmployees } = useContext(EmployeeContext);

    const handleEditOpen = () => {
        setSelectedEmployees({ id, postId, name, email, body });
        setEditOpen(true);
        console.log(selectedEmployees)
    };

    const handleDelete = async (e) => {
        try {
            e.preventDefault();
            const res = await api.delete(`employee/${id}`);
            alert(res.data.message);
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-4 transition-transform transform hover:scale-105">
            <div className="flex items-center justify-between">
                <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
                <div className="flex space-x-2">
                    <button
                        onClick={handleEditOpen}
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                    >
                        Edit
                    </button>
                    <button
                        onClick={handleDelete}
                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                    >
                        Delete
                    </button>
                </div>
            </div>
            <p className="text-gray-500 mt-2">{email}</p>
            <p className="text-gray-700 mt-4">{body}</p>
            <div className="mt-4">
                <span className="text-sm text-gray-500">Post ID: {postId}</span>
            </div>
        </div>
    );
};

export default EmployeeCard;
